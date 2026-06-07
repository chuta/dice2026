import type {
  ExhibitionPackage,
  SpecialSponsorshipOpportunity,
  SponsorTier,
} from "@/types/content";
import { ecosystemPartners, mediaPartners } from "@/content/partners";

export const sponsorshipTiers: SponsorTier[] = [
  {
    id: "founding",
    name: "Founding Partner",
    price: "$30,000",
    availability: "Exclusive · One organisation only",
    description:
      "The highest level of partnership. Reserved for one organisation committed to shaping Africa's digital future at the foundational level.",
    benefits: [
      '"Founding Partner of DICE 2026" designation',
      "Exclusive category ownership (no competitor)",
      "Opening ceremony recognition & premier keynote",
      "Largest exhibition footprint + custom activation zone",
      "Executive roundtable — curated government introductions",
      "Dedicated media interviews & branded press feature",
      "Brand integration across all digital and physical assets",
      "20 VIP passes + premium speaking opportunities",
    ],
    logos: [{ name: "Founding partnership available", placeholder: true }],
  },
  {
    id: "title",
    name: "Title Sponsor",
    price: "$20,000",
    availability: "Exclusive · One organisation only",
    description:
      '"DICE 2026 Presented by [Partner]" — the most visible naming rights in Africa\'s technology calendar.',
    benefits: [
      '"Presented By" naming rights across all assets',
      "Main stage branding — seen by every attendee",
      "Opening keynote speaking opportunity",
      "Executive panel participation (2 representatives)",
      "Premium exhibition booth — prime floor placement",
      "Dedicated press feature + full-page programme credit",
      "Logo dominance: web, signage, social, collateral",
      "15 VIP passes + VIP networking access",
    ],
    logos: [{ name: "Title sponsorship available", placeholder: true }],
  },
  {
    id: "platinum",
    name: "Platinum Partner",
    price: "$10,000",
    availability: "Limited to 3",
    description: "Track sponsorship ownership with premium exhibition presence and executive networking access.",
    benefits: [
      "Track sponsorship ownership",
      "Premium exhibition booth",
      "Featured panel participation",
      "Executive networking access",
      "Social media campaign inclusion",
      "10 VIP passes",
    ],
    logos: [{ name: "Platinum partnership available", placeholder: true }],
  },
  {
    id: "gold",
    name: "Gold Partner",
    price: "$5,000",
    availability: "Limited to 6",
    description: "Workshop or fireside visibility with exhibition presence and qualified lead-generation opportunities.",
    recommended: true,
    benefits: [
      "Workshop or fireside chat",
      "Exhibition booth",
      "Featured branding",
      "Media mentions",
      "Lead-gen opportunities",
      "6 VIP passes",
    ],
    logos: [
      { name: "Gold partnership available", placeholder: true },
      { name: "Gold partnership available", placeholder: true },
    ],
  },
  {
    id: "silver",
    name: "Silver Partner",
    price: "$2,500",
    description: "Targeted visibility with exhibition table placement and delegate access.",
    benefits: [
      "Exhibition table",
      "Logo placement",
      "Event collateral inclusion",
      "4 delegate passes",
    ],
    logos: [
      { name: "Silver partnership available", placeholder: true },
      { name: "Silver partnership available", placeholder: true },
    ],
  },
  {
    id: "Bronze",
    name: "Bronze Partner",
    price: "$1,500",
    description: "Targeted visibility with exhibition table placement and delegate access.",
    benefits: [
      "Exhibition table",
      "Logo placement",
      "Event collateral inclusion",
      "2 delegate passes",
    ],
    logos: [
      { name: "Silver partnership available", placeholder: true },
      { name: "Silver partnership available", placeholder: true },
    ],
  },
  {
    id: "ecosystem",
    name: "Ecosystem Partner",
    description:
      "Align with Africa's leading policy, fintech, and blockchain institutions convening at DICE 2026.",
    benefits: [
      "Community and developer programme alignment",
      "Workshop and ecosystem session hosting",
      "Co-branded ecosystem activations",
      "Institutional recognition across delegate communications",
    ],
    logos: ecosystemPartners.map((p) => ({
      name: p.name,
      logo: p.logo,
    })),
  },
  {
    id: "government",
    name: "Government Partner",
    description: "Institutional partnership with dedicated Government Forum access and policy visibility.",
    benefits: [
      "Government & Policy Forum participation",
      "Delegation coordination and briefing support",
      "Policy roundtable hosting opportunities",
      "Institutional branding among regulatory audiences",
      "Priority access to international delegations",
    ],
    logos: [
      { name: "Central Bank of Nigeria", logo: "/images/partners/cbn.jpeg" },
      { name: "SEC Nigeria", logo: "/images/partners/sec.jpeg" },
      { name: "NITDA", logo: "/images/partners/nitda.jpeg" },
      { name: "Government Blockchain Association", logo: "/images/partners/gba.png" },
    ],
  },
  {
    id: "media",
    name: "Media Partner",
    description: "Official media amplification across Africa's leading technology and business platforms.",
    benefits: [
      "Official media partner status and co-branding",
      "Press access, interviews, and content syndication",
      "Logo across digital and on-site communications",
      "Priority coverage of keynote and policy sessions",
      "Pre and post-event content partnership",
    ],
    logos: mediaPartners.map((p) => ({
      name: p.name,
      logo: p.logo,
    })),
  },
];

