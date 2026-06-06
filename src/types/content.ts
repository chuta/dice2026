import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface Track {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  sessionCount: number;
  color: string;
  icon: IconComponent;
}

export interface Speaker {
  slug: string;
  name: string;
  title: string;
  organization: string;
  image?: string;
  track?: string;
  featured?: boolean;
  announced?: boolean;
}

export interface AgendaSession {
  id: string;
  time: string;
  title: string;
  track?: string;
  trackColor?: string;
  type: "keynote" | "panel" | "workshop" | "networking";
  day: 1 | 2;
}

export interface TicketTier {
  id: string;
  name: string;
  /** Full price in Nigerian Naira before early bird discount */
  fullPriceNgn: number;
  priceNote?: string;
  recommended?: boolean;
  inclusions: string[];
}

export interface SponsorTier {
  id: string;
  name: string;
  logos: { name: string; placeholder?: boolean }[];
}

export interface ExperienceZone {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: IconComponent;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  organization: string;
}

export interface PersonaCard {
  id: string;
  label: string;
  description: string;
  icon: IconComponent;
}

export interface Pillar {
  title: string;
  description: string;
}
