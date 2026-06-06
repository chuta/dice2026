import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Exhibition",
  description: "Book exhibition space at DICE 2026 — showcase your technology to government, enterprise, and investor delegates.",
  path: "/exhibition",
});

export default function ExhibitionPage() {
  return (
    <>
      <PageHero
        eyebrow="Exhibition"
        title="Innovation Exhibition Floor"
        description="Demonstrate your products and services to 5,000+ high-value delegates across dedicated exhibition zones at The Civic Centre."
        cta={{ label: "Book Exhibition Space", href: "#inquiry" }}
        secondaryCta={{ label: "Become a Sponsor", href: "/partner" }}
      />
      <Section variant="base">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Standard Booth", desc: "10sqm exhibition space with power and branding" },
            { name: "Premium Booth", desc: "20sqm corner location with enhanced visibility" },
            { name: "Pavilion Package", desc: "Custom zone within Startup or Enterprise pavilion" },
          ].map((pkg) => (
            <GlassCard key={pkg.name}>
              <h3 className="font-headline text-lg font-semibold">{pkg.name}</h3>
              <p className="mt-2 text-sm text-text-secondary">{pkg.desc}</p>
              <p className="mt-4 font-mono text-accent-cyan">Pricing TBD</p>
            </GlassCard>
          ))}
        </div>
      </Section>
      <Section id="inquiry" variant="deep">
        <h2 className="mb-8 text-center font-headline text-2xl font-bold">Exhibitor Inquiry</h2>
        <ContactForm defaultSubject="Exhibitor" subjects={["Exhibitor", "Exhibition — Standard", "Exhibition — Premium", "Exhibition — Pavilion"]} />
      </Section>
    </>
  );
}
