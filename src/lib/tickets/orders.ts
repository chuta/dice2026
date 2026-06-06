import {
  sendTicketConfirmationEmail,
  sendTicketNotificationEmail,
} from "@/lib/email/resend";
import { verifyKorapayCharge } from "@/lib/korapay/client";
import { formatNgn, isPaidAmountAcceptable } from "@/lib/tickets/pricing";
import { createAdminClient } from "@/lib/supabase/admin";

export interface TicketOrderRow {
  id: string;
  reference: string;
  tier_id: string;
  tier_name: string;
  customer_name: string;
  customer_email: string;
  full_price_ngn: number;
  amount_ngn: number;
  currency: string;
  status: "pending" | "success" | "failed";
  payment_method: string | null;
  fee_ngn: number | null;
  paid_at: string | null;
  notified_at: string | null;
  korapay_payment_reference: string | null;
}

function parseKorapayAmount(value: string | number) {
  return Math.round(Number(value));
}

export async function getTicketOrderByKorapayReference(korapayReference: string) {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("ticket_orders")
    .select("*")
    .eq("korapay_payment_reference", korapayReference)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data as TicketOrderRow | null;
}

async function findPendingOrderForRelay(input: {
  amount: number;
  customerEmail?: string;
}) {
  const supabase = createAdminClient();
  let query = supabase
    .from("ticket_orders")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: false })
    .limit(20);

  if (input.customerEmail) {
    query = query.ilike("customer_email", input.customerEmail);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  const orders = ((data ?? []) as TicketOrderRow[]).filter((order) =>
    isPaidAmountAcceptable(input.amount, order.amount_ngn)
  );

  return orders.length === 1 ? orders[0] : null;
}

export async function getTicketOrderByReference(reference: string) {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("ticket_orders")
    .select("*")
    .eq("reference", reference)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data as TicketOrderRow | null;
}

export async function finalizeTicketOrder(reference: string, options?: { verifyWithKorapay?: boolean }) {
  const supabase = createAdminClient();
  const order = await getTicketOrderByReference(reference);

  if (!order) {
    return null;
  }

  if (order.status === "success" && order.notified_at) {
    return order;
  }

  let status = order.status;
  let paymentMethod = order.payment_method;
  let feeNgn = order.fee_ngn;
  let paidAt = order.paid_at;

  const korapayReference = order.korapay_payment_reference;

  if (options?.verifyWithKorapay && order.status !== "success" && korapayReference) {
    const charge = await verifyKorapayCharge(korapayReference);
    status = charge.status === "success" ? "success" : charge.status === "failed" ? "failed" : "pending";
    paymentMethod = charge.payment_method ?? paymentMethod;
    feeNgn = charge.fee ? Number(charge.fee) : feeNgn;
    if (status === "success") {
      paidAt = new Date().toISOString();
    }
  }

  const { data: updated, error: updateError } = await supabase
    .from("ticket_orders")
    .update({
      status,
      payment_method: paymentMethod,
      fee_ngn: feeNgn,
      paid_at: paidAt,
      updated_at: new Date().toISOString(),
    })
    .eq("reference", reference)
    .select("*")
    .single();

  if (updateError || !updated) {
    throw new Error(updateError?.message ?? "Unable to update ticket order.");
  }

  const finalized = updated as TicketOrderRow;

  if (finalized.status === "success" && !finalized.notified_at) {
    try {
      await Promise.all([
        sendTicketConfirmationEmail({
          id: finalized.id,
          name: finalized.customer_name,
          email: finalized.customer_email,
          tierName: finalized.tier_name,
          amountLabel: formatNgn(finalized.amount_ngn),
          reference: finalized.reference,
        }),
        sendTicketNotificationEmail({
          id: finalized.id,
          name: finalized.customer_name,
          email: finalized.customer_email,
          tierName: finalized.tier_name,
          amountLabel: formatNgn(finalized.amount_ngn),
          reference: finalized.reference,
          paymentMethod: finalized.payment_method ?? undefined,
        }),
      ]);

      await supabase
        .from("ticket_orders")
        .update({ notified_at: new Date().toISOString() })
        .eq("id", finalized.id);
    } catch (emailError) {
      console.error("ticket notification email failed:", emailError);
    }
  }

  return finalized;
}

