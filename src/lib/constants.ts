export const SITE = {
  name: "DICE 2026",
  fullName: "Decentralized Intelligence Conference & Exhibition 2026",
  tagline: "Where Intelligence, Trust, Identity and Capital Converge",
  theme: "Building Africa's Autonomous Digital Economy",
  description:
    "Africa's premier conference on the autonomous digital economy. August 21–22, 2026 at The Civic Centre, Victoria Island, Lagos.",
  url: "https://dice2026.com",
  organizer: "Blockchain Nigeria User Group",
  organizerShort: "BNUG",
  leadSponsor: "Ubuntu Tribe",
  leadSponsorUrl: "https://utribe.one/",
  date: "August 21–22, 2026",
  dateISO: {
    start: "2026-08-21T09:00:00+01:00",
    end: "2026-08-22T18:00:00+01:00",
  },
  time: "9:00 AM Daily",
  venue: "The Civic Centre",
  venueAddress: "Ozumba Mbadiwe Avenue, Victoria Island, Lagos, Nigeria",
  email: "info@dice2026.com",
} as const;

export const STATS = [
  { value: "5,000+", label: "Delegates" },
  { value: "150+", label: "Speakers" },
  { value: "50+", label: "Countries" },
  { value: "20+", label: "Gov Agencies" },
] as const;

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
