---
name: aixfreight-design
description: Use this skill to generate well-branded interfaces and assets for AiXFreight, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

For product work in Claude Code, the full developer skill lives at `.claude/skills/aixfreight-design-system/SKILL.md` (integration modes, component API, page recipes, checker script); prefer it when it is available. Otherwise read the DESIGN-GUIDE.md file within this skill (README.md is the developer quick start), and explore the other available files (index.html is the visual guide; tokens/ holds the CSS variables plus tokens.json and a Tailwind preset; components/ the React primitives with .d.ts contracts; templates/ and ui_kits/ the starting points; guidelines/*.md the rules; AUDIT.md the known gaps).
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Non-negotiables: AI Orange #FF6B00 once per view; mode colors (land #3A4450, air #2FA8DC, ocean #0F55A0) never reassigned; Saira Condensed uppercase display + IBM Plex Sans body + IBM Plex Mono caps captions; navy chrome on snow content; no gradients, no emoji; text never overflows (wrap by default, truncate one-line slots with a title, clamp previews, minmax(0,1fr) grids).
