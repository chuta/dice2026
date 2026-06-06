import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "DICE 2026 terms of service and event participation conditions.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" description="Last updated: June 2026" />
      <Section variant="base">
        <div className="max-w-3xl space-y-6 text-text-secondary">
          <p>
            By accessing the DICE 2026 website and registering for the event, you agree to these terms
            governed by Blockchain Nigeria User Group.
          </p>
          <h2 className="font-headline text-xl font-bold text-text-primary">Event Registration</h2>
          <p>Ticket purchases are subject to availability. Refund and transfer policies will be published with ticket pricing.</p>
          <h2 className="font-headline text-xl font-bold text-text-primary">Code of Conduct</h2>
          <p>All participants are expected to maintain professional conduct consistent with an institutional-grade conference environment.</p>
          <h2 className="font-headline text-xl font-bold text-text-primary">Contact</h2>
          <p>Legal inquiries: {SITE.email}</p>
        </div>
      </Section>
    </>
  );
}
