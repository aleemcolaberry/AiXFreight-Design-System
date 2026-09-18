import React from 'react';
export function Switch({ checked = false, onChange, label, disabled, size = 'md', style }) {
  const w = size === 'sm' ? 32 : 40, h = size === 'sm' ? 18 : 22, k = h - 4;
  return React.createElement('label', { style: { display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1, fontFamily: 'var(--font-body)', ...style } },
    React.createElement('span', { role: 'switch', 'aria-checked': checked, tabIndex: 0, onClick: () => !disabled && onChange && onChange(!checked), onKeyDown: (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); !disabled && onChange && onChange(!checked); } },
      style: { position: 'relative', width: w, height: h, borderRadius: 999, background: checked ? 'var(--accent)' : 'var(--color-gray)', transition: 'background var(--duration-base) var(--ease-out)', flex: 'none' } },
      React.createElement('span', { style: { position: 'absolute', top: 2, left: checked ? w - k - 2 : 2, width: k, height: k, borderRadius: 999, background: '#fff', boxShadow: 'var(--shadow-sm)', transition: 'left var(--duration-base) var(--ease-out)' } })),
    label ? React.createElement('span', { style: { fontSize: 14, fontWeight: 500, color: 'var(--text-primary)' } }, label) : null);
}
