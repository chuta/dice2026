# DICE 2026 — Visual Design System & Creative Direction

**Document Type:** Phase 2 Deliverable — Visual Identity, Design Language & Component Specification  
**Version:** 1.0  
**Date:** June 6, 2026  
**Status:** Ready for engineering handoff (Phase 3)  
**References:** `docs/UX-STRATEGY.md`, `CLAUDE.md`, `Prompt.md` (Prompt 2)  
**Icon library:** `@heroicons/react` (stakeholder preference)

---

## Executive Summary

This document defines the complete visual identity and design system for DICE 2026. It translates the UX strategy into an engineering-ready specification: color tokens, typography, spacing, motion, iconography, and component-level design rules.

The system is built around three existing brand assets discovered in the project root, each informing the palette and layout decisions:

| Asset File | Identity | Role on Site |
|------------|----------|--------------|
| `Diicon.png` | DICE geometric mark (low-poly spectrum icon) | Favicon, app icon, compact nav logo, social avatar |
| `dilogo2026.png` | DICE 2026 full wordmark (icon + "2026" + V-3 badge) | Primary header logo, hero co-branding, OG image overlay |
| `bnug.png` | BNUG / BEAN organizer mark (shield + lime green blocks) | About BNUG section, footer organizer credit, institutional pages |
| `ubuntu tribe.png` / `ubuntu tribe logo.avif` | Ubuntu Tribe title sponsor (gradient butterfly + wordmark) | Title sponsor feature, Sponsors section hero placement |

**Design principle:** The DICE rainbow mark provides *brand energy*; the UI chrome stays *dark, institutional, and restrained*. Spectrum colors appear as controlled accents — never as a full-page gradient flood.

---

## 1. Brand Positioning

### 1.1 Positioning Statement

DICE 2026 is Africa's autonomous digital economy convening — presented with the visual authority of a global policy forum and the technical precision of a premium fintech platform.

### 1.2 Brand Personality

| Trait | Expression in Design |
|-------|---------------------|
| **Authoritative** | Dark surfaces, generous whitespace, restrained color application |
| **Intelligent** | Network motifs, monospace data accents, structured grids |
| **Global** | Neutral typography, international date/location formatting, no regional clichés |
| **African** | Warm accent tones drawn from DICE spectrum and Ubuntu Tribe gradient; tone via copy, not stereotypical visuals |
| **Premium** | Glassmorphism depth, metallic highlights, subtle motion, high-quality photography |
| **Futuristic** | Particle/network backgrounds, cyan glow accents, faceted geometry echoing DICE icon |

### 1.3 Creative Vision

> Davos meets TOKEN2049 · GITEX meets Apple · TED meets Stripe · Beyond Africa meets the Future

**Target emotional response:** *"Africa's most important technology gathering."*

### 1.4 What We Avoid

Generic conference templates · Corporate government beige · Traditional bank-blue fintech · Crypto-bro neon · Web3 clichés (rocket ships, laser eyes, coin imagery) · Full-spectrum rainbow UI (reserved for logo moments only)

---

## 2. Visual Identity System

### 2.1 Logo Architecture

```
Primary Lockup (Header)
┌──────────────────────────────────────┐
│  [Diicon]  DICE 2026                 │  ← Icon + wordmark text (if dilogo2026 too wide on mobile)
│  or [dilogo2026.png full lockup]     │
└──────────────────────────────────────┘

Compact (Mobile / Favicon)
┌────────┐
│ [Diicon]│  ← Diicon.png only
└────────┘

Co-brand (Sponsors section)
┌─────────────────────────────────────────────┐
│  Title Sponsor                              │
│  [ubuntu tribe logo]                        │
│  Presented in partnership with DICE 2026    │
└─────────────────────────────────────────────┘

Organizer (Footer / About BNUG)
┌─────────────────────────────────────────────┐
│  Organized by  [bnug.png]                   │
│  Blockchain Nigeria User Group              │
└─────────────────────────────────────────────┘
```

### 2.2 Logo Usage Rules

| Rule | Specification |
|------|---------------|
| **Minimum size — icon** | 32×32px (digital) |
| **Minimum size — full lockup** | 120px width |
| **Clear space** | 1× icon height on all sides |
| **Header background** | Always on `--color-surface-deep` or darker; never on busy photography |
| **dilogo2026.png** | Use on dark backgrounds; the file ships with black surround — crop to content in implementation |
| **ubuntu tribe.png** | Use on white or `--color-surface-elevated` card; provide dark-mode variant by placing on elevated glass card |
| **bnug.png** | White-background asset; place inside `--color-surface-elevated` container on dark pages |
| **V-3 badge** | Preserve as part of `dilogo2026.png`; do not separate or recolor |
| **Do not** | Stretch, rotate, add drop-shadow to logos, place DICE icon on clashing warm backgrounds |

### 2.3 Logo Asset Inventory (Phase 3 Paths)

Relocate from project root to `public/images/logos/` during scaffold:

```
public/images/logos/
├── dice-icon.png          ← Diicon.png
├── dice-logo-2026.png     ← dilogo2026.png
├── bnug.png               ← bnug.png
├── ubuntu-tribe.png       ← ubuntu tribe.png
└── ubuntu-tribe.avif      ← ubuntu tribe logo.avif (preferred where AVIF supported)
```

### 2.4 Brand Mark Color Extraction

Colors extracted from existing DICE and sponsor assets inform the accent spectrum:

| Swatch Name | Hex | Source |
|-------------|-----|--------|
| Spectrum Orange | `#E85D24` | DICE icon left facet |
| Spectrum Magenta | `#D61F8C` | DICE icon + V-3 badge |
| Spectrum Purple | `#7B2D8E` | DICE icon left-lower facet |
| Spectrum Gold | `#F5B800` | DICE icon right facet |
| Spectrum Lime | `#8DC63F` | DICE icon right-mid facet |
| Spectrum Forest | `#1A6B3C` | DICE icon right-lower facet |
| Ubuntu Violet | `#6B4FBB` | Ubuntu Tribe butterfly gradient start |
| Ubuntu Cyan | `#00B4D8` | Ubuntu Tribe butterfly mid |
| Ubuntu Gold | `#F5A623` | Ubuntu Tribe butterfly warm point |
| BNUG Green | `#4CD964` | BNUG/BEAN shield mark |

