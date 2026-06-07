import { PageHero } from "@/components/layout/page-hero";
import { PartnerLogoGrid } from "@/components/cards/partner-logo-grid";
import { ContactForm } from "@/components/forms/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { mediaPartners } from "@/content/partners";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Media Centre",
  description: "DICE 2026 media centre. Press accreditation, media partners, and communications resources.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media Centre"
        title="Press & Media Resources"
        description="Accreditation, official media partnerships, and communications support for journalists covering DICE 2026."
        cta={{ label: "Apply for Accreditation", href: "#accredit" }}
        secondaryCta={{ label: "Media Partner Inquiry", href: "#accredit" }}
      />

      <Section variant="base">
        <SectionHeader
          eyebrow="Media Partners"
          title="Official Media Amplification"
          description="Africa's leading technology and business media platforms partnering with DICE 2026."
          className="mb-8"
        />
        <PartnerLogoGrid partners={mediaPartners} />
      </Section>

      <Section id="kit" variant="deep">
        <GlassCard>
          <h2 className="font-headline text-xl font-bold">Press & Media Kit</h2>
          <p className="mt-2 text-text-secondary">
            Accredited media receive access to the press room, executive interviews, keynote coverage,
            and official photography. Logos, executive bios, and key messages are provided upon accreditation.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            <li>· Official DICE 2026 logos and brand assets</li>
            <li>· Executive bios and speaker photography</li>
            <li>· Key messages and programme summaries</li>
            <li>· On-site press room at The Civic Centre</li>
          </ul>
        </GlassCard>
      </Section>

      <Section id="accredit" variant="base">
        <h2 className="mb-8 text-center font-headline text-2xl font-bold">Media Accreditation</h2>
        <ContactForm
          defaultSubject="Media Accreditation"
          subjects={["Media Accreditation", "Press Inquiry", "Interview Request", "Media Partner"]}
        />
      </Section>
    </>
  );
}
