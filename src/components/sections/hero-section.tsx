"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/ui/stat-counter";
import { CTA, SITE, STATS } from "@/lib/constants";
import { getDaysUntilEvent } from "@/lib/event";
import { useEffect, useState } from "react";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [daysUntil, setDaysUntil] = useState(0);

  useEffect(() => {
    setDaysUntil(getDaysUntilEvent());
  }, []);

  const fade = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/images/hero/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 bg-surface-deep/75" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface-deep/90 via-surface-deep/60 to-surface-deep/40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-deep via-transparent to-surface-deep/50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-32 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="max-w-4xl">
          <motion.div {...fade(0.05)} className="mb-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs font-medium text-silver">Presented by</span>
              <div className="flex items-center gap-2" aria-label={`${SITE.organizer} and ${SITE.leadSponsor}`}>
                <Image
                  src="/images/logos/bnugicon.png"
                  alt={SITE.organizerShort}
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
                <span className="text-xs text-silver/60" aria-hidden>
                  &
                </span>
                <Image
                  src="/images/logos/ut.png"
                  alt={SITE.leadSponsor}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-md object-contain"
                />
              </div>
            </div>
            {daysUntil > 0 && (
              <span className="rounded-full border border-warm-amber/30 bg-warm-amber/10 px-4 py-2 font-mono text-xs text-warm-amber">
                {daysUntil} days to convene
              </span>
            )}
          </motion.div>

          <motion.p {...fade(0.1)} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-sm text-silver backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-ecosystem-green" />
            {SITE.date} · Lagos, Nigeria
          </motion.p>

          <motion.h1
            {...fade(0.2)}
            className="mt-6 font-headline text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="block text-text-primary">Decentralized Intelligence</span>
            <span className="block text-text-primary">Conference & Exhibition</span>
            <span className="block text-gradient-cyan">2026</span>
          </motion.h1>

          <motion.p {...fade(0.3)} className="mt-6 max-w-2xl font-headline text-xl font-bold text-text-secondary md:text-2xl lg:text-3xl">
            {SITE.theme}
          </motion.p>

          <motion.p {...fade(0.35)} className="mt-4 max-w-xl text-base text-text-muted md:text-lg">
            {SITE.tagline}
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-6 flex flex-wrap items-center gap-4 text-sm text-silver">
            <span className="flex items-center gap-2">
              <CalendarDaysIcon className="h-4 w-4 text-accent-cyan" />
              {SITE.date} · {SITE.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-accent-cyan" />
              {SITE.venue}, Victoria Island
            </span>
          </motion.div>

          <motion.div {...fade(0.5)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={CTA.register.href} size="lg" showArrow>
              {CTA.register.label}
            </Button>
            <Button href={CTA.sponsor.href} variant="secondary" size="lg">
              {CTA.sponsor.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          {...fade(0.7)}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-white/[0.06] pt-10 md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