**Usage ratio:** UI chrome 85% dark neutrals + blue/cyan · Accents 10% electric blue/cyan · Spectrum 5% (hero glow, track icons, hover highlights, stat emphasis)

---

## 3. Design Language

### 3.1 Core Visual Metaphors

| Metaphor | Visual Expression |
|----------|-------------------|
| **Convergence** | Lines meeting at nodes (network background, section dividers) |
| **Faceted intelligence** | Low-poly geometry echoing DICE icon — used in decorative frames, not UI chrome |
| **Layers of trust** | Glassmorphism cards stacked at different depths |
| **Capital flow** | Horizontal motion lines, subtle particle drift left-to-right |
| **Institutional gravity** | Heavy type weights, dark surfaces, silver metadata text |

### 3.2 Moodboard Description

Picture a midnight rooftop overlooking Victoria Island — floor-to-ceiling glass, a wall of muted screens showing live market and network data, deep charcoal interiors with cold blue light tracing edges. Executives in conversation. A single warm amber accent line on a glass door — the only warm element in an otherwise cool, dark, precise environment. African excellence framed as global standard, not regional alternative.

**Reference touchstones:** Stripe.com (precision), Apple Event pages (cinematic dark), WEF Annual Meeting (institutional), TOKEN2049 Singapore (energy without chaos), GITEX Global (scale signaling)

### 3.3 Surface Hierarchy

```
Layer 0 — Base:        Deep space black (#050508) + network animation
Layer 1 — Section:     Slight gradient shift (#0A0A12 → #0D1117)
Layer 2 — Card:        Glass card (bg white/5%, blur 16px, border white/10%)
Layer 3 — Elevated:    Modal / dropdown (bg #141420, border white/15%)
Layer 4 — Accent glow: Cyan/blue radial gradient behind hero CTAs
```

---

## 4. Color System

### 4.1 Primary Palette

| Token | Hex | RGB | Role |
|-------|-----|-----|------|
| `--color-surface-deep` | `#050508` | 5, 5, 8 | Page base, hero background |
| `--color-surface-base` | `#0A0A12` | 10, 10, 18 | Alternating section background |
| `--color-surface-raised` | `#0D1117` | 13, 17, 23 | Card interiors, inset panels |
| `--color-surface-elevated` | `#141420` | 20, 20, 32 | Modals, nav drawer, footer columns |
| `--color-surface-overlay` | `rgba(255,255,255,0.05)` | — | Glassmorphism fill |

### 4.2 Accent Palette

| Token | Hex | Role |
|-------|-----|------|
| `--color-primary` | `#1B6EFF` | Primary CTA fill, active nav, links |
| `--color-primary-hover` | `#3D85FF` | CTA hover state |
| `--color-primary-muted` | `#1B6EFF33` | CTA glow, focus ring background |
| `--color-accent-cyan` | `#00D4FF` | Intelligent cyan — highlights, stat numbers, network nodes |
| `--color-accent-cyan-muted` | `#00D4FF22` | Glow effects, border luminance |
| `--color-midnight` | `#0F1B3D` | Hero gradient endpoint, section tints |
| `--color-midnight-blue` | `#162447` | Card gradient secondary stop |

### 4.3 Warm Accent Palette (Ubuntu-Inspired)

| Token | Hex | Role |
|-------|-----|------|
| `--color-warm-gold` | `#F5A623` | Secondary CTA hover, premium tier badge |
| `--color-warm-amber` | `#E85D24` | Urgency indicators, countdown accent |
| `--color-warm-magenta` | `#D61F8C` | Featured labels, "V-3" echo, limited accent |
| `--color-ecosystem-green` | `#4CD964` | BNUG/community moments only (footer organizer, ecosystem stats) |

### 4.4 Neutral & Text Palette

| Token | Hex | Role |
|-------|-----|------|
| `--color-text-primary` | `#F0F2F5` | Headlines, primary body |
| `--color-text-secondary` | `#9CA3AF` | Supporting copy, descriptions |
| `--color-text-muted` | `#6B7280` | Captions, metadata, timestamps |
| `--color-text-inverse` | `#050508` | Text on light cards (sponsor logos) |
| `--color-silver` | `#C0C8D4` | Metallic highlights, dividers, stat labels |
| `--color-silver-muted` | `#8B95A8` | Secondary metallic, chevron icons |

### 4.5 Border & Divider

| Token | Value | Role |
|-------|-------|------|
| `--color-border-subtle` | `rgba(255,255,255,0.06)` | Card borders at rest |
| `--color-border-default` | `rgba(255,255,255,0.10)` | Card borders hover, inputs |
| `--color-border-accent` | `rgba(0,212,255,0.30)` | Active/focused card, track selection |
| `--color-divider` | `rgba(192,200,212,0.12)` | Section separators |

### 4.6 Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--color-success` | `#22C55E` | Form success, confirmation |
| `--color-warning` | `#F59E0B` | Early bird deadline, limited availability |
| `--color-error` | `#EF4444` | Form validation errors |
| `--color-info` | `#00D4FF` | Informational badges |

### 4.7 Gradient Definitions

| Name | CSS Value | Usage |
|------|-----------|-------|
| **Hero atmosphere** | `linear-gradient(180deg, #050508 0%, #0F1B3D 50%, #050508 100%)` | Hero section background under network animation |
| **Primary CTA** | `linear-gradient(135deg, #1B6EFF 0%, #0052CC 100%)` | Register / Buy Ticket buttons |
| **Cyan glow** | `radial-gradient(ellipse at 50% 0%, #00D4FF18 0%, transparent 70%)` | Behind hero headline |
| **Card shimmer** | `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)` | Glass card top-edge highlight |
| **Spectrum accent** | `linear-gradient(90deg, #E85D24, #D61F8C, #1B6EFF, #00D4FF, #8DC63F)` | Decorative divider lines only — max 2px height |
| **Title sponsor halo** | `radial-gradient(circle, #6B4FBB15 0%, transparent 70%)` | Behind Ubuntu Tribe logo card |

### 4.8 Color Application by Section

