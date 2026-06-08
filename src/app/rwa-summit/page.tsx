import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { rwaSummit } from "@/content/rwa-summit";
import { createMetadata } from "@/lib/seo";
import { CTA, SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: rwaSummit.title,
  description: rwaSummit.description,
  path: rwaSummit.path,
  keywords: [
    "Africa RWA tokenization summit",
    "real world asset conference Lagos",
    "tokenized gold Africa",
  ],
});

export default function RwaSummitPage() {
  return (
    <>
      <PageHero
        eyebrow={rwaSummit.eyebrow}
        title={rwaSummit.title}
        description={rwaSummit.description}
        cta={CTA.register}
        secondaryCta={{ label: "View Track", href: "/tracks/tokenized-markets" }}
      />

      <Section variant="base">
        <GlassCard className="border-warm-gold/20">
          <p className="eyebrow-gold">Powered by {rwaSummit.poweredBy}</p>
          <div className="mx-auto mt-6 max-w-sm rounded-2xl bg-white p-10">
            <Image
              src={rwaSummit.poweredByLogo}
              alt={rwaSummit.poweredBy}
              width={240}
              height={100}
              className="mx-auto h-auto w-full"
            />
          </div>
          <p className="mt-6 text-center text-text-secondary">
            {SITE.leadSponsor} — advancing tokenized gold and asset-backed financial ecosystems
            across Africa.
          </p>
        </GlassCard>
      </Section>

      <Section variant="deep">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              compact
              eyebrow="Programming"
              title="Capital Layer of Africa's Digital Economy"
              description="Sessions structured around digital assets, RWA tokenization, institutional finance, and cross-border capital markets."
            />
            <ul className="mt-6 space-y-3">
              {rwaSummit.programming.map((item) => (
                <li key={item} className="text-sm text-text-secondary">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
          <GlassCard>
            <h3 className="font-headline text-lg font-semibold">Who Should Attend</h3>
            <ul className="mt-4 space-y-3">
              {rwaSummit.audiences.map((audience) => (
                <li key={audience} className="text-sm text-text-secondary">
                  · {audience}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={CTA.register.href} size="sm" showArrow>
                {CTA.register.label}
              </Button>
              <Button href={CTA.sponsor.href} variant="secondary" size="sm" showArrow>
                Summit Partnership
              </Button>
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section id="register" variant="base">
        <h2 className="mb-8 text-center font-headline text-2xl font-bold">Summit Enquiries</h2>
        <ContactForm
          defaultSubject="Africa RWA & Tokenization Summit"
          subjects={[
            "Africa RWA & Tokenization Summit",
            "RWA Summit Speaking Opportunity",
            "RWA Summit Partnership",
          ]}
        />
      </Section>
    </>
  );
}
