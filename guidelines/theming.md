# Theming — light & dark

## Principle
One token set, two values. Components never branch on theme; they read semantic tokens (`--surface-*`, `--text-*`, `--border-*`, `--fill-selected*`) and those flip. Brand primitives never flip: **AI Orange #FF6B00, Priority Gold #FFAB00, Brand Navy #0A1931** are identical in both themes (per THEME.md "identical on light and dark").

## Switching
- Default: light. No attribute needed.
- `<html data-theme="dark">` — explicit dark. `data-theme="light"` — explicit light, overrides the OS.
- No attribute or `data-theme="auto"` — follows `prefers-color-scheme`.
- Runtime: `ThemeToggle` component (segmented Light · System · Dark, or icon sun/moon), which persists to `localStorage['aix-theme']` and fires an `aix-theme` window event. Programmatic: `window.AiXTheme.set('dark'|'light'|'auto')`.
- `color-scheme` is set so native form controls and scrollbars match.
- Placement: Topbar (`themeToggle` prop) for apps, Settings → Appearance for the full segmented control. Never inside content.

## What flips (semantic)
| Token | Light | Dark |
|---|---|---|
| --surface-page | #F8FAFC Snow | #0A1931 Navy |
| --surface-card | #FFFFFF | #12244A Navy-800 |
| --surface-sunken | #F1F5F9 Fog | #1B3160 Navy-700 |
| --text-primary | #0A1931 | #FFFFFF |
| --text-secondary | #475569 Slate | #C7D2DE |
| --text-muted | #8593A5 Gray | #8FA3BA Steel |
| --border-default | #E2E8F0 Mist | #1B3160 |
| --fill-selected / -fg | Navy / white | Ocean-dark #4A9BE8 / navy |
| --text-link | Ocean #0F55A0 | Ocean-dark #4A9BE8 |
| --shadow-* | navy-tinted | black, stronger |

## Mode colors step up on navy (from THEME.md)
land #3A4450 → #E2E8F0 · air #2FA8DC → #3FC0F0 · ocean #0F55A0 → #4A9BE8 · eco/success #0F8B8F → #3FC7CB · AI orange unchanged.
Status backgrounds darken (success-bg #0F3A3C, warning-bg #3D2E00, danger-bg #4A1A10, info-bg #15335F); warning foreground uses `--color-warning-fg` (#8A5A00 light / #FFC44D dark); danger text lifts to #FF7A5C.

## What never flips
- Toast, Tooltip: always #0A1931 with white text (they are "inverse" in both themes).
- SidebarNav: always navy. In dark mode it reads as the same navy as the page — the 1px `--border-inverse` separates it.
- Logo artwork: light theme uses `lockup-*-light.svg` on white surfaces; dark theme and all navy surfaces use `*-dark.svg`. Use `Logo inverse` when resolved theme is dark.
- Photography scrims stay navy.

## Contrast in dark (all ≥ 4.5:1 unless noted)
White on Navy-800 14:1 · #C7D2DE on Navy-800 9.8:1 · Steel on Navy 7.1:1 · Ocean-dark on Navy-800 5.1:1 · navy on Ocean-dark 6.9:1 · #FFC44D on #3D2E00 8.6:1 · #3FC7CB on #0F3A3C 6.4:1 · #FF7A5C on #4A1A10 5.0:1 · white on AI Orange 3.0:1 (buttons ≥14px/600 only).

## Rules
1. Never hard-code a surface or text hex in a component; use the semantic token.
2. Never use `--color-navy` as a background for text that isn't hard-coded white — use `--fill-selected` or `--surface-inverse*`.
3. Test every new component in both themes (guidelines/theme-dark.html shows the set).
4. Dark is a user preference, not a marketing choice: marketing pages are navy/white by design and ignore the theme.
