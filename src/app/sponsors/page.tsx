import Image from "next/image";
import { SponsorTierSummaryGrid } from "@/components/cards/sponsor-tier-summary-grid";
import { PartnerLogoGrid } from "@/components/cards/partner-logo-grid";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ecosystemPartners, mediaPartners } from "@/content/partners";
import { sponsorshipTiers } from "@/content/sponsorship";
import { createMetadata } from "@/lib/seo";
import { CTA, SITE, STATS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Sponsors",
  description: "Partner with DICE 2026. Africa's premier autonomous digital economy conference. Sponsorship tiers and packages.",
  path: "/sponsors",
  keywords: ["conference sponsorship Africa", "tech event sponsorship Nigeria"],
});

const partnershipTiers = sponsorshipTiers.filter((t) =>
  ["founding", "title", "platinum", "gold", "silver", "bronze"].includes(t.id)
);

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsors"
        title="Partner With Africa's Most Important Technology Gathering"
        description={`Reach ${STATS[0].value} attendees including government officials, institutional investors, enterprise leaders, and global builders.`}
        cta={CTA.sponsor}
        secondaryCta={CTA.downloadSponsorDeck}
      />

      <Section variant="base">
        <GlassCard className="border-warm-gold/20">
          <p className="eyebrow-gold">Lead Sponsor</p>
          <div className="mx-auto mt-6 max-w-sm rounded-2xl bg-white p-10">
            <Image
              src="/images/logos/ubuntu-tribe.png"
              alt={SITE.leadSponsor}
              width={240}
              height={100}
              className="mx-auto h-auto w-full"
            />
          </div>
          <p className="mt-6 text-center text-text-secondary">
            {SITE.leadSponsor} — Lead Sponsor & Technology Partner
          </p>
        </GlassCard>
      </Section>

      <Section variant="deep">
        <SectionHeader
          eyebrow="Partnership Tiers"
          title="Choose Your Level of Influence"
          description="Sponsorship opportunities are limited and allocated on a first-come basis. Download the deck for full benefits, deliverables, and special opportunities."
          className="mb-10"
        />
        <SponsorTierSummaryGrid tiers={partnershipTiers} />
      </Section>

      <Section variant="base">
        <SectionHeader
          eyebrow="Institutional Partners"
          title="Ecosystem & Government Partners"
          description="DICE 2026 convenes Nigeria's and Africa's most influential policy, fintech, and technology institutions."
          className="mb-8"
        />
        <PartnerLogoGrid partners={ecosystemPartners} />
      </Section>

      <Section variant="deep">
        <SectionHeader
          eyebrow="Media Partners"
          title="Official Media Amplification"
          description="Africa's leading technology and business media platforms covering DICE 2026."
          className="mb-8"
        />
        <PartnerLogoGrid partners={mediaPartners} />
      </Section>

      <Section variant="base" containerClassName="text-center">
        <p className="text-sm text-text-secondary">
          Sponsorship enquiries:{" "}
          <a href={`mailto:${SITE.partnershipsEmail}`} className="text-accent-cyan hover:underline">
            {SITE.partnershipsEmail}
          </a>
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={CTA.sponsor.href} size="lg" showArrow>
            {CTA.sponsor.label}
          </Button>
          <Button href={CTA.downloadSponsorDeck.href} variant="secondary" size="lg" showArrow>
            {CTA.downloadSponsorDeck.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
