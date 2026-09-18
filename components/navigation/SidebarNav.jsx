import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Logo } from '../core/Logo.jsx';
export function SidebarNav({ items = [], value, onChange, base = '', footer, collapsed, style }) {
  return React.createElement('aside', { style: { width: collapsed ? 72 : 'var(--sidebar-width)', flex: 'none', minHeight: '100%', background: 'var(--surface-inverse)', color: '#fff', display: 'flex', flexDirection: 'column', padding: collapsed ? '20px 12px' : '20px 16px', gap: 24, transition: 'width var(--duration-slow) var(--ease-out)', ...style } },
    React.createElement(Logo, { variant: collapsed ? 'mark' : 'horizontal', inverse: true, height: collapsed ? 30 : 34, base, style: { marginLeft: collapsed ? 0 : 4, alignSelf: collapsed ? 'center' : 'flex-start' } }),
    React.createElement('nav', { 'aria-label': 'Primary', style: { display: 'flex', flexDirection: 'column', gap: 2 } }, items.map((it) => { const on = it.value === value;
      return React.createElement('button', { key: it.value, type: 'button', title: it.label, 'aria-current': on ? 'page' : undefined, onClick: () => onChange && onChange(it.value), style: { display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start', gap: 12, height: 40, padding: collapsed ? 0 : '0 12px', border: 0, borderRadius: 'var(--radius-md)', background: on ? 'var(--surface-inverse-raised)' : 'transparent', color: on ? '#fff' : 'var(--text-on-inverse-muted)', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, cursor: 'pointer', textAlign: 'left', boxShadow: on ? 'inset 3px 0 0 var(--accent)' : 'none', position: 'relative' } },
        it.icon ? React.createElement(Icon, { name: it.icon, size: 18 }) : null, collapsed ? null : React.createElement('span', { style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0, flex: 1 } }, it.label),
        it.count != null && !collapsed ? React.createElement('span', { style: { marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, padding: '1px 6px', borderRadius: 999, background: 'var(--accent)', color: '#fff' } }, it.count) : null); })),
    footer ? React.createElement('div', { style: { marginTop: 'auto' } }, footer) : null);
}