export async function markTicketOrderFromWebhook(input: {
  reference: string;
  status: "success" | "failed";
  paymentMethod?: string;
  feeNgn?: number;
}) {
  const supabase = createAdminClient();
  const order = await getTicketOrderByReference(input.reference);

  if (!order) {
    console.warn("ticket webhook: unknown reference", input.reference);
    return null;
  }

  if (order.status === "success") {
    return order;
  }

  const { data: updated, error } = await supabase
    .from("ticket_orders")
    .update({
      status: input.status,
      payment_method: input.paymentMethod ?? null,
      fee_ngn: input.feeNgn ?? null,
      paid_at: input.status === "success" ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    })
    .eq("reference", input.reference)
    .select("*")
    .single();

  if (error || !updated) {
    throw new Error(error?.message ?? "Unable to update ticket order from webhook.");
  }

  if (input.status === "success") {
    return finalizeTicketOrder(input.reference);
  }

  return updated as TicketOrderRow;
}

export async function confirmTicketOrderWithKorapayReference(input: {
  orderReference: string;
  korapayReference: string;
}) {
  const order = await getTicketOrderByReference(input.orderReference);

  if (!order) {
    return { ok: false as const, error: "Registration not found." };
  }

  if (order.status === "success") {
    return { ok: true as const, order };
  }

  const existing = await getTicketOrderByKorapayReference(input.korapayReference);
  if (existing && existing.id !== order.id) {
    return { ok: false as const, error: "This payment reference is already linked to another registration." };
  }

  const charge = await verifyKorapayCharge(input.korapayReference);
  const paidAmount = parseKorapayAmount(charge.amount_paid || charge.amount);

  if (charge.status !== "success") {
    return {
      ok: false as const,
      error:
        charge.status === "processing" || charge.status === "pending"
          ? "Payment is still processing. Please try again shortly."
          : "Payment was not successful. Check your reference or contact support.",
    };
  }

  if (!isPaidAmountAcceptable(paidAmount, order.amount_ngn)) {
    return {
      ok: false as const,
      error: `Payment amount (${formatNgn(paidAmount)}) does not match the expected early bird rate (${formatNgn(order.amount_ngn)}) including Korapay transaction fees.`,
    };
  }

  const supabase = createAdminClient();
  const { data: updated, error } = await supabase
    .from("ticket_orders")
    .update({
      status: "success",
      korapay_payment_reference: input.korapayReference,
      payment_method: charge.payment_method ?? null,
      fee_ngn: charge.fee ? Number(charge.fee) : null,
      paid_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("reference", input.orderReference)
    .select("*")
    .single();

  if (error || !updated) {
    throw new Error(error?.message ?? "Unable to confirm registration.");
  }

  const finalized = await finalizeTicketOrder(updated.reference);
  return { ok: true as const, order: finalized ?? (updated as TicketOrderRow) };
}

export async function relayTicketPaymentNotification(input: {
  korapayReference: string;
  amount: number;
  status: "success" | "failed";
  customerEmail?: string;
  paymentMethod?: string;
  feeNgn?: number;
}) {
  const linked = await getTicketOrderByKorapayReference(input.korapayReference);
  if (linked) {
    if (input.status === "success" && linked.status !== "success") {
      return finalizeTicketOrder(linked.reference);
    }
    return linked;
  }

  if (input.status !== "success") {
    return null;
  }

  const order = await findPendingOrderForRelay({
    amount: input.amount,
    customerEmail: input.customerEmail,
  });

  if (!order) {
    console.warn("ticket relay: no unique pending order match", input);
    return null;
  }

  const supabase = createAdminClient();
  const { data: updated, error } = await supabase
    .from("ticket_orders")
    .update({
      status: "success",
      korapay_payment_reference: input.korapayReference,
      payment_method: input.paymentMethod ?? null,
      fee_ngn: input.feeNgn ?? null,
      paid_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", order.id)
    .select("*")
    .single();

  if (error || !updated) {
    throw new Error(error?.message ?? "Unable to update order from relay.");
  }

  return finalizeTicketOrder(updated.reference);
}
