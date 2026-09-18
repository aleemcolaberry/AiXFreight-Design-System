Table — the shipment list primitive. Column order convention: id → lane → mode → status → eta → value. IDs and money are `mono`.

```jsx
<Table columns={[{key:'id',label:'Shipment',mono:true},{key:'lane',label:'Lane',muted:true},{key:'mode',label:'Mode',render:m=><ModeBadge mode={m} size="sm"/>},{key:'value',label:'Value',mono:true,align:'right'}]} rows={rows} onRowClick={open} selectable selected={sel} onSelect={setSel} />
```