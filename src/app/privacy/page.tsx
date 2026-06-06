import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/ui/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "DICE 2026 privacy policy. How we collect, use, and protect your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" description="Last updated: June 2026" />
      <Section variant="base">
        <div className="prose prose-invert max-w-3xl space-y-6 text-text-secondary">
          <p>
            Blockchain Nigeria User Group (&ldquo;BNUG&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the DICE 2026 website.
            This policy describes how we collect, use, and safeguard personal information submitted through
            registration forms, newsletter signups, and contact inquiries.
          </p>
          <h2 className="font-headline text-xl font-bold text-text-primary">Information We Collect</h2>
          <p>Name, email address, company, and message content submitted through website forms. Technical data including IP address and browser type via standard analytics.</p>
          <h2 className="font-headline text-xl font-bold text-text-primary">How We Use Your Information</h2>
          <p>To process registrations, respond to inquiries, send programme updates (with consent), and improve the website experience.</p>
          <h2 className="font-headline text-xl font-bold text-text-primary">Contact</h2>
          <p>Privacy inquiries: privacy@dice2026.com</p>
        </div>
      </Section>
    </>
  );
}
