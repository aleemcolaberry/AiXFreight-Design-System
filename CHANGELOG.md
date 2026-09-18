# Changelog

## 1.0.1 — 2026-09-18

### Changed (repository handoff)
- `readme.md` (design guide) renamed to `DESIGN-GUIDE.md` so it can live next to `README.md` (developer quick start) on case-insensitive filesystems; links in `index.html`, `SKILL.md`, `CONTRIBUTING.md` and `guidelines/contributing.md` updated.
- Added GitHub-hosting files: `.nojekyll`, `.gitattributes`, `.gitignore`, `robots.txt`, `netlify.toml`, `vercel.json`, `_headers`, `.github/PULL_REQUEST_TEMPLATE.md`.
- `package.json` gains `homepage`, `repository` and an `npm start` static server. No token, component or template source changed.

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
