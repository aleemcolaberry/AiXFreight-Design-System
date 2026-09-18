import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Stepper({ steps = [], current = 0, onSelect, style }) {
  return React.createElement('ol', { style: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: 8, fontFamily: 'var(--font-body)', ...style } },
    steps.map((s, i) => { const done = i < current, on = i === current; const label = typeof s === 'string' ? s : s.label;
      return React.createElement('li', { key: i, 'aria-current': on ? 'step' : undefined, onClick: () => done && onSelect && onSelect(i), style: { flex: 1, display: 'flex', flexDirection: 'column', gap: 10, cursor: done && onSelect ? 'pointer' : 'default' } },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } },
          React.createElement('span', { style: { display: 'grid', placeItems: 'center', width: 24, height: 24, borderRadius: 999, flex: 'none', background: done ? 'var(--fill-selected)' : on ? 'var(--accent)' : 'var(--surface-card)', border: '2px solid ' + (done ? 'var(--fill-selected)' : on ? 'var(--accent)' : 'var(--border-strong)'), color: done ? 'var(--fill-selected-fg)' : on ? '#fff' : 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11 } }, done ? React.createElement(Icon, { name: 'check', size: 12, strokeWidth: 3 }) : i + 1),
          React.createElement('span', { style: { height: 2, flex: 1, background: done ? 'var(--fill-selected)' : 'var(--border-default)' } })),
        React.createElement('span', { style: { fontFamily:'var(--font-mono)',fontWeight:500,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase', color: on ? 'var(--text-primary)' : 'var(--text-muted)' } }, label)); }));
}
