# DICE 2026 — Official Conference Website

Decentralized Intelligence Conference & Exhibition 2026  
*Building Africa's Autonomous Digital Economy*

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS 4**
- **Framer Motion** — scroll reveals, hero animations
- **GSAP** — available for advanced motion (optional)
- **@heroicons/react** — iconography
- **React Hook Form** — form handling

## Documentation

- [`docs/UX-STRATEGY.md`](docs/UX-STRATEGY.md) — Phase 1 UX architecture
- [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) — Phase 2 visual design system
- [`src/content/cms/README.md`](src/content/cms/README.md) — Content model placeholder

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push repository to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Framework preset: **Next.js**
4. Set environment variables (when added):
   - `NEXT_PUBLIC_SITE_URL` — production domain
5. Deploy

### Environment Variables

Copy `.env.example` to `.env` and fill in values:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key (server-only) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role / secret key (server-only, required for form writes) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://dice2026.africa`) |

### Database setup (forms)

Apply the migration in the Supabase SQL Editor, or run:

```bash
supabase link --project-ref <your-project-ref>
supabase db push
```

Migration file: `supabase/migrations/20260606190000_form_submissions.sql`

Creates `contact_submissions` and `newsletter_subscribers` tables with RLS enabled.

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Homepage (18 sections)
│   ├── about/
│   ├── agenda/
│   ├── tracks/[slug]/
│   ├── speakers/
│   ├── sponsors/
│   ├── exhibition/
│   ├── startup-pavilion/
│   ├── investor-forum/
│   ├── government-forum/
│   ├── media/
│   ├── venue/
│   ├── tickets/
│   ├── partner/
│   └── contact/
├── components/
│   ├── cards/              # Track, speaker, ticket cards
│   ├── effects/            # Network background canvas
│   ├── forms/              # Contact, newsletter
│   ├── layout/             # Header, footer, page hero
│   ├── sections/           # Homepage sections
│   └── ui/                 # Button, glass card, section
├── content/                # Static content (placeholder CMS)
├── lib/                    # Constants, SEO, utils
└── types/                  # Content model interfaces
public/
└── images/logos/           # Brand assets
```

## Brand Assets

| File | Usage |
|------|-------|
| `dice-icon.png` | Favicon, compact nav |
| `dice-logo-2026.png` | Full header lockup |
| `bnug.png` | Organizer mark |
| `ubuntu-tribe.png` | Title sponsor |

## Event Details

- **Dates:** August 21–22, 2026
- **Venue:** The Civic Centre, Victoria Island, Lagos
- **Organizer:** Blockchain Nigeria User Group (BNUG)
- **Title Sponsor:** [Ubuntu Tribe](https://utribe.one/)
