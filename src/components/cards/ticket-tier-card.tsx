import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { CTA } from "@/lib/constants";
import {
  EARLY_BIRD_DISCOUNT_RATE,
  formatNgn,
  getEarlyBirdPrice,
} from "@/lib/tickets/pricing";
import type { TicketTier } from "@/types/content";
import { cn } from "@/lib/utils";

export function TicketTierCard({ tier }: { tier: TicketTier }) {
  const earlyBirdPrice = getEarlyBirdPrice(tier.fullPriceNgn);
  const discountPercent = Math.round(EARLY_BIRD_DISCOUNT_RATE * 100);

  return (
    <GlassCard
      className={cn(
        "flex h-full flex-col",
        tier.recommended && "border-accent-cyan/30 shadow-[0_0_40px_rgba(0,212,255,0.15)]"
      )}
    >
      {tier.recommended && (
        <span className="mb-4 inline-block w-fit rounded-md bg-warm-gold/15 px-2 py-1 text-xs font-bold uppercase tracking-wider text-warm-gold">
          Recommended
        </span>
      )}
      <h3 className="font-headline text-xl font-semibold">{tier.name}</h3>
      <div className="mt-2">
        <p className="font-mono text-lg text-text-muted line-through decoration-text-muted/80">
          {formatNgn(tier.fullPriceNgn)}
        </p>
        <p className="font-mono text-3xl font-medium text-accent-cyan">{formatNgn(earlyBirdPrice)}</p>
      </div>
      <p className="mt-1 text-xs font-medium text-ecosystem-green">
        Early bird — {discountPercent}% off
      </p>
      {tier.priceNote && <p className="mt-1 text-xs text-text-muted">{tier.priceNote}</p>}
      <ul className="mt-6 flex-1 space-y-3">
        {tier.inclusions.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
            <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-ecosystem-green" />
            {item}
          </li>
        ))}
      </ul>
      <Button
        href={`/tickets/checkout?tier=${tier.id}`}
        size="md"
        className="mt-8 w-full"
        showArrow
      >
        {CTA.register.label}
      </Button>
    </GlassCard>
  );
}
