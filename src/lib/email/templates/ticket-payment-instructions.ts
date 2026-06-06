import { SITE } from "@/lib/constants";
import { escapeHtml } from "@/lib/email/utils";
import {
  renderCtaButton,
  renderDetailRow,
  renderDetailsCard,
  renderEmailLayout,
  renderHeading,
  renderParagraph,
} from "@/lib/email/templates/layout";

export function renderTicketPaymentInstructionsEmail(input: {
  name: string;
  email: string;
  tierName: string;
  amountLabel: string;
  orderReference: string;
  paymentLink: string;
  fixedAmountLink: boolean;
}) {
  const confirmUrl = `${SITE.url}/tickets/confirm?order=${encodeURIComponent(input.orderReference)}`;
  const amountStep = input.fixedAmountLink
    ? "The early bird amount is pre-filled on the Korapay payment page."
    : `Enter <strong>${escapeHtml(input.amountLabel)}</strong> exactly as the payment amount.`;

  const body = [
    renderHeading("Complete your registration"),
    renderParagraph(
      `Dear ${escapeHtml(input.name)}, your <strong>${escapeHtml(input.tierName)}</strong> is reserved. Complete payment below to secure your place at DICE 2026.`
    ),
    renderDetailsCard(
      [
        renderDetailRow("Pass", input.tierName),
        renderDetailRow("Amount due", input.amountLabel, { highlight: true }),
        renderDetailRow("Registration reference", input.orderReference, { mono: true }),
      ].join("")
    ),
    `<ol style="margin:0 0 24px;padding-left:20px;font-size:15px;line-height:1.75;color:#0F172A;">
      <li style="margin-bottom:8px;">Open the Korapay payment page using the button below.</li>
      <li style="margin-bottom:8px;">Use your name and email: <strong>${escapeHtml(input.email)}</strong>.</li>
      <li style="margin-bottom:8px;">${amountStep}</li>
      <li>After payment, confirm your registration with your Korapay payment reference.</li>
    </ol>`,
    renderCtaButton("Pay on Korapay", input.paymentLink),
    renderCtaButton("Confirm payment", confirmUrl),
    `<p style="margin:0;font-size:14px;line-height:1.6;color:#64748B;">Need help? <a href="mailto:${SITE.email}" style="color:#1B6EFF;text-decoration:none;">${SITE.email}</a></p>`,
  ].join("");

  return renderEmailLayout({
    preheader: `Complete your ${input.tierName} payment for DICE 2026 — ${input.amountLabel}`,
    body,
  });
}