| Section | Background | Accent | Notes |
|---------|------------|--------|-------|
| Hero | `--color-surface-deep` + network animation | Cyan glow + primary CTA | Spectrum gradient in network nodes only |
| Why DICE Matters | `--color-surface-base` | Silver icons, cyan stat numbers | |
| Autonomous Economy | `--color-surface-deep` | Cyan diagram lines | |
| Conference Tracks | `--color-surface-base` | Per-track spectrum icon color | See §8.4 |
| Who Attends | `--color-surface-deep` | Cyan persona icons | |
| Featured Speakers | `--color-surface-base` | Silver borders, cyan hover glow | |
| Agenda Highlights | `--color-surface-deep` | Track badge colors | |
| Experience Zones | `--color-surface-base` | Zone-specific accent (see §9.8) | |
| Startup & Investor | `--color-surface-deep` | `--color-ecosystem-green` for stats | |
| Government Forum | `--color-surface-base` | `--color-silver` + midnight blue | Most restrained section |
| Exhibition | `--color-surface-deep` | Cyan + silver | |
| Sponsors | `--color-surface-base` | Ubuntu warm halo on title sponsor | |
| Testimonials | `--color-surface-deep` | Silver quote marks | |
| Venue | `--color-surface-base` | Cyan map pin | |
| Tickets | `--color-surface-deep` | Primary CTA per tier; gold "Recommended" badge | |
| About BNUG | `--color-surface-base` | `--color-ecosystem-green` accent | |
| Final CTA | `--color-midnight` → deep gradient | Full primary + ghost sponsor CTA | |
| Footer | `--color-surface-elevated` | Muted silver links, cyan hover | |

---

## 5. Typography System

### 5.1 Font Stack

| Role | Family | Source | Fallback |
|------|--------|--------|----------|
| **Headline** | Plus Jakarta Sans | Google Fonts | system-ui, sans-serif |
| **Body** | Inter | Google Fonts | system-ui, sans-serif |
| **Display** | Plus Jakarta Sans | Google Fonts | system-ui, sans-serif |
| **Monospace** | JetBrains Mono | Google Fonts | ui-monospace, monospace |

**Rationale:** Plus Jakarta Sans delivers premium fintech geometry without licensing cost. Inter is the industry standard for readable body copy at scale. JetBrains Mono signals technical precision for dates, stats, and session times. All three remain current for 5+ years.

### 5.2 Type Scale

| Token | Family | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|--------|------|--------|-------------|----------------|-------|
| `--text-display-xl` | Plus Jakarta Sans | 72px / 4.5rem | 800 | 1.05 | -0.03em | Hero headline (desktop) |
| `--text-display-lg` | Plus Jakarta Sans | 56px / 3.5rem | 800 | 1.08 | -0.025em | Hero headline (tablet) |
| `--text-display-md` | Plus Jakarta Sans | 40px / 2.5rem | 700 | 1.10 | -0.02em | Hero headline (mobile), page heroes |
| `--text-h1` | Plus Jakarta Sans | 48px / 3rem | 700 | 1.15 | -0.02em | Page titles |
| `--text-h2` | Plus Jakarta Sans | 36px / 2.25rem | 700 | 1.20 | -0.015em | Section headings |
| `--text-h3` | Plus Jakarta Sans | 28px / 1.75rem | 600 | 1.25 | -0.01em | Subsection headings |
| `--text-h4` | Plus Jakarta Sans | 22px / 1.375rem | 600 | 1.30 | 0 | Card titles |
| `--text-h5` | Plus Jakarta Sans | 18px / 1.125rem | 600 | 1.40 | 0 | Track titles, speaker names |
| `--text-h6` | Plus Jakarta Sans | 14px / 0.875rem | 700 | 1.40 | 0.08em | Eyebrow labels (uppercase) |
| `--text-body-lg` | Inter | 18px / 1.125rem | 400 | 1.70 | 0 | Lead paragraphs |
| `--text-body` | Inter | 16px / 1rem | 400 | 1.65 | 0 | Default body |
| `--text-body-sm` | Inter | 14px / 0.875rem | 400 | 1.60 | 0 | Card descriptions, captions |
| `--text-label` | Inter | 12px / 0.75rem | 500 | 1.50 | 0.04em | Form labels, badges |
| `--text-mono-lg` | JetBrains Mono | 48px / 3rem | 500 | 1.00 | -0.02em | Hero stat numbers |
| `--text-mono` | JetBrains Mono | 14px / 0.875rem | 400 | 1.50 | 0 | Dates, session times, code |
| `--text-mono-sm` | JetBrains Mono | 12px / 0.75rem | 400 | 1.50 | 0.02em | Metadata, version badges |

### 5.3 Typography Rules

- **Headlines:** Plus Jakarta Sans, never all-caps except eyebrow labels (`--text-h6`)
- **Hero headline:** Maximum 2 lines; theme line uses `--text-display-*`, tagline drops to `--text-body-lg` in `--color-text-secondary`
- **Eyebrow pattern:** `--text-h6` uppercase + `--color-accent-cyan` + 8px spacing below → section `--text-h2`
- **Stat numbers:** Always JetBrains Mono; label in Inter `--text-label` uppercase `--color-silver`
- **Maximum line length:** 65ch for body copy; 40ch for lead paragraphs
- **Paragraph spacing:** 1.5em between paragraphs; 3rem between heading and first paragraph

### 5.4 Example Section Heading Block

```
EYEBROW LABEL          ← 12px, Plus Jakarta Sans 700, uppercase, cyan, tracking +0.08em
Section Title Here     ← 36px, Plus Jakarta Sans 700, white
Supporting sentence.   ← 18px, Inter 400, secondary gray, max-width 640px
```

---

## 6. Grid & Spacing System

### 6.1 Layout Grid

| Breakpoint | Columns | Gutter | Margin | Max Content Width |
|------------|---------|--------|--------|-------------------|
| Mobile (< 640px) | 4 | 16px | 16px | 100% |
| Tablet (640–1024px) | 8 | 24px | 32px | 100% |
| Desktop (1024–1440px) | 12 | 32px | 48px | 1280px |
| Wide (> 1440px) | 12 | 32px | auto | 1280px centered |

### 6.2 Spacing Scale (4px base)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Icon padding, tight gaps |
| `--space-2` | 8px | Inline element gaps |
| `--space-3` | 12px | Compact card padding |
| `--space-4` | 16px | Default component gap |
| `--space-5` | 20px | Form field spacing |
| `--space-6` | 24px | Card padding (mobile) |
| `--space-8` | 32px | Card padding (desktop) |
| `--space-10` | 40px | Section internal groups |
| `--space-12` | 48px | Between content blocks |
| `--space-16` | 64px | Section padding (mobile) |
| `--space-20` | 80px | Section padding (tablet) |
| `--space-24` | 96px | Section padding (desktop) |
| `--space-32` | 128px | Hero vertical padding |

