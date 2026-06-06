"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { partnerOrganizations } from "@/content/partners";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

function useVisibleCount() {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else if (window.innerWidth < 1280) setCount(3);
      else setCount(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

function PartnerLogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="mx-auto flex h-32 w-full max-w-[224px] items-center justify-center rounded-xl border border-white/[0.08] bg-white p-5 md:h-36">
      <div className="relative h-full w-full">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain object-center"
          sizes="224px"
        />
      </div>
    </div>
  );
}

export function PartnersSliderSection() {
  const visibleCount = useVisibleCount();
  const [index, setIndex] = useState(0);
  const total = partnerOrganizations.length;

  const visiblePartners = Array.from({ length: visibleCount }, (_, i) => {
    return partnerOrganizations[(index + i) % total];
  });

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <Section id="partners" variant="base">
      <SectionHeader
        eyebrowVariant="muted"
        eyebrow="Institutional Partners"
        title="Backed by Africa's Leading Policy & Technology Institutions"
        description="Decentralized Intelligence 2026 is convened in partnership with regulators, government agencies, and industry bodies shaping the continent's digital economy."
        align="center"
        className="mx-auto text-center"
      />

      <div className="relative mx-auto max-w-6xl" aria-roledescription="carousel" aria-label="Partner organization logos">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
          {visiblePartners.map((partner) => (
            <PartnerLogoCard key={partner.shortName} name={partner.name} logo={partner.logo} />
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-surface-elevated/90 p-2.5 text-silver backdrop-blur-sm transition-colors hover:border-accent-cyan/30 hover:text-accent-cyan md:-left-4"
          aria-label="Previous partners"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-surface-elevated/90 p-2.5 text-silver backdrop-blur-sm transition-colors hover:border-accent-cyan/30 hover:text-accent-cyan md:-right-4"
          aria-label="Next partners"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>

        <div className="mt-6 flex justify-center gap-2">
          {partnerOrganizations.map((partner, i) => (
            <button
              key={partner.shortName}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-accent-cyan" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to ${partner.shortName}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
