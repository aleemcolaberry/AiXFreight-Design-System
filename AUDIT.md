# Design system audit — AiXFreight v1.0.0

Date 2026-09-17 · Scope: tokens, 36 components, 6 templates, UI kit, guidelines, index.html · Method: heuristic review against the 10 UX laws in `index.html`, Nielsen's heuristics, WCAG 2.2 AA, plus a scripted scan of component source (hard-coded hex, ARIA, Esc handling, missing contracts).

## Summary

| Area | Before | After |
|---|---|---|
| Overlays close on Esc | 0 / 3 | 3 / 3 |
| Components missing `.d.ts` / `.prompt.md` | 0 | 0 |
| Dark-theme contrast failures | 6 (navy fills, warning/success fg, avatar) | 0 measured |
| Reduced-motion support | none | global `prefers-reduced-motion` |
| UI kit re-implementing primitives | tables, stats, progress | composes `Table`, `StatCard`, `Progress`, `Pagination`, `EmptyState` |
| ARIA on sortable/selectable/nav | none | `aria-sort`, `aria-selected`, `aria-current`, `aria-haspopup`, `aria-busy` |
| Loading state on primary action | guideline only | `Button loading` |
| Dev handoff artefacts | readme only | README.md, tokens.json, Tailwind preset, package.json, CONTRIBUTING, CHANGELOG, .gitignore |

## Heuristic review

**Visibility of system status** — Pass. Badge + dot, Progress in mode color, Skeleton, Toast confirmations, AI confidence %. Gap closed: Button had no loading state (now `loading`).

**Match between system and real world** — Pass. Industry mode colors (asphalt / cyan / deep blue), shipping IDs chunked, incoterms and container types as domain vocabulary.

**User control and freedom** — Pass after fixes. Undo on every AI toast; Dialog/Drawer/DropdownMenu now dismiss on Esc and scrim click; Dialog primary repeats the verb.

**Consistency and standards** — Pass. One control height scale (32/40/48), one radius scale, mono-caps labels everywhere, primary action always top-right. Fixed: UI kit hand-rolled tables and stat tiles — now composes the primitives (Jakob + Similarity).

**Error prevention** — Partial. Validation pattern documented; `Input` shows error state. Not built: inline async validation, confirm-on-destructive (DropdownMenu `danger` items should open a Dialog — documented in pattern, left to product code).

**Recognition over recall** — Pass. Persistent sidebar, breadcrumb on detail, filters as visible chips (Hick), five nav items (Miller).

**Flexibility and efficiency** — Partial. DropdownMenu supports shortcut labels but no global keyboard shortcuts; Table lacks column resize/virtualization (out of scope for a design system; note for product).

**Aesthetic and minimalist design** — Pass. Flat solids, one accent, one decorative device (RouteLine). Watch-item: AI Orange appears on both primary Button and AI Badge on the same view in the UI kit dashboard — acceptable because both are "AI/primary" semantics, but product teams should not add a third.

**Help users recognize and recover from errors** — Pass. Alert danger tone, error microcopy pattern ("what + how to fix"), EmptyState with one action.

**Help and documentation** — Pass. `.prompt.md` per component, `guidelines/*.md`, index page with rules applied.

## Accessibility (WCAG 2.2 AA)

- 1.4.3 Contrast: all light pairs listed in `a11y-contrast.html`; dark pairs in `theming.md`. Known exception: white on AI Orange 3.0:1 — restricted to ≥14px/600 button labels and display type (documented).
- 1.4.11 Non-text contrast: control borders `#8593A5` on white 3.1:1 — passes for UI components.
- 2.1.1 Keyboard: Checkbox/Switch/Card(interactive) handle Space/Enter; Esc on overlays; Tabs use native buttons (arrow-key roving not implemented — noted).
- 2.4.7 Focus visible: global `:focus-visible` ring; inputs navy ring.
- 2.5.8 Target size: 40px default, 32px dense (with 44px documented for touch; mobile template uses 48px CTA).
- 4.1.2 Name/role/value: IconButton requires `label`; roles on checkbox/switch/radio/tab/menu/dialog/progressbar; `aria-sort` / `aria-selected` / `aria-current` added.
- 2.3.3 Motion: `prefers-reduced-motion` collapses all transitions/animations.

