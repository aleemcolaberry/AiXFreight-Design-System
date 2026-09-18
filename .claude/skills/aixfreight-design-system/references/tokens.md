# Tokens reference

Source of truth: `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css`, `tokens/base.css`. `tokens/tokens.json` mirrors them in DTCG format (each color carries an `aix.dark` extension) and `tokens/tailwind.preset.js` binds Tailwind utilities to the same variables.

Contents: [Brand primitives](#brand-primitives) · [Mode colors](#mode-colors) · [Neutrals](#neutrals) · [Status](#status) · [Semantic aliases (light and dark)](#semantic-aliases) · [Typography](#typography) · [Spacing, radii, layout](#spacing-radii-layout) · [Effects and motion](#effects-and-motion) · [Base CSS and utilities](#base-css-and-utilities) · [Theme switching](#theme-switching) · [Tailwind mapping](#tailwind-mapping) · [Approved contrast pairs](#approved-contrast-pairs)

## Brand primitives

These never change between themes.

| Token | Value | Role |
|---|---|---|
| `--color-navy` | `#0A1931` | Brand Navy: chrome (sidebar, hero, footer), toasts, dialog scrim, wordmark "AiX" |
| `--color-navy-800` | `#12244A` | Raised navy surface (inverse cards) |
| `--color-navy-700` | `#1B3160` | Border on navy, sunken navy |
| `--color-ai-orange` | `#FF6B00` | AI Orange: the single signature accent, one per view |
| `--color-ai-orange-600` | `#E05E00` | Orange hover; inline orange text on light (dark: `#FF8A33`) |
| `--color-ai-orange-100` | `#FFE8D6` | Orange tint (selected table row, `ai` badge background in light) |
| `--color-gold` | `#FFAB00` | Priority Gold: route path, air-priority, warning |
| `--color-gold-100` | `#FFF1CC` | Gold tint |

## Mode colors

Industry convention. Never reassign. Dark values are the "step up on navy" from the brand kit.

| Token | Light | Dark | Mode |
|---|---|---|---|
| `--color-land` | `#3A4450` asphalt | `#E2E8F0` | land: road and rail |
| `--color-air` | `#2FA8DC` sky cyan | `#3FC0F0` | air (priority uses gold) |
| `--color-ocean` | `#0F55A0` deep blue | `#4A9BE8` | ocean / maritime |
| `--color-eco` | `#0F8B8F` teal | `#3FC7CB` | eco / green lanes; also success |
| AI | `#FF6B00` | `#FF6B00` | AI / autonomy, identical in both |

Extra primitives: `--color-land-dark #E2E8F0`, `--color-air-dark #3FC0F0`, `--color-ocean-dark #4A9BE8`, `--color-eco-100 #D5F0F0`.

On a navy surface while the page is in the light theme (an `inverse` Card, the sidebar, a hero), the base mode tokens do not step up by themselves: use `--color-land-dark`, `--color-air-dark`, `--color-ocean-dark` explicitly. There is no `--color-eco-dark`; use the literal `#3FC7CB` (it is in the palette) and flag the missing token to the design team. `ModeBadge inverse` and `RouteLine inverse` handle this for you.

## Neutrals

| Token | Value | Use |
|---|---|---|
| `--color-slate` | `#475569` | Secondary text; "FREIGHT" wordmark on light |
| `--color-gray` | `#8593A5` | Dividers, captions only (mono 500 12px+ uppercase). Not body copy |
| `--color-steel` | `#8FA3BA` | Muted text on navy; "FREIGHT" wordmark on dark |
| `--color-mist` | `#E2E8F0` | Default border (dark: `#2A4470`) |
| `--color-fog` | `#F1F5F9` | Sunken surfaces, hover tint |
| `--color-snow` | `#F8FAFC` | Page background |
| `--color-white` | `#FFFFFF` | Cards |

## Status

| Token | Light | Dark |
|---|---|---|
| `--color-success` / `-bg` | `#0F8B8F` / `#D5F0F0` | `#3FC7CB` / `#0F3A3C` |
| `--color-warning` / `-fg` / `-bg` | `#FFAB00` / `#8A5A00` / `#FFF1CC` | `#FFAB00` / `#FFC44D` / `#3D2E00` |
| `--color-danger` / `-bg` | `#D63B1F` / `#FBE1DB` | `#FF7A5C` / `#4A1A10` |
| `--color-info` / `-bg` | `#0F55A0` / `#DCE9F7` | `#4A9BE8` / `#15335F` |

Warning text always uses `--color-warning-fg` (gold itself fails contrast on light).

## Semantic aliases

Components read these. They flip under `[data-theme="dark"]` and, when no attribute is set, under `prefers-color-scheme: dark`.

| Token | Light | Dark |
|---|---|---|
| `--surface-page` | `#F8FAFC` | `#0A1931` |
| `--surface-card` | `#FFFFFF` | `#12244A` |
| `--surface-sunken` | `#F1F5F9` | `#1B3160` |
| `--surface-inverse` | `#0A1931` | `#0A1931` |
| `--surface-inverse-raised` | `#12244A` | `#1B3160` |
| `--text-primary` | `#0A1931` | `#FFFFFF` |
| `--text-secondary` | `#475569` | `#C7D2DE` |
| `--text-muted` | `#8593A5` | `#8FA3BA` |
| `--text-on-inverse` | `#FFFFFF` | `#FFFFFF` |
| `--text-on-inverse-muted` | `#8FA3BA` | `#8FA3BA` |
| `--text-on-accent` | `#FFFFFF` | `#FFFFFF` |
| `--text-link` / `-hover` | `#0F55A0` / `#0A1931` | `#4A9BE8` / `#FFFFFF` |
| `--border-default` | `#E2E8F0` | `#1B3160` |
| `--border-strong` | `#8593A5` | `#8593A5` |
| `--border-inverse` | `#1B3160` | `#2A4470` |
| `--accent` / `-hover` / `-soft` | `#FF6B00` / `#E05E00` / `#FFE8D6` | `#FF6B00` / `#E05E00` / `#4A2A10` |
| `--fill-selected` / `-fg` / `-hover` | `#0A1931` / `#FFFFFF` / `#1B3160` | `#4A9BE8` / `#0A1931` / `#6FB2F0` |
| `--focus-ring` | `0 0 0 3px rgba(255,107,0,.35)` | same |
| `--shadow-sm/md/lg` | navy-tinted (see Effects) | black, stronger |

Rules that follow: never use `--color-navy` as a background for text that is not hard-coded white; use `--fill-selected` (selection) or `--surface-inverse*` (chrome) instead. Never hard-code a surface or text hex in a component.

## Typography

| Token | Value |
|---|---|
| `--font-display` | `"Saira Condensed", system-ui, sans-serif` (uppercase via CSS on h1–h4) |
| `--font-body` | `"IBM Plex Sans", system-ui, sans-serif` |
| `--font-mono` | `"IBM Plex Mono", ui-monospace, monospace` |
| `--text-display-xl` / `--lh-display-xl` | 64px / 1 |
| `--text-display-lg` / `--lh-display-lg` | 48px / 1.05 |
| `--text-display-md` / `--lh-display-md` | 36px / 1.1 |
| `--text-display-sm` / `--lh-display-sm` | 28px / 1.15 |
| `--text-heading` / `--lh-heading` | 22px / 1.2 |
| `--text-body-lg` / `--lh-body-lg` | 17px / 1.6 |
| `--text-body` / `--lh-body` | 15px / 1.55 |
| `--text-body-sm` / `--lh-body-sm` | 13px / 1.5 |
| `--text-caption` / `--lh-caption` | 12px / 1.4 |
| `--text-caption-sm` | 11px |
| `--tracking-caption` | `.08em` (mono caps) |
| `--tracking-display` | `-.01em` |
| `--weight-display` / `-sub` / `-light` | 700 / 600 / 500 |
| `--weight-body` / `-medium` / `-semibold` | 400 / 500 / 600 |
| `--weight-mono` | 500 |

Fonts load from Google Fonts through `tokens/fonts.css` (`Saira Condensed 500/600/700`, `IBM Plex Sans 400/500/600`, `IBM Plex Mono 400/500`). Self-hosting is an open decision in `AUDIT.md`; if the product needs offline or CSP-restricted loading, download these three families and replace the `@import`.

## Spacing, radii, layout

| Token | Value |
|---|---|
| `--space-1` … `--space-24` | 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 px (keys 1 2 3 4 5 6 8 10 12 16 20 24) |
| `--radius-sm` / `-md` / `-lg` / `-xl` / `-pill` | 4 (badges, tooltips) · 8 (controls, nav items) · 12 (cards, toasts) · 20 (dialogs) · 999 (mode badges, tags, switches; echoes the chain link) |
| `--container-max` / `--container-narrow` | 1200px / 760px |
| `--sidebar-width` / `--topbar-height` | 240px / 56px |
| `--control-height-sm` / `-md` / `-lg` | 32 / 40 / 48 px |

Card anatomy: 24px padding, 12px radius, 1px Mist border, `--shadow-sm`; interactive cards go to `--shadow-md` and a darker border on hover. Inverse cards are Navy-800 with a `#1B3160` border.

## Effects and motion

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 2px rgba(10,25,49,.06)` |
| `--shadow-md` | `0 4px 12px rgba(10,25,49,.08), 0 1px 3px rgba(10,25,49,.06)` |
| `--shadow-lg` | `0 16px 40px rgba(10,25,49,.14), 0 2px 6px rgba(10,25,49,.06)` |
| `--shadow-accent` | `0 6px 20px rgba(255,107,0,.3)` (hero CTAs only) |
| `--ease-out` | `cubic-bezier(.2,.8,.2,1)` (the one curve) |
| `--ease-in-out` | `cubic-bezier(.65,0,.35,1)` (loops only: indeterminate progress, shimmer) |
| `--duration-fast` / `-base` / `-slow` | 120ms hover, focus, tooltip · 200ms state changes · 320ms layout (sidebar collapse, drawer, progress fill) |
| `--route-dash` | `8 8` (the dashed gold route path) |
| `--scrim-navy` | `linear-gradient(180deg, rgba(10,25,49,0) 0%, rgba(10,25,49,.85) 100%)`: the only permitted gradient, over photography |

Motion rules: enter = opacity 0→1 plus translateY 8→0; exit = opacity only at half duration. Buttons scale to .98 on press. Nothing bounces, overshoots or spins except the loading ring. Reduced motion drops transforms and shimmer, keeps opacity fades (base.css already forces near-zero durations).

## Base CSS and utilities

`tokens/base.css` gives you, for free:

- `box-sizing: border-box` everywhere; `color-scheme` follows the theme so native controls and scrollbars match.
- `body`: body font, 15px/1.55, `--text-primary` on `--surface-page`, antialiased.
- `h1–h4`: display face, 700, uppercase, `text-wrap: balance`, hyphenation. Write headings in sentence case; CSS does the uppercasing.
- The no-overflow rule: `overflow-wrap: anywhere; min-width: 0` on every text element, `max-width: 100%` on media, `table-layout: auto; width: 100%` on tables.
- `a`: link color with hover underline.
- `:focus-visible` uses `--focus-ring` (no outline).
- Utilities: `.aix-truncate` (one-line ellipsis; add `title`), `.aix-clamp-2`, `.aix-clamp-3`, `.aix-caption` (mono 500 12px uppercase `.08em` muted: the house label style).

## Theme switching

- Default light; `<html data-theme="dark">` explicit dark; `data-theme="light"` beats the OS; no attribute or `data-theme="auto"` follows `prefers-color-scheme`.
- Runtime API (defined by `ThemeToggle`, available as `window.AiXTheme` once the component file or bundle loads): `get()` returns `'light' | 'dark' | 'auto'` from `localStorage['aix-theme']` (default `'auto'`), `resolved()` returns the effective theme, `set(mode)` persists and applies, `apply()` re-applies. Every change dispatches an `aix-theme` window event with `{ preference, resolved }`.
- Gotcha: `apply()` runs as soon as the bundle (or `ThemeToggle.jsx`) loads. With nothing stored it removes a static `<html data-theme="dark">`, so a hard-coded attribute only survives on pages that never load the toggle. To preview or force dark, call `window.AiXTheme.set('dark')` after load, or seed `localStorage['aix-theme']`. Server-rendered apps should read that key in an inline script before paint.
- Place the toggle in `Topbar` (`themeToggle` prop) for apps or Settings → Appearance for the segmented control. Marketing pages and decks ignore the theme.
- Logo: light theme uses `lockup-*-light.svg` on white; dark theme and any navy surface use `*-dark.svg` (`Logo inverse`).

## Tailwind mapping

`tokens/tailwind.preset.js` (`presets: [require('./tokens/tailwind.preset.js')]`, `darkMode: ['selector', '[data-theme="dark"]']`):

- Colors: `navy`, `navy-800`, `navy-700`, `orange`, `orange-600`, `orange-100`, `gold`, `gold-100`, `land`, `air`, `ocean`, `eco`, `slate`, `gray`, `steel`, `mist`, `fog`, `snow`, `surface-page/card/sunken/inverse/inverse-raised`, `fg`, `fg-secondary`, `fg-muted`, `fg-on-inverse`, `fg-on-inverse-muted`, `line`, `line-strong`, `line-inverse`, `selected`, `selected-fg`, `success(-bg)`, `warning(-fg,-bg)`, `danger(-bg)`, `info(-bg)`.
- Fonts: `font-display`, `font-sans`, `font-mono`. Sizes: `text-display-xl/lg/md/sm`, `text-heading`, `text-body-lg`, `text-body`, `text-body-sm`, `text-caption`, `text-caption-sm`.
- Spacing keys `1 2 3 4 5 6 8 10 12 16 20 24` plus `sidebar` and `topbar`; radii `sm md lg xl pill`; shadows `sm md lg accent focus`; easing `ease-out`, `ease-in-out`; durations `fast base slow`; `max-w-container`, `max-w-narrow`; `h-control-sm/md/lg`.

## Approved contrast pairs

All ≥ 4.5:1 unless noted. Navy on Snow 16:1 · Slate on white 7.5:1 · white on Navy 16:1 · Steel on Navy 7.1:1 · white on Navy-800 14:1 · `#C7D2DE` on Navy-800 9.8:1 · Ocean-dark on Navy-800 5.1:1 · navy on Ocean-dark 6.9:1 · `#FFC44D` on `#3D2E00` 8.6:1 · `#3FC7CB` on `#0F3A3C` 6.4:1 · `#FF7A5C` on `#4A1A10` 5.0:1 · white on AI Orange 3.0:1 (button labels ≥ 14px/600 and display type only) · Orange-600 on Orange-100 for inline orange text.
