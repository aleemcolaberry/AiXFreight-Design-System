# Contributing

- Tokens live in tokens/*.css; add a token before hard-coding a value. Dark theme overrides go in the [data-theme="dark"] block of colors.css.
- A component = Name.jsx (named export, React only, inline styles via tokens) + Name.d.ts + Name.prompt.md in one of components/{core,forms,navigation,feedback,data,surfaces}/. Add it to that group's *.card.html and to DESIGN-GUIDE.md → Components.
- Guidelines = small @dsCard HTML under guidelines/ (700 wide, ≤400 tall) + prose .md when rules need explanation.
- Templates = templates/<slug>/<Slug>.dc.html with @template first line; inline styles only.
- Before shipping: check contrast pairs, focus ring, 40px targets, one orange primary per view, mode colors unchanged.
- Overflow: test every component with long strings; wrap by default, truncate one-line slots with a title, clamp previews (see layout.md → "Text never overflows").