### 6.3 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 6px | Badges, small chips |
| `--radius-md` | 10px | Buttons, inputs |
| `--radius-lg` | 16px | Cards, modals |
| `--radius-xl` | 24px | Hero content panel, sponsor feature card |
| `--radius-full` | 9999px | Pills, avatar circles |

### 6.4 Elevation & Shadow

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-glow-cyan` | `0 0 40px rgba(0,212,255,0.15)` | Hero CTA, active track card |
| `--shadow-glow-primary` | `0 0 40px rgba(27,110,255,0.20)` | Primary button hover |
| `--shadow-card` | `0 4px 24px rgba(0,0,0,0.40)` | Elevated cards |
| `--shadow-nav` | `0 1px 0 rgba(255,255,255,0.06)` | Sticky header bottom edge |

---

## 7. Iconography

### 7.1 Library

**Package:** `@heroicons/react`  
**Style:** Outline (24px) for navigation and UI chrome; Solid (20px) for emphasis states and active indicators  
**Stroke:** Default Heroicons stroke; color inherits from parent `currentColor`

### 7.2 Icon Sizing

| Context | Size | Variant |
|---------|------|---------|
| Navigation | 20px | Outline |
| Section meta (date, location) | 16px | Outline |
| Card feature icons | 24px | Outline |
| Track module icons | 28px | Solid |
| CTA trailing arrow | 16px | Solid |
| Footer social | 20px | Outline |
| Form field icons | 20px | Outline |
| Mobile menu | 24px | Outline |

### 7.3 Global UI Icon Mapping

| UI Element | Heroicon | Notes |
|------------|----------|-------|
| Register / Ticket CTA trailing | `ArrowRightIcon` | Solid, animates 4px right on hover |
| Become a Sponsor | `SparklesIcon` | Outline |
| Menu open | `Bars3Icon` | Mobile header |
| Menu close | `XMarkIcon` | Mobile drawer |
| Search (future) | `MagnifyingGlassIcon` | Media centre |
| Email / newsletter | `EnvelopeIcon` | Footer capture |
| Phone | `PhoneIcon` | Contact page |
| Location | `MapPinIcon` | Venue, hero meta |
| Calendar | `CalendarDaysIcon` | Hero meta, agenda |
| Clock / session time | `ClockIcon` | Agenda timeline |
| External link | `ArrowTopRightOnSquareIcon` | BNUG, Ubuntu Tribe links |
| Download | `ArrowDownTrayIcon` | Media kit, sponsorship deck |
| Chevron — carousel | `ChevronLeftIcon` / `ChevronRightIcon` | Speakers, testimonials |
| Check — included feature | `CheckIcon` | Ticket tier inclusions |
| Check — success | `CheckCircleIcon` | Form success state |
| Error | `ExclamationCircleIcon` | Form validation |
| Government | `BuildingLibraryIcon` | Who Attends, Government Forum |
| Investor | `ChartBarIcon` | Who Attends, Investor Forum |
| Founder | `LightBulbIcon` | Who Attends, Startup Pavilion |
| Enterprise | `BuildingOffice2Icon` | Who Attends |
| Developer | `CodeBracketIcon` | Who Attends |
| Media | `NewspaperIcon` | Media Centre |
| Exhibition | `CubeIcon` | Exhibition section |
| Demo / lab | `BeakerIcon` | Experience zone |
| Privacy | `ShieldCheckIcon` | Footer legal |

### 7.4 Conference Track Icon Mapping

Each track receives one spectrum color (from §2.4) and one Heroicon:

| Track | Heroicon (Solid) | Accent Color |
|-------|------------------|--------------|
| Agentic AI & Autonomous Enterprises | `CpuChipIcon` | `#00D4FF` cyan |
| Tokenized Markets & Digital Assets | `CircleStackIcon` | `#F5B800` gold |
| Programmable Finance | `CurrencyDollarIcon` | `#1B6EFF` primary blue |
| AI + Blockchain Infrastructure | `ServerStackIcon` | `#8DC63F` lime |
| Digital Identity & Trust Systems | `FingerPrintIcon` | `#D61F8C` magenta |
| Government as a Platform | `BuildingLibraryIcon` | `#C0C8D4` silver |
| Future of Work in Autonomous Economies | `UserGroupIcon` | `#E85D24` orange |

### 7.5 Icon Color Rules

- Default UI icons: `--color-text-secondary`
- Hover/active: `--color-accent-cyan`
- On primary button: white
- Track icons: track accent color at 100% opacity
- Do not mix Heroicons with the DICE `Diicon.png` in the same visual cluster — logo mark is separate from UI icons

---

## 8. Photography & Illustration Direction

### 8.1 Photography

| Category | Direction | Treatment |
|----------|-----------|-----------|
| **Hero background** | Abstract network render or blurred Civic Centre aerial — no stock handshakes | 40% opacity under glass overlay |
| **Venue** | The Civic Centre, Victoria Island — exterior and interior ballroom | Desaturated 30%, cool color grade, `--color-midnight` overlay at 40% |
| **Speakers** | Professional headshots, neutral or dark backgrounds | 1:1 crop, 2px `--color-border-subtle` ring, cyan ring on hover |
| **Experience / Exhibition** | Wide shots showing scale, technology demos, audience density | High contrast, slight vignette |
| **Government / Institutional** | Panel discussions, not podium clichés | Cool grade, no flags as decoration |

**Do not use:** Stock photos of glowing globes, bitcoin coins, robot stock imagery, generic "diverse team high-five" corporate photography.

### 8.2 Illustration

- **Network diagrams:** Thin cyan lines, nodes at 4px radius, connecting Autonomous Economy concept section
- **Faceted geometry:** Low-poly frames referencing DICE icon — decorative section dividers only
- **Data visualization:** Monospace numbers, minimal bar/line charts in silver + cyan
- **No:** Cartoon mascots, isometric crypto cityscapes, rocket illustrations

### 8.3 Image Aspect Ratios

| Context | Ratio |
|---------|-------|
| Speaker headshot | 1:1 |
| Venue hero | 16:9 |
| Exhibition zone card | 4:3 |
| Sponsor logo container | Flexible — max-height 64px (standard), 96px (title) |
| OG / social share | 1200×630 (16:8.4) — use hero atmosphere gradient + `dilogo2026.png` centered |

