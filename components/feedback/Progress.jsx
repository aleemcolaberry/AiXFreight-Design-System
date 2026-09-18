import React from 'react';
export function Progress({ value = 0, max = 100, mode, color, label, showValue, size = 'md', indeterminate, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100)); const h = size === 'sm' ? 4 : size === 'lg' ? 10 : 6;
  const c = color || (mode ? 'var(--color-' + (mode === 'rail' ? 'land' : mode) + ')' : 'var(--fill-selected)');
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style } },
    (label || showValue) ? React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', fontFamily:'var(--font-mono)',fontWeight:500,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase', color: 'var(--text-muted)' } }, React.createElement('span', null, label || ''), showValue ? React.createElement('span', null, Math.round(pct) + '%') : null) : null,
    React.createElement('div', { role: 'progressbar', 'aria-valuenow': indeterminate ? undefined : value, 'aria-valuemax': max, style: { height: h, background: 'var(--surface-sunken)', borderRadius: 999, overflow: 'hidden', position: 'relative' } },
      React.createElement('div', { style: { width: indeterminate ? '40%' : pct + '%', height: '100%', background: c, borderRadius: 999, transition: 'width var(--duration-slow) var(--ease-out)', position: indeterminate ? 'absolute' : 'static', animation: indeterminate ? 'aix-indeterminate 1.4s var(--ease-in-out) infinite' : 'none' } })),
    indeterminate ? React.createElement('style', null, '@keyframes aix-indeterminate{0%{left:-40%}100%{left:100%}}') : null);
}
