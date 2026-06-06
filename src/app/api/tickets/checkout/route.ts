import { NextRequest } from "next/server";
import { ticketTiers } from "@/content/site-data";
import { jsonError, jsonSuccess } from "@/lib/api/responses";
import { sendTicketPaymentInstructionsEmail } from "@/lib/email/resend";
import {
  formatNgn,
  generateTicketReference,
  getEarlyBirdPrice,
  getPaymentLinkForTier,
  getTierById,
  tierHasFixedAmountLink,
} from "@/lib/tickets/pricing";
import { createAdminClient } from "@/lib/supabase/admin";
import { ticketCheckoutSchema } from "@/lib/validations/tickets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = ticketCheckoutSchema.safeParse(body);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Invalid checkout data.";
      return jsonError(message, 400);
    }

    const { tierId, name, email } = parsed.data;
    const tier = getTierById(ticketTiers, tierId);

    if (!tier) {
      return jsonError("Invalid ticket tier.", 400);
    }

    const amountNgn = getEarlyBirdPrice(tier.fullPriceNgn);
    const reference = generateTicketReference(tierId);
    const paymentLink = getPaymentLinkForTier(tierId);
    const supabase = createAdminClient();

    const { data: order, error: dbError } = await supabase
      .from("ticket_orders")
      .insert({
        reference,
        tier_id: tier.id,
        tier_name: tier.name,
        customer_name: name,
        customer_email: email,
        full_price_ngn: tier.fullPriceNgn,
        amount_ngn: amountNgn,
        currency: "NGN",
        status: "pending",
      })
      .select("id, reference")
      .single();

    if (dbError || !order) {
      console.error("ticket_orders insert failed:", dbError);
      return jsonError("Unable to start checkout. Please try again.", 500);
    }

    try {
      await sendTicketPaymentInstructionsEmail({
        id: order.id,
        name,
        email,
        tierName: tier.name,
        amountLabel: formatNgn(amountNgn),
        orderReference: order.reference,
        paymentLink,
        fixedAmountLink: tierHasFixedAmountLink(tierId),
      });
    } catch (emailError) {
      console.error("ticket instructions email failed:", emailError);
    }

    return jsonSuccess({
      orderReference: order.reference,
      amountNgn,
      paymentLink,
      fixedAmountLink: tierHasFixedAmountLink(tierId),
      instructionsUrl: `/tickets/pay/${encodeURIComponent(order.reference)}`,
    });
  } catch (error) {
    console.error("ticket checkout API error:", error);
    return jsonError("Unable to start checkout. Please try again.", 500);
  }
}
