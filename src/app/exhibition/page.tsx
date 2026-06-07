import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { exhibitionHighlights, exhibitionPackages } from "@/content/sponsorship";
import { createMetadata } from "@/lib/seo";
import { CTA, STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Exhibition",
  description: "Book exhibition space at DICE 2026. Showcase your technology to government, enterprise, and investor delegates.",
  path: "/exhibition",
});

export default function ExhibitionPage() {
  return (
    <>
      <PageHero
        eyebrow="Exhibition"
        title="Innovation Exhibition Floor"
        description={`Demonstrate your products and services to ${STATS[0].value} high-value delegates across dedicated exhibition zones at The Civic Centre.`}
        cta={{ label: "Book Exhibition Space", href: "#inquiry" }}
        secondaryCta={CTA.downloadSponsorDeck}
      />

      <Section variant="base">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-raised">
            <Image
              src="/images/exhibition/civic-floor-plan.jpeg"
              alt="Exhibition floor plan at The Civic Centre, Victoria Island"
              fill
              className="object-contain object-center p-2"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionHeader
              compact
              eyebrow="Why Exhibit"
              title="Enterprise-Scale Delegate Foot Traffic"
              description="Position your technology before government delegations, institutional investors, and enterprise procurement leaders."
            />
            <ul className="mt-6 space-y-3">
              {exhibitionHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ecosystem-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="deep">
        <SectionHeader
          eyebrow="Packages"
          title="Exhibition Packages"
          description="Select the footprint aligned with your market development objectives."
          align="center"
          className="mx-auto mb-10 text-center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {exhibitionPackages.map((pkg) => (
            <GlassCard
              key={pkg.id}
              className={cn(
                "flex h-full flex-col",
                "recommended" in pkg && pkg.recommended && "border-accent-cyan/30"
              )}
            >
              {"recommended" in pkg && pkg.recommended && (
                <span className="mb-3 inline-block w-fit rounded-md bg-warm-gold/15 px-2 py-1 text-xs font-bold uppercase tracking-wider text-warm-gold">
                  Popular
                </span>
              )}
              <p className="font-mono text-2xl font-semibold text-accent-cyan">{pkg.price}</p>
              <h3 className="mt-2 font-headline text-lg font-semibold">{pkg.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-warm-gold">{pkg.tag}</p>
              <p className="mt-1 font-mono text-sm text-text-muted">{pkg.size}</p>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{pkg.description}</p>
              <ul className="mt-4 space-y-2">
                {pkg.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-xs text-text-secondary">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ecosystem-green" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href={CTA.downloadSponsorDeck.href} variant="secondary" showArrow>
            {CTA.downloadSponsorDeck.label}
          </Button>
        </div>
      </Section>

      <Section id="inquiry" variant="base">
        <h2 className="mb-8 text-center font-headline text-2xl font-bold">Exhibitor Inquiry</h2>
        <ContactForm
          defaultSubject="Exhibitor"
          subjects={[
            "Exhibitor",
            "Exhibition, Premium Booth ($3,000)",
            "Exhibition, Standard Booth ($1,500)",
            "Exhibition, Startup Showcase Pod ($500)",
          ]}
        />
      </Section>
    </>
  );
}
