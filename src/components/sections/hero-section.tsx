"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { NetworkBackground } from "@/components/effects/network-background";
import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/ui/stat-counter";
import { STATS, SITE } from "@/lib/constants";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const fade = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section id="hero" className="relative flex min-h-screen items-center hero-atmosphere">
      <NetworkBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,212,255,0.12)_0%,transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-32 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="max-w-3xl">
          <motion.div {...fade(0)} className="mb-8 hidden lg:block">
            <Image
              src="/images/logos/dice-logo-2026.png"
              alt={SITE.fullName}
              width={280}
              height={80}
              className="h-auto w-[220px] md:w-[280px]"
              priority
            />
          </motion.div>

          <motion.p {...fade(0.1)} className="font-mono text-sm text-silver">
            {SITE.date} · Lagos, Nigeria
          </motion.p>

          <motion.h1
            {...fade(0.2)}
            className="mt-4 font-headline text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
          >
            Decentralized Intelligence Conference & Exhibition 2026
          </motion.h1>

          <motion.p {...fade(0.3)} className="mt-4 font-headline text-xl font-semibold text-text-secondary md:text-2xl">
            {SITE.theme}
          </motion.p>

          <motion.p {...fade(0.35)} className="mt-3 text-lg text-text-muted">
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
            <Button href="/tickets" size="lg" showArrow>
              Register Now
            </Button>
            <Button href="/partner" variant="secondary" size="lg">
              Become a Sponsor
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
