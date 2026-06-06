import { fullAgenda } from "@/content/site-data";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";
import { CTA } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Agenda",
  description: "Decentralized Intelligence conference agenda; two days of keynotes, panels, workshops, and forum sessions in Lagos.",
  path: "/agenda",
  keywords: ["DICE 2026 agenda", "tech conference schedule Lagos", "Decentralized Intelligence"],
});

export default function AgendaPage() {
  const day1 = fullAgenda.filter((s) => s.day === 1);
  const day2 = fullAgenda.filter((s) => s.day === 2);

  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Conference Programme"
        description="August 21–22, 2026. Full programme subject to updates as speakers and sessions are confirmed."
        cta={CTA.register}
        secondaryCta={{ label: "Apply to Speak", href: "/contact" }}
      />
      {[1, 2].map((day) => {
        const sessions = day === 1 ? day1 : day2;
        return (
          <Section key={day} variant={day === 1 ? "base" : "deep"}>
            <h2 className="mb-8 font-headline text-2xl font-bold">
              Day {day}, August {day === 1 ? "21" : "22"}, 2026
            </h2>
            <div className="relative space-y-0">
              {sessions.map((session, i) => (
                <div key={session.id} className="relative flex gap-6 pb-8">
                  {i < sessions.length - 1 && (
                    <div className="absolute left-[5px] top-3 h-full w-0.5 bg-white/[0.06]" />
                  )}
                  <div className="relative z-10 mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-accent-cyan ring-4 ring-surface-deep" />
                  <GlassCard className="flex-1" hover={false}>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-sm text-silver">{session.time}</p>
                        <h3 className="mt-1 font-headline font-semibold">{session.title}</h3>
                      </div>
                      {session.track && (
                        <span
                          className="rounded-md px-2 py-1 text-xs"
                          style={{ backgroundColor: `${session.trackColor}20`, color: session.trackColor }}
                        >
                          {session.track}
                        </span>
                      )}
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </Section>
        );
      })}
      <Section variant="base" containerClassName="text-center">
        <Button href="/tickets" size="lg" showArrow>Secure Your Seat</Button>
      </Section>
    </>
  );
}
