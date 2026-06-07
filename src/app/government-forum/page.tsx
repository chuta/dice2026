import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { REACH_STATS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Government Forum",
  description: "Register your government delegation for DICE 2026. Policy programming on Africa's autonomous digital economy.",
  path: "/government-forum",
  keywords: ["government blockchain policy Africa", "digital economy policy conference"],
});

export default function GovernmentForumPage() {
  return (
    <>
      <PageHero
        eyebrow="Government Forum"
        title="Policy Dialogue for Africa's Digital Economy"
        description={`${REACH_STATS[0].value} government agencies convene for structured dialogue on AI regulation, digital assets, identity infrastructure, and cross-border coordination.`}
        cta={{ label: "Register Delegation", href: "#register" }}
        secondaryCta={{ label: "Contact Policy Team", href: "/contact" }}
      />
      <Section variant="base">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Regulatory Frameworks", desc: "Cross-border digital asset policy alignment and sandbox models" },
            { title: "Digital Public Infrastructure", desc: "National identity, payments, and data governance systems" },
            { title: "AI Governance", desc: "Institutional frameworks for agentic AI deployment" },
            { title: "Inter-Agency Coordination", desc: "Multi-ministry digital economy strategy sessions" },
          ].map((item) => (
            <GlassCard key={item.title}>
              <h3 className="font-headline font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
      <Section id="register" variant="deep">
        <h2 className="mb-8 text-center font-headline text-2xl font-bold">Delegation Registration</h2>
        <ContactForm defaultSubject="Government Delegation" subjects={["Government Delegation", "Policy Briefing Request"]} />
      </Section>
    </>
  );
}
