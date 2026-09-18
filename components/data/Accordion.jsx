import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Accordion({ items = [], multiple, defaultOpen = [], style }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = (i) => setOpen((o) => o.includes(i) ? o.filter((x) => x !== i) : multiple ? [...o, i] : [i]);
  return React.createElement('div', { style: { border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)', overflow: 'hidden', fontFamily: 'var(--font-body)', ...style } },
    items.map((it, i) => { const on = open.includes(i); return React.createElement('div', { key: i, style: { borderTop: i ? '1px solid var(--border-default)' : 0 } },
      React.createElement('button', { type: 'button', 'aria-expanded': on, onClick: () => toggle(i), style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, width: '100%', padding: '16px 20px', border: 0, background: 'transparent', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, textAlign: 'left', cursor: 'pointer' } },
        React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: 10 } }, it.eyebrow ? React.createElement('span', { style: { fontFamily:'var(--font-mono)',fontWeight:500,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase', color: 'var(--text-muted)' } }, it.eyebrow) : null, it.title),
        React.createElement(Icon, { name: 'chevronDown', size: 16, color: 'var(--text-muted)', style: { transform: on ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-out)' } })),
      on ? React.createElement('div', { style: { padding: '0 20px 20px', color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.55 } }, it.content) : null); }));
}
