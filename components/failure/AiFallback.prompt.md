AiFallback — renders in the AI recommendation slot when the model withholds: below confidence threshold, service down, stale inputs, conflicting options, too little history, or compliance-blocked. Always offers a manual path. Pair with `AiFeedback` if the user can still rate the decision to withhold.

```jsx
<AiFallback kind="lowConfidence" confidence={61} threshold={75} onAction={openOptions} onSecondary={openSettings} />
<AiFallback inverse kind="staleData" age="42 min" onAction={refresh} />
```