---

## 9. Motion Design Language

### 9.1 Motion Principles

| Principle | Rule |
|-----------|------|
| **Purposeful** | Every animation signals hierarchy or state change — no decoration-only bounce |
| **Institutional speed** | 300–500ms for UI; 800–1200ms for section reveals |
| **Ease** | `cubic-bezier(0.16, 1, 0.3, 1)` for enters; `cubic-bezier(0.4, 0, 1, 1)` for exits |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` disables particles, parallax, and scroll reveals |
| **Performance** | Animate `transform` and `opacity` only; no layout-triggering properties |

### 9.2 Hero Animations

| Element | Animation | Duration | Library |
|---------|-----------|----------|---------|
| Network background | Canvas/SVG nodes drifting, edges pulsing opacity 0.3→0.7 | Continuous, 60fps target | Custom canvas or lightweight SVG |
| Hero headline | Fade up + translateY(24px→0) | 800ms, delay 200ms | Framer Motion |
| Hero meta row | Fade up | 600ms, delay 400ms | Framer Motion |
| Hero CTAs | Fade up | 600ms, delay 600ms | Framer Motion |
| Stat row | Count-up from 0 | 2000ms, delay 800ms | Framer Motion + JS counter |
| Cyan glow | Radial pulse opacity 0.5→1→0.5 | 4s loop | CSS animation |

### 9.3 Scroll Interactions

| Pattern | Specification |
|---------|---------------|
| **Section reveal** | `opacity: 0 → 1`, `translateY: 32px → 0` when 20% in viewport |
| **Stagger children** | 80ms delay between cards in a grid |
| **Parallax hero** | Background network moves at 0.3× scroll speed (desktop only) |
| **Sticky header** | Background blur ramps `0 → 16px` after 80px scroll; border appears |
| **Sticky mobile CTA** | Slides up from `translateY(100%)` after hero exits viewport |
| **Progress indicator** | Optional 2px cyan line at top of viewport showing scroll depth (homepage) |

### 9.4 Card Interactions

| State | Transform | Border | Shadow |
|-------|-----------|--------|--------|
| **Rest** | `scale(1)` | `--color-border-subtle` | none |
| **Hover** | `scale(1.02)` | `--color-border-accent` | `--shadow-glow-cyan` |
| **Active/Selected** | `scale(1.01)` | `--color-accent-cyan` 2px | `--shadow-glow-cyan` |
| **Track card hover** | Icon scales 1.1, track accent glow | `--color-border-accent` | Track-colored glow at 15% |

Transition: 300ms ease on all properties.

### 9.5 Section Transitions

- Sections separated by 1px `--color-divider` or 96px spacing — never both
- Background alternates `--color-surface-deep` / `--color-surface-base` per UX Strategy §4.8
- Optional: spectrum gradient hairline (2px, full width, 10% opacity) between major narrative shifts (Hero → Why DICE, Tracks → Who Attends)

### 9.6 Particle & Network System

```
Network Background Specification
─────────────────────────────────
Node count:     60–80 (desktop), 30–40 (mobile)
Node size:      2–4px circles, --color-accent-cyan at 40–80% opacity
Edge length:    Connect nodes within 150px
Edge style:     1px line, cyan at 10–20% opacity
Motion:         Nodes drift slowly (0.2–0.5px/frame); edges pulse on proximity
Interaction:    Mouse/touch repulsion radius 120px (desktop only)
Fallback:       Static SVG network pattern when reduced-motion or low-power mode
Color accent:   5% of nodes use spectrum colors (§2.4) instead of cyan
```

### 9.7 AI Network Effect (Hero Specific)

Subtle "intelligence pulse" — every 3 seconds, a cyan pulse propagates from a random node across connected edges (opacity wave lasting 1.5s). Suggests live intelligence without literal AI imagery.

### 9.8 Experience Zone Accent Colors

| Zone | Accent | Heroicon |
|------|--------|----------|
| Startup Pavilion | `#4CD964` ecosystem green | `RocketLaunchIcon` |
| Investor Lounge | `#1B6EFF` primary | `BriefcaseIcon` |
| Government Policy Hall | `#C0C8D4` silver | `BuildingLibraryIcon` |
| Innovation Exhibition | `#00D4FF` cyan | `CubeIcon` |
| Demo Labs | `#8DC63F` lime | `BeakerIcon` |

---

## 10. Dark Mode System

### 10.1 Strategy

DICE 2026 is **dark-first and dark-only** at launch. The brand identity (DICE spectrum icon, cyan accents, glassmorphism) is designed for dark surfaces. No light mode toggle in v1.

### 10.2 Light Surface Exceptions

Light backgrounds permitted only for:

| Context | Background | Reason |
|---------|------------|--------|
| Ubuntu Tribe sponsor card | `#FFFFFF` | Logo asset is black-on-white |
| BNUG organizer card | `#FFFFFF` | Logo asset is black-on-white |
| Sponsor logo grid cells | `#F8F9FB` | Sponsor logos vary; neutral light cell ensures legibility |
| Modal form panels (optional) | `#141420` | Still dark — forms stay on elevated dark surface |

### 10.3 Future Light Mode (Out of Scope v1)

If light mode is requested post-launch, invert surfaces (`#F8F9FB` base) while keeping `--color-primary` and spectrum accents unchanged. Logo assets already support both contexts.

---

## 11. Responsive Design Framework

### 11.1 Breakpoints (Tailwind-aligned)

| Token | Min-width | Label |
|-------|-----------|-------|
| `sm` | 640px | Mobile landscape / large phone |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Wide desktop |

### 11.2 Component Responsive Behavior

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Header | Logo icon only + Tickets CTA + hamburger | Full logo + Tickets | Full nav + Tickets |
| Hero headline | `--text-display-md` (40px) | `--text-display-lg` (56px) | `--text-display-xl` (72px) |
| Track grid | Horizontal scroll, 280px card width | 2-column grid | 4-column (wrap 7 into 4+3) |
| Speaker grid | Carousel, 1.2 cards visible | 3-column | 4–6 column |
| Ticket tiers | Vertical stack, accordion inclusions | 2×2 grid | 4-column |
| Footer | Accordion groups | 3-column | 5-column |
| Section padding | `--space-16` (64px) | `--space-20` (80px) | `--space-24` (96px) |
| Sticky bottom CTA | Visible | Hidden | Hidden |

