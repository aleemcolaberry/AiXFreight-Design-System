# Components reference

All 36 components live in `components/<group>/<Name>.jsx` with a `.d.ts` contract (the API to preserve when porting) and a `.prompt.md` usage note. Every component accepts `style` for layout-level overrides (margins, widths); never use `style` to change brand colors. Named exports; the compiled bundle exposes the same names on `window.AiXFreightDesignSystem_0c3a26`.

Contents: [core](#core) · [forms](#forms) · [navigation](#navigation) · [feedback](#feedback) · [data](#data) · [surfaces](#surfaces) · [Composition rules](#composition-rules)

## core

### Button
One `primary` (AI Orange) per view. `navy` is the strong secondary on light surfaces, `secondary`/`ghost` for the rest, `inverse` on navy surfaces, `danger` for destructive confirms. **Default variant is `primary`**, so set `variant` on every non-primary button.

```ts
variant?: 'primary' | 'navy' | 'secondary' | 'ghost' | 'danger' | 'inverse'
size?: 'sm' | 'md' | 'lg'          // 32 / 40 / 48 px
icon?: string; iconRight?: string  // Icon names
disabled?: boolean
loading?: boolean                  // spinner, aria-busy, keeps width; change label to "Saving…"
fullWidth?: boolean
onClick?: () => void
children?: ReactNode
```
```jsx
<Button icon="sparkles">Apply AI route</Button>
<Button variant="secondary" size="sm" iconRight="arrowRight">View details</Button>
<Button variant="ghost" onClick={close}>Cancel</Button>
```

### IconButton
Square icon-only button for toolbars and top bars. `label` is required for screen readers.

```ts
icon: string; label?: string       // treat label as required
size?: 'sm' | 'md' | 'lg'
variant?: 'ghost' | 'outline' | 'filled'
badge?: boolean                    // orange notification dot
inverse?: boolean                  // light glyph for navy surfaces
disabled?: boolean; onClick?: () => void
```
```jsx
<IconButton icon="bell" label="Notifications" badge />
<IconButton icon="plus" label="New shipment" variant="filled" />
```

### Badge
Mono uppercase status label. `ai` tone marks AI-generated content.

```ts
tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'ai' | 'navy'
dot?: boolean                      // leading status dot
```
```jsx
<Badge tone="success" dot>On time</Badge>
<Badge tone="ai">AI suggested</Badge>
```

### ModeBadge
Chain-link-shaped pill in the transport-mode color. This is how mode colors reach the UI; never hand-pick them.

```ts
mode: 'land' | 'rail' | 'air' | 'ocean' | 'eco' | 'ai'
label?: string                     // defaults to the mode name
inverse?: boolean                  // dark-mode color steps on navy
size?: 'sm' | 'md'
iconOnly?: boolean
```
```jsx
<ModeBadge mode="ocean" />
<ModeBadge mode="air" inverse size="sm" />
```

### Tag
Filter chip or removable tag. `selected` fills navy; `onRemove` adds an ×.

```ts
children?: ReactNode; selected?: boolean; onClick?: () => void; onRemove?: () => void
```
```jsx
<Tag selected onClick={toggle}>Ocean</Tag>
<Tag onRemove={remove}>Hamburg</Tag>
```
Known gap: with `onClick` the Tag is a `<span>` without `role="button"`, `tabIndex` or key handling, so it is mouse-only. Until the component is fixed in the design project, use `Tabs variant="pill"` for exclusive filters, or wrap a non-removable Tag in `<button type="button" style={{ all: 'unset', cursor: 'pointer' }} onClick={toggle}><Tag selected={on}>Ocean</Tag></button>` and leave `onClick` off the Tag. The remove × is already a real button.

### Icon
Stroke icon from the curated Lucide subset (24px grid, 2px round stroke). Use for every UI glyph; never emoji or unicode arrows as icons.

```ts
name: string; size?: number; color?: string; strokeWidth?: number
```
Names: `truck plane ship train sparkles search bell chevronDown chevronRight arrowRight check x plus alertTriangle info circleCheck mapPin package layoutDashboard route fileText settings clock dollar leaf menu moreHorizontal download filter user sun moon monitor`.
Mode glyphs: truck (land), train (rail), plane (air), ship (ocean), leaf (eco), sparkles (AI). Sizes 16/18/20/22; color inherits text color. To add a glyph, add its Lucide path data to `Icon.jsx` and flag it as a substitution.

```jsx
<Icon name="ship" size={20} color="var(--color-ocean)" />
```

### Logo
Renders the real lockup and mark SVGs from `assets/logo/`. `base` is the path from the page to `DS_ROOT` (or to wherever `assets/` was copied).

```ts
variant?: 'horizontal' | 'vertical' | 'mark'
inverse?: boolean                  // dark-surface artwork (*-dark.svg)
height?: number                    // default 40; minimum 24 for the mark
base?: string
```
```jsx
<Logo variant="horizontal" height={36} base="../.." />
<Logo variant="mark" inverse height={28} base="../.." />
```
Clear space at least one link stroke; prefer the horizontal lockup; vertical is for square placements.

### RouteLine
The brand's one decorative device: dashed gold path between mode-colored dots, with an optional orange AI-intervention ring. Use in shipment headers, hero units, empty states.

```ts
from?: 'land' | 'rail' | 'air' | 'ocean' | 'eco'; to?: same
progress?: number                  // 0–100 of the gold path drawn
aiAt?: number                      // 0–1 position of the orange ring
height?: number; inverse?: boolean
```
```jsx
<RouteLine from="land" to="ocean" progress={62} aiAt={0.55} />
```

### ThemeToggle
The only sanctioned theme switch. Persists to `localStorage['aix-theme']`, sets `<html data-theme>`, exposes `window.AiXTheme`.

```ts
variant?: 'segmented' | 'icon'     // segmented = Light · System · Dark; icon = sun/moon button
size?: 'sm' | 'md'; inverse?: boolean
```
```jsx
<ThemeToggle size="md" />              // settings → appearance: labelled Light · System · Dark
<ThemeToggle variant="icon" inverse /> // navy top bars
```
The default `size="sm"` segmented control shows icons only; use `size="md"` where the words Light · System · Dark should be readable. On load the helper applies the stored preference, and with nothing stored it removes any static `data-theme` attribute, so to preview dark set it after the bundle loads: `window.AiXTheme.set('dark')`, or `localStorage.setItem('aix-theme','dark')` before reload.

## forms

Every field has a visible mono-caps label (never placeholder only). Errors turn border and label danger red. Validate on blur, summarize on submit, errors inline under the field, required marked with an orange `*`.

### Input
```ts
label?: string; hint?: string; error?: string; required?: boolean
icon?: string; prefix?: string; suffix?: string
size?: 'sm' | 'md' | 'lg'; placeholder?: string; type?: string
mono?: boolean                     // IBM Plex Mono value: IDs, money, container numbers (not in the .d.ts yet)
value?: string; onChange?: (e: ChangeEvent<HTMLInputElement>) => void; disabled?: boolean
```
```jsx
<Input label="Origin port" icon="mapPin" placeholder="Shenzhen, CN" />
<Input label="Weight" suffix="kg" error="Exceeds container limit" />
<Input label="Spend cap per shipment" prefix="$" mono value="1,500" />
```

### Select
Native `<select>` styled to the field system.
```ts
label?, hint?, error?, required?, placeholder?, disabled?, size?
options: Array<string | { value: string; label: string }>
value?: string; onChange?: (value: string) => void
```
```jsx
<Select label="Mode" options={['Ocean','Air','Land']} value={mode} onChange={setMode} />
```

### Textarea
```ts
label?, hint?, error?, required?, rows?, placeholder?, disabled?
maxLength?: number                 // shows a mono counter
value?: string; defaultValue?: string; onChange?: (e) => void
```
```jsx
<Textarea label="Special instructions" maxLength={280} hint="Shared with the carrier" />
```

### Checkbox
18px navy box with optional description.
```ts
checked?: boolean; onChange?: (checked: boolean) => void
label?: string; description?: string; disabled?: boolean; indeterminate?: boolean
```
```jsx
<Checkbox checked={v} onChange={setV} label="Customs brokerage" description="Handled by AiXFreight" />
```

### Radio
Exclusive options; selected dot is AI Orange (this counts as the view's orange only if it is the focal decision).
```ts
options: Array<string | { value: string; label: string }>
value?: string; onChange?: (value: string) => void
name?: string; label?: string; direction?: 'row' | 'column'; disabled?: boolean
```
```jsx
<Radio label="Incoterm" options={['FOB','CIF','DDP']} value={v} onChange={setV} direction="row" />
```

### Switch
On = AI Orange. For instant-apply settings such as "AI auto-reroute": flipping it takes effect immediately and confirms with a `Toast` offering Undo, so do not put Switches behind a "Save changes" bar. Switch and Checkbox render a real `<label>` around the control, so always pass `label`; in a grid of controls where the column header is the visible label, add an `.aix-sr-only` class to a page stylesheet (`position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap`) and give each control a full `label` such as "Email · Delay alerts" wrapped in it.
```ts
checked?: boolean; onChange?: (checked: boolean) => void; label?: string; disabled?: boolean; size?: 'sm' | 'md'
```
```jsx
<Switch checked={auto} onChange={setAuto} label="AI auto-reroute" />
```

## navigation

### SidebarNav
The 240px navy app rail with logo, items and a footer slot. Active item gets a 3px orange inset bar.
```ts
items: Array<{ value: string; label: string; icon?: string; count?: number }>
value?: string; onChange?: (value: string) => void
base?: string                      // path to DS_ROOT for the Logo
footer?: ReactNode; collapsed?: boolean
```
```jsx
<SidebarNav base="../.." value={page} onChange={setPage}
  items={[{value:'dash',label:'Dashboard',icon:'layoutDashboard'},{value:'ship',label:'Shipments',icon:'package',count:3}]}
  footer={<AiCopilotCard />} />
```

### Topbar
56px white header: title, optional search, actions, bell, avatar. The page's primary action goes in `actions` (one orange button, top right).
```ts
title: string; breadcrumb?: ReactNode; actions?: ReactNode
search?: boolean; searchPlaceholder?: string; onSearch?: (q: string) => void
user?: { name: string; src?: string }; notifications?: boolean; themeToggle?: boolean
```
```jsx
<Topbar title="Shipments" search actions={<Button size="sm" icon="plus">New quote</Button>} user={{name:'Maya Krishnan'}} notifications themeToggle />
```

### Breadcrumb
Mono-caps trail above page titles; last item is the current page.
```ts
items: Array<string | { label: string; href?: string; onClick?: () => void }>; inverse?: boolean
```
```jsx
<Breadcrumb items={[{label:'Shipments',href:'#'},'AIX-48211']} />
```

### Stepper
Horizontal steps for multi-step flows: done = navy, current = orange. Completed steps are clickable when `onSelect` is set.
```ts
steps: Array<string | { label: string }>; current: number; onSelect?: (index: number) => void
```
```jsx
<Stepper steps={['Details','Routes','Confirm']} current={1} />
```

### Pagination
Below tables; current page navy; optional "1–20 of 128" summary.
```ts
page: number; pageCount: number; onChange?: (page: number) => void; total?: number; pageSize?: number
```
```jsx
<Pagination page={p} pageCount={7} total={128} pageSize={20} onChange={setP} />
```

### DropdownMenu
Click-to-open action menu anchored to a trigger. `'-'` inserts a divider; `danger` marks destructive items (pair them with a confirming `Dialog`).
```ts
trigger: ReactNode
items: Array<'-' | { label?: string; icon?: string; shortcut?: string; onClick?: () => void; danger?: boolean; disabled?: boolean; divider?: boolean }>
align?: 'left' | 'right'; open?: boolean; onOpenChange?: (open: boolean) => void
```
```jsx
<DropdownMenu align="right" trigger={<IconButton icon="moreHorizontal" label="Actions" />}
  items={[{label:'Share tracking',icon:'route'},{label:'Download docs',icon:'download'},'-',{label:'Cancel shipment',icon:'x',danger:true}]} />
```

## feedback

### Alert
Inline, persistent banner inside content (Toast is transient). Danger alerts render `role="alert"`.
```ts
tone?: 'info' | 'success' | 'warning' | 'danger' | 'ai'
title?: string; children?: ReactNode; action?: string; onAction?: () => void; onClose?: () => void
```
```jsx
<Alert tone="warning" title="Customs documents missing" action="Upload" onAction={upload}>Commercial invoice required before 12 Sep.</Alert>
```

### Progress
6px pill bar; `mode` colors the fill by transport mode.
```ts
value?: number; max?: number
mode?: 'land' | 'rail' | 'air' | 'ocean' | 'eco' | 'ai'; color?: string
label?: string; showValue?: boolean; size?: 'sm' | 'md' | 'lg'; indeterminate?: boolean
```
```jsx
<Progress value={62} mode="ocean" label="Journey" showValue />
<Progress indeterminate size="sm" />
```

### Skeleton
Shimmering placeholder shaped like the content it replaces. Never spin where a skeleton fits.
```ts
width?: number | string; height?: number; radius?: number; circle?: boolean; lines?: number
```
```jsx
<Skeleton lines={3} />
<Skeleton circle height={32} />
```

### EmptyState
Centered no-data / no-results / not-in-kit state with at most one action. Ring icon echoes the chain link.
```ts
icon?: string; eyebrow?: string; title: string; description?: string; action?: ReactNode; compact?: boolean
```
```jsx
<EmptyState icon="search" title="No shipments match" description="Try clearing a filter." action={<Button variant="secondary">Clear filters</Button>} />
```

## data

### Table
The shipment-list primitive: mono-caps header, hover rows, sorting, selection, sticky header. Column order convention: id → lane → mode → status → eta → value. IDs and money are `mono`.
```ts
columns: Array<{
  key: string; label: string; width?: number | string; align?: 'left' | 'right' | 'center'
  mono?: boolean; muted?: boolean; nowrap?: boolean
  maxWidth?: number | string; truncate?: boolean      // cap and ellipsize long text
  sortable?: boolean; render?: (value, row) => ReactNode
}>
rows: any[]; rowKey?: string; onRowClick?: (row) => void
sort?: { key: string; dir: 'asc' | 'desc' }; onSort?: (key: string) => void
selectable?: boolean; selected?: any[]; onSelect?: (keys: any[]) => void
dense?: boolean; emptyMessage?: string; stickyHeader?: boolean
```
```jsx
<Table rowKey="id" onRowClick={open} selectable selected={sel} onSelect={setSel}
  columns={[
    {key:'id',label:'Shipment',mono:true,nowrap:true,width:120},
    {key:'lane',label:'Lane',muted:true,maxWidth:260,truncate:true},
    {key:'mode',label:'Mode',render:m=><ModeBadge mode={m} size="sm"/>},
    {key:'status',label:'Status',render:s=><Badge tone={s.tone} dot>{s.label}</Badge>},
    {key:'eta',label:'ETA',mono:true,nowrap:true},
    {key:'value',label:'Value',mono:true,align:'right',sortable:true},
  ]} rows={rows} />
```

### StatCard
KPI tile: mono label, display number (shrinks with `clamp()`), delta badge. Maximum four in a row.
```ts
label: string; value: string | number; delta?: string
deltaTone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'ai'; hint?: string; inverse?: boolean
```
```jsx
<StatCard label="On-time rate" value="96.2%" delta="+1.4" deltaTone="success" hint="vs last 30 days" />
```

### Timeline
Shipment milestones: navy for done, orange for AI events (`ai: true`), halo on `current`.
```ts
events: Array<{ time: string; title: string; where?: string; done?: boolean; ai?: boolean; current?: boolean }>
orientation?: 'horizontal' | 'vertical'
```
```jsx
<Timeline events={[{time:'08 Sep',title:'Departed Yantian',done:true},{time:'10 Sep',title:'AI ETA revised −6h',done:true,ai:true},{time:'14 Sep',title:'Delivery',current:true}]} />
```

### Avatar
Initials in Saira Condensed on a color derived from the name, or a photo.
```ts
name: string; src?: string; size?: 'xs' | 'sm' | 'md' | 'lg'; status?: 'online' | 'busy' | 'away'
```
```jsx
<Avatar name="Maya Krishnan" size="sm" status="online" />
```

### Accordion
Progressive disclosure for FAQs, document groups, settings.
```ts
items: Array<{ title: string; eyebrow?: string; content: ReactNode }>; multiple?: boolean; defaultOpen?: number[]
```
```jsx
<Accordion items={[{eyebrow:'Docs',title:'Commercial invoice',content:<p>…</p>}]} defaultOpen={[0]} />
```

## surfaces

### Card
Default content container: 12px radius, Mist border, navy-tinted shadow. Eyebrow (mono caps) above a display title.
```ts
title?: string; eyebrow?: string; actions?: ReactNode; footer?: ReactNode; children?: ReactNode
padding?: number; inverse?: boolean; elevated?: boolean
interactive?: boolean; onClick?: () => void   // hover raises shadow, keyboard-operable
```
```jsx
<Card eyebrow="Shipment" title="AIX-48211" actions={<Badge tone="success" dot>On time</Badge>}
  footer={<Button size="sm" variant="ghost" iconRight="arrowRight">Details</Button>}>…</Card>
```
`padding` applies to header, body and footer together, so `padding={0}` on a titled card also removes the header inset. For a flush table under a title keep the default and pull the table out with negative margins: `<div style={{ margin: '0 -24px -24px' }}><Table … /></div>`. The footer is a flex row with `space-between`; give a custom footer element `width: '100%'` if it must span. Body text inside an `inverse` card should use `--text-on-inverse` / `--text-on-inverse-muted`, and mode colors on it need the `-dark` steps (see tokens.md).

### Dialog
Modal on a blurred navy scrim, for decisions. Title is the question; footer actions right-aligned with the primary last. `Esc` closes.
```ts
open?: boolean; title: string; eyebrow?: string; children?: ReactNode; footer?: ReactNode
onClose?: () => void; width?: number; inline?: boolean   // inline = no scrim, for specimens
```
```jsx
<Dialog open={open} onClose={close} eyebrow="AI recommendation · AIX-48197" title="Reroute to air?"
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button icon="sparkles" onClick={apply}>Apply</Button></>}>
  <p>Adds $1,120. Protects Friday delivery.</p>
</Dialog>
```

### Drawer
Side panel for row detail or filters without leaving the list (Dialog is for decisions).
```ts
open?: boolean; title: string; eyebrow?: string; children?: ReactNode; footer?: ReactNode
onClose?: () => void; width?: number; side?: 'left' | 'right'; inline?: boolean
```
```jsx
<Drawer open={!!row} onClose={close} eyebrow="Shipment" title={row.id} footer={<Button>Save</Button>}>…</Drawer>
```
`width` (default 440) is a max-width. On narrow screens pass `style={{ width: 'min(440px, 100vw)' }}` so the panel fills the viewport. If a `Dialog` opens on top of an open Drawer, both react to `Esc`; pass `onClose={undefined}` to the Drawer while the Dialog is open so only the Dialog closes, then restore the handler. The Drawer's scrim click also calls `onClose`, so the same guard covers accidental dismissal.

### Tabs
`underline` (default, orange indicator) for page sections; `pill` for compact segmented switches. Tabs are real buttons (Tab and Enter work); arrow-key movement is not implemented yet, which is logged as a component fix. Below 900px wrap the row in `overflow-x:auto; white-space:nowrap` so labels never wrap.
```ts
items: Array<string | { value: string; label: string; count?: number }>
value?: string; onChange?: (value: string) => void; variant?: 'underline' | 'pill'; inverse?: boolean
```
```jsx
<Tabs items={[{value:'all',label:'All',count:24},{value:'exc',label:'Exceptions',count:3}]} value={tab} onChange={setTab} />
```

### Toast
Navy notification in both themes; tone shows in the icon and left edge. `role="status"`. Position it fixed bottom-right at z-index 200 and dismiss after about 4 seconds.
```ts
tone?: 'info' | 'success' | 'warning' | 'danger' | 'ai'
title?: string; message?: string; action?: string; onAction?: () => void; onClose?: () => void
```
```jsx
<div style={{position:'fixed',right:24,bottom:24,zIndex:200}}>
  <Toast tone="ai" title="Route updated" message="3 pallets moved to air." action="Undo" onAction={undo} onClose={dismiss} />
</div>
```

### Tooltip
Navy hover label; keep content to one short line.
```ts
content: ReactNode; children?: ReactNode; placement?: 'top' | 'bottom' | 'left' | 'right'; open?: boolean
```
```jsx
<Tooltip content="Confidence 94%"><Badge tone="ai">AI</Badge></Tooltip>
```

## Composition rules

- **App frame:** `SidebarNav` (flex none) + `main` (`flex:1; min-width:0; display:flex; flex-direction:column`) containing `Topbar` (flex none) and a scrolling content div (`flex:1; overflow:auto`). See the UI kit `Shell.jsx` for a hand-rolled version and `templates/app-shell/` for the template.
- **Content grid:** `padding:28px; display:grid; gap:20px; grid-template-columns:minmax(0,2fr) minmax(0,1fr)`; stat row spans all columns with `repeat(4, minmax(0,1fr))`; below 1280 everything becomes one column and stats go 2-up.
- **AI panel:** an inverse `Card` (`inverse`) with eyebrow "AI recommendation", display title = the action, body with cost + impact + confidence in mono, and one orange `Button` "Review" that opens the `Dialog`.
- **Row actions:** `DropdownMenu` on an `IconButton icon="moreHorizontal"`; destructive items `danger` and confirmed through a `Dialog`.
- **Detail beside a list:** `Drawer` with the row's id as title and `Save`/`Close` in the footer.
- **Multi-step flow:** `Stepper` above a `Card` per step; primary "Continue" bottom right, `ghost` "Back" bottom left.
