import { NextRequest, NextResponse } from "next/server";
import {
  type KorapayWebhookPayload,
  verifyKorapayWebhookSignature,
} from "@/lib/korapay/client";
import { markTicketOrderFromWebhook } from "@/lib/tickets/orders";

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as KorapayWebhookPayload;
    const signature = request.headers.get("x-korapay-signature");

    if (!verifyKorapayWebhookSignature(payload, signature)) {
      console.warn("korapay webhook: invalid signature");
      return NextResponse.json({ received: true }, { status: 200 });
    }

    const { event, data } = payload;

    if (event === "charge.success" || event === "charge.failed") {
      await markTicketOrderFromWebhook({
        reference: data.reference,
        status: data.status,
        paymentMethod: data.payment_method,
        feeNgn: data.fee,
      });
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("korapay webhook error:", error);
    return NextResponse.json({ received: true }, { status: 200 });
  }
}
