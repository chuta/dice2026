import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export function AutonomousEconomySection() {
  return (
    <Section id="autonomous-economy" variant="deep">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <SectionHeader
          compact
          eyebrow="The Autonomous Digital Economy"
          title="Where Intelligence, Trust, Identity and Capital Converge"
          description="The autonomous digital economy represents the next phase of market evolution, systems that verify, decide, and transact with institutional-grade reliability. Decentralized Intelligence 2026 is where Africa's architects of this transformation gather to align policy, infrastructure, and capital."
          cta={{ label: "Explore Conference Tracks", href: "/tracks" }}
        />
        <div className="relative flex aspect-square max-w-lg items-center justify-center justify-self-center">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.08)_0%,transparent_70%)]" />
          <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
            <circle cx="200" cy="200" r="8" fill="#00D4FF" opacity="0.9" />
            {[
              { cx: 120, cy: 120, label: "Intelligence", color: "#1B6EFF" },
              { cx: 280, cy: 120, label: "Trust", color: "#D61F8C" },
              { cx: 120, cy: 280, label: "Identity", color: "#8DC63F" },
              { cx: 280, cy: 280, label: "Capital", color: "#F5B800" },
            ].map((node) => (
              <g key={node.label}>
                <line x1="200" y1="200" x2={node.cx} y2={node.cy} stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
                <circle cx={node.cx} cy={node.cy} r="6" fill={node.color} opacity="0.8" />
                <text x={node.cx} y={node.cy + 24} textAnchor="middle" fill="#9CA3AF" fontSize="11" fontFamily="system-ui">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
      <div className="mt-8 flex justify-center lg:hidden">
        <Button href="/tracks" variant="tertiary" showArrow>
          Explore Conference Tracks
        </Button>
      </div>
    </Section>
  );
}
