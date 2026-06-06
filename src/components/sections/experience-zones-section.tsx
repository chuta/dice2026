import { experienceZones } from "@/content/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function ExperienceZonesSection() {
  return (
    <Section id="experience-zones" variant="base">
      <SectionHeader
        eyebrow="Experience Zones"
        title="Beyond the Programme: Immersive Zones Across the Venue"
        description="Dedicated environments for startups, investors, policymakers, exhibitions, and hands-on technical demonstrations."
      />
      <div className="flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible">
        {experienceZones.map((zone) => {
          const Icon = zone.icon;
          return (
            <GlassCard key={zone.id} className="min-w-[260px] flex-shrink-0 lg:min-w-0">
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${zone.color}20` }}
              >
                <Icon className="h-5 w-5" style={{ color: zone.color }} />
              </div>
              <h3 className="font-headline text-sm font-semibold">{zone.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">{zone.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
