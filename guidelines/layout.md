# Layout

## App (control tower)
- Sidebar 240px navy (72px collapsed rail below 1280). Topbar 56px white. Content padding 28px. Grid gap 20px; 2:1 main : AI panel. Stat rows: 4 × 1fr.
- Breakpoints: ≥1280 full · 900–1279 collapsed rail, panels stack · <900 top nav, single column.
- Tables: header mono caps, 14px row padding (8 dense), row hover Fog, selected Orange-100.

## Marketing
- 1200px container, 48px gutters, 12 columns, 80px vertical rhythm. Hero 1.1fr : .9fr on navy; features 3-up; proof band 3-up on Fog; footer navy.

## Elevation / z-index
0 page · 1 card · 10 sticky table header · 20 topbar · 40 dropdown · 50 tooltip · 100 dialog & drawer · 200 toast.

## Text never overflows (system rule)

Base rule in `tokens/base.css`: every text element gets `overflow-wrap:anywhere; min-width:0`; headings hyphenate; media is `max-width:100%`. Then, per slot:

1. **Wrap** is the default — multi-line slots (card bodies, alerts, table text cells) simply grow.
2. **Truncate + title** for one-line slots — Topbar title, SidebarNav labels, Breadcrumb, Badge/ModeBadge/Tag, Button labels — `.aix-truncate` or the component's built-in ellipsis; always mirror the full text in `title`.
3. **Clamp** long copy in previews — `.aix-clamp-2` / `.aix-clamp-3`; the detail view shows everything.
4. **Shrink display numbers** — `font-size: clamp(min, vw, max)` (StatCard does this); mono IDs/money are `nowrap` and get a column width so the token never splits.
5. **Containers**: every flex/grid child holding text has `min-width:0`; fixed widths become `max-width` or `clamp()`; grids use `minmax(0,1fr)` and collapse to one column below 1280.
6. **Fixed canvases** (deck slides 1920×1080, mobile 390×844): budget copy — titles ≤ 60 characters, body ≤ 3 lines at the slide's type scale; slides use `text-wrap:balance` and `overflow:hidden` on the section so nothing bleeds off the frame.
7. **Never**: `white-space:nowrap` on a slot without `overflow:hidden; text-overflow:ellipsis`; hard `width` on a text box; letting a label disappear (truncate, don't hide).
