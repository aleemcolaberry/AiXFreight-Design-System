## What changed

<!-- One or two sentences. Link the issue or Basecamp thread if there is one. -->

## Checklist (from CONTRIBUTING.md)

- [ ] New values are tokens first (`tokens/*.css`), then mirrored to `tokens/tokens.json` / `tokens/tailwind.preset.js`
- [ ] Component has `.jsx` + `.d.ts` + `.prompt.md` and appears in its group's `*.card.html` and in `DESIGN-GUIDE.md → Components`
- [ ] Renders correctly in light and dark (`guidelines/theme-dark.html`, `guidelines/theme-switch.html`)
- [ ] Contrast ≥ 4.5:1 for text (3:1 for ≥24px display); focus ring visible; icon-only controls have `label`
- [ ] Esc closes any overlay you add; Space/Enter activate custom controls
- [ ] Text never overflows: tested with a 60-char title and a 300-char body
- [ ] One AI Orange primary per view; mode colors untouched
- [ ] `CHANGELOG.md` entry added
- [ ] Generated files (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`) were regenerated, not hand-edited

## Screenshots

<!-- Light and dark, if the change is visual. -->
