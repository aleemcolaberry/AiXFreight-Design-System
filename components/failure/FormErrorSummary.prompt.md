FormErrorSummary — list of all failed fields above the form, each linked to its input. Render on failed submit, alongside `error` on each Input. Renders nothing when `errors` is empty.

```jsx
<FormErrorSummary errors={[{ field: 'pickup', label: 'Pickup date', message: 'must be after today' }, { field: 'weight', label: 'Gross weight', message: 'enter kg, not lb' }]} />
<Input id="pickup" label="Pickup date" error="Must be after today" />
```