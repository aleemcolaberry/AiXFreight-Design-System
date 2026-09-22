ShipmentStatus — the only way to render a shipment state. 13 states, fixed tones: neutral (draft/cancelled/returned/expired) · info (quoted/picked up/in transit/out for delivery) · navy (booked) · warning (delayed/customs hold) · danger (exception) · success (delivered). Use `canTransition(from, to)` to enable/disable actions; `isAttention(s)` for exception queues.

```jsx
<ShipmentStatus status="customsHold" since="6h" detail="Missing commercial invoice" />
<Button disabled={!canTransition(s.status, 'cancelled')}>Cancel</Button>
```