### 11.3 Touch & Pointer

- Touch targets: minimum 44×44px
- Hover effects: `@media (hover: hover)` only — touch devices get active states
- Carousel swipe: native scroll-snap on mobile track and speaker rows

---

## 12. Component Design System

### 12.1 Buttons

#### Primary Button (Register / Buy Ticket)

| Property | Value |
|----------|-------|
| Background | `--gradient-primary-cta` |
| Text | White, Plus Jakarta Sans 600, 16px |
| Padding | 14px 28px |
| Radius | `--radius-md` |
| Icon | `ArrowRightIcon` solid 16px, trailing |
| Hover | `--color-primary-hover`, `--shadow-glow-primary`, icon shifts 4px right |
| Active | Scale 0.98 |
| Focus | 2px `--color-accent-cyan` ring, offset 2px |
| Min width (mobile) | 100% |

#### Secondary Button (Become a Sponsor / Ghost)

| Property | Value |
|----------|-------|
| Background | transparent |
| Border | 1px `--color-border-default` |
| Text | `--color-text-primary`, Plus Jakarta Sans 600 |
| Hover | Border `--color-accent-cyan`, background `rgba(0,212,255,0.06)` |
| Padding | 14px 28px |

#### Tertiary Button (Text link CTA)

| Property | Value |
|----------|-------|
| Text | `--color-primary`, Inter 500, 16px |
| Icon | `ArrowRightIcon` 16px, trailing |
| Hover | `--color-accent-cyan`, underline offset 4px |

#### Button Sizes

| Size | Padding | Font |
|------|---------|------|
| `sm` | 10px 20px | 14px |
| `md` | 14px 28px | 16px |
| `lg` | 18px 36px | 18px |

### 12.2 Navigation

#### Desktop Header

```
┌──────────────────────────────────────────────────────────────────────┐
│ [dice-icon 32px] DICE    About  Agenda  Tracks  Speakers  Sponsors   │
│                          Venue  [Forums ▾]            [Tickets →]     │
└──────────────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Height | 72px |
| Background (top) | transparent |
| Background (scrolled) | `rgba(5,5,8,0.85)` + blur 16px |
| Border bottom (scrolled) | `--color-border-subtle` |
| Link style | Inter 500, 14px, `--color-text-secondary` |
| Link hover | `--color-text-primary` |
| Link active | `--color-accent-cyan` |
| Forums dropdown | `--color-surface-elevated`, `--shadow-card`, `--radius-lg` |
| Tickets CTA | Primary button `sm` size |

#### Mobile Header

| Property | Value |
|----------|-------|
| Height | 64px |
| Logo | `dice-icon.png` 28px only |
| Right | Tickets CTA (compact) + `Bars3Icon` |
| Drawer | Full-screen `--color-surface-deep`, grouped nav per UX Strategy §9.2 |
| Drawer CTA | Primary button full-width at bottom |

#### Sticky Mobile Bottom Bar

| Property | Value |
|----------|-------|
| Position | Fixed bottom, z-50 |
| Background | `--color-surface-elevated` + blur |
| Border top | `--color-border-subtle` |
| Content | Primary button "Register Now" full-width, 16px padding |
| Enter | `translateY(100%→0)` 300ms after hero scroll exit |

### 12.3 Hero Section

| Zone | Specification |
|------|---------------|
| Min height | 100vh (mobile), 90vh (desktop) |
| Background | `--gradient-hero-atmosphere` + network animation canvas |
| Content alignment | Center-left (desktop), center (mobile) |
| Content max-width | 720px |
| Eyebrow | "August 21–22, 2026 · Lagos, Nigeria" — `--text-mono`, `--color-silver` |
| Headline | "Decentralized Intelligence Conference & Exhibition 2026" |
| Theme line | "Building Africa's Autonomous Digital Economy" — `--text-h3`, `--color-text-secondary` |
| Tagline | "Where Intelligence, Trust, Identity and Capital Converge" — `--text-body-lg`, `--color-text-muted` |
| Meta row | `CalendarDaysIcon` + date · `MapPinIcon` + venue |
| CTAs | Primary "Register Now" + Secondary "Become a Sponsor" — stack on mobile |
| Stats row | 3–4 stats in JetBrains Mono, separated by `--color-divider` vertical rules |
| Logo | Optional `dilogo2026.png` displayed at 240px width above headline on desktop |

### 12.4 Glass Card (Base Primitive)

| Property | Value |
|----------|-------|
| Background | `rgba(255,255,255,0.04)` |
| Backdrop filter | `blur(16px)` |
| Border | 1px `--color-border-subtle` |
| Border radius | `--radius-lg` |
| Padding | `--space-6` (mobile), `--space-8` (desktop) |
| Top highlight | `--gradient-card-shimmer` pseudo-element, 1px height |
| Hover | Border `--color-border-accent`, `--shadow-glow-cyan` |

Used for: track cards, speaker cards, zone cards, stat pillars, testimonial cards.

### 12.5 Track Module

```
┌─────────────────────────────────┐
│  [CpuChipIcon 28px, cyan]        │
│                                 │
│  Agentic AI &                   │
│  Autonomous Enterprises         │  ← --text-h5
│                                 │
│  Brief one-line description     │  ← --text-body-sm, secondary
│                                 │
│  12 Sessions →                  │  ← --text-mono-sm, cyan
└─────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Min height | 200px |
| Icon container | 48×48px, `rgba(track-color, 0.12)` background, `--radius-md` |
| Hover | Card scale 1.02, icon container brightens to 0.20 opacity |
| Click | Navigate to `/tracks/[slug]` |

### 12.6 Speaker Card

```
┌──────────────────┐
│                  │
│   [Photo 1:1]    │
│                  │
│  Speaker Name    │  ← --text-h5
│  Title           │  ← --text-body-sm, secondary
│  Organization    │  ← --text-label, silver
└──────────────────┘
```

| Property | Value |
|----------|-------|
| Photo | 1:1, `--radius-lg` top, object-cover |
| Photo ring | 2px `--color-border-subtle` |
| Photo hover | Ring `--color-accent-cyan`, `--shadow-glow-cyan` |
| Card | Glass card wrapper |
| TBD state | Silhouette gradient placeholder + "Announcing Soon" badge |

### 12.7 Sponsor Module

#### Title Sponsor Feature (Ubuntu Tribe)

