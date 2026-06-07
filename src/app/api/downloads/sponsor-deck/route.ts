import { NextRequest } from "next/server";
import { jsonError, jsonSuccess } from "@/lib/api/responses";
import { SPONSOR_DECK } from "@/lib/downloads";
import {
  sendNewsletterConfirmationEmail,
  sendNewsletterNotificationEmail,
} from "@/lib/email/resend";
import { createAdminClient } from "@/lib/supabase/admin";
import { sponsorDeckDownloadSchema } from "@/lib/validations/downloads";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = sponsorDeckDownloadSchema.safeParse(body);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Invalid email address.";
      return jsonError(message, 400);
    }

    const { email, sourcePath } = parsed.data;
    const leadSource = sourcePath ? `sponsor-deck:${sourcePath}` : "sponsor-deck";
    const supabase = createAdminClient();

    const { data: row, error: dbError } = await supabase
      .from("newsletter_subscribers")
      .upsert(
        {
          email: email.toLowerCase(),
          source_path: leadSource,
        },
        { onConflict: "email", ignoreDuplicates: false }
      )
      .select("id")
      .single();

    if (dbError || !row) {
      console.error("sponsor deck lead insert failed:", dbError);
      return jsonError("Unable to process your request. Please try again.", 500);
    }

    try {
      await Promise.all([
        sendNewsletterNotificationEmail({
          id: row.id,
          email,
          sourcePath: leadSource,
        }),
        sendNewsletterConfirmationEmail({
          id: row.id,
          email,
        }),
      ]);
    } catch (emailError) {
      console.error("sponsor deck notification email failed:", emailError);
    }

    return jsonSuccess({
      downloadUrl: SPONSOR_DECK.path,
      filename: SPONSOR_DECK.filename,
    });
  } catch (error) {
    console.error("sponsor deck download API error:", error);
    return jsonError("Something went wrong. Please try again.", 500);
  }
}
