import { SITE } from "@/lib/constants";
import { escapeHtml } from "@/lib/email/utils";
import {
  renderCtaButton,
  renderDetailRow,
  renderDetailsCard,
  renderEmailLayout,
  renderHeading,
  renderParagraph,
  renderSuccessBadge,
} from "@/lib/email/templates/layout";

export function renderTicketConfirmationEmail(input: {
  name: string;
  tierName: string;
  amountLabel: string;
  reference: string;
}) {
  const body = [
    renderSuccessBadge("Registration confirmed"),
    renderHeading("You're registered for DICE 2026"),
    renderParagraph(
      `Dear ${escapeHtml(input.name)}, your payment for <strong>${escapeHtml(input.tierName)}</strong> has been confirmed. We look forward to welcoming you to Africa's premier autonomous digital economy conference.`
    ),
    renderDetailsCard(
      [
        renderDetailRow("Pass", input.tierName),
        renderDetailRow("Amount paid", input.amountLabel, { highlight: true }),
        renderDetailRow("Registration reference", input.reference, { mono: true }),
        renderDetailRow("Date", SITE.date),
        renderDetailRow("Venue", `${SITE.venue}, Lagos`),
      ].join("")
    ),
    renderParagraph(
      "Please save this email for check-in. Programme updates, speaker announcements, and venue logistics will be shared closer to the event."
    ),
    renderCtaButton("View the agenda", `${SITE.url}/agenda`),
    `<p style="margin:0;font-size:14px;line-height:1.6;color:#64748B;">Questions? Contact us at <a href="mailto:${SITE.email}" style="color:#1B6EFF;text-decoration:none;">${SITE.email}</a></p>`,
  ].join("");

  return renderEmailLayout({
    preheader: `Your ${input.tierName} for DICE 2026 is confirmed. ${SITE.date}, Lagos.`,
    body,
  });
}
