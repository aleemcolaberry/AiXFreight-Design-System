Button — one `primary` (AI Orange) per view; `navy` for strong secondary on light, `secondary`/`ghost` for the rest, `inverse` on navy surfaces.

```jsx
<Button variant="primary" icon="sparkles">Apply AI route</Button>
<Button variant="secondary" size="sm" iconRight="arrowRight">View details</Button>
```

Sizes sm 32 / md 40 / lg 48. Press state scales to .98; hover darkens.
`loading` shows a spinner and sets aria-busy; change the label to a verb-ing form ("Saving…").