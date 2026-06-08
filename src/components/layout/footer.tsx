import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { SITE } from "@/lib/constants";

const footerLinks = {
  event: [
    { href: "/about", label: "About DICE 2026" },
    { href: "/agenda", label: "Agenda" },
    { href: "/tracks", label: "Tracks" },
    { href: "/speakers", label: "Speakers" },
  ],
  attend: [
    { href: "/tickets", label: "Tickets" },
    { href: "/venue", label: "Venue & Travel" },
    { href: "/contact", label: "FAQ & Contact" },
  ],
  participate: [
    { href: "/speakers", label: "Apply to Speak" },
    { href: "/rwa-summit", label: "Africa RWA Summit" },
    { href: "/startup-pavilion", label: "Startup Pavilion" },
    { href: "/exhibition", label: "Exhibition" },
    { href: "/investor-forum", label: "Investor Forum" },
  ],
  partner: [
    { href: "/sponsors", label: "Sponsors" },
    { href: "/partner", label: "Partner With Us" },
    { href: "/government-forum", label: "Government Forum" },
  ],
  connect: [
    { href: "/contact", label: "Contact" },
    { href: "/media", label: "Media Centre" },
    { href: "/about", label: "About BNUG" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/logos/dice-icon.png" alt="" width={32} height={32} />
            <div>
              <p className="font-headline font-bold">DICE 2026</p>
              <p className="text-sm text-text-muted">{SITE.date} · Lagos, Nigeria</p>
            </div>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <p className="eyebrow mb-4 text-silver">{key}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-accent-cyan"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-8 md:flex-row">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-xs text-text-muted">Organized by</span>
              <div className="rounded-lg bg-white p-2">
                <Image src="/images/logos/bnug.png" alt={SITE.organizer} width={80} height={32} className="h-8 w-auto" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-text-muted">Title Sponsor</span>
              <div className="rounded-lg bg-white p-2">
                <Image src="/images/logos/ubuntu-tribe.png" alt={SITE.leadSponsor} width={80} height={32} className="h-8 w-auto" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <Link href="/privacy" className="hover:text-accent-cyan">Privacy</Link>
            <Link href="/terms" className="hover:text-accent-cyan">Terms</Link>
            <span>© 2026 {SITE.organizerShort}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
