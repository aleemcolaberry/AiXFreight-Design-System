---
name: aixfreight-design-system
description: Build and review AiXFreight product UI with the AiXFreight design system (CSS tokens, 36 React components, 6 templates, control-tower UI kit). Use this whenever the user mentions AiXFreight, AiX, the freight control tower, shipments, quotes, routes, carriers, lanes, or asks for any page, screen, dashboard, table, form, settings page, dialog, drawer, onboarding flow, landing page, deck slide, mobile tracking view, prototype or mock for this product, even if they never say "design system". Also use it when asked to check, fix or refactor existing AiXFreight UI for brand, theming, overflow or accessibility compliance, and when porting AiXFreight components to another stack.
---

# AiXFreight design system

AiXFreight is an AI-driven multimodal freight platform: land (road and rail), air and ocean, booked, tracked and rerouted by an AI copilot. The brand promise is "one journey": calm, specific, numbers over adjectives. Every screen you build should feel like a control tower, not a marketing dashboard.

This skill turns the design system repository into working pages. Read this file fully; open the reference files only when the step you are on needs them.

## 1. Locate the design-system files

The design system is a static repo (no build step) laid out like this:

```
styles.css                 entry stylesheet: fonts + tokens + base reset
tokens/                    colors.css, typography.css, spacing.css, effects.css, base.css, tokens.json, tailwind.preset.js
components/<group>/        Name.jsx + Name.d.ts + Name.prompt.md   (core, forms, navigation, feedback, data, surfaces)
_ds_bundle.js              compiled bundle: window.AiXFreightDesignSystem_0c3a26 = { Button, Table, ... }
assets/logo/               lockup-horizontal-{light,dark}.svg, lockup-vertical-*.svg, mark-*.svg, app-icon.*
templates/<slug>/          six self-contained page templates (*.dc.html)
ui_kits/aixfreight-app/    the control-tower click-through (Shell, Dashboard, Shipments, ShipmentDetail, NewQuote)
guidelines/                48 specimen cards + accessibility.md, theming.md, motion.md, layout.md, writing.md
DESIGN-GUIDE.md            the full design guide; README.md is the developer quick start
```

Find the root by searching the project for `_ds_manifest.json` whose `namespace` is `AiXFreightDesignSystem_0c3a26`. Call that folder `DS_ROOT`. If it is not in the workspace, ask the user where the design-system repo is (GitHub: `aleemcolaberry/AiXFreight-Design-System`) or clone it next to the product repo. Never re-create tokens or components from memory when the real files are one path away; the files are the contract.

## 2. Pick the integration mode

Choose once per project and say which one you picked. Details, pitfalls and full snippets are in [references/integration.md](references/integration.md).

| Mode | When | How |
|---|---|---|
| **A. Static page / prototype** | HTML files, click-through mocks, one-off screens, anything the user will open in a browser without a bundler | `<link>` to `DS_ROOT/styles.css`, React + ReactDOM UMD from unpkg, `DS_ROOT/_ds_bundle.js`, then Babel standalone for inline JSX. Start from [assets/page-starter.html](assets/page-starter.html). Serve over HTTP; Babel cannot fetch `.jsx` from `file://`. |
| **B. React app (Vite, Next, CRA, Remix)** | The product codebase is React | Copy `tokens/`, `styles.css`, `assets/logo/` and `components/` into the app (for example `src/design-system/`), import `styles.css` once, and `import { Button } from './design-system/components/core/Button.jsx'`. Do not load `_ds_bundle.js` in a bundled app: it expects a global `React` and registers on `window`. |
| **C. Non-React stack (Vue, Svelte, Angular, plain HTML, email)** | No React available | Use `styles.css` and the tokens as-is (they are plain CSS custom properties) and port each component you need from its `.d.ts` contract and `.jsx` source. Keep prop names and variants identical so designers and developers share one vocabulary. |

Tailwind projects add `tokens/tailwind.preset.js` to `presets` in any mode; it maps utilities to the same CSS variables, so light/dark keeps working.

## 3. Build the page

Work in this order. Each step exists because skipping it is the usual way AiXFreight pages go wrong.

