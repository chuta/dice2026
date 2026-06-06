import { SITE } from "@/lib/constants";
import { escapeHtml } from "@/lib/email/utils";
import {
  renderDetailRow,
  renderDetailsCard,
  renderEmailLayout,
  renderHeading,
  renderParagraph,
} from "@/lib/email/templates/layout";

export function renderTicketNotificationEmail(input: {
  name: string;
  email: string;
  tierName: string;
  amountLabel: string;
  reference: string;
  paymentMethod?: string;
  orderId: string;
}) {
  const body = [
    renderHeading("New ticket payment"),
    renderParagraph("A new DICE 2026 registration payment has been confirmed."),
    renderDetailsCard(
      [
        renderDetailRow("Name", input.name),
        renderDetailRow("Email", input.email),
        renderDetailRow("Pass", input.tierName),
        renderDetailRow("Amount", input.amountLabel, { highlight: true }),
        renderDetailRow("Reference", input.reference, { mono: true }),
        renderDetailRow("Payment method", input.paymentMethod || "—"),
      ].join("")
    ),
    `<p style="margin:0;font-size:12px;color:#64748B;">Order ID: ${escapeHtml(input.orderId)}</p>`,
  ].join("");

  return renderEmailLayout({
    preheader: `New ticket: ${input.tierName} — ${input.name}`,
    body,
    footerNote: "Internal notification — DICE 2026 registrations",
  });
}

export function renderContactNotificationEmail(input: {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  sourcePath?: string;
  submissionId: string;
}) {
  const body = [
    renderHeading("New contact submission"),
    renderDetailsCard(
      [
        renderDetailRow("Name", input.name),
        renderDetailRow("Email", input.email),
        renderDetailRow("Company", input.company || "—"),
        renderDetailRow("Subject", input.subject),
        renderDetailRow("Source", input.sourcePath || SITE.url),
      ].join("")
    ),
    `<p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:#64748B;">Message</p>`,
    `<p style="margin:0;padding:16px;background:#F1F5F9;border-radius:8px;font-size:15px;line-height:1.6;color:#0F172A;white-space:pre-wrap;">${escapeHtml(input.message)}</p>`,
    `<p style="margin:16px 0 0;font-size:12px;color:#64748B;">Submission ID: ${escapeHtml(input.submissionId)}</p>`,
  ].join("");

  return renderEmailLayout({
    preheader: `Contact: ${input.subject} from ${input.name}`,
    body,
    footerNote: "Internal notification — contact form",
  });
}

export function renderNewsletterNotificationEmail(input: {
  email: string;
  sourcePath?: string;
  subscriberId: string;
}) {
  const body = [
    renderHeading("New newsletter subscriber"),
    renderDetailsCard(
      [
        renderDetailRow("Email", input.email),
        renderDetailRow("Source", input.sourcePath || SITE.url),
      ].join("")
    ),
    `<p style="margin:0;font-size:12px;color:#64748B;">Subscriber ID: ${escapeHtml(input.subscriberId)}</p>`,
  ].join("");

  return renderEmailLayout({
    preheader: `New subscriber: ${input.email}`,
    body,
    footerNote: "Internal notification — newsletter",
  });
}
