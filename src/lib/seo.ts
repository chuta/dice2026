import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

interface PageSEO {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageSEO): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "" || path === "/" ? `${SITE.name} — ${SITE.theme}` : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "blockchain conference Africa",
      "AI conference Nigeria",
      "Web3 conference Africa",
      "digital economy Africa",
      "fintech conference Lagos",
      ...keywords,
    ],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: `${SITE.url}/images/logos/dice-logo-2026.png`,
          width: 1200,
          height: 630,
          alt: SITE.fullName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE.url}/images/logos/dice-logo-2026.png`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function eventJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: SITE.fullName,
    startDate: SITE.dateISO.start,
    endDate: SITE.dateISO.end,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: SITE.venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ozumba Mbadiwe Avenue",
        addressLocality: "Victoria Island, Lagos",
        addressCountry: "NG",
      },
    },
    organizer: {
      "@type": "Organization",
      name: SITE.organizer,
    },
    description: SITE.description,
    image: `${SITE.url}/images/logos/dice-logo-2026.png`,
    offers: {
      "@type": "Offer",
      url: `${SITE.url}/tickets`,
      availability: "https://schema.org/InStock",
    },
  };
}
