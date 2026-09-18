# AiXFreight Design System

AiXFreight is an AI-driven multimodal freight platform — land (road & rail), air and ocean, booked, tracked and rerouted by an AI copilot. Tagline from the brand kit: **"One Journey · routes inside, plane departing."** The mark is three interlocking chain links (land asphalt, priority gold, ocean blue) with a dashed gold flight path leaving the gold link.

This is the design guide. Developers should start with `README.md` (quick start, repository layout, deployment). Designers start here: **`index.html`** — the design-system landing page (foundations, ten UX laws applied, guidance, all 35 live components, six templates, light/dark toggle).

## Sources

- `uploads/AIXFreight-46c/` (zip expanded) — logo option 46c: `THEME.md` (color theme, mode-color code, typography, usage rules), `svg/` lockups + marks (light/dark, wordmark outlined), `png/` 1024px marks, lockups, app icon. This brand kit is the **only** source; no product codebase, Figma or slide decks were provided. The user mentioned already-built pages with the logo — they were not in the upload.

## Products represented

1. **AiXFreight control tower** (web app) — dashboard, shipment list, shipment detail with AI recommendation, new-quote flow. `ui_kits/aixfreight-app/`. Layouts are authored from the design system (no product source existed).
2. **Marketing site** — represented by the landing-page template.

## Content fundamentals

- **Voice**: calm operator, confident, specific. Second person ("your container"), the product speaks as "we" only in reassurance ("We'll alert you…"). The AI is referred to as "the AI copilot" / "AI recommendation" — never "our robot", never anthropomorphized with a name.
- **Casing**: display headings are set in **uppercase** via CSS (Saira Condensed) but written in sentence case in source. Body and buttons are sentence case ("Apply AI route", "Get a quote"). Mono captions/labels are uppercase with .08em tracking ("ETA 14 SEP · 09:40").
- **Numbers over adjectives**: "−4.1 days · +$1,120 · confidence 94%" rather than "much faster". Money in mono. Middle dot `·` separates facts; `→` separates origin → destination.
- **IDs are chunked** for memory (Miller): `AIX-48211`, `MSKU 482 119-0`.
- **No emoji, no exclamation marks.** Mode names lower-case in prose ("ocean", "air"), capitalized in pills.
- **AI honesty**: every AI output shows a confidence % and a cost/impact delta; actions confirm with a toast that offers Undo.
- Examples: "Switch lane 2 to air" · "Port congestion at Los Angeles adds 4.2 days." · "Tracking on plan. ETA confidence 97%." · "Not in kit — this surface was not part of the provided materials."

## Visual foundations

