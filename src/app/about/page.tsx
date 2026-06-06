import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { CTA, SITE, STATS } from "@/lib/constants";

export const metadata = createMetadata({
  title: "About DICE 2026",
  description:
    "Learn about Africa's premier conference on the autonomous digital economy — mission, vision, and institutional positioning.",
  path: "/about",
  keywords: ["about DICE 2026", "digital economy Africa conference"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The Strategic Platform for Africa's Autonomous Digital Economy"
        description="DICE 2026 convenes the institutions, capital, builders, and policymakers required to architect Africa's intelligent, decentralized economic infrastructure."
        cta={CTA.register}
        secondaryCta={{ label: "Explore Tracks", href: "/tracks" }}
      />
      <Section variant="base">
        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard>
            <h2 className="font-headline text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              To establish the definitive annual convening where Africa&apos;s autonomous digital economy is defined,
              financed, regulated, and built — with the institutional gravity expected of a global policy forum.
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="font-headline text-2xl font-bold">What Makes DICE Different</h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              DICE is not a blockchain meetup or technology festival. It is a strategic platform where intelligence,
              trust, identity, and capital converge — designed for government delegations, institutional investors,
              enterprise leaders, and the builders defining market infrastructure.
            </p>
          </GlassCard>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-mono text-3xl text-accent-cyan">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-silver">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section variant="deep">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Organizer</p>
            <h2 className="font-headline text-3xl font-bold">{SITE.organizer}</h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Blockchain Nigeria User Group (BNUG) is Africa&apos;s leading blockchain and future-technology community.
              Through education, policy engagement, and ecosystem development, BNUG has built the institutional
              foundation that makes DICE 2026 possible.
            </p>
          </div>
          <div className="flex justify-center rounded-2xl bg-white p-10">
            <Image src="/images/logos/bnug.png" alt={SITE.organizer} width={300} height={150} className="h-auto w-full max-w-sm" />
          </div>
        </div>
      </Section>
    </>
  );
}