export const specialSponsorshipOpportunities: SpecialSponsorshipOpportunity[] = [
  {
    id: "ai-innovation-zone",
    title: "AI Innovation Zone",
    price: "$10,000",
    description:
      "Dedicated showcase space for AI products and demos — the most-trafficked area at DICE 2026.",
  },
  {
    id: "government-forum",
    title: "Government Forum Sponsor",
    price: "$10,000",
    description:
      "Exclusive partner for the closed-door government and regulator sessions; direct access to policy decision-makers.",
  },
  {
    id: "investor-lounge",
    title: "Investor Lounge Sponsor",
    price: "$7,500",
    description:
      "Brand ownership of the curated investor lounge — the hub for deal introductions and fund conversations.",
  },
  {
    id: "startup-pavilion",
    title: "Startup Pavilion Sponsor",
    price: "$7,500",
    description:
      "Headline partner for the startup showcase — direct access to Africa's most fundable early-stage founders.",
  },
  {
    id: "vip-reception",
    title: "VIP Reception Sponsor",
    price: "$7,500",
    description:
      "Exclusive branding on the evening networking reception — the premier relationship-building moment of the event.",
  },
  {
    id: "media-centre",
    title: "Media Centre Sponsor",
    price: "$5,000",
    description:
      "Brand ownership across all media coverage — signage, press kits, and media accreditation materials.",
  },
  {
    id: "networking-cocktail",
    title: "Networking Cocktail",
    price: "$5,000",
    description:
      "Sponsor the closing-day networking cocktail — intimate, high-quality engagement with senior delegates.",
  },
  {
    id: "hackathon",
    title: "Hackathon Sponsor",
    price: "$5,000",
    description:
      "Own the innovation hackathon — direct talent access and first look at breakthrough solutions.",
  },
  {
    id: "lanyard-bag",
    title: "Lanyard / Delegate Bag",
    price: "$3,000",
    description:
      "High-frequency brand touchpoint: every attendee carries your name throughout both conference days.",
  },
  {
    id: "student-scholarship",
    title: "Student Scholarship Fund",
    price: "$2,500+",
    description:
      "CSR-aligned opportunity to fund next-generation talent attendance and amplify your social impact story.",
  },
];

export const partnerJourneyStages = [
  {
    num: "01",
    title: "Brand Visibility",
    description:
      "Your brand reaches 5,000+ attendees, millions of digital impressions, and decision-makers across 15+ African nations via website, signage, media, social campaigns, and event assets.",
  },
  {
    num: "02",
    title: "Executive Access",
    description:
      "Curated introductions and direct engagement with regulators, central bankers, ministers, institutional investors, enterprise CXOs, and Africa's leading founders.",
  },
  {
    num: "03",
    title: "Thought Leadership",
    description:
      "Stage presence as keynote speaker, panel moderator, workshop host, or media interviewee — positioning your organisation as the category authority on your chosen theme.",
  },
  {
    num: "04",
    title: "Commercial Outcomes",
    description:
      "Qualified leads, new enterprise clients, distribution partnerships, co-investment relationships, talent recruitment, and measurable market expansion across the continent.",
  },
] as const;

