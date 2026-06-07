export interface PartnerOrganization {
  name: string;
  shortName: string;
  logo: string;
}

/** Ecosystem & government institutions convening DICE 2026 */
export const ecosystemPartners: PartnerOrganization[] = [
  { name: "Central Bank of Nigeria", shortName: "CBN", logo: "/images/partners/cbn.jpeg" },
  { name: "Securities and Exchange Commission Nigeria", shortName: "SEC", logo: "/images/partners/sec.jpeg" },
  { name: "National Information Technology Development Agency", shortName: "NITDA", logo: "/images/partners/nitda.jpeg" },
  {
    name: "Blockchain Industry Coalition of Nigeria",
    shortName: "BICCoN",
    logo: "/images/partners/biccon.png",
  },
  { name: "Blockchain Research Institute", shortName: "BRI", logo: "/images/partners/bri.png" },
  { name: "Convexity", shortName: "Convexity", logo: "/images/partners/convexity.png" },
  { name: "Fintech Association of Nigeria", shortName: "FinTechNGR", logo: "/images/partners/fintechngr.jpg" },
  { name: "Government Blockchain Association", shortName: "GBA", logo: "/images/partners/gba.png" },
];

/** Official media partners amplifying DICE 2026 */
export const mediaPartners: PartnerOrganization[] = [
  { name: "TechCabal", shortName: "TechCabal", logo: "/images/partners/Tech-Cabal-600x400-1.gif" },
  { name: "Techpoint Africa", shortName: "Techpoint", logo: "/images/partners/techpointAfrica.png" },
  { name: "Technext", shortName: "Technext", logo: "/images/partners/Technext-Logo.png" },
  { name: "TechEconomy", shortName: "TechEconomy", logo: "/images/partners/techeconomy.png" },
  { name: "Channels Television", shortName: "Channels TV", logo: "/images/partners/channets tv.png" },
  { name: "CNBC Africa", shortName: "CNBC Africa", logo: "/images/partners/cnbc africa tv.png" },
  { name: "Arise News", shortName: "Arise News", logo: "/images/partners/arise tv.png" },
  { name: "Konga", shortName: "Konga", logo: "/images/partners/konga tv.png" },
];

/** Ticket payment and processing partners */
export const ticketProcessingPartners: PartnerOrganization[] = [
  { name: "Korapay", shortName: "Korapay", logo: "/images/partners/korapay.png" },
  {
    name: "Blockspace Technologies LTD",
    shortName: "Blockspace",
    logo: "/images/partners/blockspace.jpg",
  },
];

/** @deprecated Use ecosystemPartners */
export const partnerOrganizations = ecosystemPartners;
