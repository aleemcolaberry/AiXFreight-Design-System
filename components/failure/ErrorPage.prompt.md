ErrorPage — full-page failure (404 / 403 / 500 / offline / session expired / maintenance). Use in place of the page body. For recoverable in-page errors use Alert; for zero results use EmptyState.

Rules: copy says what happened + what to do next; primary action is navy (never orange); `server` shows a `reference` id; `offline` shows `lastUpdated`.

```jsx
<ErrorPage kind="server" reference="INC-4821" onAction={retry} />
<ErrorPage kind="offline" lastUpdated="09:41" onAction={reconnect} />
<ErrorPage kind="forbidden" onAction={requestAccess} onSecondary={history.back} />
```