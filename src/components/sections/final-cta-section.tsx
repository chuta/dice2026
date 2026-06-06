"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CTA, SITE, STATS } from "@/lib/constants";
import { getDaysUntilEvent } from "@/lib/event";

export function FinalCtaSection() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    setDays(getDaysUntilEvent());
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-gradient-to-br from-midnight via-surface-deep to-surface-deep py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,110,255,0.12)_0%,transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="eyebrow">Final Registration Window</p>
        <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight md:text-5xl">
          Join {STATS[0].value} Leaders in Lagos
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
          The strategic platform for Africa&apos;s autonomous digital economy. Programme capacity is limited. Secure your pass before allocation closes.
        </p>
        {days > 0 && (
          <p className="mt-4 font-mono text-sm text-warm-amber">
            {days} days until {SITE.name} · {SITE.venue}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={CTA.register.href} size="lg" showArrow>
            {CTA.register.label}
          </Button>
          <Button href={CTA.sponsor.href} variant="secondary" size="lg">
            {CTA.sponsor.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
