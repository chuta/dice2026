import {
  BeakerIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CubeIcon,
  CurrencyDollarIcon,
  FingerPrintIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  CircleStackIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import type {
  AgendaSession,
  ExperienceZone,
  PersonaCard,
  Pillar,
  Speaker,
  SponsorTier,
  Testimonial,
  TicketTier,
  Track,
} from "@/types/content";

export const tracks: Track[] = [
  {
    slug: "agentic-ai",
    title: "Agentic AI & Autonomous Enterprises",
    shortTitle: "Agentic AI",
    description:
      "Autonomous agents, enterprise AI orchestration, and the infrastructure for self-governing business systems.",
    sessionCount: 12,
    color: "#00D4FF",
    icon: CpuChipIcon,
  },
  {
    slug: "tokenized-markets",
    title: "Tokenized Markets & Digital Assets",
    shortTitle: "Tokenized Markets",
    description:
      "Institutional digital asset frameworks, market structure evolution, and regulatory alignment across borders.",
    sessionCount: 10,
    color: "#F5B800",
    icon: CircleStackIcon,
  },
  {
    slug: "programmable-finance",
    title: "Programmable Finance",
    shortTitle: "Programmable Finance",
    description:
      "Smart contracts, automated compliance, and composable financial infrastructure for global markets.",
    sessionCount: 9,
    color: "#1B6EFF",
    icon: CurrencyDollarIcon,
  },
  {
    slug: "ai-blockchain-infrastructure",
    title: "AI + Blockchain Infrastructure",
    shortTitle: "AI + Blockchain",
    description:
      "Converged compute, verification layers, and decentralized systems powering intelligent economies.",
    sessionCount: 11,
    color: "#8DC63F",
    icon: ServerStackIcon,
  },
  {
    slug: "digital-identity-trust",
    title: "Digital Identity & Trust Systems",
    shortTitle: "Digital Identity",
    description:
      "Sovereign identity, verifiable credentials, and trust architectures for cross-border digital commerce.",
    sessionCount: 8,
    color: "#D61F8C",
    icon: FingerPrintIcon,
  },
  {
    slug: "government-as-platform",
    title: "Government as a Platform",
    shortTitle: "Gov as Platform",
    description:
      "Digital public infrastructure, policy sandboxes, and institutional frameworks for national transformation.",
    sessionCount: 10,
    color: "#C0C8D4",
    icon: BuildingLibraryIcon,
  },
  {
    slug: "future-of-work",
    title: "Future of Work in Autonomous Economies",
    shortTitle: "Future of Work",
    description:
      "Human-AI collaboration, workforce evolution, and economic models in increasingly autonomous systems.",
    sessionCount: 8,
    color: "#E85D24",
    icon: UserGroupIcon,
  },
];

export const speakers: Speaker[] = [
  {
    slug: "announcing-soon-1",
    name: "Announcing Soon",
    title: "Global Policy Leader",
    organization: "International Institution",
    featured: true,
    announced: false,
  },
  {
    slug: "announcing-soon-2",
    name: "Announcing Soon",
    title: "Chief Technology Officer",
    organization: "Fortune 500 Enterprise",
    featured: true,
    announced: false,
  },
  {
    slug: "announcing-soon-3",
    name: "Announcing Soon",
    title: "Managing Partner",
    organization: "Leading Venture Fund",
    featured: true,
    announced: false,
  },
  {
    slug: "announcing-soon-4",
    name: "Announcing Soon",
    title: "Director of Digital Economy",
    organization: "Government Agency",
    featured: true,
    announced: false,
  },
  {
    slug: "announcing-soon-5",
    name: "Announcing Soon",
    title: "Founder & CEO",
    organization: "AI Infrastructure Startup",
    featured: true,
    announced: false,
  },
  {
    slug: "announcing-soon-6",
    name: "Announcing Soon",
    title: "Head of Research",
    organization: "Academic Institution",
    featured: true,
    announced: false,
  },
];

export const agendaHighlights: AgendaSession[] = [
  {
    id: "1",
    time: "09:00",
    title: "Opening Keynote: The Architecture of Africa's Autonomous Digital Economy",
    type: "keynote",
    day: 1,
  },
  {
    id: "2",
    time: "10:30",
    title: "Agentic AI in Enterprise: From Pilots to Production Systems",
    track: "Agentic AI",
    trackColor: "#00D4FF",
    type: "panel",
    day: 1,
  },
  {
    id: "3",
    time: "14:00",
    title: "Regulatory Frameworks for Tokenized Markets Across Africa",
    track: "Tokenized Markets",
    trackColor: "#F5B800",
    type: "panel",
    day: 1,
  },
  {
    id: "4",
    time: "09:30",
    title: "Government as Platform: National Digital Infrastructure Strategies",
    track: "Government as Platform",
    trackColor: "#C0C8D4",
    type: "keynote",
    day: 2,
  },
  {
    id: "5",
    time: "11:00",
    title: "Investor Forum: Capital Allocation in Autonomous Economies",
    type: "panel",
    day: 2,
  },
  {
    id: "6",
    time: "15:00",
    title: "Closing Plenary: Building the Next Decade of African Digital Sovereignty",
    type: "keynote",
    day: 2,
  },
];

export const fullAgenda: AgendaSession[] = [
  ...agendaHighlights,
  {
    id: "7",
    time: "12:00",
    title: "Lunch & Exhibition Networking",
    type: "networking",
    day: 1,
  },
  {
    id: "8",
    time: "16:00",
    title: "Digital Identity at Scale: Cross-Border Trust Infrastructure",
    track: "Digital Identity",
    trackColor: "#D61F8C",
    type: "workshop",
    day: 1,
  },
  {
    id: "9",
    time: "12:00",
    title: "Lunch & Startup Pavilion Showcase",
    type: "networking",
    day: 2,
  },
  {
    id: "10",
    time: "14:00",
    title: "Programmable Finance: Institutional DeFi and Compliance Automation",
    track: "Programmable Finance",
    trackColor: "#1B6EFF",
    type: "panel",
    day: 2,
  },
];

export const ticketTiers: TicketTier[] = [
  {
    id: "standard",
    name: "Standard Pass",
    price: "TBD",
    priceNote: "Early bird pricing available",
    inclusions: [
      "Full conference access — both days",
      "Exhibition floor access",
      "Networking sessions",
      "Digital programme guide",
    ],
  },
  {
    id: "executive",
    name: "Executive Pass",
    price: "TBD",
    priceNote: "Early bird pricing available",
    recommended: true,
    inclusions: [
      "All Standard Pass benefits",
      "Executive lounge access",
      "Priority session seating",
      "Meeting scheduler tool",
      "Exclusive networking reception",
    ],
  },
  {
    id: "institutional",
    name: "Institutional Pass",
    price: "TBD",
    priceNote: "For government & policy leaders",
    inclusions: [
      "All Executive Pass benefits",
      "Government Forum access",
      "Policy briefing sessions",
      "Delegation coordination support",
    ],
  },
  {
    id: "group",
    name: "Group Pass (5+)",
    price: "TBD",
    priceNote: "Team registration",
    inclusions: [
      "All Standard Pass benefits per attendee",
      "Discounted group rate",
      "Team check-in desk",
      "Reserved seating block",
    ],
  },
];

export const sponsorTiers: SponsorTier[] = [
  {
    id: "platinum",
    name: "Platinum",
    logos: [
      { name: "Partner Announcing Soon", placeholder: true },
      { name: "Partner Announcing Soon", placeholder: true },
    ],
  },
  {
    id: "gold",
    name: "Gold",
    logos: [
      { name: "Partner Announcing Soon", placeholder: true },
      { name: "Partner Announcing Soon", placeholder: true },
      { name: "Partner Announcing Soon", placeholder: true },
    ],
  },
  {
    id: "silver",
    name: "Silver",
    logos: [
      { name: "Partner Announcing Soon", placeholder: true },
      { name: "Partner Announcing Soon", placeholder: true },
      { name: "Partner Announcing Soon", placeholder: true },
      { name: "Partner Announcing Soon", placeholder: true },
    ],
  },
  {
    id: "innovation",
    name: "Innovation Partner",
    logos: [
      { name: "Partner Announcing Soon", placeholder: true },
      { name: "Partner Announcing Soon", placeholder: true },
    ],
  },
  {
    id: "ecosystem",
    name: "Ecosystem Partner",
    logos: [
      { name: "Partner Announcing Soon", placeholder: true },
      { name: "Partner Announcing Soon", placeholder: true },
    ],
  },
  {
    id: "government",
    name: "Government Partner",
    logos: [{ name: "Partner Announcing Soon", placeholder: true }],
  },
  {
    id: "media",
    name: "Media Partner",
    logos: [
      { name: "Partner Announcing Soon", placeholder: true },
      { name: "Partner Announcing Soon", placeholder: true },
    ],
  },
];

export const experienceZones: ExperienceZone[] = [
  {
    id: "startup",
    name: "Startup Pavilion",
    description: "100+ startups showcasing Africa's next generation of intelligent infrastructure.",
    color: "#4CD964",
    icon: RocketLaunchIcon,
  },
  {
    id: "investor",
    name: "Investor Lounge",
    description: "Curated deal flow meetings between qualified investors and vetted founders.",
    color: "#1B6EFF",
    icon: BriefcaseIcon,
  },
  {
    id: "government",
    name: "Government Policy Hall",
    description: "Closed-door policy sessions and inter-agency dialogue on digital economy frameworks.",
    color: "#C0C8D4",
    icon: BuildingLibraryIcon,
  },
  {
    id: "exhibition",
    name: "Innovation Exhibition",
    description: "Enterprise technology demonstrations across AI, blockchain, and fintech infrastructure.",
    color: "#00D4FF",
    icon: CubeIcon,
  },
  {
    id: "demo",
    name: "Demo Labs",
    description: "Hands-on technical workshops and live product demonstrations from leading builders.",
    color: "#8DC63F",
    icon: BeakerIcon,
  },
];

export const personas: PersonaCard[] = [
  {
    id: "government",
    label: "Government & Regulators",
    description: "Central banks, ministries, and policy architects shaping digital economy frameworks.",
    icon: BuildingLibraryIcon,
  },
  {
    id: "investors",
    label: "Investors & Capital",
    description: "VC, PE, family offices, and institutional allocators sourcing African deal flow.",
    icon: ChartBarIcon,
  },
  {
    id: "founders",
    label: "Founders & Builders",
    description: "AI, fintech, and deep-tech innovators building autonomous economic infrastructure.",
    icon: LightBulbIcon,
  },
  {
    id: "enterprise",
    label: "Enterprise Leaders",
    description: "Banks, telcos, multinationals, and consulting firms driving institutional adoption.",
    icon: BuildingOffice2Icon,
  },
  {
    id: "developers",
    label: "Developers & Researchers",
    description: "Engineers, academics, and researchers advancing the technical foundations.",
    icon: CodeBracketIcon,
  },
];

export const pillars: Pillar[] = [
  {
    title: "Strategic Convening",
    description:
      "The only platform in Africa where intelligence, trust, identity, and capital converge under one institutional roof.",
  },
  {
    title: "Policy Alignment",
    description:
      "Direct engagement between regulators, government delegations, and the builders defining market infrastructure.",
  },
  {
    title: "Capital Convergence",
    description:
      "Curated investor-founder access designed for institutional deal flow, not demo-day volume.",
  },
  {
    title: "Infrastructure Focus",
    description:
      "Programming centred on autonomous systems, programmable finance, and the architecture of digital economies.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "DICE represents the institutional maturity Africa's digital economy has been building toward — a convening where policy, capital, and technology operate at the same table.",
    name: "Senior Policy Advisor",
    title: "Digital Economy Strategy",
    organization: "Regional Government Body",
  },
  {
    id: "2",
    quote:
      "The calibre of attendees and the depth of programming set a new standard for technology conferences on the continent. This is where serious capital meets serious builders.",
    name: "Investment Director",
    title: "Venture Capital",
    organization: "International Fund",
  },
  {
    id: "3",
    quote:
      "For enterprise leaders evaluating Africa's autonomous digital infrastructure, DICE is the single most efficient venue to assess the landscape and identify partners.",
    name: "Chief Innovation Officer",
    title: "Enterprise Technology",
    organization: "Pan-African Financial Institution",
  },
];

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}
