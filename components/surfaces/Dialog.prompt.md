Dialog — navy scrim with blur; display title; footer actions right-aligned (primary last).

```jsx
<Dialog open={open} onClose={close} eyebrow="Confirm" title="Reroute to air?" footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button icon="sparkles">Apply</Button></>}>Adds $1,120. Protects Friday delivery.</Dialog>
```