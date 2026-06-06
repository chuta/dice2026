import { NextRequest } from "next/server";
import { jsonError, jsonSuccess } from "@/lib/api/responses";
import {
  sendContactConfirmationEmail,
  sendContactNotificationEmail,
} from "@/lib/email/resend";
import { createAdminClient } from "@/lib/supabase/admin";
import { contactSubmissionSchema } from "@/lib/validations/forms";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Invalid form data.";
      return jsonError(message, 400);
    }

    const { name, email, company, subject, message, sourcePath } = parsed.data;
    const supabase = createAdminClient();

    const { data: row, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        company: company || null,
        subject,
        message,
        source_path: sourcePath ?? null,
      })
      .select("id")
      .single();

    if (dbError || !row) {
      console.error("contact_submissions insert failed:", dbError);
      return jsonError("Unable to save your message. Please try again.", 500);
    }

    try {
      await Promise.all([
        sendContactNotificationEmail({
          id: row.id,
          name,
          email,
          company,
          subject,
          message,
          sourcePath,
        }),
        sendContactConfirmationEmail({
          id: row.id,
          name,
          email,
          subject,
        }),
      ]);
    } catch (emailError) {
      console.error("contact email send failed:", emailError);
      // Submission is stored; do not fail the user-facing request.
    }

    return jsonSuccess({ id: row.id });
  } catch (error) {
    console.error("contact API error:", error);
    return jsonError("Something went wrong. Please try again.", 500);
  }
}
