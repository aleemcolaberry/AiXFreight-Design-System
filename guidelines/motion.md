# Motion

- One curve: --ease-out cubic-bezier(.2,.8,.2,1). --ease-in-out only for loops (indeterminate progress, shimmer).
- Durations: 120ms hover/focus/tooltip · 200ms state changes (switch, tab, shadow) · 320ms layout (sidebar collapse, drawer, progress fill).
- Enter = opacity 0→1 + translateY 8→0. Exit = opacity only, half duration. Nothing bounces, overshoots or spins except the loading ring.
- Buttons scale .98 on press. Cards raise shadow-sm → shadow-md on hover.
- Reduced motion: disable transforms and shimmer; keep opacity.
