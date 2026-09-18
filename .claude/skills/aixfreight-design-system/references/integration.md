# Integration guide

How to get the design system into a real codebase in each mode, plus the mistakes that show up in the first hour. `DS_ROOT` is the folder containing `_ds_manifest.json`.

Contents: [Mode A: static page or prototype](#mode-a-static-page-or-prototype) · [Mode B: React app](#mode-b-react-app) · [Mode C: non-React stack](#mode-c-non-react-stack) · [Tailwind](#tailwind) · [TypeScript](#typescript) · [Fonts, CSP and offline](#fonts-csp-and-offline) · [Keeping the product and the design system in sync](#keeping-the-product-and-the-design-system-in-sync)

## Mode A: static page or prototype

Use for click-through mocks, one-off HTML screens, and anything that ships as a plain `.html` file. Copy [../assets/page-starter.html](../assets/page-starter.html) and edit the `DS_BASE` line.

Load order matters:

```html
<link rel="stylesheet" href="DS_ROOT/styles.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin="anonymous"></script>
<script src="DS_ROOT/_ds_bundle.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
<script type="text/babel">
  const { SidebarNav, Topbar, Card, Table, Button } = window.AiXFreightDesignSystem_0c3a26;
  function App() { /* ... */ }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
</script>
```

- The bundle registers every component on `window.AiXFreightDesignSystem_0c3a26` and calls the global `React`, so React and ReactDOM must be loaded before it. Any load error is pushed to `window.AiXFreightDesignSystem_0c3a26.__errors`; check that array if a component is `undefined`.
- Babel standalone compiles `<script type="text/babel">`. It fetches external `src="Page.jsx"` files over XHR, so serve the folder (`npx serve .`, `python -m http.server`) rather than opening the file directly.
- Use the production React builds (`react.production.min.js`) when the mock is shared outside the team; the development builds are for console warnings while you work.
- `Logo` and `SidebarNav` take `base`: the relative path from the page to `DS_ROOT` (the folder that contains `assets/`). A page at `DS_ROOT/pages/x.html` passes `base=".."`; a page in a sibling repo passes the path to the design-system folder.
- Multi-file prototypes follow the UI kit: one `index.html` that loads `Shell.jsx`, `Page.jsx`, ... as `text/babel` scripts, each file ending with `Object.assign(window, { Sidebar, Topbar })` so later files can see earlier components.
- `templates/*/ds-base.js` shows the same wiring done from JavaScript with a single `base` constant; copy that file when the page must locate the design system at runtime.

## Mode B: React app

Use for Vite, Next.js, Remix, CRA or any bundled React 18 codebase. Do not load `_ds_bundle.js`; it is a browser global build, not an ES module.

1. Copy into the app (for example `src/design-system/`): `styles.css`, `tokens/`, `components/`, and `assets/logo/`. Keep the folder structure so `styles.css`'s `@import` paths and the components' relative imports (`../core/Icon.jsx`) keep working.
2. Import the stylesheet once at the app root:
   ```js
   import './design-system/styles.css';
   ```
   Next.js: import it in `app/layout.tsx` or `pages/_app.tsx`. The file imports Google Fonts; see [Fonts](#fonts-csp-and-offline).
3. Import components from source:
   ```jsx
   import { Button } from './design-system/components/core/Button.jsx';
   import { Table } from './design-system/components/data/Table.jsx';
   ```
   Or add a barrel `src/design-system/index.js` that re-exports all 36 so product code imports from one path. The source files are plain React 18 with inline styles and named exports; they import `React` explicitly, so the automatic JSX runtime is not required.
4. Serve the logo assets. `Logo` builds `base + 'assets/logo/<file>.svg'` as an `<img src>`, so either put `assets/` in the public folder and pass `base="/design-system"` (or whatever the public path is), or wrap `Logo` with your own component that imports the SVGs through the bundler.
5. Theme: render `ThemeToggle` somewhere (it defines `window.AiXTheme` and applies the stored preference on mount) or call the same logic yourself: set `document.documentElement.dataset.theme` to `'dark' | 'light'` or remove it for auto. Server-rendered apps should read the preference in a tiny inline script before hydration to avoid a light flash.
6. `Dialog`, `Drawer`, `Toast` render in place with `position: fixed`. Mount them at the page level, not inside a transformed or overflow-hidden ancestor.
7. Vite handles `.jsx` files out of the box. Next.js compiles `.jsx` under `src/` too; if your ESLint config flags inline styles, exclude `src/design-system/**` rather than rewriting the components.

Local package alternative: `npm install ../AiXFreight-Design-System` works for the CSS and token exports (`@aixfreight/design-system/styles.css`, `/tokens.json`, `/tailwind`), but the package's main entry is the browser bundle, so still import components from the copied source.

## Mode C: non-React stack

Vue, Svelte, Angular, server-rendered templates, email.

- Use `styles.css` and the tokens exactly as they are; they are plain CSS custom properties and need no framework.
- Port each component you need by reading its `.d.ts` (the contract) and `.jsx` (the styling decisions). Keep prop names, variant names and tone names identical so designers, developers and this skill talk about the same thing. A ported `Button` still has `variant="primary" | "navy" | "secondary" | "ghost" | "danger" | "inverse"` and `size="sm" | "md" | "lg"`.
- Copy the class-free approach: the components use inline styles from tokens, so a port can use scoped styles or utility classes as long as every value is a token.
- Email: inline the light token values (email clients ignore custom properties), keep the navy header + white content + navy footer rhythm, and use the PNG lockups from `assets/logo/`.

## Tailwind

Any mode. In `tailwind.config.js`:

```js
module.exports = {
  presets: [require('./design-system/tokens/tailwind.preset.js')],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
};
```

The preset sets `darkMode: ['selector', '[data-theme="dark"]']` and maps utilities to the CSS variables (`bg-surface-card`, `text-fg-muted`, `border-line`, `bg-selected`, `text-ocean`, `font-display`, `text-display-lg`, `rounded-lg`, `shadow-md`, `duration-base`, `ease-out`, `h-control-md`, `max-w-container`). Because the colors resolve to variables, `dark:` prefixes are rarely needed; the semantic utilities flip on their own. Brand primitives (`bg-navy`, `bg-orange`, `bg-gold`) are literal and never flip, matching the theming rule.

## TypeScript

The `.d.ts` files sit beside each `.jsx`. Copying the folders keeps them adjacent, so `import { Button } from './design-system/components/core/Button.jsx'` gets typed props in editors and `tsc` (`allowJs` or `checkJs` not required for declaration lookup). If you write a barrel, write `index.d.ts` next to it re-exporting the interfaces.

## Fonts, CSP and offline

`tokens/fonts.css` imports Saira Condensed, IBM Plex Sans and IBM Plex Mono from Google Fonts. If the product blocks third-party origins or must work offline, download the three families as woff2, place them in `assets/fonts/`, replace the `@import` with `@font-face` rules, and preload the display face. The token names (`--font-display`, `--font-body`, `--font-mono`) do not change. Self-hosting is listed as an open decision in `AUDIT.md`; tell the design team when you do it.

## Keeping the product and the design system in sync

The repo `aleemcolaberry/AiXFreight-Design-System` is an export of a Claude Design project, and the compiled `_ds_bundle.js`, `_ds_manifest.json` and `_adherence.oxlintrc.json` come from that project's compiler.

- Treat `tokens/` and `components/` in the design-system repo as read-only from the product side. If a product needs a new variant or token, request it (pull request against the design-system repo with the `CONTRIBUTING.md` checklist, or a note to the design team) rather than forking a copy. Local forks drift within weeks.
- When the design system updates, re-copy `styles.css`, `tokens/`, `components/`, `assets/logo/` into the app and read `CHANGELOG.md` for breaking prop changes.
- Anything you build that the system lacks (a chart, a map, a date picker) is a substitution: build it from tokens, keep it in the product repo, and flag it so it can be promoted into the system.