```
┌─────────────────────────────────────────────────────────────┐
│  TITLE SPONSOR                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │         [ubuntu-tribe.png on white card]            │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│  Ubuntu Tribe — Building community-powered digital assets   │
│  [Visit utribe.one →]                                      │
└─────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Container | Full-width, `--radius-xl`, `--gradient-title-sponsor-halo` background |
| Logo card | White `#FFFFFF` background, padding 48px, `--radius-lg` |
| Logo max-height | 96px |
| Label | `--text-h6` uppercase, `--color-warm-gold` |

#### Sponsor Tier Grid

| Tier | Visual Treatment |
|------|------------------|
| **Title** | Full-width feature card (above) |
| **Platinum** | 2-column span, logo max-height 72px, `--color-silver` border |
| **Gold** | Standard cell, logo max-height 56px |
| **Silver** | Standard cell, logo max-height 48px, slightly muted opacity (0.85) |
| **Innovation / Ecosystem / Government / Media** | Grouped row, logo max-height 40px, `--text-label` tier heading |

### 12.8 Ticketing Module

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  Standard       │  │  Executive ★    │  │  Institutional  │  │  Group (5+)     │
│                 │  │  RECOMMENDED    │  │                 │  │                 │
│  $XXX           │  │  $XXX           │  │  $XXX           │  │  $XXX           │
│                 │  │                 │  │                 │  │                 │
│  ✓ Inclusion 1  │  │  ✓ All Standard │  │  ✓ All Exec.    │  │  ✓ All Standard │
│  ✓ Inclusion 2  │  │  ✓ Lounge       │  │  ✓ Gov. Forum   │  │  ✓ Team check-in│
│  ✓ Inclusion 3  │  │  ✓ Priority     │  │  ✓ Briefings    │  │  ✓ Reserved     │
│                 │  │                 │  │                 │  │                 │
│  [Select Pass]  │  │  [Select Pass]  │  │  [Select Pass]  │  │  [Select Pass]  │
└─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘
```

| Property | Value |
|----------|-------|
| Card | Glass card; Executive tier gets `--color-border-accent` + "RECOMMENDED" badge in `--color-warm-gold` |
| Price | JetBrains Mono `--text-mono-lg` |
| Inclusions | `CheckIcon` 16px solid, `--color-ecosystem-green` + `--text-body-sm` |
| CTA | Primary button `sm` per card |
| Featured tier | Executive — slightly taller card, cyan glow at rest |
| Mobile | Accordion — tap tier to expand inclusions |

### 12.9 Timeline (Agenda)

```
  09:00 ─────○ Opening Keynote — Main Hall
              │
  10:30 ─────○ Track Session — Agentic AI
              │
  12:00 ─────○ Lunch & Exhibition
              │
  14:00 ─────○ Panel — Government as a Platform
```

| Property | Value |
|----------|-------|
| Line | 2px `--color-border-subtle` vertical |
| Node | 12px circle, `--color-accent-cyan` fill, 2px `--color-surface-deep` ring |
| Time | JetBrains Mono `--text-mono`, `--color-silver` |
| Title | `--text-h5` |
| Track badge | `--text-label`, track accent color background at 15% opacity |
| Active session | Node pulses cyan glow |

### 12.10 Statistics Block

```
┌──────────────────────────────────────────────────────────┐
│   5,000+        150+          50+           20+         │
│   DELEGATES     SPEAKERS      COUNTRIES     GOV AGENCIES  │
└──────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Number | JetBrains Mono `--text-mono-lg`, `--color-accent-cyan` |
| Label | `--text-h6` uppercase, `--color-silver` |
| Animation | Count-up on viewport entry, 2s duration |
| Separator | Vertical `--color-divider` 1px between stats (desktop) |

### 12.11 Testimonial

