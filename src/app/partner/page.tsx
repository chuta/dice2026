import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { CTA, SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Partner With Us",
  description: "Sponsorship, exhibition, and ecosystem partnership inquiries for DICE 2026.",
  path: "/partner",
});

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Build Africa's Digital Future Together"
        description="Sponsorship opportunities are limited and allocated on a first-come basis. Some tiers are exclusive — we recommend early engagement."
        cta={{ label: "View Sponsorship Tiers", href: "/sponsors" }}
        secondaryCta={CTA.downloadSponsorDeck}
      />
      <Section variant="base">
        <p className="mb-8 text-center text-sm text-text-secondary">
          Partnership enquiries:{" "}
          <a href={`mailto:${SITE.partnershipsEmail}`} className="text-accent-cyan hover:underline">
            {SITE.partnershipsEmail}
          </a>
        </p>
        <ContactForm
          defaultSubject="Sponsorship"
          subjects={[
            "Sponsorship, Founding Partner ($50,000)",
            "Sponsorship, Title Sponsor ($25,000)",
            "Sponsorship, Platinum Partner ($10,000)",
            "Sponsorship, Gold Partner ($5,000)",
            "Sponsorship, Silver Partner ($2,500)",
            "Special Opportunity",
            "Exhibitor",
            "Ecosystem Partner",
            "Government Partner",
            "Media Partner",
          ]}
        />
      </Section>
    </>
  );
}
