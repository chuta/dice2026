"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { testimonials } from "@/content/site-data";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { CTA } from "@/lib/constants";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <Section id="testimonials" variant="deep">
      <SectionHeader
        eyebrow="Testimonials"
        title="Trusted by Institutional Leaders"
        align="center"
        className="mx-auto text-center"
      />
      <div className="relative mx-auto max-w-3xl">
        <GlassCard className="text-center">
          <span className="font-headline text-6xl leading-none text-accent-cyan/30">&ldquo;</span>
          <p className="mt-2 text-lg leading-relaxed text-text-primary md:text-xl">{t.quote}</p>
          <p className="mt-6 text-sm text-text-secondary">
            — {t.name}, {t.title}, {t.organization}
          </p>
        </GlassCard>
        {testimonials.length > 1 && (
          <div className="mt-6 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="rounded-full border border-white/10 p-2 text-silver hover:border-accent-cyan/30 hover:text-accent-cyan"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="rounded-full border border-white/10 p-2 text-silver hover:border-accent-cyan/30 hover:text-accent-cyan"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href={CTA.register.href} showArrow>
          {CTA.register.label}
        </Button>
      </div>
    </Section>
  );
}
