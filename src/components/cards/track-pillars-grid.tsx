import { CheckIcon } from "@heroicons/react/24/solid";
import { GlassCard } from "@/components/ui/glass-card";
import type { TrackPillar } from "@/types/content";

export function TrackPillarsGrid({ pillars }: { pillars: TrackPillar[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {pillars.map((pillar, index) => (
        <GlassCard key={pillar.title}>
          <p className="font-mono text-xs text-accent-cyan">Pillar {index + 1}</p>
          <h3 className="mt-2 font-headline text-lg font-semibold">{pillar.title}</h3>
          <ul className="mt-4 space-y-2">
            {pillar.topics.map((topic) => (
              <li key={topic} className="flex items-start gap-2 text-sm text-text-secondary">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ecosystem-green" />
                {topic}
              </li>
            ))}
          </ul>
        </GlassCard>
      ))}
    </div>
  );
}
