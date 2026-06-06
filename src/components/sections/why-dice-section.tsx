import { pillars } from "@/content/site-data";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { CTA } from "@/lib/constants";

export function WhyDiceSection() {
  return (
    <Section id="why-dice" variant="base">
      <SectionHeader
        eyebrow="Why DICE Matters"
        title="Africa's Defining Platform for the Autonomous Digital Economy"
        description="As intelligence, trust, identity, and capital converge, institutions require a convening designed for economic coordination — not technology spectacle."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <GlassCard key={pillar.title}>
            <h3 className="font-headline text-lg font-semibold text-text-primary">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{pillar.description}</p>
          </GlassCard>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href={CTA.register.href} showArrow>
          {CTA.register.label}
        </Button>
        <Button href="/about" variant="secondary">
          Explore the Programme
        </Button>
      </div>
    </Section>
  );
}
