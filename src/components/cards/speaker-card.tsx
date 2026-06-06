import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import type { Speaker } from "@/types/content";

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <Link href={`/speakers#${speaker.slug}`} className="group block min-w-[240px] flex-shrink-0 lg:min-w-0">
      <GlassCard className="overflow-hidden p-0">
        <div className="relative aspect-square bg-gradient-to-br from-midnight-blue to-surface-raised">
          {speaker.announced === false ? (
            <div className="flex h-full flex-col items-center justify-center p-4 text-center">
              <div className="mb-3 rounded-full bg-warm-magenta/20 px-3 py-1 text-xs font-medium text-warm-magenta">
                Announcing Soon
              </div>
              <p className="text-sm text-text-muted">Global leader confirmation in progress</p>
            </div>
          ) : (
            <div className="h-full w-full bg-surface-raised" />
          )}
        </div>
        <div className="p-5">
          <h3 className="font-headline font-semibold group-hover:text-accent-cyan">{speaker.name}</h3>
          <p className="mt-1 text-sm text-text-secondary">{speaker.title}</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-silver">{speaker.organization}</p>
        </div>
      </GlassCard>
    </Link>
  );
}
