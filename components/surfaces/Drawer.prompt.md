Drawer — side panel for row detail or filters; Dialog is for decisions.

```jsx
<Drawer open={!!row} onClose={close} eyebrow="Shipment" title={row.id} footer={<Button>Save</Button>}>…</Drawer>
```