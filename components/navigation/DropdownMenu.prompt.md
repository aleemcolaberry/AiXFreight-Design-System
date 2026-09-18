DropdownMenu — row actions / overflow menus. Use `'-'` for dividers, `danger` for destructive items.

```jsx
<DropdownMenu align="right" trigger={<IconButton icon="moreHorizontal" label="Actions" />} items={[{label:'Share tracking',icon:'route'},{label:'Download docs',icon:'download'},'-',{label:'Cancel shipment',icon:'x',danger:true}]} />
```