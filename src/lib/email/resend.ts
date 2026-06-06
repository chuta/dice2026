import { Resend } from "resend";
import { SITE } from "@/lib/constants";
import { renderContactConfirmationEmail } from "@/lib/email/templates/contact-confirmation";
import {
  renderContactNotificationEmail,
  renderNewsletterNotificationEmail,
  renderTicketNotificationEmail,
} from "@/lib/email/templates/internal-notification";
import { renderNewsletterConfirmationEmail } from "@/lib/email/templates/newsletter-confirmation";
import { renderTicketConfirmationEmail } from "@/lib/email/templates/ticket-confirmation";
import { renderTicketPaymentInstructionsEmail } from "@/lib/email/templates/ticket-payment-instructions";

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail =
  process.env.RESEND_FROM_EMAIL ?? `DICE 2026 <${SITE.email}>`;
const notifyEmail = process.env.RESEND_NOTIFY_EMAIL ?? SITE.email;

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
      html: renderContactNotificationEmail({
        name: input.name,
        email: input.email,
        company: input.company,
        subject: input.subject,
        message: input.message,
        sourcePath: input.sourcePath,
        submissionId: input.id,
      }),
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
      html: renderContactConfirmationEmail({
        name: input.name,
        subject: input.subject,
      }),
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
      html: renderNewsletterConfirmationEmail(),
    },
    { idempotencyKey: `newsletter-confirm/${input.id}` }
  );

  if (error) throw new Error(error.message);
  return data;
}

export async function sendTicketPaymentInstructionsEmail(input: {
  id: string;
  name: string;
  email: string;
  tierName: string;
  amountLabel: string;
  orderReference: string;
  paymentLink: string;
  fixedAmountLink: boolean;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const { data, error } = await resend.emails.send(
    {
      from: fromEmail,
      to: [input.email],
      subject: `Complete your DICE 2026 payment — ${input.tierName}`,
      html: renderTicketPaymentInstructionsEmail(input),
    },
    { idempotencyKey: `ticket-instructions/${input.id}` }
  );

  if (error) throw new Error(error.message);
  return data;
}

export async function sendTicketConfirmationEmail(input: {
  id: string;
  name: string;
  email: string;
  tierName: string;
  amountLabel: string;
  reference: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const { data, error } = await resend.emails.send(
    {
      from: fromEmail,
      to: [input.email],
      subject: `Your DICE 2026 registration is confirmed — ${input.tierName}`,
      html: renderTicketConfirmationEmail({
        name: input.name,
        tierName: input.tierName,
        amountLabel: input.amountLabel,
        reference: input.reference,
      }),
    },
    { idempotencyKey: `ticket-confirm/${input.id}` }
  );

  if (error) throw new Error(error.message);
  return data;
}

export async function sendTicketNotificationEmail(input: {
  id: string;
  name: string;
  email: string;
  tierName: string;
  amountLabel: string;
  reference: string;
  paymentMethod?: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const { data, error } = await resend.emails.send(
    {
      from: fromEmail,
      to: [notifyEmail],
      replyTo: input.email,
      subject: `[DICE 2026] Ticket payment — ${input.tierName}`,
      html: renderTicketNotificationEmail({
        ...input,
        orderId: input.id,
      }),
    },
    { idempotencyKey: `ticket-notify/${input.id}` }
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
      html: renderNewsletterNotificationEmail({
        email: input.email,
        sourcePath: input.sourcePath,
        subscriberId: input.id,
      }),
    },
    { idempotencyKey: `newsletter-notify/${input.id}` }
  );

  if (error) throw new Error(error.message);
  return data;
}
