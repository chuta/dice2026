export const SITE = {
  name: "DICE 2026",
  fullName: "Decentralized Intelligence Conference & Exhibition 2026",
  tagline: "Where Intelligence, Trust, Identity and Capital Converge",
  theme: "Building Africa's Autonomous Digital Economy",
  description:
    "Africa's premier conference on the autonomous digital economy. August 21–22, 2026 at The Civic Centre, Victoria Island, Lagos.",
  url: "https://dice2026.africa",
  organizer: "Blockchain Nigeria User Group",
  organizerShort: "BNUG",
  leadSponsor: "Ubuntu Tribe",
  leadSponsorUrl: "https://utribe.one/",
  leadSponsorTagline: "Digital Gold Ownership Simplified!",
  date: "August 21–22, 2026",
  dateISO: {
    start: "2026-08-21T09:00:00+01:00",
    end: "2026-08-22T18:00:00+01:00",
  },
  time: "9:00 AM Daily",
  venue: "The Civic Centre",
  venueAddress: "Ozumba Mbadiwe Avenue, Victoria Island, Lagos, Nigeria",
  email: "info@dice2026.africa",
} as const;

/** Canonical event scale — reference everywhere, never hardcode */
export const STATS = [
  { value: "2,000+", label: "Delegates" },
  { value: "20+", label: "Speakers" },
  { value: "50+", label: "Countries" },
  { value: "10+", label: "Gov Agencies" },
] as const;

export const FEATURED_SPEAKERS_COUNT = 8;

export const ECOSYSTEM_STATS = {
  startups: "40+",
  investors: "10+",
  curatedMeetings: "20+",
} as const;

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/agenda", label: "Agenda" },
  { href: "/tracks", label: "Tracks" },
  { href: "/speakers", label: "Speakers" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/venue", label: "Venue" },
] as const;

export const FORUM_LINKS = [
  { href: "/startup-pavilion", label: "Startup Pavilion" },
  { href: "/investor-forum", label: "Investor Forum" },
  { href: "/government-forum", label: "Government Forum" },
  { href: "/exhibition", label: "Exhibition" },
  { href: "/media", label: "Media Centre" },
] as const;

/** Primary conversion CTA — use consistently sitewide */
export const CTA = {
  register: { label: "Register Now", href: "/tickets" },
  sponsor: { label: "Become a Sponsor", href: "/partner" },
  speak: { label: "Apply to Speak", href: "/contact" },
} as const;
