import { NextRequest } from "next/server";
import { jsonError, jsonSuccess } from "@/lib/api/responses";
import { relayTicketPaymentNotification } from "@/lib/tickets/orders";
import { ticketRelaySchema } from "@/lib/validations/tickets";

function isAuthorized(request: NextRequest) {
  const secret = process.env.TICKET_WEBHOOK_FORWARD_SECRET;
  if (!secret) return false;

  const header = request.headers.get("authorization");
  return header === `Bearer ${secret}`;
}

/**
 * Receives forwarded Korapay charge notifications from your primary application
 * (which holds the single allowed Korapay webhook URL).
 */
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return jsonError("Unauthorized.", 401);
  }

  try {
    const body = await request.json();
    const parsed = ticketRelaySchema.safeParse(body);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Invalid relay payload.";
      return jsonError(message, 400);
    }

    const order = await relayTicketPaymentNotification({
      korapayReference: parsed.data.korapayReference,
      amount: parsed.data.amount,
      status: parsed.data.status,
      customerEmail: parsed.data.customerEmail,
      paymentMethod: parsed.data.paymentMethod,
      feeNgn: parsed.data.fee,
    });

    return jsonSuccess({
      matched: Boolean(order),
      orderReference: order?.reference ?? null,
      status: order?.status ?? null,
    });
  } catch (error) {
    console.error("ticket relay API error:", error);
    return jsonError("Relay processing failed.", 500);
  }
}
