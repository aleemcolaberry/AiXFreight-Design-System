# AIXFreight Logo — Option 46c

**One Journey · routes inside, plane departing**

## Design rationale

41c's takeoff meets the route brief: all three lanes drawn inside their links, the flight path continuing out of the gold link into the departing plane, truck and ship grounded below.

## Files

- `svg/` — vector marks, infinitely scalable. Use these as the source of truth.
- `svg/lockup-horizontal-*.svg`, `svg/lockup-vertical-*.svg` — full lockups, light + dark, **wordmark outlined to paths** (Saira Condensed 700/600 baked in — no font dependency), transparent background.
- `png/mark-*.png` — 1024px transparent-background rasters of each mark.
- `png/lockup-*.png` — the full lockups (mark + wordmark) exactly as shown on the option card, 3× resolution.
- `png/app-icon.png` — the mark on its app-tile, 1024px (store-ready shape).

## Color theme

| Hex | Role |
|---|---|
| `#0A1931` | Brand Navy — primary dark, wordmark "AiX", dark backgrounds |
| `#0F55A0` | Ocean Deep Blue — maritime mode color |
| `#3A4450` | Land Asphalt — road & rail mode color |
| `#475569` | Slate — "FREIGHT" wordmark on light |
| `#4A9BE8` | Ocean Blue (dark-mode step) — ocean elements on navy |
| `#8593A5` | Gray — dividers, small caption text |
| `#8FA3BA` | Steel — "FREIGHT" wordmark on dark |
| `#E2E8F0` | Land Asphalt (dark-mode step) — land elements on navy |
| `#FF6B00` | AI Orange — the autonomy/AI accent; the "i" dot, hubs, arrows. Never recolor. |
| `#FFAB00` | Priority Gold — air-cargo speed/priority accents |
| `#FFFFFF` | White — reversed elements on navy |

### Mode color code (industry convention)

- **Land / road & rail** — asphalt charcoal `#3A4450` (steps up to `#E2E8F0` on navy)
- **Air freight** — sky cyan `#2FA8DC` (steps up to `#3FC0F0` on navy); priority gold `#FFAB00` for expedited
- **Ocean / maritime** — deep blue `#0F55A0` (steps up to `#4A9BE8` on navy); eco teal `#0F8B8F` for green lanes
- **AI / autonomy** — orange `#FF6B00`, identical on light and dark. This is the brand’s signature accent.

## Typography

- Wordmark: **Saira Condensed** — “AiX” at 700, “FREIGHT” at 600. The “i” is always AI Orange.
- Captions / labels: **IBM Plex Mono** 500.
- Google Fonts: `https://fonts.google.com/specimen/Saira+Condensed`

```css
@import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@600;700&family=IBM+Plex+Mono:wght@500&display=swap');
```

## Usage rules

1. **Clear space**: keep at least the height of one chain link / stroke weight of empty space around the mark.
2. **Minimum size**: 24px mark height on screen; 10mm in print.
3. **Light vs dark**: use `mark-horizontal/vertical` on white or light surfaces; use the `mark-dark` version on Brand Navy `#0A1931`. Do not place the light version on photography without a scrim.
4. **Never** reorder or swap the mode colors — the land/air/ocean assignment is the system.
5. **Never** recolor the AI Orange elements or the “i” dot.
6. Prefer the horizontal lockup; the vertical lockup is for square placements (social avatars, signage).
