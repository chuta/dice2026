import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { GlassCard } from "@/components/ui/glass-card";
import type { Track } from "@/types/content";

export function TrackCard({ track }: { track: Track }) {
  const Icon = track.icon;
  return (
    <Link href={`/tracks/${track.slug}`} className="group block min-w-[280px] flex-shrink-0 lg:min-w-0">
      <GlassCard className="flex h-full min-h-[200px] flex-col">
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px]"
          style={{ backgroundColor: `${track.color}20` }}
        >
          <Icon className="h-7 w-7" style={{ color: track.color }} />
        </div>
        <h3 className="font-headline text-base font-semibold leading-snug text-text-primary group-hover:text-accent-cyan lg:text-lg">
          {track.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{track.description}</p>
        <p className="mt-4 flex items-center gap-1 font-mono text-xs text-accent-cyan">
          {track.sessionCount} Sessions
          <ArrowRightIcon className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </p>
      </GlassCard>
    </Link>
  );
}
