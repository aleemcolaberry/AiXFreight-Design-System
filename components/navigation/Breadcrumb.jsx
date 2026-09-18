import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Breadcrumb({ items = [], inverse, style }) {
  return React.createElement('nav', { 'aria-label': 'Breadcrumb', style: { display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, fontFamily:'var(--font-mono)',fontWeight:500,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase', color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)', ...style } },
    items.map((it, i) => { const last = i === items.length - 1; const label = typeof it === 'string' ? it : it.label; const href = typeof it === 'string' ? undefined : it.href;
      return React.createElement(React.Fragment, { key: i }, last ? React.createElement('span', { 'aria-current': 'page', title: label, style: { color: inverse ? '#fff' : 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 } }, label)
        : React.createElement('a', { href: href || '#', onClick: it.onClick, style: { color: 'inherit', textDecoration: 'none' } }, label), last ? null : React.createElement(Icon, { name: 'chevronRight', size: 12 })); }));
}
