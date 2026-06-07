import Link from "next/link";
import { SponsorDeckGateForm } from "@/components/forms/sponsor-deck-gate-form";
import { PageHero } from "@/components/layout/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { CTA } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Sponsorship Deck",
  description:
    "Download the DICE 2026 sponsorship deck. Partnership tiers, delegate profiles, and brand visibility opportunities.",
  path: "/sponsor-deck",
  keywords: ["DICE 2026 sponsorship deck", "conference sponsorship brochure Lagos"],
});

export default function SponsorDeckPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership"
        title="DICE 2026 Sponsorship Deck"
        description="Review sponsorship tiers, delegate reach, and partnership opportunities for Africa's premier autonomous digital economy conference."
        cta={CTA.sponsor}
      />
      <Section variant="base">
        <div className="mx-auto max-w-lg">
          <GlassCard>
            <SponsorDeckGateForm />
          </GlassCard>
          <p className="mt-6 text-center text-sm text-text-muted">
            Prefer to speak with our team first?{" "}
            <Link href="/partner" className="text-primary hover:text-accent-cyan">
              Partner with us
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
