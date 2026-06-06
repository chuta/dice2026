import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

const CONTACT_SUBJECTS = [
  "General Inquiry",
  "Sponsorship",
  "Speaker Application",
  "Propose a Track",
  "Exhibitor",
  "Media",
  "Government Delegation",
] as const;

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact the DICE 2026 team for tickets, sponsorship, speaking, media, and general inquiries.",
  path: "/contact",
});

interface ContactPageProps {
  searchParams: Promise<{ subject?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { subject } = await searchParams;
  const decodedSubject = subject ? decodeURIComponent(subject.replace(/\+/g, " ")) : undefined;
  const defaultSubject =
    decodedSubject && CONTACT_SUBJECTS.includes(decodedSubject as (typeof CONTACT_SUBJECTS)[number])
      ? decodedSubject
      : "General Inquiry";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Our team responds to all inquiries within 48 hours."
      />
      <Section variant="base">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm defaultSubject={defaultSubject} subjects={[...CONTACT_SUBJECTS]} />
          </div>
          <GlassCard hover={false}>
            <h3 className="font-headline font-semibold">Event Inquiries</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Tickets, sponsorship, speaking, media, partnerships, and all other enquiries:
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 inline-block font-mono text-sm text-accent-cyan hover:underline"
            >
              {SITE.email}
            </a>
          </GlassCard>
        </div>
      </Section>
    </>
  );
}
