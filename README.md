# AiXFreight Design System

Brand foundations, 36 React components, 6 page templates and a control-tower UI kit for **AiXFreight**, the AI-driven multimodal freight platform (land · air · ocean · one journey).

- **Live site:** https://aleemcolaberry.github.io/AiXFreight-Design-System/
- **Read the guides online:** https://aleemcolaberry.github.io/AiXFreight-Design-System/guide.html (this README, the design guide, every rule, the Claude Code skill and its references, in one place)
- **Design guide (the "why"):** [DESIGN-GUIDE.md](DESIGN-GUIDE.md)
- **Rules:** [guidelines/](guidelines/) · **Audit and open questions:** [AUDIT.md](AUDIT.md) · **Contributing:** [CONTRIBUTING.md](CONTRIBUTING.md) · **Changes:** [CHANGELOG.md](CHANGELOG.md)
- **Source of truth:** the Claude Design project this repo is exported from. Edit tokens, components and templates there or here, but keep the two in sync (see [Keeping in sync with Claude Design](#keeping-in-sync-with-claude-design)).

## Run it locally

There is no build step, but the pages must be served over HTTP: the UI kit compiles its `.jsx` files in the browser with Babel standalone, which cannot read them from `file://`.

```bash
# any static server works; pick one
npm start                      # npx serve on http://localhost:8080
python -m http.server 8080     # or the Python one-liner
```

Then open:

| URL | What you get |
|---|---|
| `/` | Design-system home: foundations, ten UX laws, guidance, every component live, six templates, light/dark toggle |
| `/ui_kits/aixfreight-app/` | Control-tower click-through: Dashboard → Shipments → Shipment detail → New quote |
| `/templates/<slug>/<Slug>.dc.html` | Each template standalone (app-shell, data-table-page, settings-page, landing-page, pitch-deck, mobile-tracking) |
| `/guidelines/*.html`, `/components/*/*.card.html` | Individual specimen cards |

React 18, ReactDOM and Babel standalone load from unpkg with subresource-integrity hashes; fonts load from Google Fonts. Both need network access.

## Use it in a product

### 1. Tokens and base styles (any stack)

```html
<link rel="stylesheet" href="styles.css">
```

`styles.css` imports, in order: `tokens/fonts.css` (Google Fonts), `colors.css` (light + dark), `typography.css`, `spacing.css`, `effects.css`, `base.css` (reset, overflow rules, utilities).

- CSS custom properties in `tokens/*.css` are the source of truth.
- `tokens/tokens.json` mirrors them in DTCG format (each token carries an `aix.dark` extension with its dark value) for Style Dictionary, Figma Tokens, etc.
- `tokens/tailwind.preset.js` binds Tailwind utilities to the same CSS variables, so theming stays in CSS:

```js
// tailwind.config.js
module.exports = { presets: [require("./tokens/tailwind.preset.js")], content: ["./src/**/*.{html,jsx,tsx}"] };
```

### 2. Components (React 18)

The compiled bundle exposes every component on one global. Load React first, then the bundle:

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Table, ModeBadge } = window.AiXFreightDesignSystem_0c3a26;
</script>
```

For a bundled app, `package.json` already exports `.` (bundle), `./styles.css`, `./tokens.json` and `./tailwind`; install the folder as a local dependency or copy `components/` into your tree.

- Source: `components/<group>/<Name>.jsx`. Zero dependencies, inline styles that read the CSS variables, named exports.
- Contract: `components/<group>/<Name>.d.ts`. **This is the API to preserve** when porting to Vue, Svelte, Angular or a different React setup.
- Usage notes: `components/<group>/<Name>.prompt.md`.
- Specimens: `components/<group>/<group>.card.html`.

Groups: `core` (Button, IconButton, Badge, ModeBadge, Tag, Icon, Logo, RouteLine, ThemeToggle) · `forms` (Input, Select, Textarea, Checkbox, Radio, Switch) · `navigation` (SidebarNav, Topbar, Breadcrumb, Stepper, Pagination, DropdownMenu) · `feedback` (Alert, Progress, Skeleton, EmptyState) · `data` (Table, StatCard, Timeline, Avatar, Accordion) · `surfaces` (Card, Tabs, Dialog, Drawer, Toast, Tooltip).

### 3. Theming

Light is the default. Set `<html data-theme="dark">` for dark, or omit the attribute to follow the OS. The `ThemeToggle` component (Light · System · Dark) persists the choice and `window.AiXTheme.set()` does the same programmatically. Full rules in [guidelines/theming.md](guidelines/theming.md).

### 4. Templates and the UI kit

`templates/<slug>/<Slug>.dc.html` are self-contained starting points (inline styles, `ds-base.js` + `support.js` helpers). `ui_kits/aixfreight-app/` is a working product shell composed from the components; its `data.js` holds the demo shipments.

## Non-negotiables

1. AI Orange `#FF6B00` appears once per view: the primary action or the AI's intervention. Never recolored.
2. Mode colors are fixed: land `#3A4450`, air `#2FA8DC`, ocean `#0F55A0`, eco `#0F8B8F`. Never reassigned.
3. Saira Condensed (uppercase display) · IBM Plex Sans (body) · IBM Plex Mono 500 (caps captions, IDs, money).
4. Navy chrome, snow content, flat solids. No gradients except the navy photo scrim.
5. Every AI output shows cost, impact and confidence; every AI action confirms with an undoable toast.
6. Text never overflows: wrap by default, truncate one-line slots with a `title`, clamp previews, `minmax(0,1fr)` grids.

## Repository layout

| Path | What | Edit? |
|---|---|---|
| `index.html` | Design-system home | yes |
| `styles.css` | Entry stylesheet; imports every token file | yes |
| `tokens/` | CSS tokens (light + dark), `tokens.json` (DTCG), `tailwind.preset.js` | yes, tokens first |
| `components/{core,forms,navigation,feedback,data,surfaces}/` | `.jsx` + `.d.ts` + `.prompt.md` per component, one `*.card.html` per group | yes |
| `guidelines/` | 48 specimen cards (`.html`) + prose rules (`.md`) | yes |
| `templates/` | Six standalone page/deck templates | yes |
| `ui_kits/aixfreight-app/` | Control-tower UI kit | yes |
| `assets/logo/` | Lockups, marks, app icon (SVG + PNG) | replace only with brand-approved artwork |
| `uploads/AIXFreight-46c/` | The original brand kit (logo option 46c + `THEME.md`). Kept as the provenance for every color and type decision | no |
| `DESIGN-GUIDE.md` | Context, content fundamentals, visual foundations, iconography, index | yes |
| `SKILL.md` | Agent skill entry so Claude Code or another AI pair-programmer can design with this brand | yes |
| `AUDIT.md` | Heuristic + WCAG 2.2 AA audit, what was fixed, what still needs a decision | yes |
| `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` | **Generated** by the design-system compiler from `components/` and `tokens/`. Committed so consumers need no build | **no**, regenerate |
| `.thumbnail`, `templates/*/.thumbnail`, `thumbnail.html` | Preview tiles captured by Claude Design (WebP) | no |
| `.nojekyll`, `robots.txt`, `netlify.toml`, `vercel.json`, `_headers` | Static-hosting config (see below) | as needed |
| `.github/PULL_REQUEST_TEMPLATE.md` | The PR checklist from `CONTRIBUTING.md` | as needed |

## Deployment

The repo root is the site root; nothing is compiled.

- **GitHub Pages** (current): served from `main` / root. `.nojekyll` is required because Jekyll would otherwise drop the `_ds_*` files the pages depend on.
- **Netlify / Vercel / Cloudflare Pages:** `netlify.toml`, `vercel.json` and `_headers` are already set for a no-build static deploy with long cache on `assets/` and no-cache on HTML.

## Keeping in sync with Claude Design

This repo is the unbundled export of the Claude Design project **AiXFreight Design System** (project id `0c3a2602-2be3-4b40-a77e-d0b84d31fe64`). The compiled files (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`) are produced by that project's compiler, so:

- **Changing tokens or components here** means also pushing the same edit to the design project (Claude Code's `/design-sync` skill does this file-by-file) or the next export will overwrite it.
- **Re-syncing from the design project** is a straight file copy into this tree. One gotcha: the design project holds both `README.md` and `readme.md`. This repo keeps the design guide as `DESIGN-GUIDE.md` so the two can coexist on Windows and macOS. Copy `readme.md` over `DESIGN-GUIDE.md` and leave this `README.md` alone.

## Open decisions (from AUDIT.md)

1. Replace the authored layouts with recreations of the real product pages once they are available.
2. Self-host the fonts; confirm IBM Plex Sans as the body face.
3. Decide whether destructive menu items must confirm through `Dialog` (the pattern says yes; the component leaves it to the product).
4. Add focus-trap and arrow-key navigation once the target framework is known (Headless UI or Radix if React).
5. Photography direction and one or two approved hero images.

## Building applications with the skill pack

The repo ships a Claude Code skill at [.claude/skills/aixfreight-design-system/](.claude/skills/aixfreight-design-system/). Installed, it makes Claude Code build AiXFreight screens the way this design system intends: right components, right tokens, the house voice, the AI recommendation pattern, every state handled, and a checker that catches the mechanical mistakes. This section is the developer walkthrough. The packaged copy is [aixfreight-design-system.skill](aixfreight-design-system.skill).

### 1. Install the skill (once)

| Situation | What to do |
|---|---|
| You work inside this repo | Nothing. Claude Code reads `.claude/skills/` automatically. |
| Your product has its own repo | Copy `.claude/skills/aixfreight-design-system/` into `<your-repo>/.claude/skills/` and commit it. Everyone who clones the product gets the skill. |
| You want it on every project | Copy the folder to `~/.claude/skills/aixfreight-design-system/`, or open `aixfreight-design-system.skill` in Claude and choose **Save skill**. |

Check it is active: run `claude` in the project and type `/aixfreight-design-system`. The skill's description also triggers on its own whenever a request mentions AiXFreight, the control tower, loads, shipments, quotes, carriers or any page for the product.

### 2. Put the design-system runtime where Claude can find it

The skill locates the design system by searching for `_ds_manifest.json`. Give it one of these:

- **This repo cloned next to your product**, for example `../AiXFreight-Design-System`. Good for prototypes.
- **A copy inside the product**, for example `_ds/aixfreight/` holding `styles.css`, `tokens/`, `assets/logo/` and `_ds_bundle.js` (add `components/` if you import source). This is what the reference app does. To upgrade later, replace the folder.

If neither exists, Claude asks where the design system is; tell it the path or let it clone `aleemcolaberry/AiXFreight-Design-System`.

### 3. Pick the integration mode and say it once

The skill supports three modes and asks you to choose per project:

- **A. Static page or prototype**: HTML files, React from a CDN or a vendored copy, the compiled bundle, Babel in the browser. No build tooling. Best for demos and click-throughs.
- **B. React app** (Vite, Next, Remix): copy `tokens/`, `styles.css`, `assets/logo/` and `components/` into `src/design-system/` and import components from source. Do not load the bundle in a bundled app.
- **C. Non-React stack** (Vue, Svelte, Angular, server templates): use `styles.css` and the tokens as-is, port the components you need from their `.d.ts` contracts and `.jsx` source, keep the prop names.

Tailwind works in every mode through `tokens/tailwind.preset.js`.

### 4. Ask for screens the way the skill expects

Write the brief the way a product owner would, then let the skill do the design work. Prompts that work well:

```
Build the Exceptions page for the control tower: at-risk shipments with lane, mode,
ETA and what the AI proposes, filter by mode and severity, a side panel with the
milestones, and a way to apply the AI recommendation. Static HTML prototype.
```

```
Add a Settings page to our Vite app in src/pages/Settings.jsx using the design
system in src/design-system: account, notification matrix, AI automation
controls, appearance, billing. Must work on a phone.
```

```
Review src/pages/Loads.jsx against the AiXFreight design system and fix anything
off-brand, unreadable in dark mode, or inaccessible.
```

What Claude does with the skill loaded, in order: names the view's single orange call to action, picks the matching page recipe (app shell, list, detail, settings, landing, deck, mobile), composes from the 36 components before writing custom markup, wires any AI action as cost + impact + confidence → dialog → toast with Undo, writes copy in the house voice, adds loading, empty and error states, and finishes by running the checker and viewing the page in light, dark and at 1440 / 1024 / 390 wide.

### 5. Build a whole app, not just a page

For multi-page products the pattern that worked is:

1. Write a short architecture contract first: routes, shared shell, state, and the shape of a page module. Keep it in `docs/ARCHITECTURE.md` so every page request can point at it.
2. Let Claude build the shell, router and shared pieces once.
3. Ask for one page per request (or per parallel agent), each owning exactly one file, each told to read the skill, the contract and the shared core before writing.
4. Verify with a browser-driven script that signs in and walks every route, not only by reading the code.

The reference implementation is the product app itself: [AiXFreight-UI-V02](https://github.com/aleemcolaberry/AiXFreight-UI-V02) (private). Its `docs/ARCHITECTURE.md` is the contract, `app/core.jsx` is the shared core, and every page under `app/pages/` was produced by Claude Code from the skill plus that contract. Copy its structure for the next product.

### 6. Check before you ship

Run the checker on any file you touched. It flags off-palette hex, gradients, emoji, exclamation marks, more than one orange button per view, icon buttons without labels, placeholder-only fields and unsafe `nowrap`:

```bash
node .claude/skills/aixfreight-design-system/scripts/check-page.mjs path/to/page.html
```

Then open the page in a browser in light and dark (run `window.AiXTheme.set('dark')` in the console, because the theme helper resets a static attribute at load) and at desktop, compact and phone widths. The skill's definition of done lists what to confirm.

### 7. Know the gaps

The skill documents workarounds for the component gaps found so far (keyboard support on clickable tags, Escape closing a drawer under a dialog, card padding, drawer width on phones, missing phone / mail / chat icons, no dark step for eco). They are listed under "Known issues" in [CHANGELOG.md](CHANGELOG.md) and belong to the Claude Design project, not to your app. If you hit a new one, add it there rather than patching the design system inside your product.

### Examples

Two pages built by Claude Code from the skill alone, with no hand edits, live in [examples/](examples/): an [Exceptions page](examples/exceptions.html) and a [Settings page](examples/settings.html). Both are served on the live site under `/examples/`. The root `SKILL.md` is the short entry Claude Design reads; it points at the same full skill.

## Credits

Brand kit: `uploads/AIXFreight-46c/` (logo option 46c, `THEME.md`). Fonts via Google Fonts (OFL). Icons: Lucide subset (ISC), inlined in `components/core/Icon.jsx`. Proprietary to AiXFreight; not licensed for reuse outside the product (`"license": "UNLICENSED"` in `package.json`).
