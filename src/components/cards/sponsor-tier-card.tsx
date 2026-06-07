import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import { GlassCard } from "@/components/ui/glass-card";
import type { SponsorTier } from "@/types/content";
import { cn } from "@/lib/utils";

export function SponsorTierCard({
  tier,
  showLogos = true,
}: {
  tier: SponsorTier;
  showLogos?: boolean;
}) {
  return (
    <GlassCard
      className={cn(
        "h-full",
        tier.recommended && "border-accent-cyan/30 shadow-[0_0_40px_rgba(0,212,255,0.1)]"
      )}
    >
      {tier.recommended && (
        <span className="mb-4 inline-block rounded-md bg-warm-gold/15 px-2 py-1 text-xs font-bold uppercase tracking-wider text-warm-gold">
          Recommended
        </span>
      )}
      <h3 className="font-headline text-xl font-semibold">{tier.name}</h3>
      {tier.price !== undefined && (
        <p className="mt-2 text-sm font-medium text-accent-cyan">Price Available on Request</p>
      )}
      {tier.availability && (
        <p className="mt-1 text-xs italic text-text-muted">{tier.availability}</p>
      )}
      <p className="mt-2 text-sm text-text-secondary">{tier.description}</p>

      <ul className="mt-5 space-y-2">
        {tier.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-text-secondary">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ecosystem-green" />
            {benefit}
          </li>
        ))}
      </ul>

      {showLogos && tier.logos.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3">
          {tier.logos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className={cn(
                "flex h-16 items-center justify-center rounded-lg border border-white/10 p-2",
                logo.logo ? "bg-white" : "bg-surface-raised"
              )}
            >
              {logo.logo ? (
                <div className="relative h-full w-full">
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    fill
                    className="object-contain object-center"
                    sizes="120px"
                  />
                </div>
              ) : (
                <span className="text-center text-xs text-text-muted">{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
