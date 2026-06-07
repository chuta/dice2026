import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { startupPavilionProgramme } from "@/content/sponsorship";
import { createMetadata } from "@/lib/seo";
import { CTA, ECOSYSTEM_STATS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Startup Pavilion",
  description: `Apply for the DICE 2026 Startup Pavilion. Showcase your startup to ${ECOSYSTEM_STATS.investors} investors and enterprise buyers.`,
  path: "/startup-pavilion",
});

export default function StartupPavilionPage() {
  return (
    <>
      <PageHero
        eyebrow="Startup Pavilion"
        title={startupPavilionProgramme.headline}
        description={startupPavilionProgramme.description}
        cta={{ label: "Apply Now", href: "#apply" }}
        secondaryCta={CTA.downloadSponsorDeck}
      />

      <Section variant="base">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            compact
            eyebrow="Curated Showcase"
            title="Built for Fundraising & Enterprise Traction"
            description="The Startup Pavilion connects vetted founders with institutional investors, enterprise buyers, and government innovation programmes. Programme structure, pricing, and selection criteria are provided on request."
            align="center"
            className="mx-auto"
          />
          <GlassCard className="mt-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-mono text-2xl text-accent-cyan">{ECOSYSTEM_STATS.startups}</p>
                <p className="mt-1 text-xs text-text-muted">Startups</p>
              </div>
              <div>
                <p className="font-mono text-2xl text-accent-cyan">{ECOSYSTEM_STATS.investors}</p>
                <p className="mt-1 text-xs text-text-muted">Investors</p>
              </div>
              <div>
                <p className="font-mono text-2xl text-accent-cyan">{ECOSYSTEM_STATS.curatedMeetings}</p>
                <p className="mt-1 text-xs text-text-muted">Curated Meetings</p>
              </div>
            </div>
          </GlassCard>
          <p className="mt-8 text-sm text-text-secondary">
            For pavilion packages, sponsor opportunities, and full programme details, download the
            sponsorship deck or submit an application below.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={CTA.downloadSponsorDeck.href} size="lg" showArrow>
              {CTA.downloadSponsorDeck.label}
            </Button>
            <Button href="#apply" variant="secondary" size="lg" showArrow>
              Apply for Startup Pavilion
            </Button>
          </div>
        </div>
      </Section>

      <Section id="apply" variant="deep">
        <h2 className="mb-8 text-center font-headline text-2xl font-bold">Startup Pavilion Application</h2>
        <ContactForm
          defaultSubject="Startup Pavilion Application"
          subjects={["Startup Pavilion Application"]}
        />
      </Section>
    </>
  );
}
