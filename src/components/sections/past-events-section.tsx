"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { pastEventImages } from "@/content/past-events";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { CTA } from "@/lib/constants";

export function PastEventsSection() {
  const [index, setIndex] = useState(0);
  const total = pastEventImages.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <Section id="past-events" variant="base">
      <SectionHeader
        eyebrow="Past Events"
        title="A Proven Track Record of Institutional-Scale Convenings"
        description="DICE builds on years of BNUG-led conferences that have brought together Africa's technology, policy, and capital communities."
        align="center"
        className="mx-auto text-center"
      />

      <div className="relative mx-auto max-w-5xl" aria-roledescription="carousel" aria-label="Past DICE event photos">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-raised">
          {pastEventImages.map((image, i) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-deep/80 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-surface-deep/80 p-2.5 text-silver backdrop-blur-sm transition-colors hover:border-accent-cyan/30 hover:text-accent-cyan md:left-4"
          aria-label="Previous photo"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-surface-deep/80 p-2.5 text-silver backdrop-blur-sm transition-colors hover:border-accent-cyan/30 hover:text-accent-cyan md:right-4"
          aria-label="Next photo"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>

        <div className="mt-4 flex justify-center gap-2">
          {pastEventImages.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-accent-cyan" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {pastEventImages.map((image, i) => (
          <button
            key={`thumb-${image.src}`}
            type="button"
            onClick={() => setIndex(i)}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all md:h-20 md:w-32 ${
              i === index ? "border-accent-cyan" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={image.src} alt="" fill className="object-cover" sizes="128px" />
          </button>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href={CTA.register.href} size="lg" showArrow>
          Join DICE 2026
        </Button>
      </div>
    </Section>
  );
}
