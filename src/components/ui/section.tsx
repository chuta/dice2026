"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: "deep" | "base";
  containerClassName?: string;
}

export function Section({
  children,
  id,
  className,
  variant = "deep",
  containerClassName,
}: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20 lg:py-24",
        variant === "deep" ? "section-deep" : "section-base",
        className
      )}
    >
      <motion.div
        className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}
        initial={reduceMotion ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      >
        {children}
      </motion.div>
    </section>
  );
}
