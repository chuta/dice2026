import Image from "next/image";
import { SponsorTierCard } from "@/components/cards/sponsor-tier-card";
import { PartnerLogoGrid } from "@/components/cards/partner-logo-grid";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ecosystemPartners, mediaPartners } from "@/content/partners";
import {
  partnerJourneyStages,
  specialSponsorshipOpportunities,
  sponsorshipTiers,
  whyPartnerBenefits,
} from "@/content/sponsorship";
import { createMetadata } from "@/lib/seo";
import { CTA, SITE, STATS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Sponsors",
  description: "Partner with DICE 2026. Africa's premier autonomous digital economy conference. Sponsorship tiers and packages.",
  path: "/sponsors",
  keywords: ["conference sponsorship Africa", "tech event sponsorship Nigeria"],
});

const partnershipTiers = sponsorshipTiers.filter((t) =>
  ["founding", "title", "platinum", "gold", "silver"].includes(t.id)
);
const partnerTiers = sponsorshipTiers.filter((t) =>
  ["ecosystem", "government", "media"].includes(t.id)
);

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsors"
        title="Choose Your Level of Influence"
        description={`Reach ${STATS[0].value} attendees including government officials, institutional investors, enterprise leaders, and global builders. Sponsorship is access to the conversations that shape Africa's economic architecture.`}
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
          title="From Founding Partner to Silver"
          description="Structured packages designed for global brands seeking executive visibility, exhibition presence, and institutional credibility. Some tiers are exclusive — allocated on a first-come basis."
          className="mb-10"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {partnershipTiers.map((tier) => (
            <SponsorTierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </Section>

      <Section variant="base">
        <SectionHeader
          eyebrow="Special Opportunities"
          title="Own a Moment. Define Your Category."
          description="Targeted sponsorships for high-impact zones, forums, and delegate touchpoints across both conference days."
          className="mb-10"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {specialSponsorshipOpportunities.map((opp) => (
            <GlassCard key={opp.id} className="flex h-full flex-col">
              <p className="font-mono text-lg font-semibold text-accent-cyan">{opp.price}</p>
              <h3 className="mt-2 font-headline text-sm font-semibold leading-snug">{opp.title}</h3>
              <p className="mt-2 flex-1 text-xs text-text-secondary">{opp.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section variant="deep">
        <SectionHeader
          eyebrow="Why Partner"
          title="More Than Visibility. Strategic Influence."
          description="Sponsorship is not logo placement. It is access to the conversations, relationships, and decisions that shape Africa's economic architecture."
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyPartnerBenefits.map((benefit) => (
            <GlassCard key={benefit.title}>
              <h3 className="font-headline text-lg font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section variant="base">
        <SectionHeader
          eyebrow="Partner Journey"
          title="From Brand to Business Outcomes. In Two Days."
          description="A structured path from visibility through executive access to measurable commercial outcomes."
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {partnerJourneyStages.map((stage) => (
            <GlassCard key={stage.num} className="text-center">
              <p className="font-mono text-3xl font-bold text-accent-cyan">{stage.num}</p>
              <h3 className="mt-3 font-headline text-lg font-semibold">{stage.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{stage.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section variant="deep">
        <SectionHeader
          eyebrow="Institutional Partners"
          title="Ecosystem & Government Partners"
          description="DICE 2026 convenes Nigeria's and Africa's most influential policy, fintech, and technology institutions."
          className="mb-8"
        />
        <PartnerLogoGrid partners={ecosystemPartners} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {partnerTiers
            .filter((t) => t.id !== "media")
            .map((tier) => (
              <SponsorTierCard key={tier.id} tier={tier} showLogos={false} />
            ))}
        </div>
      </Section>

      <Section variant="base">
        <SectionHeader
          eyebrow="Media Partners"
          title="Official Media Amplification"
          description="Africa's leading technology and business media platforms covering DICE 2026."
          className="mb-8"
        />
        <PartnerLogoGrid partners={mediaPartners} />
        {partnerTiers
          .filter((t) => t.id === "media")
          .map((tier) => (
            <div key={tier.id} className="mt-10">
              <SponsorTierCard tier={tier} showLogos={false} />
            </div>
          ))}
      </Section>

      <Section variant="deep" containerClassName="text-center">
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
