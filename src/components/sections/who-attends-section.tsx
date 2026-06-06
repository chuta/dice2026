import Link from "next/link";
import { personas } from "@/content/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { STATS } from "@/lib/constants";

const personaLinks: Record<string, string> = {
  government: "/government-forum",
  investors: "/investor-forum",
  founders: "/startup-pavilion",
  enterprise: "/exhibition",
  developers: "/tracks",
};

export function WhoAttendsSection() {
  return (
    <Section id="who-attends" variant="deep">
      <SectionHeader
        eyebrow="Who Attends"
        title="The Decision-Makers Building Africa's Digital Infrastructure"
        description={`${STATS[0].value} delegates spanning government officials, institutional investors, enterprise executives, founders, and researchers.`}
        align="center"
        className="mx-auto text-center"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {personas.map((persona) => {
          const Icon = persona.icon;
          const href = personaLinks[persona.id];
          return (
            <Link key={persona.id} href={href} className="group block">
              <GlassCard className="h-full text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan/10 transition-colors group-hover:bg-accent-cyan/20">
                  <Icon className="h-6 w-6 text-accent-cyan" />
                </div>
                <h3 className="font-headline text-base font-semibold group-hover:text-accent-cyan">{persona.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{persona.description}</p>
              </GlassCard>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