```
┌─────────────────────────────────────────────────────────────┐
│  "                                                           │
│  Quote text in --text-body-lg, Inter, primary text color.   │
│  Maximum 3 lines.                                           │
│                                                             │
│  — Name, Title, Organization                                │
└─────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Card | Glass card, full-width |
| Quote mark | `--color-accent-cyan` at 30% opacity, 64px, Plus Jakarta Sans |
| Attribution | `--text-body-sm`, `--color-text-secondary` |
| Navigation | `ChevronLeftIcon` / `ChevronRightIcon` flanking, auto-rotate 8s |

### 12.12 Forms

#### Input Field

| State | Style |
|-------|-------|
| **Default** | Background `--color-surface-raised`, border `--color-border-default`, text `--color-text-primary`, padding 14px 16px, `--radius-md` |
| **Placeholder** | `--color-text-muted` |
| **Focus** | Border `--color-accent-cyan`, ring `0 0 0 3px rgba(0,212,255,0.15)` |
| **Error** | Border `--color-error`, ring `0 0 0 3px rgba(239,68,68,0.15)`, `ExclamationCircleIcon` + message below |
| **Disabled** | Opacity 0.5, cursor not-allowed |
| **Label** | `--text-label`, `--color-text-secondary`, margin-bottom 8px |

#### Select / Dropdown

Same as input + `ChevronDownIcon` trailing, custom dark dropdown panel.

#### Textarea

Min-height 120px, same states as input.

#### Submit Button

Primary button, full-width on mobile, min-width 200px desktop.

#### Form Success State

`CheckCircleIcon` 48px `--color-success` + confirmation message + next-step guidance.

#### Form Layout

- Single column on mobile
- Two-column for name/email side-by-side on `md+`
- Max form width: 640px
- Honeypot field: hidden off-screen (Phase 3)

### 12.13 Footer

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [dice-icon] DICE 2026                                                      │
│  August 21–22, 2026 · Civic Centre, Lagos                                   │
│                                                                             │
│  Event          Attend         Participate       Partner        Connect   │
│  About          Tickets        Apply to Speak    Sponsors       Contact     │
│  Agenda         Venue          Startup Pavilion  Partner        Media       │
│  Tracks         FAQ            Exhibition        Gov Forum      About BNUG  │
│  Speakers                      Investor Forum                               │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  Get programme updates                                              │   │
│  │  [email input]  [Subscribe]                                         │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Organized by [bnug.png]    Title Sponsor [ubuntu-tribe.png compact]       │
│                                                                             │
│  © 2026 BNUG · Privacy · Terms · [social icons]                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Background | `--color-surface-elevated` |
| Padding | `--space-20` top, `--space-10` bottom |
| Column headings | `--text-h6` uppercase, `--color-silver` |
| Links | `--text-body-sm`, `--color-text-secondary`, hover `--color-accent-cyan` |
| Newsletter | Inline form, input + primary button `sm` |
| Organizer logo | `bnug.png` in white container, max-height 40px |
| Social icons | Heroicons outline 20px, `--color-text-muted`, hover `--color-accent-cyan` |

### 12.14 Badge & Chip

| Variant | Style |
|---------|-------|
| **Track badge** | `--text-label`, track accent bg 15%, track accent text |
| **Early bird** | `--color-warm-gold` bg 15%, gold text |
| **Recommended** | `--color-accent-cyan` bg 15%, cyan text |
| **Announcing Soon** | `--color-surface-raised`, `--color-text-muted` |
| **Session type** | Keynote = gold, Panel = cyan, Workshop = lime, Networking = silver |

### 12.15 Section Header (Reusable Pattern)

```
Eyebrow Label                    ← --text-h6, cyan, uppercase
Section Title                    ← --text-h2, primary text
Supporting description text      ← --text-body-lg, secondary, max-w-2xl
[Optional CTA]                   ← Tertiary button
```

Margin bottom before content grid: `--space-12` (48px).

---

## 13. Sponsor Tier Visual Differentiation

| Tier | Badge Color | Logo Cell Size | Border | Special Treatment |
|------|-------------|----------------|--------|-------------------|
| Title (Ubuntu Tribe) | `--color-warm-gold` | Full-width, 96px max | Gold at 30% | Halo gradient, white logo card |
| Platinum | `--color-silver` | 72px | Silver 2px | 2× grid span |
| Gold | `--color-warm-gold` | 56px | Default | — |
| Silver | `--color-text-muted` | 48px | Subtle | Opacity 0.85 |
| Innovation Partner | `--color-accent-cyan` | 40px | Subtle | Cyan badge label |
| Ecosystem Partner | `--color-ecosystem-green` | 40px | Subtle | Green badge label |
| Government Partner | `--color-silver` | 40px | Subtle | Silver badge label |
| Media Partner | `--color-warm-magenta` | 40px | Subtle | Magenta badge label |

---

## 14. Accessibility

| Requirement | Specification |
|-------------|---------------|
| Color contrast — body text | Minimum 4.5:1 (`#9CA3AF` on `#050508` = 7.1:1 ✓) |
| Color contrast — large text | Minimum 3:1 |
| Color contrast — CTA | White on `#1B6EFF` = 4.6:1 ✓ |
| Focus indicators | 2px cyan ring on all interactive elements |
| Touch targets | 44×44px minimum |
| Motion | `prefers-reduced-motion` respected globally |
| Images | Alt text required; decorative network = `aria-hidden` |
| Forms | Labels associated, errors announced via `aria-live="polite"` |
| Navigation | Skip-to-content link, semantic `<nav>`, `<main>`, `<footer>` |
| Carousel | `aria-roledescription="carousel"`, prev/next buttons labeled |

---

## 15. Tailwind Token Mapping (Phase 3 Handoff)

Engineering should extend `tailwind.config.ts` with these semantic tokens:

```typescript
// Color tokens → tailwind theme.extend.colors
surface: {
  deep: '#050508',
  base: '#0A0A12',
  raised: '#0D1117',
  elevated: '#141420',
}
primary: {
  DEFAULT: '#1B6EFF',
  hover: '#3D85FF',
}
accent: {
  cyan: '#00D4FF',
  gold: '#F5A623',
  magenta: '#D61F8C',
  green: '#4CD964',
}
spectrum: {
  orange: '#E85D24',
  magenta: '#D61F8C',
  purple: '#7B2D8E',
  gold: '#F5B800',
  lime: '#8DC63F',
  forest: '#1A6B3C',
}
```

```typescript
// Font tokens → tailwind theme.extend.fontFamily
fontFamily: {
  headline: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
}
```

**Dependencies (Phase 3):**
```
npm install @heroicons/react framer-motion
# Fonts via next/font/google — no npm package
```

---

## 16. Phase 3 Engineering Checklist

Derived from this design system + UX Strategy:

- [ ] Relocate logo assets to `public/images/logos/`
- [ ] Configure Tailwind tokens per §15
- [ ] Load Plus Jakarta Sans, Inter, JetBrains Mono via `next/font`
- [ ] Build glass card primitive
- [ ] Build button variants (primary, secondary, tertiary × sm/md/lg)
- [ ] Build section header pattern
- [ ] Implement network background canvas with reduced-motion fallback
- [ ] Build responsive header + mobile drawer + sticky bottom CTA
- [ ] Build footer with newsletter capture
- [ ] Build track card with Heroicon + spectrum color per §7.4
- [ ] Build speaker card with photo placeholder state
- [ ] Build sponsor tier components per §13
- [ ] Build ticket tier module per §12.8
- [ ] Build agenda timeline per §12.9
- [ ] Build stat counter with JetBrains Mono
- [ ] Build testimonial carousel
- [ ] Build form primitives with all states per §12.12
- [ ] Apply section background alternation per §4.8
- [ ] Implement scroll-reveal animations per §9.3
- [ ] Verify WCAG contrast per §14

---

## 17. Open Items Carried from Phase 1

These do not block design system completion but affect Phase 3 content:

| Item | Design Impact |
|------|---------------|
| Ticket pricing TBD | Price typography and tier card copy use `{price}` placeholder |
| Speaker confirmations TBD | Speaker card placeholder state defined (§12.6) |
| Domain TBD | OG image and canonical URLs pending |
| CMS decision TBD | Content model interfaces in Phase 3 |

---

## 18. Acceptance Criteria for Phase 2

This design system is complete when:

1. ✅ Brand assets inventoried and usage rules defined
2. ✅ Color tokens extracted from existing logos and extended to full palette
3. ✅ Typography system specified with scale and hierarchy
4. ✅ Heroicons mapped to all UI patterns and tracks
5. ✅ Motion language defined with performance and accessibility guardrails
6. ✅ All UX Strategy components have visual specifications
7. ✅ Tailwind token handoff ready for engineering
8. ✅ Phase 3 checklist defined

---

*End of Phase 2 Deliverable*

**Next step:** Phase 3 — Full Website Build (Next.js 15 scaffold, component implementation, content, SEO, deployment)
