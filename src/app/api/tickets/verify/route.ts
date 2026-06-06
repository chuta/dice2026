import { NextRequest } from "next/server";
import { jsonError, jsonSuccess } from "@/lib/api/responses";
import { finalizeTicketOrder, getTicketOrderByReference } from "@/lib/tickets/orders";
import { isKorapayConfigured } from "@/lib/korapay/client";

export async function GET(request: NextRequest) {
  try {
    const reference = request.nextUrl.searchParams.get("reference");

    if (!reference) {
      return jsonError("Payment reference is required.", 400);
    }

    const existing = await getTicketOrderByReference(reference);
    if (!existing) {
      return jsonError("Registration not found.", 404);
    }

    const order = await finalizeTicketOrder(reference, {
      verifyWithKorapay:
        isKorapayConfigured() && Boolean(existing.korapay_payment_reference),
    });

    if (!order) {
      return jsonError("Registration not found.", 404);
    }

    return jsonSuccess({
      order: {
        reference: order.reference,
        status: order.status,
        tierName: order.tier_name,
        amountNgn: order.amount_ngn,
        customerName: order.customer_name,
      },
    });
  } catch (error) {
    console.error("ticket verify API error:", error);
    return jsonError("Unable to verify payment.", 500);
  }
}
