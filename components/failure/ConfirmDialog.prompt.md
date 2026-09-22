ConfirmDialog — required before any destructive `DropdownMenu` `danger` item or delete/cancel button fires. Verb in the button, consequences as bullets, typed confirmation only for irreversible + large blast radius.

```jsx
<ConfirmDialog title="Cancel shipment SHP-48213?" verb="Cancel shipment" cancelLabel="Keep shipment" consequences={['3 linked quotes will be voided', 'Carrier cancellation fee €240 applies']} typeToConfirm="SHP-48213" onConfirm={cancel} onCancel={close} />
```