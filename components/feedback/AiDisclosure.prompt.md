AiDisclosure — the "Why this?" panel required under every AI recommendation and ETA revision. Rationale in plain operator language (what it knows, what it did), sources with a timestamp, and the limits it cannot see. Collapsed by default; log `onToggle` — opens measure Transparency.

```jsx
<AiDisclosure inverse confidence={94}
  rationale="Port congestion at Los Angeles adds 4.2 days. Air from Shenzhen keeps the Friday delivery window."
  sources={[{label:'Port of LA congestion feed',time:'09:40'},{label:'Carrier air rates · 3 quotes',time:'09:38'}]}
  limits={['Customs dwell at Frankfurt not modelled','Rates valid 2h']}
  onToggle={o => o && track('ai_why_opened', { id })} />
```