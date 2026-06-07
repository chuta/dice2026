import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import type { SponsorTier } from "@/types/content";
import { CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SponsorTierSummaryGrid({ tiers }: { tiers: SponsorTier[] }) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <GlassCard
            key={tier.id}
            hover={false}
            className={cn(
              "flex flex-col",
              tier.recommended && "border-accent-cyan/30"
            )}
          >
            {tier.recommended && (
              <span className="mb-3 inline-block w-fit rounded-md bg-warm-gold/15 px-2 py-1 text-xs font-bold uppercase tracking-wider text-warm-gold">
                Popular
              </span>
            )}
            <h3 className="font-headline text-lg font-semibold">{tier.name}</h3>
            <p className="mt-2 text-sm font-medium text-accent-cyan">Price Available on Request</p>
            {tier.availability && (
              <p className="mt-1 text-xs italic text-text-muted">{tier.availability}</p>
            )}
          </GlassCard>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-secondary">
        Full tier benefits, special opportunities, and partnership terms are available in the sponsorship
        deck.
      </p>
      <div className="mt-6 flex justify-center">
        <Button href={CTA.downloadSponsorDeck.href} size="lg" showArrow>
          {CTA.downloadSponsorDeck.label}
        </Button>
      </div>
    </>
  );
}
