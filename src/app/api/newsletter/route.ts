import { NextRequest } from "next/server";
import { jsonError, jsonSuccess } from "@/lib/api/responses";
import {
  sendNewsletterConfirmationEmail,
  sendNewsletterNotificationEmail,
} from "@/lib/email/resend";
import { createAdminClient } from "@/lib/supabase/admin";
import { newsletterSubmissionSchema } from "@/lib/validations/forms";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = newsletterSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Invalid email address.";
      return jsonError(message, 400);
    }

    const { email, sourcePath } = parsed.data;
    const supabase = createAdminClient();

    const { data: row, error: dbError } = await supabase
      .from("newsletter_subscribers")
      .upsert(
        {
          email: email.toLowerCase(),
          source_path: sourcePath ?? null,
        },
        { onConflict: "email", ignoreDuplicates: false }
      )
      .select("id")
      .single();

    if (dbError || !row) {
      console.error("newsletter_subscribers upsert failed:", dbError);
      return jsonError("Unable to subscribe right now. Please try again.", 500);
    }

    try {
      await Promise.all([
        sendNewsletterNotificationEmail({
          id: row.id,
          email,
          sourcePath,
        }),
        sendNewsletterConfirmationEmail({
          id: row.id,
          email,
        }),
      ]);
    } catch (emailError) {
      console.error("newsletter email send failed:", emailError);
    }

    return jsonSuccess({ id: row.id });
  } catch (error) {
    console.error("newsletter API error:", error);
    return jsonError("Something went wrong. Please try again.", 500);
  }
}
