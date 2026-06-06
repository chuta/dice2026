import { SITE } from "@/lib/constants";
import {
  renderCtaButton,
  renderEmailLayout,
  renderHeading,
  renderParagraph,
} from "@/lib/email/templates/layout";

export function renderNewsletterConfirmationEmail() {
  const body = [
    renderHeading("You're on the programme list"),
    renderParagraph(
      "Thank you for subscribing to DICE 2026 updates. You will be among the first to receive programme announcements, speaker confirmations, and venue logistics."
    ),
    renderParagraph(
      `${SITE.theme}. ${SITE.date} at ${SITE.venue}, Lagos.`
    ),
    renderCtaButton("Explore DICE 2026", SITE.url),
  ].join("");

  return renderEmailLayout({
    preheader: "You're subscribed to DICE 2026 programme updates.",
    body,
  });
}
