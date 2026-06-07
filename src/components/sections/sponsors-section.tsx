import Image from "next/image";
import { sponsorshipTiers } from "@/content/sponsorship";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { CTA, SITE } from "@/lib/constants";

export function SponsorsSection() {
  return (
    <Section id="sponsors" variant="base">
      <SectionHeader
        eyebrow="Sponsors"
        title="Partner With Africa's Most Important Technology Gathering"
        description="Join leading global brands investing in visibility among government delegations, institutional investors, and enterprise decision-makers."
        align="center"
        className="mx-auto text-center"
      />

      <GlassCard className="mb-10 overflow-hidden border-warm-gold/20 bg-[radial-gradient(ellipse_at_center,rgba(107,79,187,0.08)_0%,transparent_70%)]">
        <p className="eyebrow-gold mb-6">Lead Sponsor</p>
        <div className="mx-auto max-w-md rounded-2xl bg-white p-10 md:p-12">
          <Image
            src="/images/logos/ubuntu-tribe.png"
            alt={SITE.leadSponsor}
            width={280}
            height={120}
            className="mx-auto h-auto max-h-24 w-auto"
          />
        </div>
        <p className="mt-6 text-center text-text-secondary">
          {SITE.leadSponsor} - {SITE.leadSponsorTagline}
        </p>
        <div className="mt-4 flex justify-center">
          <Button href={SITE.leadSponsorUrl} variant="tertiary" showArrow external>
            Visit utribe.one
          </Button>
        </div>
      </GlassCard>

      <div className="space-y-8">
        {sponsorshipTiers
          .filter((t) => ["founding", "platinum", "gold"].includes(t.id))
          .map((tier) => (
          <div key={tier.id}>
            <p className="eyebrow-muted mb-4">{tier.name}</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {tier.logos.map((logo, i) => (
                <GlassCard
                  key={i}
                  className={`flex h-24 items-center justify-center ${logo.logo ? "bg-white p-3" : ""}`}
                  hover={false}
                >
                  {logo.logo ? (
                    <Image
                      src={logo.logo}
                      alt={logo.name}
                      width={120}
                      height={48}
                      className="h-full w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-sm text-text-muted">{logo.name}</span>
                  )}
                </GlassCard>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href={CTA.sponsor.href} size="lg" showArrow>
          {CTA.sponsor.label}
        </Button>
        <Button href={CTA.downloadSponsorDeck.href} variant="secondary" size="lg" showArrow>
          {CTA.downloadSponsorDeck.label}
        </Button>
      </div>
    </Section>
  );
}
