import { Resend } from "resend";
import { SITE } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail =
  process.env.RESEND_FROM_EMAIL ?? `DICE 2026 <${SITE.email}>`;
const notifyEmail = process.env.RESEND_NOTIFY_EMAIL ?? SITE.email;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendContactNotificationEmail(input: {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  sourcePath?: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const { data, error } = await resend.emails.send(
    {
      from: fromEmail,
      to: [notifyEmail],
      replyTo: input.email,
      subject: `[DICE 2026] ${input.subject}. ${input.name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(input.company || "—")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(input.subject)}</p>
        <p><strong>Source:</strong> ${escapeHtml(input.sourcePath || SITE.url)}</p>
        <hr />
        <p style="white-space:pre-wrap">${escapeHtml(input.message)}</p>
        <p style="color:#666;font-size:12px">Submission ID: ${input.id}</p>
      `,
    },
    { idempotencyKey: `contact-notify/${input.id}` }
  );

  if (error) throw new Error(error.message);
  return data;
}

export async function sendContactConfirmationEmail(input: {
  id: string;
  name: string;
  email: string;
  subject: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const { data, error } = await resend.emails.send(
    {
      from: fromEmail,
      to: [input.email],
      subject: "We received your message. DICE 2026",
      html: `
        <p>Dear ${escapeHtml(input.name)},</p>
        <p>Thank you for contacting DICE 2026. We have received your inquiry regarding <strong>${escapeHtml(input.subject)}</strong>.</p>
        <p>Our team will respond within 48 hours.</p>
        <p>Best regards,<br />The DICE 2026 Team<br />${SITE.email}</p>
      `,
    },
    { idempotencyKey: `contact-confirm/${input.id}` }
  );

  if (error) throw new Error(error.message);
  return data;
}

export async function sendNewsletterConfirmationEmail(input: {
  id: string;
  email: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const { data, error } = await resend.emails.send(
    {
      from: fromEmail,
      to: [input.email],
      subject: "You're on the DICE 2026 programme list",
      html: `
        <p>Thank you for subscribing to DICE 2026 updates.</p>
        <p>You will be among the first to receive programme announcements, speaker confirmations, and ticket release notices.</p>
        <p>Best regards,<br />The DICE 2026 Team<br />${SITE.email}</p>
      `,
    },
    { idempotencyKey: `newsletter-confirm/${input.id}` }
  );

  if (error) throw new Error(error.message);
  return data;
}

export async function sendNewsletterNotificationEmail(input: {
  id: string;
  email: string;
  sourcePath?: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const { data, error } = await resend.emails.send(
    {
      from: fromEmail,
      to: [notifyEmail],
      subject: `[DICE 2026] New newsletter subscriber`,
      html: `
        <h2>New newsletter subscriber</h2>
        <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
        <p><strong>Source:</strong> ${escapeHtml(input.sourcePath || SITE.url)}</p>
        <p style="color:#666;font-size:12px">Subscriber ID: ${input.id}</p>
      `,
    },
    { idempotencyKey: `newsletter-notify/${input.id}` }
  );

  if (error) throw new Error(error.message);
  return data;
}