- **Color**: Brand Navy `#0A1931` is the ground for chrome (sidebar, hero, footer, toasts, dialogs' scrim). Content sits on Snow `#F8FAFC` with white cards. **AI Orange `#FF6B00`** is the single signature accent — one primary action per view, AI interventions, the "i" dot, active-nav bar, switch-on, radio dot. **Priority Gold `#FFAB00`** = the route path and air-priority/warning. **Mode colors** are fixed by industry convention: land asphalt `#3A4450`, air cyan `#2FA8DC`, ocean deep blue `#0F55A0`, eco teal `#0F8B8F`; on navy they step up to `#E2E8F0` / `#3FC0F0` / `#4A9BE8`. Success reuses eco teal; warning reuses gold; danger `#D63B1F` is the one added color. Never reassign mode colors or recolor orange elements.
- **Type**: Saira Condensed 700/600 uppercase for display (64/48/36/28/22), IBM Plex Sans 400/500/600 for body (17/15/13), IBM Plex Mono 500 uppercase .08em for captions, labels, IDs, money and timestamps (12/11). Display tracking −.01em. Body line-height 1.55.
- **Spacing**: 4px base — 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96. Card padding 24; control heights 32/40/48; sidebar 240; topbar 56; container 1200.
- **Radii**: 4 (badges, tooltips), 8 (controls, nav items), 12 (cards, toasts), 20 (dialogs), pill for mode badges/tags/switches — the pill echoes the chain link.
- **Cards**: white, 1px Mist `#E2E8F0` border, 12px radius, `shadow-sm`; interactive cards raise to `shadow-md` and darken the border on hover. Inverse cards are Navy-800 `#12244A` with `#1B3160` border.
- **Shadows**: navy-tinted, not black — sm `0 1px 2px rgba(10,25,49,.06)`, md `0 4px 12px …08`, lg `0 16px 40px …14`; `shadow-accent` orange glow reserved for hero CTAs.
- **Backgrounds**: flat solids only. No gradients except the `--scrim-navy` protection gradient over photography (per brand rule 3). No textures, no illustration beyond the mark; the **route motif** (dashed gold path, mode-colored dots, orange ring at AI intervention) is the one decorative device.
- **Motion**: ease-out `cubic-bezier(.2,.8,.2,1)`, 120ms hover / 200ms state / 320ms layout. Fades and color shifts; no bounces. Press state scales buttons to .98.
- **Hover**: primary darkens to `#E05E00`; ghost/secondary tint to Fog `#F1F5F9`; on navy, white at 10%. Links Ocean → Navy with underline.
- **Focus**: 3px orange ring at 35% (`--focus-ring`). Inputs focus with navy border + 12% navy ring.
- **Borders**: 1px Mist on light, `#1B3160` on navy; strong border `#8593A5` for secondary buttons and unchecked controls.
- **Transparency & blur**: only the dialog scrim (`rgba(10,25,49,.6)` + 4px blur) and inverse hovers.
- **Text never overflows**: global `overflow-wrap:anywhere; min-width:0` on text elements; one-line slots truncate with a `title`; previews clamp (`.aix-clamp-2/3`); display numbers shrink with `clamp()`; grids use `minmax(0,1fr)` and stack below 1280. Full rule in `guidelines/layout.md`.
- **Layout**: fixed 240px navy sidebar + 56px white topbar; content grid 2:1 (main table : AI panel). Marketing uses a full-width navy hero, 1200px container, 3-up feature grid.
- **Imagery**: none in the kit. If photography is added: cool, high-contrast, ports/aircraft/rail at dusk; always under a navy scrim when the logo sits on it.
- **Data viz**: mode-mix bars use mode colors; progress bars are 6px pills filled in the shipment's mode color.

## Iconography

- **Icon set**: Lucide (ISC), 24px grid, 2px round stroke — chosen because it matches the mark's geometric stroke language. A curated subset of 30 glyphs is inlined as path data in `components/core/Icon.jsx` (truck, plane, ship, train, sparkles, search, bell, chevrons, arrowRight, check, x, plus, alertTriangle, info, circleCheck, mapPin, package, layoutDashboard, route, fileText, settings, clock, dollar, leaf, menu, moreHorizontal, download, filter, user). Extend by adding path data; for more, link `https://unpkg.com/lucide-static` — **substitution flagged**: the brand kit defines no icon set.
- **Mode glyphs**: truck (land), train (rail), plane (air), ship (ocean), leaf (eco), sparkles (AI) — always inside a `ModeBadge` pill in the mode color.
- Sizes 16/18/20/22; color inherits text color; never filled, never emoji, never unicode arrows as icons (the `→` in lane text is typographic, not iconographic).
- **Logos**: `assets/logo/` — `lockup-horizontal-{light,dark}.svg` (preferred), `lockup-vertical-{light,dark}.svg`, `mark-horizontal.svg`, `mark-vertical.svg`, `mark-dark.svg`, `app-icon.svg/.png`, `lockup-footer.png`. `assets/logo.svg` = horizontal mark. Clear space ≥ one link stroke; min 24px mark height; light artwork on white, `-dark` artwork on navy.

## Components

36 components authored from brand guidelines (no source inventory). Namespace `AiXFreightDesignSystem_0c3a26`. Each has `.jsx` + `.d.ts` + `.prompt.md`; each group has a `*.card.html` specimen.

- `components/core/` — Button, IconButton, Badge, ModeBadge, Tag, Icon, Logo, RouteLine, ThemeToggle
- `components/forms/` — Input, Select, Textarea, Checkbox, Radio, Switch
- `components/navigation/` — SidebarNav, Topbar, Breadcrumb, Stepper, Pagination, DropdownMenu
- `components/feedback/` — Alert, Progress, Skeleton, EmptyState
- `components/data/` — Table, StatCard, Timeline, Avatar, Accordion
- `components/surfaces/` — Card, Tabs, Dialog, Drawer, Toast, Tooltip

**Intentional additions**: ModeBadge (the land/air/ocean/eco/AI mode code is the brand's core system), RouteLine (the brand route motif drawn from tokens), Icon (wrapper for the Lucide subset), Logo (renders the real lockup files).

## Theming

Full rules: `guidelines/theming.md`. Switch with the `ThemeToggle` component (Light · System · Dark; persists, follows OS in System) or `window.AiXTheme.set()`. Light is default. `[data-theme="dark"]` on `<html>` flips semantic aliases (surfaces to Navy/Navy-800, text to white/Steel) and steps mode colors up per THEME.md (land → #E2E8F0, air → #3FC0F0, ocean → #4A9BE8). AI Orange is identical in both. `--color-navy` stays navy in both themes; selection fills use `--fill-selected` / `--fill-selected-fg` (navy/white in light, Ocean-dark/navy in dark). Toasts and tooltips are always #0A1931. Specimen: `guidelines/theme-dark.html`; toggle on `index.html`.

## Guidance (prose)

`guidelines/accessibility.md` · `theming.md` · `motion.md` · `layout.md` · `writing.md` · `contributing.md` — with matching specimen cards (Accessibility, Interaction, Layout, Patterns, Brand groups).

## Index

- `index.html` — design-system landing page (foundations, 10 UX laws, live components, templates)
- `styles.css` → `tokens/` `fonts.css` (Google Fonts import), `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `guidelines/` — 48 specimen cards (Colors, Type, Spacing, Brand, Accessibility, Interaction, Layout, Patterns) + 5 prose docs
- `assets/logo/` — brand marks and lockups
- `components/{core,forms,navigation,feedback,data,surfaces}/` — 35 components with `.d.ts`, `.prompt.md`, and `*.card.html` per group
- `ui_kits/aixfreight-app/` — control-tower click-through (Dashboard → Shipments → Detail → New quote, AI dialog, toasts)
- `templates/` — app-shell, landing-page, data-table-page, settings-page, pitch-deck (1920×1080, 7 slide types), mobile-tracking (390×844)
- `README.md` — GitHub landing / developer quick start · `AUDIT.md` — heuristic audit · `CONTRIBUTING.md` · `CHANGELOG.md` · `package.json`
- `.github/PULL_REQUEST_TEMPLATE.md` — the pull-request checklist from `CONTRIBUTING.md`
- `tokens/tokens.json` (DTCG) · `tokens/tailwind.preset.js`
- `thumbnail.html` — homepage tile · `SKILL.md` — agent skill entry
- `DESIGN-GUIDE.md` — this file (was `readme.md` in the Claude Design project; renamed so it can sit next to `README.md` on case-insensitive filesystems)