export const whyPartnerBenefits = [
  {
    title: "Thought Leadership",
    description:
      "Shape the policy and innovation conversations that define the continent's digital agenda. Keynotes, panels and workshops position your organisation as a category authority.",
  },
  {
    title: "Executive Access",
    description:
      "Direct engagement with central bank governors, ministers, institutional investors, enterprise CXOs, and Africa's most influential founders — in a curated, relationship-first environment.",
  },
  {
    title: "Market Positioning",
    description:
      "Align your brand with the technologies and institutions defining Africa's future — in front of 15+ countries and millions of digital impressions across media and social channels.",
  },
  {
    title: "Business Development",
    description:
      "Generate qualified pipeline: new enterprise customers, distribution partnerships, pilot opportunities, co-investment relationships, and direct access to high-growth markets.",
  },
  {
    title: "Talent & Ecosystem",
    description:
      "Engage Africa's top AI engineers, blockchain developers, fintech innovators and researchers — a generationally deep talent pool increasingly driving global technology.",
  },
] as const;

export const exhibitionPackages: ExhibitionPackage[] = [
  {
    id: "premium",
    name: "Premium Booth",
    price: "$3,000",
    tag: "Prime Floor Placement",
    size: "6m²",
    description: "Prime location with the highest foot traffic among enterprise and government buyers.",
    recommended: true,
    benefits: [
      "Prime location — highest foot traffic",
      "Branded exhibition shell (6m²)",
      "Power, WiFi & furniture included",
      "2 exhibitor passes",
      "Listed on event website & programme",
      "Access to all networking sessions",
    ],
  },
  {
    id: "standard",
    name: "Standard Booth",
    price: "$1,500",
    tag: "General Exhibition Area",
    size: "4m²",
    description: "Standard floor placement in the general exhibition area with full delegate networking access.",
    benefits: [
      "Standard floor placement (4m²)",
      "Branded exhibition shell",
      "Power & WiFi included",
      "1 exhibitor pass",
      "Listed on event website & programme",
      "Access to networking sessions",
    ],
  },
  {
    id: "startup-pod",
    name: "Startup Showcase Pod",
    price: "$500",
    tag: "Reserved for Startups & Innovators",
    size: "Table display",
    description: "Dedicated startup showcase zone with investor pitch access and networking introductions.",
    benefits: [
      "Dedicated startup showcase zone",
      "Branded table display",
      "Pitch opportunity to investors",
      "1 exhibitor pass",
      "Listed on website as startup exhibitor",
      "Investor networking access",
    ],
  },
];

export const startupPavilionProgramme = {
  headline: "Africa's Most Curated Startup Showcase",
  description:
    "100+ vetted startups meeting institutional investors, enterprise buyers, and government innovation programmes across two days at The Civic Centre.",
  sponsorOpportunity: {
    name: "Startup Pavilion Sponsor",
    price: "$7,500",
    description:
      "Headline partner for the startup showcase — direct access to Africa's most fundable early-stage founders.",
  },
  showcasePod: {
    name: "Startup Showcase Pod",
    price: "$500",
    tag: "Reserved for Startups & Innovators",
    benefits: [
      "Dedicated startup showcase zone",
      "Branded table display",
      "Pitch opportunity to investors",
      "1 exhibitor pass",
      "Listed on website as startup exhibitor",
      "Investor networking access",
    ],
  },
  benefits: [
    "Dedicated showcase booth in the Startup Pavilion",
    "Investor meeting scheduler and curated introductions",
    "Pitch session opportunities before qualified investors",
    "Media exposure through official media partners",
    "Networking with enterprise innovation and procurement teams",
    "Government innovation programme introductions",
  ],
  criteria: [
    "Africa-based or Africa-focused venture",
    "Operating in AI, blockchain, fintech, or digital infrastructure",
    "Seed to Series A stage (growth-stage considered)",
    "Live product or validated pilot",
  ],
};

export const exhibitionHighlights = [
  "5,000+ attendees across government, enterprise, and investor segments",
  "Dedicated innovation exhibition floor at The Civic Centre",
  "Government, enterprise, and investor foot traffic",
  "Demo labs and product showcase zones",
  "On-site media coverage through official media partners",
];
