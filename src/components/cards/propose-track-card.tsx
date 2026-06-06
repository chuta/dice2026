import Link from "next/link";
import { ArrowRightIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

export function ProposeTrackCard() {
  return (
    <Link
      href="/contact?subject=Propose+a+Track"
      className="group block min-w-[280px] flex-shrink-0 lg:min-w-0"
    >
      <GlassCard className="flex h-full min-h-[200px] flex-col border border-dashed border-white/15 bg-white/[0.02]">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-accent-cyan/10">
          <LightBulbIcon className="h-7 w-7 text-accent-cyan" />
        </div>
        <h3 className="font-headline text-lg font-semibold text-text-primary group-hover:text-accent-cyan">
          Propose a Track
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
          Have a programme theme for decision-makers and builders? Share your track proposal with the DICE 2026 programme team.
        </p>
        <div className="relative mt-4 min-h-9">
          <p className="flex items-center gap-1 font-mono text-xs text-text-muted transition-opacity duration-200 group-hover:opacity-0">
            Open for submissions
            <ArrowRightIcon className="h-3 w-3" />
          </p>
          <span
            className={cn(
              "absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-br from-primary to-[#0052CC] px-5 py-2.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
            )}
          >
            Propose a Track
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
        </div>
      </GlassCard>
    </Link>
  );
}
