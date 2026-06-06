"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { CTA, FORUM_LINKS, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [forumsOpen, setForumsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/[0.06] bg-surface-deep/85 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logos/dice-icon.png"
              alt="DICE 2026"
              width={32}
              height={32}
              className="h-7 w-7 sm:h-8 sm:w-8"
              priority
            />
            <span className="hidden font-headline text-lg font-bold tracking-tight sm:inline">
              DICE <span className="text-accent-cyan">2026</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
                onClick={() => setForumsOpen(!forumsOpen)}
                onBlur={() => setTimeout(() => setForumsOpen(false), 150)}
                aria-expanded={forumsOpen}
              >
                Forums
                <ChevronDownIcon className={cn("h-4 w-4 transition-transform", forumsOpen && "rotate-180")} />
              </button>
              {forumsOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-white/10 bg-surface-elevated p-2 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                  {FORUM_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-white/5 hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <Button href={CTA.register.href} size="sm" showArrow className="hidden sm:inline-flex">
              {CTA.register.label}
            </Button>
            <button
              type="button"
              className="rounded-lg p-2 text-text-secondary hover:text-text-primary lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-surface-deep p-6">
            <div className="flex items-center justify-between">
              <span className="font-headline text-lg font-bold">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-2 text-text-secondary"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-8 flex-1 space-y-8 overflow-y-auto" aria-label="Mobile navigation">
              <div>
                <p className="eyebrow mb-3">Attend</p>
                <div className="space-y-1">
                  {[
                    { href: "/tickets", label: "Tickets" },
                    { href: "/agenda", label: "Agenda" },
                    { href: "/venue", label: "Venue & Travel" },
                    { href: "/tracks", label: "Tracks" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-text-secondary hover:bg-white/5 hover:text-text-primary">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow mb-3">Participate</p>
                <div className="space-y-1">
                  {[
                    { href: "/speakers", label: "Speakers" },
                    { href: "/startup-pavilion", label: "Startup Pavilion" },
                    { href: "/exhibition", label: "Exhibition" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-text-secondary hover:bg-white/5 hover:text-text-primary">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow mb-3">Institutional</p>
                <div className="space-y-1">
                  {[
                    { href: "/government-forum", label: "Government Forum" },
                    { href: "/investor-forum", label: "Investor Forum" },
                    { href: "/media", label: "Media Centre" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-text-secondary hover:bg-white/5 hover:text-text-primary">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow mb-3">Partner</p>
                <div className="space-y-1">
                  {[
                    { href: "/sponsors", label: "Sponsors" },
                    { href: "/partner", label: "Partner With Us" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2.5 text-text-secondary hover:bg-white/5 hover:text-text-primary">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
            <Button href={CTA.register.href} className="w-full" showArrow onClick={() => setMobileOpen(false)}>
              {CTA.register.label}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
