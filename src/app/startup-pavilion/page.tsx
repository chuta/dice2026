import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Startup Pavilion",
  description: "Apply for the DICE 2026 Startup Pavilion — showcase your startup to 50+ investors and enterprise buyers.",
  path: "/startup-pavilion",
});

export default function StartupPavilionPage() {
  return (
    <>
      <PageHero
        eyebrow="Startup Pavilion"
        title="Africa's Most Curated Startup Showcase"
        description="100+ vetted startups meeting institutional investors, enterprise buyers, and government innovation programmes."
        cta={{ label: "Apply Now", href: "#apply" }}
        secondaryCta={{ label: "Investor Forum", href: "/investor-forum" }}
      />
      <Section variant="base">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Dedicated showcase booth in Startup Pavilion",
            "Investor meeting scheduler access",
            "Pitch session opportunities",
            "Media and press exposure",
            "Networking with enterprise innovation teams",
            "Government innovation programme introductions",
          ].map((benefit) => (
            <GlassCard key={benefit} hover={false}>
              <p className="text-text-secondary">{benefit}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
      <Section id="apply" variant="deep">
        <h2 className="mb-8 text-center font-headline text-2xl font-bold">Startup Pavilion Application</h2>
        <ContactForm defaultSubject="Startup Pavilion Application" subjects={["Startup Pavilion Application"]} />
      </Section>
    </>
  );
}
