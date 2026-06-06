import { agendaHighlights } from "@/content/site-data";
import { Button } from "@/components/ui/button";
import { CTA } from "@/lib/constants";
import { GlassCard } from "@/components/ui/glass-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function AgendaSection() {
  return (
    <Section id="agenda" variant="deep">
      <SectionHeader
        eyebrow="Agenda Highlights"
        title="Two Days of Institutional-Depth Programming"
        description="Keynotes, policy panels, technical workshops, and exclusive forum sessions across both conference days."
        cta={{ label: "View Full Agenda", href: "/agenda" }}
      />
      <div className="grid gap-4 md:grid-cols-2">
        {agendaHighlights.map((session) => (
          <GlassCard key={session.id}>
            <div className="flex items-start gap-4">
              <span className="font-mono text-sm text-silver">{session.time}</span>
              <div>
                <p className="font-headline font-semibold text-text-primary">{session.title}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-text-muted">
                    Day {session.day}
                  </span>
                  {session.track && (
                    <span
                      className="rounded-md px-2 py-0.5 text-xs"
                      style={{
                        backgroundColor: `${session.trackColor}20`,
                        color: session.trackColor,
                      }}
                    >
                      {session.track}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button href={CTA.register.href} showArrow>{CTA.register.label}</Button>
      </div>
    </Section>
  );
}
