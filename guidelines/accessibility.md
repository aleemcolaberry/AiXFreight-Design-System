# Accessibility

- **Contrast**: body text ≥ 4.5:1; display ≥ 24px and bold button labels ≥ 3:1. Approved pairs in a11y-contrast.html. Gray #8593A5 is caption-only (mono 500 ≥ 12px uppercase); never body copy.
- **White on AI Orange is 3.0:1** — allowed for button labels ≥ 14px/600 and display type; not for small body text. Use Orange-600 #E05E00 on Orange-100 for inline text.
- **Focus**: every interactive element shows --focus-ring; inputs use a navy 12% ring. Never remove outlines without a replacement.
- **Keyboard**: Tab order = reading order. Space/Enter activate; Esc dismisses Dialog, Drawer, DropdownMenu; arrows move within Tabs and Radio.
- **Targets**: 44px minimum on touch, 40px default desktop, 32px only in dense tables/toolbars.
- **Labels**: IconButton requires label. Form fields always have visible labels (mono caps), not placeholder-only.
- **Color is never the only signal**: Badge pairs color with text; Timeline pairs orange with "AI" wording; Progress has a label or value.
- **Motion**: honor prefers-reduced-motion — drop transforms, keep opacity fades.
- **Live regions**: Toast uses role=status; danger Alert uses role=alert.
- **Dark theme**: [data-theme="dark"] keeps all pairs ≥ 4.5:1 (Steel on Navy 7.1:1; white on Navy-800 14:1).
