import { personas } from "@/content/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function WhoAttendsSection() {
  return (
    <Section id="who-attends" variant="deep">
      <SectionHeader
        eyebrow="Who Attends"
        title="The Decision-Makers Building Africa's Digital Infrastructure"
        description="5,000+ delegates from government, capital markets, enterprise, and the global builder community."
        align="center"
        className="mx-auto text-center"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {personas.map((persona) => {
          const Icon = persona.icon;
          return (
            <GlassCard key={persona.id} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan/10">
                <Icon className="h-6 w-6 text-accent-cyan" />
              </div>
              <h3 className="font-headline text-sm font-semibold">{persona.label}</h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">{persona.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
