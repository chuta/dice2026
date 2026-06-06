import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact the DICE 2026 team for tickets, sponsorship, speaking, media, and general inquiries.",
  path: "/contact",
});

export default function ContactPage() {
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
            <ContactForm />
          </div>
          <div className="space-y-4">
            <GlassCard hover={false}>
              <h3 className="font-headline font-semibold">General Inquiries</h3>
              <p className="mt-2 text-sm text-text-secondary">{SITE.email}</p>
            </GlassCard>
            <GlassCard hover={false}>
              <h3 className="font-headline font-semibold">Partnerships</h3>
              <p className="mt-2 text-sm text-text-secondary">partnerships@dice2026.com</p>
            </GlassCard>
            <GlassCard hover={false}>
              <h3 className="font-headline font-semibold">Media</h3>
              <p className="mt-2 text-sm text-text-secondary">media@dice2026.com</p>
            </GlassCard>
          </div>
        </div>
      </Section>
    </>
  );
}
