# Changelog

## 1.0.1 — 2026-09-18

### Changed (repository handoff)
- `readme.md` (design guide) renamed to `DESIGN-GUIDE.md` so it can live next to `README.md` (developer quick start) on case-insensitive filesystems; links in `index.html`, `SKILL.md`, `CONTRIBUTING.md` and `guidelines/contributing.md` updated.
- Added GitHub-hosting files: `.nojekyll`, `.gitattributes`, `.gitignore`, `robots.txt`, `netlify.toml`, `vercel.json`, `_headers`, `.github/PULL_REQUEST_TEMPLATE.md`.
- `package.json` gains `homepage`, `repository` and an `npm start` static server. No token, component or template source changed.
- Added the Claude Code skill `.claude/skills/aixfreight-design-system/` (developer workflow, component API, page recipes, page starter, `check-page.mjs`) and its packaged `aixfreight-design-system.skill`.

### Known issues (found while testing the skill; fix in the Claude Design project)
- `Tag` with `onClick` renders a `<span>` without `role="button"`, `tabIndex` or key handling, so clickable tags are not keyboard-operable.
- `Dialog` and `Drawer` both listen for `Esc`; when a Dialog opens over a Drawer one key press closes both.
- `Card padding={0}` also removes the header and footer inset, so a titled card cannot hold a flush table.
- No `--color-eco-dark` token: eco/success on a navy surface in the light theme has no stepped value (`#3FC7CB` exists only inside the dark-theme block).
- `Drawer` `width` is a max-width; on narrow viewports the panel shrinks to its content unless a `width` style is passed.
- `Tabs` has no arrow-key handling although `guidelines/accessibility.md` says arrows move within Tabs.
- `ThemeToggle`'s helper runs `apply()` at load and, with nothing stored, removes a static `<html data-theme="dark">`.
- `ThemeToggle` segmented labels only render at `size="md"`; the default `sm` is icons only (undocumented).
- `Input` accepts an undocumented `mono` prop that is missing from `Input.d.ts`.
- `templates/settings-page/SettingsPage.dc.html` uses raw hex values and an unlabelled `Switch`, and has no Appearance section.

## 1.0.0 — 2026-09-17

### Added
- Token system (light + dark, system-preference aware), fonts, base reset; `tokens.json` (DTCG) and Tailwind preset.
- 36 components in six groups with props contracts and usage prompts; specimen cards per group.
- 48 guideline cards (colors, type, spacing, brand, accessibility, interaction, layout, patterns) and prose docs (accessibility, theming, motion, layout, writing, contributing).
- Six templates: app shell, data-table page, settings page, marketing landing, presentation deck, mobile tracking.
- Control-tower UI kit (Dashboard, Shipments, Detail, New quote) composed from components.
- Design-system home (`index.html`) with the ten UX laws applied.

### Added (rule)
- "Text never overflows": global wrap rule in base.css, `.aix-truncate` / `.aix-clamp-*` utilities, ellipsis + title on all one-line component slots, fluid Toast/Tooltip/StatCard, Table `maxWidth`/`truncate` column options.

### Fixed (audit)
- Dark theme: navy fills replaced by `--fill-selected`; warning/success foregrounds tokenised; avatar fills pinned.
- Esc closes Dialog, Drawer, DropdownMenu; `aria-sort`, `aria-selected`, `aria-current`, `aria-haspopup` added; interactive Card keyboard-operable.
- Button `loading` state; `prefers-reduced-motion` honored globally.
- UI kit tables now compose `Table`, `StatCard`, `Progress`, `Pagination`, `EmptyState` instead of ad-hoc markup.
