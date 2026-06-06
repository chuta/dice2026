import { SITE } from "@/lib/constants";
import { escapeHtml } from "@/lib/email/utils";
import {
  renderEmailLayout,
  renderHeading,
  renderParagraph,
} from "@/lib/email/templates/layout";

export function renderContactConfirmationEmail(input: {
  name: string;
  subject: string;
}) {
  const body = [
    renderHeading("We've received your message"),
    renderParagraph(
      `Dear ${escapeHtml(input.name)}, thank you for contacting DICE 2026. We have received your inquiry regarding <strong>${escapeHtml(input.subject)}</strong>.`
    ),
    renderParagraph(
      "Our team reviews all submissions personally and will respond within 48 hours."
    ),
    `<p style="margin:0;font-size:14px;line-height:1.6;color:#64748B;">The DICE 2026 Team · <a href="mailto:${SITE.email}" style="color:#1B6EFF;text-decoration:none;">${SITE.email}</a></p>`,
  ].join("");

  return renderEmailLayout({
    preheader: `We received your message about ${input.subject}.`,
    body,
  });
}
