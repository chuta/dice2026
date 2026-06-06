# Content Models (Placeholder CMS)

DICE 2026 uses local TypeScript content files as a placeholder CMS. Replace with a headless CMS (Sanity, Contentful, or Supabase) when editorial workflows require it.

## Current Structure

```
src/content/
├── site-data.ts      # Tracks, speakers, agenda, tickets, sponsors, zones
src/types/content.ts  # TypeScript interfaces for all content models
```

## Content Models

| Model | Interface | File | Update Frequency |
|-------|-----------|------|------------------|
| Tracks | `Track` | `site-data.ts` | Rarely |
| Speakers | `Speaker` | `site-data.ts` | Weekly during recruitment |
| Agenda | `AgendaSession` | `site-data.ts` | Daily near event |
| Ticket Tiers | `TicketTier` | `site-data.ts` | Monthly |
| Sponsors | `SponsorTier` | `site-data.ts` | As deals close |
| Testimonials | `Testimonial` | `site-data.ts` | As available |
| Experience Zones | `ExperienceZone` | `site-data.ts` | Rarely |

## Migration Path

1. Export `site-data.ts` shapes to CMS schema
2. Replace static imports with `fetch` in Server Components
3. Add ISR revalidation webhooks on content publish
4. Keep `src/types/content.ts` as the canonical type contract
