import { AboutBnugSection } from "@/components/sections/about-bnug-section";
import { AgendaSection } from "@/components/sections/agenda-section";
import { AutonomousEconomySection } from "@/components/sections/autonomous-economy-section";
import { ExhibitionSection } from "@/components/sections/exhibition-section";
import { ExperienceZonesSection } from "@/components/sections/experience-zones-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { GovernmentSection } from "@/components/sections/government-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SpeakersSection } from "@/components/sections/speakers-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { StartupInvestorSection } from "@/components/sections/startup-investor-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TicketsSection } from "@/components/sections/tickets-section";
import { TracksSection } from "@/components/sections/tracks-section";
import { VenueSection } from "@/components/sections/venue-section";
import { WhoAttendsSection } from "@/components/sections/who-attends-section";
import { WhyDiceSection } from "@/components/sections/why-dice-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyDiceSection />
      <AutonomousEconomySection />
      <TracksSection />
      <WhoAttendsSection />
      <SpeakersSection />
      <AgendaSection />
      <ExperienceZonesSection />
      <StartupInvestorSection />
      <GovernmentSection />
      <ExhibitionSection />
      <SponsorsSection />
      <TestimonialsSection />
      <VenueSection />
      <TicketsSection />
      <AboutBnugSection />
      <FinalCtaSection />
    </>
  );
}
