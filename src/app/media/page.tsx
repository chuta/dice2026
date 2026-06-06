import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Media Centre",
  description: "DICE 2026 media centre. Press accreditation, media kit, and communications resources.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media Centre"
        title="Press & Media Resources"
        description="Accreditation, media kits, and communications support for journalists and content creators covering DICE 2026."
        cta={{ label: "Apply for Accreditation", href: "#accredit" }}
        secondaryCta={{ label: "Download Media Kit", href: "#kit" }}
      />
      <Section id="kit" variant="base">
        <GlassCard>
          <h2 className="font-headline text-xl font-bold">Media Kit</h2>
          <p className="mt-2 text-text-secondary">
            Logos, executive bios, key messages, and event photography will be available for download upon accreditation.
          </p>
          <Button variant="secondary" className="mt-6" showArrow>
            <ArrowDownTrayIcon className="h-4 w-4" />
            Media Kit (Coming Soon)
          </Button>
        </GlassCard>
      </Section>
      <Section id="accredit" variant="deep">
        <h2 className="mb-8 text-center font-headline text-2xl font-bold">Media Accreditation</h2>
        <ContactForm defaultSubject="Media Accreditation" subjects={["Media Accreditation", "Press Inquiry", "Interview Request"]} />
      </Section>
    </>
  );
}
