import { CheckIcon } from "@heroicons/react/24/solid";
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
        secondaryCta={{ label: "Investor Forum", href: "/investor-forum" }}
      />

      <Section variant="base">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard className="border-accent-cyan/30 lg:col-span-1">
            <p className="font-mono text-2xl font-semibold text-accent-cyan">
              {startupPavilionProgramme.showcasePod.price}
            </p>
            <h3 className="mt-2 font-headline text-lg font-semibold">
              {startupPavilionProgramme.showcasePod.name}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-warm-gold">
              {startupPavilionProgramme.showcasePod.tag}
            </p>
            <ul className="mt-4 space-y-2">
              {startupPavilionProgramme.showcasePod.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-xs text-text-secondary">
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ecosystem-green" />
                  {benefit}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="border-warm-gold/30 lg:col-span-1">
            <p className="font-mono text-2xl font-semibold text-warm-gold">
              {startupPavilionProgramme.sponsorOpportunity.price}
            </p>
            <h3 className="mt-2 font-headline text-lg font-semibold">
              {startupPavilionProgramme.sponsorOpportunity.name}
            </h3>
            <p className="mt-3 text-sm text-text-secondary">
              {startupPavilionProgramme.sponsorOpportunity.description}
            </p>
          </GlassCard>
          <GlassCard className="lg:col-span-1">
            <h3 className="font-headline text-lg font-semibold">Selection Criteria</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Applications are reviewed by the DICE 2026 programme committee.
            </p>
            <ul className="mt-4 space-y-3">
              {startupPavilionProgramme.criteria.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              compact
              eyebrow="Programme Benefits"
              title="Built for Fundraising & Enterprise Traction"
              description="The Startup Pavilion connects vetted founders with capital, customers, and policy stakeholders."
            />
            <ul className="mt-6 space-y-3">
              {startupPavilionProgramme.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ecosystem-green" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <GlassCard>
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
        </div>
        <div className="mt-8 flex justify-center">
          <Button href={CTA.downloadSponsorDeck.href} variant="secondary" showArrow>
            {CTA.downloadSponsorDeck.label}
          </Button>
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
