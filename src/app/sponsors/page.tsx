import Image from "next/image";
import { sponsorTiers } from "@/content/site-data";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { SITE, STATS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Sponsors",
  description: "Partner with DICE 2026. Africa's premier autonomous digital economy conference. Sponsorship tiers and packages.",
  path: "/sponsors",
  keywords: ["conference sponsorship Africa", "tech event sponsorship Nigeria"],
});

const tierDescriptions: Record<string, string> = {
  platinum: "Maximum visibility across all conference touchpoints",
  gold: "Premium brand presence with speaking and exhibition opportunities",
  silver: "Targeted visibility among high-value delegate segments",
  innovation: "Showcase breakthrough technology to enterprise and government buyers",
  ecosystem: "Community and developer ecosystem alignment",
  government: "Institutional partnership with policy forum access",
  media: "Media amplification and content partnership",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsors"
        title="Invest in Africa's Most Important Technology Gathering"
        description={`Reach ${STATS[0].value} delegates including government officials, institutional investors, enterprise leaders, and global builders.`}
        cta={{ label: "Become a Sponsor", href: "/partner" }}
        secondaryCta={{ label: "Request Sponsorship Deck", href: "/contact" }}
      />
      <Section variant="base">
        <GlassCard className="border-warm-gold/20">
          <p className="eyebrow-gold">Title Sponsor</p>
          <div className="mx-auto mt-6 max-w-sm rounded-2xl bg-white p-10">
            <Image src="/images/logos/ubuntu-tribe.png" alt={SITE.leadSponsor} width={240} height={100} className="mx-auto h-auto w-full" />
          </div>
        </GlassCard>
      </Section>
      {sponsorTiers.map((tier, i) => (
        <Section key={tier.id} variant={i % 2 === 0 ? "deep" : "base"}>
          <h2 className="font-headline text-2xl font-bold">{tier.name}</h2>
          <p className="mt-2 text-text-secondary">{tierDescriptions[tier.id]}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {tier.logos.map((logo, j) => (
              <GlassCard key={j} className="flex h-20 items-center justify-center" hover={false}>
                <span className="text-sm text-text-muted">{logo.name}</span>
              </GlassCard>
            ))}
          </div>
        </Section>
      ))}
      <Section variant="base" containerClassName="text-center">
        <Button href="/partner" size="lg" showArrow>Partner With Us</Button>
      </Section>
    </>
  );
}
