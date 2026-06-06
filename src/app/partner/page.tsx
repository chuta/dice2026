import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

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
        description="Sponsorship, exhibition, innovation partnership, and ecosystem collaboration opportunities for DICE 2026."
        cta={{ label: "View Sponsorship Tiers", href: "/sponsors" }}
      />
      <Section variant="base">
        <ContactForm
          defaultSubject="Sponsorship"
          subjects={[
            "Sponsorship",
            "Exhibitor",
            "Innovation Partner",
            "Ecosystem Partner",
            "Government Partner",
            "Media Partner",
          ]}
        />
      </Section>
    </>
  );
}
