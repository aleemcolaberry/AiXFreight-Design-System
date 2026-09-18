# Page recipes and patterns

Each recipe names the layout, the components, the single orange element, the states to handle, and the copy shape. Start from the matching template in `templates/` or the UI kit in `ui_kits/aixfreight-app/` when one exists.

Contents: [App shell](#app-shell) · [Dashboard](#dashboard) · [List page](#list-page) · [Detail page](#detail-page) · [Settings / form page](#settings--form-page) · [Multi-step flow](#multi-step-flow) · [Marketing landing](#marketing-landing) · [Presentation deck](#presentation-deck) · [Mobile tracking](#mobile-tracking) · [The AI recommendation pattern](#the-ai-recommendation-pattern) · [Loading, empty, error](#loading-empty-error) · [Breakpoints and layout numbers](#breakpoints-and-layout-numbers) · [Elevation](#elevation)

## App shell

Template: `templates/app-shell/AppShell.dc.html`. Kit: `ui_kits/aixfreight-app/Shell.jsx`.

- Fixed 240px navy `SidebarNav` (pass `collapsed` for the 72px rail between 900 and 1279px). Logo at top (`inverse`), nav items with icons and optional counts, footer slot for the AI copilot card ("2 recommendations waiting. Est. savings this week: $4,320").
- Below 900px there is no sidebar: put an `IconButton icon="menu" label="Open navigation"` in the Topbar's `breadcrumb` slot and render the same `SidebarNav` inside a left `Drawer`. Drop the Topbar search and theme toggle at that width; the skill's `assets/page-starter.html` shows the `useMedia` hook that drives all three breakpoints.
- 56px white `Topbar`: page title (display, 22px, truncates with `title`), optional breadcrumb, search (`clamp(140px, 22vw, 260px)` wide), the page's one orange action, theme toggle, bell with badge, avatar.
- Content area scrolls independently: `flex:1; overflow:auto`; page padding 28px; grid gap 20px.
- Orange element: the Topbar primary action ("New quote"). If the page's focus is an AI recommendation instead, make the recommendation's "Review" button orange and demote the Topbar action to `navy`.

## Dashboard

Kit: `ui_kits/aixfreight-app/Dashboard.jsx`.

- Row 1: four `StatCard`s (`repeat(4, minmax(0,1fr))`, 16px gap): active shipments, on-time rate, exceptions, AI savings this month. Deltas use `deltaTone`.
- Row 2, 2:1 grid: left a `Card` "Shipments in motion" (eyebrow "Live") with a `Table` (id, lane, mode, status, eta) and a ghost "All shipments →" action; right one or two inverse `Card`s carrying AI recommendations (see the AI pattern).
- Orange on the dashboard: the Topbar "New quote" is the call to action and the AI cards' "Review" buttons are `navy`, as in the UI kit. On a page whose purpose is acting on the AI (Exceptions, a recommendation review), invert that: "Review" is orange and the Topbar action is `navy`.
- Row 3: "Mode mix · last 30 days" card with a stacked bar in mode colors (ocean, land, air, eco) and a mono legend.
- States: skeleton cards on load; `EmptyState` "No shipments yet" with one action "Create a quote".

## List page

Template: `templates/data-table-page/DataTablePage.dc.html`. Kit: `Shipments.jsx`.

- `Tabs` (All · In transit · Exceptions · Delivered, with counts) above filter `Tag`s (mode, origin, carrier) and a search `Input` with the `search` icon.
- `Table` with `selectable`, `stickyHeader`, sortable value/eta columns, `onRowClick` opening a `Drawer` with the shipment detail; `Pagination` below with the "1–20 of 128" summary.
- Bulk bar appears when rows are selected: count in mono + `secondary` actions; the single orange button stays "New quote" in the Topbar.
- Column recipe: `id` mono nowrap 120 · `lane` muted, `maxWidth 260 truncate` · `mode` render `ModeBadge size="sm"` · `status` render `Badge dot` · `eta` mono nowrap · `value` mono right sortable.
- States: `Skeleton lines` in the table region; `EmptyState icon="search"` "No shipments match" with "Clear filters"; `Alert tone="danger"` with a Retry action when the fetch fails.

## Detail page

Kit: `ShipmentDetail.jsx`.

- Topbar breadcrumb "Shipments → AIX-48211"; header `Card` with `RouteLine from to progress aiAt`, origin → destination in body text, `ModeBadge`, status `Badge`, ETA in mono.
- 2:1 grid: left `Tabs` (Overview · Documents · Events) switching between a `Timeline` (vertical, AI events `ai: true`), an `Accordion` of document groups, and a `Table` of events; right the AI panel and a "Details" card of mono label/value pairs (weight, incoterm, container id chunked).
- Row menu: `DropdownMenu` on `moreHorizontal` with Share tracking, Download docs, divider, Cancel shipment (`danger`, confirmed by `Dialog` titled "Cancel AIX-48211?").

## Settings / form page

Template: `templates/settings-page/SettingsPage.dc.html`.

- Two columns: a 240px section nav (Account · Notifications · AI automation · Appearance · Billing) using `Tabs variant="pill"` stacked or plain links, and a 760px (`--container-narrow`) form column.
- Each section is a `Card` with eyebrow + title and grouped fields: `Input` (`mono` for money and IDs), `Select`, `Textarea`, `Checkbox` with descriptions.
- Two commit models on one page, and each control belongs to exactly one: typed fields (account details, spend cap, thresholds) batch into the sticky save bar; `Switch`es (auto-apply reroutes, per-lane AI permission, notification channels) apply instantly and confirm with a `Toast` that offers Undo. Say which model a section uses in its eyebrow or hint so the user is never unsure whether a change is live.
- Appearance section hosts the segmented `ThemeToggle size="md"`, which is instant by nature.
- Sticky save bar at the bottom: `ghost` "Discard" left, orange "Save changes" right; the only orange call to action on the page. Fade the bar into the page with the transparent-to-`--surface-page` gradient (the one scroll mask the checker allows).
- The `templates/settings-page` file is a layout reference only: it predates these rules and still carries raw hex and an unlabelled Switch, so copy its structure, not its markup.
- Validation: on blur, inline `error` under the field, summary `Alert tone="danger"` at the top on submit, required fields marked with an orange `*` (the marker does not count as the view's orange element).

## Multi-step flow

Kit: `NewQuote.jsx` (Details → Routes → Confirm).

- `Stepper` at the top; one `Card` per step; `ghost` "Back" bottom left, orange "Continue" / "Request quotes" bottom right.
- Route step shows options as interactive `Card`s with `ModeBadge`, mono price and transit days, and an `ai` `Badge` on the AI-recommended option with cost, impact and confidence.
- Completion: return to the list and show `Toast tone="success"` "Quotes requested · 3 carriers notified. Replies in ~2 hours."

## Marketing landing

Template: `templates/landing-page/LandingPage.dc.html`. Marketing ignores the theme: navy hero, white/Fog content, navy footer.

- 1200px container, 48px gutters, 12 columns, 80px vertical rhythm.
- Hero on navy, 1.1fr : .9fr: eyebrow in mono caps gold or muted ("Land · Air · Ocean · One journey"), display-xl headline in three short lines, one paragraph, orange primary CTA with `--shadow-accent` + `inverse` secondary; right side the `mark-dark.svg` or a `RouteLine`.
- Feature trio: three `Card`s, each led by a `ModeBadge` or mode-colored `Icon` (truck, plane, ship).
- Proof band on Fog: three big mono numbers ("−4.1 days · +$1,120 · 94%").
- Footer navy with `lockup-footer.png` or the horizontal dark lockup, mono caps link groups.
- Photography, if ever added: cool, high-contrast ports/aircraft/rail at dusk, always under `--scrim-navy` when the logo sits on it.

## Presentation deck

Template: `templates/pitch-deck/PitchDeck.dc.html` (1920×1080, seven slide types: title, section header, big number, three-up, table, quote, closing). Navy/white rhythm with the route motif. Copy budget: titles ≤ 60 characters, body ≤ 3 lines; sections use `text-wrap: balance` and `overflow: hidden` so nothing bleeds off the frame.

## Mobile tracking

Template: `templates/mobile-tracking/MobileTracking.dc.html` (390×844). Navy header with `RouteLine`, ETA card (display number in mono with `clamp()`), vertical `Timeline` of milestones, an `Alert tone="ai"` for AI notices, 44px targets throughout, single column, no sidebar.

## The AI recommendation pattern

This is the product's trust model. Every place the AI proposes or does something follows the same four beats:

1. **Surface it.** Inverse `Card` or `Alert tone="ai"`: eyebrow "AI recommendation · AIX-48197", display title = the action ("Switch lane 2 to air"), one plain sentence of reasoning ("Port congestion at Los Angeles adds 4.2 days."), then cost, impact and confidence in mono (`+$1,120 · −4.1 days · Confidence 94%`). The "Review" button is the orange element.
2. **Ask.** `Dialog` with the title as the question ("Reroute to air?"), the same three numbers, `ghost` "Dismiss" and orange "Apply recommendation" (icon `sparkles`).
3. **Confirm.** `Toast tone="ai"` "Route updated · Lane 2 moved to air." with `action="Undo"`. Auto-dismiss after about 4 seconds, but Undo must be reachable while it shows.
4. **Record.** The `Timeline` gains an event with `ai: true` ("AI rerouted lane 2 to air"), and the `Badge tone="ai"` marks anything the AI generated.

Never show an AI action without its numbers, never apply without the Dialog (unless the user enabled auto-apply through a `Switch`, in which case the Toast with Undo still appears), and never name the AI or write in its first person.

## Loading, empty, error

| State | Component | Copy |
|---|---|---|
| Loading a known shape | `Skeleton` matching the shape (lines, circle, card blocks) | none |
| Loading unknown length | `Progress indeterminate size="sm"` | mono caption "Loading shipments" |
| Zero results | `EmptyState` (icon, display title, one-line fix, one action) | "No shipments match" / "Try clearing a filter." / "Clear filters" |
| Not designed yet | `EmptyState` | eyebrow "Not in kit", body "This surface was not part of the provided materials." |
| Recoverable error | `Alert tone="danger"` with `action="Retry"` | what happened + how to fix, no blame |
| Success after an action | `Toast` past-tense verb + object, Undo when reversible | "Quotes requested" |

Never a blank region and never a spinner where a skeleton fits.

## Breakpoints and layout numbers

- App: ≥1280 full sidebar and 2:1 panels · 900–1279 collapsed 72px rail, panels stack · <900 top nav, single column. Stat rows 4-up → 2-up below 1280.
- Marketing: 1200px container, 48px gutters, 12 columns, 80px section rhythm; feature and proof grids 3-up → 1-up below 900.
- Tables: header mono caps, 14px row padding (8px `dense`), row hover Fog, selected Orange-100. Below 900px wrap a multi-column `Table` in an `overflow-x: auto` container with a `min-width` around 640px so it scrolls sideways inside its card; the global wrap rule would otherwise break lane names letter by letter. Alternatively render the rows as stacked `Card`s on mobile.
- Controls: 32 / 40 / 48 px; sidebar 240; topbar 56; content padding 28; grid gap 20; card padding 24.
- Text safety: grids `minmax(0,1fr)`; flex children with text `min-width:0`; one-line slots `.aix-truncate` + `title`; previews `.aix-clamp-2/3`; display numbers `font-size: clamp(min, vw, max)`; mono IDs and money `nowrap` with a column width.
- Tab rows and filter-chip rows below 900px: wrap them in `overflow-x: auto; white-space: nowrap` so they scroll sideways. The global wrap rule otherwise splits "Critical" into "Critica / l". Never build a navigation bar out of wrapped pill labels; use the menu `IconButton` + `Drawer` pattern from the app-shell recipe.

## Elevation

0 page · 1 card · 10 sticky table header · 20 topbar · 40 dropdown · 50 tooltip · 100 dialog and drawer · 200 toast. Shadows: `--shadow-sm` at rest, `--shadow-md` on hover, `--shadow-lg` for overlays, `--shadow-accent` only on hero CTAs. Transparency and blur only on the dialog scrim (`rgba(10,25,49,.6)` + 4px blur) and inverse hovers (white at 10%).
