import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Pagination({ page = 1, pageCount = 1, onChange, total, pageSize, style }) {
  const go = (p) => { if (p >= 1 && p <= pageCount && p !== page) onChange && onChange(p); };
  const pages = []; for (let p = 1; p <= pageCount; p++) { if (p === 1 || p === pageCount || Math.abs(p - page) <= 1) pages.push(p); else if (pages[pages.length - 1] !== '…') pages.push('…'); }
  const btn = (content, props, on) => React.createElement('button', { type: 'button', ...props, style: { display: 'grid', placeItems: 'center', minWidth: 32, height: 32, padding: '0 8px', border: '1px solid ' + (on ? 'var(--fill-selected)' : 'var(--border-default)'), borderRadius: 'var(--radius-md)', background: on ? 'var(--fill-selected)' : 'var(--surface-card)', color: on ? 'var(--fill-selected-fg)' : 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 13, cursor: props.disabled ? 'not-allowed' : 'pointer', opacity: props.disabled ? .4 : 1 } }, content);
  return React.createElement('nav', { 'aria-label': 'Pagination', style: { display: 'flex', alignItems: 'center', gap: 16, fontFamily: 'var(--font-body)', ...style } },
    total != null ? React.createElement('span', { style: { fontFamily:'var(--font-mono)',fontWeight:500,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase', color: 'var(--text-muted)' } }, ((page - 1) * (pageSize || 0) + 1) + '–' + Math.min(page * (pageSize || total), total) + ' of ' + total) : null,
    React.createElement('div', { style: { display: 'flex', gap: 4, marginLeft: 'auto' } },
      btn(React.createElement(Icon, { name: 'chevronRight', size: 14, style: { transform: 'rotate(180deg)' } }), { 'aria-label': 'Previous', disabled: page <= 1, onClick: () => go(page - 1) }),
      pages.map((p, i) => p === '…' ? React.createElement('span', { key: 'e' + i, style: { display: 'grid', placeItems: 'center', width: 24, color: 'var(--text-muted)' } }, '…') : React.createElement(React.Fragment, { key: p }, btn(p, { 'aria-current': p === page ? 'page' : undefined, onClick: () => go(p) }, p === page))),
      btn(React.createElement(Icon, { name: 'chevronRight', size: 14 }), { 'aria-label': 'Next', disabled: page >= pageCount, onClick: () => go(page + 1) })));
}
