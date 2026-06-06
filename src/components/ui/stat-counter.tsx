"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
}

function parseValue(value: string): { num: number; suffix: string; prefix: string } {
  const match = value.match(/^([^0-9]*)([0-9,]+)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value };
  return {
    prefix: match[1],
    num: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3],
  };
}

export function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const { prefix, num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(reduceMotion ? num : 0);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      setDisplay(num);
      return;
    }

    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, num, reduceMotion]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-mono text-3xl font-medium text-accent-cyan md:text-5xl">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 font-headline text-xs font-bold uppercase tracking-widest text-silver">
        {label}
      </p>
    </div>
  );
}
