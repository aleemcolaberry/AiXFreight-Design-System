# Contributing

- Tokens live in tokens/*.css; add a token before hard-coding a value. Dark theme overrides go in the [data-theme="dark"] block of colors.css.
- A component = Name.jsx (named export, React only, inline styles via tokens) + Name.d.ts + Name.prompt.md in one of components/{core,forms,navigation,feedback,data,surfaces}/. Add it to that group's *.card.html and to DESIGN-GUIDE.md → Components.
- Guidelines = small @dsCard HTML under guidelines/ (700 wide, ≤400 tall) + prose .md when rules need explanation.
- Templates = templates/<slug>/<Slug>.dc.html with @template first line; inline styles only.
- Before shipping: check contrast pairs, focus ring, 40px targets, one orange primary per view, mode colors unchanged.

## Pull-request checklist

- [ ] New values are tokens first (`tokens/*.css`), then mirrored to `tokens/tokens.json` / `tailwind.preset.js`
- [ ] Component has `.jsx` + `.d.ts` + `.prompt.md` and appears in its group's `*.card.html` and in `DESIGN-GUIDE.md → Components`
- [ ] Renders correctly in light and dark (`guidelines/theme-dark.html`, `theme-switch.html`)
- [ ] Contrast ≥ 4.5:1 for text (3:1 for ≥24px display); focus ring visible; icon-only controls have `label`
- [ ] Esc closes any overlay you add; Space/Enter activate custom controls
- [ ] Text never overflows: tested with a 60-char title and a 300-char body; one-line slots truncate with `title`, grids use `minmax(0,1fr)`
- [ ] One AI Orange primary per view; mode colors untouched
- [ ] `CHANGELOG.md` entry added

## Branching

`main` is releasable. Work on `feat/<name>`, `fix/<name>`. Squash-merge with a conventional-commit title (`feat(table): add aria-sort`).
