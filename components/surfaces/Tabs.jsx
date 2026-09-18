import React from 'react';
export function Tabs({ items = [], value, onChange, variant = 'underline', inverse, style }) {
  const [inner, setInner] = React.useState(value ?? (items[0] && (items[0].value ?? items[0])));
  const cur = value ?? inner; const set = (v) => { setInner(v); onChange && onChange(v); };
  const pill = variant === 'pill';
  return React.createElement('div', { role: 'tablist', style: { display: 'flex', gap: pill ? 4 : 24, padding: pill ? 4 : 0, background: pill ? (inverse ? 'rgba(255,255,255,.08)' : 'var(--surface-sunken)') : 'transparent', borderRadius: pill ? 'var(--radius-md)' : 0, borderBottom: pill ? 0 : '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-default)'), fontFamily: 'var(--font-body)', ...style } },
    items.map((it) => { const v = it.value ?? it, l = it.label ?? it, on = v === cur, count = it.count;
      return React.createElement('button', { key: v, role: 'tab', 'aria-selected': on, type: 'button', onClick: () => set(v), style: { display: 'inline-flex', alignItems: 'center', gap: 8, height: pill ? 32 : 40, padding: pill ? '0 14px' : 0, border: 0, borderRadius: pill ? 6 : 0, background: pill && on ? (inverse ? '#0A1931' : 'var(--surface-card)') : 'transparent', boxShadow: pill && on ? 'var(--shadow-sm)' : 'none', borderBottom: pill ? 0 : '2px solid ' + (on ? 'var(--accent)' : 'transparent'), marginBottom: pill ? 0 : -1, color: on ? (inverse ? '#fff' : 'var(--text-primary)') : (inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-secondary)'), fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, cursor: 'pointer', transition: 'color var(--duration-fast)' } },
        l, count != null ? React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 6px', borderRadius: 999, background: on ? 'var(--accent-soft)' : (inverse ? 'rgba(255,255,255,.1)' : 'var(--surface-sunken)'), color: on ? 'var(--color-ai-orange-600)' : 'inherit' } }, count) : null); }));
}
