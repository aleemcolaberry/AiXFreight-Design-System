AiFeedback — place directly under every AI recommendation, ETA revision or quote explanation. One vote, optional one-tap reason; never a form. Use `inverse` on the navy AI card. Log `onChange`/`onReason` with the recommendation id — this is the Response-satisfaction metric.

```jsx
<AiFeedback inverse onChange={v => track('ai_feedback', { id, v })} onReason={r => track('ai_feedback_reason', { id, r })} />
```