**Open items (need product context):** focus trap inside Dialog/Drawer; arrow-key navigation in Tabs/DropdownMenu; live-region announcement for Table sort changes.

## Design-system integrity

- Tokens: 193 (light + dark scopes). No component hard-codes a *semantic* color; remaining literals are intentional inverse surfaces (Toast/Tooltip/Avatar `#0A1931`, brand hexes) and `#fff` on those surfaces.
- Every component: named export, React-only, inline styles, `.d.ts`, `.prompt.md`, specimen card. Namespace `AiXFreightDesignSystem_0c3a26`.
- Templates use inline literals by design (streaming); they mirror token values — if a token changes, grep templates for the old hex.
- Fonts load from Google Fonts; self-hosting would remove the network dependency (recommended for production — drop WOFF2 into `assets/fonts/` and swap `tokens/fonts.css` for `@font-face`).

## Dev-handoff readiness

- `README.md` (GitHub landing) — quick start, layout, non-negotiables.
- `tokens/tokens.json` — DTCG format with `aix.dark` extension per token; `tokens/tailwind.preset.js` — utilities bound to the CSS variables so theming stays in CSS.
- `package.json` exports bundle, styles, tokens, Tailwind preset; React 18 peer.
- `components/**/*.d.ts` are the API contracts to preserve when porting to another stack.
- `CONTRIBUTING.md` with PR checklist; `CHANGELOG.md`; `.gitignore`.

## AI UX review (added 2026-09-21)

Checked the AI surfaces against the six AI UX metrics (`guidelines/ai-ux.md`).

| Metric | Before | After |
|---|---|---|
| Learnability | Card title = action; no first-use guidance needed | unchanged; instrument `ai_first_apply` |
| Trust | Undo toast, threshold setting | measured per decision type; "Why this" open rate |
| User confidence | confidence % only — no evidence to inspect | `AiDisclosure` rationale; dwell + abandon in Dialog |
| Transparency | **gap** — no sources, no limits anywhere | `AiDisclosure` sources (timestamped) + limits, mandatory |
| Response satisfaction | **gap** — no feedback control | `AiFeedback` thumbs + reason chips |
| Cognitive load | three numbers rule implicit | explicit: max 3 numbers on card, ≤ 3 steps to Apply |

Wired into the UI kit (Dashboard cards, Shipment detail, AI dialog) and the mobile tracking template: every AI surface now carries cost · impact · confidence, `AiDisclosure` (sources + limits from `data.js`) and `AiFeedback`.

## Failure-state review (added 2026-09-21, v1.2.0)

Gap: the system covered success paths and single-field errors only. Closed:

| Gap | Now |
|---|---|
| No full-page error states | `ErrorPage` × 6 kinds with canonical copy |
| Per-field errors only | `FormErrorSummary` (WCAG 3.3.1, focus management) |
| Destructive confirm "left to product" | `ConfirmDialog`, mandated in `failure-states.md` |
| AI only ever succeeds | `AiFallback` × 6 withhold reasons |
| Status → color chosen per team | `SHIPMENT_STATES` fixed tones + transitions |

Still open: optimistic UI/conflicts, bulk partial failure, rate limiting, disable-vs-hide permissions, focus trap in overlays, self-hosted fonts.

## Recommendations (not done — need your input)

1. Replace authored layouts with recreations of your real pages (upload them).
2. Self-host fonts; confirm IBM Plex Sans as the body face.
3. Decide whether destructive menu items must confirm via Dialog (pattern says yes; component leaves it to product).
4. Add focus-trap + arrow-key navigation once the target framework is known (headless-ui / Radix if React).
5. Photography direction and 1–2 approved hero images.
6. Pick the analytics sink for the AI events (`ai_first_apply`, `ai_why_opened`, `ai_feedback`…) and set per-surface targets — the specimen numbers are placeholders.
