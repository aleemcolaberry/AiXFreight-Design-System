ThemeToggle — the only sanctioned way to switch themes. Segmented (Light · System · Dark) in settings/headers; `icon` variant for tight top bars. Persists in localStorage (`aix-theme`), respects system preference in "System".

```jsx
<ThemeToggle />
<ThemeToggle variant="icon" inverse />
```

Programmatic: `window.AiXTheme.set('dark'|'light'|'auto')`; listen for the `aix-theme` window event.