1. **Name the surface and its one primary action.** Every view gets exactly one AI Orange call to action: the primary button, or the AI recommendation's "Review" if the AI is the point of the screen (then the Topbar action becomes `navy`). Decide which before writing markup. `Button` defaults to `variant="primary"` (orange), so give every other button an explicit `variant` (`navy`, `secondary`, `ghost`, `danger`, `inverse`). A `Dialog` or `Drawer` covers the page and counts as its own view, so its primary button may be orange too. Orange that the system paints on its own (the SidebarNav active bar and counts, the Tabs indicator, Timeline AI dots, `ai` badges, Switch-on, Radio dots, the required `*`, the focus ring) is not a call to action and does not count.
2. **Choose a recipe.** App screens use the shell (240px navy `SidebarNav` + 56px white `Topbar` + 28px padded content grid). List pages, detail pages, settings/forms, marketing landing, decks and mobile tracking each have a recipe in [references/patterns.md](references/patterns.md). Follow the grid and breakpoints there rather than inventing a layout.
3. **Compose from components before writing custom markup.** The 36 components cover almost every control-tower need; their props are in [references/components.md](references/components.md). Custom markup is for page structure (sections, grids) and for content the components do not cover. When you do write custom elements, style them only with tokens (`var(--surface-card)`, `var(--space-6)`, `var(--radius-lg)`, ...). The full token list, with light and dark values, is in [references/tokens.md](references/tokens.md).
4. **Wire the AI pattern correctly.** Any AI recommendation shows cost, impact and confidence, opens a `Dialog` whose title is the action ("Reroute to air?"), and confirms with a `Toast` that offers Undo. This is the product's trust model, not decoration.
5. **Write the copy in the house voice** (section 6). Headings in sentence case in source (CSS uppercases display type), buttons are verb + object, labels are mono caps, numbers beat adjectives.
6. **Handle every state.** Loading uses `Skeleton` shaped like the content, zero results use `EmptyState` with one action, recoverable errors use `Alert`. Never a blank region.
7. **Check it.** Run `node <skill>/scripts/check-page.mjs <files...>` for the mechanical rules, then open the page in a browser in light and dark and at 1440, 1024 and 390 wide. To view dark, run `window.AiXTheme.set('dark')` in the console (the bundle's theme helper removes a static `data-theme` attribute at load when nothing is stored). Fix what you see before reporting done.

## 4. Non-negotiables (and why)

1. **One AI Orange call to action per view.** Orange means "the AI acted here" or "this is the one thing to do"; a second orange button makes the first one lie. Overlays (`Dialog`, `Drawer`) are their own views. Small system-drawn orange marks (active nav bar, tab indicator, AI timeline dots, `ai` badges, switch-on, radio dot, required `*`) are signals, not calls to action, and are fine. Never recolor orange elements, including the "i" dot in the logo.
2. **Mode colors are an industry code, never a palette.** land `#3A4450`, air `#2FA8DC`, ocean `#0F55A0`, eco `#0F8B8F` (they step up on navy: `#E2E8F0`, `#3FC0F0`, `#4A9BE8`, `#3FC7CB`). Success reuses eco, warning reuses gold, danger `#D63B1F` is the one added color. Use `ModeBadge`, `Progress mode=`, `RouteLine` rather than picking colors by hand.
3. **Three faces, fixed roles.** Saira Condensed 700/600 uppercase for display (64/48/36/28/22), IBM Plex Sans 400/500/600 for body (17/15/13), IBM Plex Mono 500 uppercase with `.08em` tracking for captions, labels, IDs, money and timestamps (12/11). Money and IDs are always mono.
4. **Navy chrome, snow content, flat solids.** Sidebar, hero, footer, toasts and dialog scrims are Brand Navy `#0A1931`; content sits on Snow `#F8FAFC` with white cards. No gradients except `--scrim-navy` over photography, no textures, no illustration beyond the mark and the route motif.
5. **Semantic tokens, never raw hex.** Components read `--surface-*`, `--text-*`, `--border-*`, `--fill-selected*`; those flip in dark mode. Brand primitives (`--color-navy`, `--accent`, `--color-gold`) never flip. A hard-coded `#FFFFFF` background is a dark-mode bug waiting to happen.
6. **Text never overflows.** `base.css` sets `overflow-wrap:anywhere; min-width:0` on text elements. One-line slots truncate with `.aix-truncate` and mirror the full text in `title`; previews clamp with `.aix-clamp-2/3`; grids use `minmax(0,1fr)`; flex children holding text get `min-width:0`. Never `white-space:nowrap` without `overflow:hidden; text-overflow:ellipsis`.
7. **No emoji, no exclamation marks, no "successfully".** Icons come from the Lucide subset in `Icon`. The AI is "the AI copilot" or "AI recommendation", never named or given a first person.
8. **Accessibility is part of done.** Body text contrast 4.5:1 or better, display and bold button labels 3:1. `IconButton` always gets `label`. Form fields have visible mono-caps labels, never placeholder only. `Esc` closes `Dialog`, `Drawer`, `DropdownMenu`. Focus ring is `--focus-ring`; never remove an outline without a replacement. Targets 44px on touch, 40px desktop, 32px only in dense tables and toolbars. Honor `prefers-reduced-motion` (base.css already does; keep it).

## 5. Tokens you will use constantly

Full list with dark values: [references/tokens.md](references/tokens.md).

| Need | Token |
|---|---|
| Page / card / sunken background | `--surface-page` `--surface-card` `--surface-sunken` |
| Navy surfaces (sidebar, hero, toast) and raised navy cards | `--surface-inverse` `--surface-inverse-raised` |
| Text | `--text-primary` `--text-secondary` `--text-muted` `--text-on-inverse` `--text-on-inverse-muted` `--text-link` |
| Borders | `--border-default` (Mist) `--border-strong` `--border-inverse` |
| Primary action / AI | `--accent` `--accent-hover` `--accent-soft` `--text-on-accent` |
| Selection (navy in light, ocean-dark in dark) | `--fill-selected` `--fill-selected-fg` `--fill-selected-hover` |
| Status | `--color-success(-bg)` `--color-warning(-fg,-bg)` `--color-danger(-bg)` `--color-info(-bg)` |
| Modes | `--color-land` `--color-air` `--color-ocean` `--color-eco` `--color-gold` |
| Spacing (4px base) | `--space-1..24` = 4 8 12 16 20 24 32 40 48 64 80 96 |
| Radii | `--radius-sm` 4 (badges, tooltips) `--radius-md` 8 (controls, nav items) `--radius-lg` 12 (cards, toasts) `--radius-xl` 20 (dialogs) `--radius-pill` |
| Shadows | `--shadow-sm` (cards) `--shadow-md` (hover) `--shadow-lg` (overlays) `--shadow-accent` (hero CTA only) |
| Layout | `--container-max` 1200 `--container-narrow` 760 `--sidebar-width` 240 `--topbar-height` 56 `--control-height-sm/md/lg` 32/40/48 |
| Motion | `--ease-out` with `--duration-fast` 120ms (hover) `--duration-base` 200ms (state) `--duration-slow` 320ms (layout) |
| Type | `--font-display` `--font-body` `--font-mono`; sizes `--text-display-xl..sm`, `--text-heading`, `--text-body-lg/body/body-sm`, `--text-caption`; class `.aix-caption` for mono-caps labels |

## 6. Writing the copy

Voice: calm operator. Confident, specific, quantified. Second person for the user ("your container"); "we" only in reassurance ("We'll alert you when it clears customs.").

- Headings: sentence case in source; CSS uppercases display faces. Buttons: verb + object ("Apply AI route", "Get a quote"). Labels: mono caps nouns ("ORIGIN PORT").
- Numbers beat adjectives: "−4.1 days · +$1,120 · confidence 94%". Separate facts with " · ", lanes with " → " (typographic, not an icon).
- Chunk IDs for memory: `AIX-48211`, `MSKU 482 119-0`. Mode names lower-case in prose, capitalized in pills.
- Errors: what happened + how to fix, no blame. Empty states: display title + one-line fix + one action.
- Toasts: past-tense verb + object, offer Undo ("Route updated · Undo"). Dialogs: the title is the question ("Reroute to air?"), the primary button repeats the verb ("Apply").
- Surfaces that were never designed say exactly: "Not in kit — this surface was not part of the provided materials." Do not invent brand assets that do not exist.

## 7. Component map

One line each so you can pick fast; props and examples are in [references/components.md](references/components.md).

- **core:** `Button` (6 variants, 3 sizes, `loading`) · `IconButton` (label required) · `Badge` (mono status, 7 tones) · `ModeBadge` (land/rail/air/ocean/eco/ai pill) · `Tag` (filter chip) · `Icon` (33 Lucide names) · `Logo` (real SVG lockups; set `base`) · `RouteLine` (the brand motif) · `ThemeToggle` (the only sanctioned theme switch)
- **forms:** `Input` · `Select` (native) · `Textarea` (`maxLength` counter) · `Checkbox` · `Radio` · `Switch` (instant-apply settings)
- **navigation:** `SidebarNav` (240px navy rail) · `Topbar` (56px header, one orange action) · `Breadcrumb` · `Stepper` · `Pagination` · `DropdownMenu` (`'-'` dividers, `danger` items)
- **feedback:** `Alert` (persistent, in-page) · `Progress` (mode-colored pill) · `Skeleton` · `EmptyState`
- **data:** `Table` (mono header, sort, select, truncate) · `StatCard` (KPI, max four per row) · `Timeline` (orange for AI events) · `Avatar` · `Accordion`
- **surfaces:** `Card` (eyebrow + display title) · `Dialog` (decisions) · `Drawer` (detail/edit beside a list) · `Tabs` (underline or pill) · `Toast` (always navy, transient) · `Tooltip` (one short line)

## 8. Pitfalls that cost real time

- `Button` with no `variant` is orange. In a toolbar of three buttons, two of them need `variant="secondary"` or `"ghost"`.
- `Logo` and `SidebarNav` load SVGs from `assets/logo/` relative to `base`. From a page two folders below `DS_ROOT`, pass `base="../.."`. In a React app that copied the assets, point `base` at wherever `assets/` ends up (or use the public folder path).
- `_ds_bundle.js` needs `window.React` and `window.ReactDOM` loaded first. Load order: React, ReactDOM, bundle, then Babel and your JSX.
- Babel standalone compiles `<script type="text/babel">` blocks. External `src="Page.jsx"` blocks are fetched, so the page must be served over HTTP.
- Dark mode is a user preference for the app. Marketing pages and decks are navy/white by design and ignore `data-theme`; do not add a toggle there.
- `Toast` and `Tooltip` are navy in both themes; `SidebarNav` is always navy. Do not "fix" them for dark mode.
- `Table` columns holding IDs or money get `mono: true` and usually `nowrap: true` with a `width`; long text columns get `maxWidth` + `truncate`.
- Fixed canvases (deck slides 1920×1080, mobile 390×844) need copy budgets: titles ≤ 60 characters, body ≤ 3 lines.
- z-index ladder: 0 page · 1 card · 10 sticky table header · 20 topbar · 40 dropdown · 50 tooltip · 100 dialog and drawer · 200 toast. Components already use these; custom overlays must fit between.
- Gray `#8593A5` is caption-only (mono 500, 12px+, uppercase). It fails contrast as body copy.
- On navy surfaces in the light theme, mode colors need their stepped-up values: `--color-land-dark`, `--color-air-dark`, `--color-ocean-dark`. Eco has no `-dark` token; use `#3FC7CB` (in the palette) and flag it as a token gap. Plain `--color-eco` on navy is 2.5:1.
- Stacking a `Dialog` over a `Drawer`: both listen for `Esc`, so one key press closes both. Pass `onClose={undefined}` to the Drawer while the Dialog is open (its listener is skipped when there is no handler), then restore it.
- `Card padding={0}` also zeroes the header and footer padding, so a titled card cannot hold a flush table that way. Keep the default padding and give the table wrapper `margin: '0 -24px -24px'`, or build the header yourself inside a `padding={0}` card.
- `Drawer width` is a max-width; on a 390px screen pass `style={{ width: 'min(440px, 100vw)' }}` so the panel fills the viewport instead of shrinking to its content.
- `Tag onClick` renders a `<span>` with no `role`, `tabIndex` or key handling, so clickable tags are mouse-only. For keyboard-operable exclusive filters use `Tabs variant="pill"`; for multi-select chips wrap a non-removable `Tag` in an unstyled `<button type="button">` and put the handler on the button. This is logged as a component fix for the design project.
- The responsive shell is not a component: use the `useMedia` hook in `assets/page-starter.html` (`collapsed` rail 900–1279px, menu `IconButton` + nav `Drawer` below 900px).
- White on AI Orange is 3.0:1: fine for button labels 14px/600 and display type, not for small body text. Inline orange text uses `--color-ai-orange-600` on `--accent-soft`.

## 9. Definition of done

Before you tell the user a page is finished, confirm each of these and say so in one line each:

- One orange call to action per view (overlays count separately); every other `Button` has an explicit non-primary variant.
- No raw hex outside the palette, no gradients, no emoji, no exclamation marks (run `scripts/check-page.mjs`).
- Renders in light and dark, at desktop (1440), compact (1024) and mobile (390) widths, with no clipped or overflowing text.
- Loading, empty and error states exist for every data region.
- Every `IconButton` has a `label`; every field has a visible label; `Esc` closes overlays you added.
- Copy follows section 6; IDs and money are mono.
- The AI pattern (cost + impact + confidence, Dialog, Toast with Undo) is complete wherever the AI acts.

If the request needs a component or asset the system does not have (a chart, a map, a photo), say so explicitly, build it from tokens, and flag it as a substitution so the design team can decide whether to add it to the system.
