# Failure states

Every screen has more failure states than success states. This document is the contract for how AiXFreight fails.

## The ladder

Pick the smallest surface that contains the failure. Escalate only when the smaller one can't recover.

| Scope | Surface | Recovery |
|---|---|---|
| One field | `Input error` | inline fix, typing never blocked |
| Whole form | `FormErrorSummary` + field errors | focus summary → field |
| One request | `Alert tone="danger"` in place | Retry keeps input |
| Whole page | `ErrorPage` | navy primary to nearest safe place |
| Connection | `ErrorPage kind="offline"` or top `Alert warning` | data stays visible, show last-update, auto-retry |
| Irreversible action | `ConfirmDialog` before, `Toast` undo after | undo window ≥ 8 s |
| AI can't decide | `AiFallback` in the recommendation slot | manual path one click away |

## Copy rules

- **What happened + what to do.** Never a bare code. Codes go in the mono eyebrow (404, 500, INC-4821).
- **Name the object.** "Couldn't load shipments" not "Request failed".
- **Blame the system, not the user.** "We couldn't save" / "Enter kg, not lb" — never "Invalid input".
- **Keep the data.** Offline and 500 states show the last known state with its timestamp. A blank screen is a defect.
- **One primary action.** Navy, never AI Orange — a failure has no AI move to highlight.

## Destructive actions

1. Any `DropdownMenu` `danger` item or delete/cancel button opens `ConfirmDialog` first.
2. Verb in the button ("Cancel shipment"), safe choice as the neutral secondary ("Keep shipment").
3. `consequences` list everything that changes beyond the object itself.
4. `typeToConfirm` only when undo is impossible *and* the blast radius is large.
5. After confirming, `Toast` with Undo when the backend supports it.

## AI withhold states

The model must be allowed to say no. `AiFallback` covers six reasons (`lowConfidence`, `unavailable`, `staleData`, `conflict`, `noData`, `blocked`); each offers a manual path. Log `ai_withheld{kind}`; track the rate per lane alongside the six AI UX metrics.

## Shipment lifecycle

`ShipmentStatus` is the only renderer of shipment state. 13 states, fixed tones, transitions in `SHIPMENT_STATES`. Gate actions with `canTransition(from, to)`; build exception queues from `isAttention(state)`.

## Still not covered (product decisions)

- Optimistic UI + conflict resolution on concurrent edits
- Rate limiting / quota messaging
- Partial failure in bulk actions (7 of 10 succeeded)
- Permission model: disable vs hide
