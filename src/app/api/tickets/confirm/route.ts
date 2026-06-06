import { NextRequest } from "next/server";
import { jsonError, jsonSuccess } from "@/lib/api/responses";
import { isKorapayConfigured } from "@/lib/korapay/client";
import { confirmTicketOrderWithKorapayReference } from "@/lib/tickets/orders";
import { ticketConfirmSchema } from "@/lib/validations/tickets";

export async function POST(request: NextRequest) {
  try {
    if (!isKorapayConfigured()) {
      return jsonError(
        "Payment verification is not configured. Contact info@dice2026.africa with your payment reference.",
        503
      );
    }

    const body = await request.json();
    const parsed = ticketConfirmSchema.safeParse(body);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Invalid confirmation data.";
      return jsonError(message, 400);
    }

    const result = await confirmTicketOrderWithKorapayReference({
      orderReference: parsed.data.orderReference,
      korapayReference: parsed.data.korapayReference,
    });

    if (!result.ok) {
      return jsonError(result.error, 400);
    }

    return jsonSuccess({
      order: {
        reference: result.order.reference,
        status: result.order.status,
        tierName: result.order.tier_name,
        amountNgn: result.order.amount_ngn,
        customerName: result.order.customer_name,
      },
    });
  } catch (error) {
    console.error("ticket confirm API error:", error);
    return jsonError("Unable to confirm payment. Please try again.", 500);
  }
}
