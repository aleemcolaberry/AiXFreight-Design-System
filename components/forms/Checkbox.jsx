import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Checkbox({ checked = false, onChange, label, description, disabled, indeterminate, style }) {
  return React.createElement('label', { style: { display: 'inline-flex', alignItems: 'flex-start', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1, fontFamily: 'var(--font-body)', ...style } },
    React.createElement('span', { role: 'checkbox', 'aria-checked': indeterminate ? 'mixed' : checked, tabIndex: 0, onClick: () => !disabled && onChange && onChange(!checked), onKeyDown: (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); !disabled && onChange && onChange(!checked); } },
      style: { display: 'grid', placeItems: 'center', width: 18, height: 18, marginTop: 1, borderRadius: 'var(--radius-sm)', border: '2px solid ' + (checked || indeterminate ? 'var(--fill-selected)' : 'var(--border-strong)'), background: checked || indeterminate ? 'var(--fill-selected)' : 'var(--surface-card)', color: 'var(--fill-selected-fg)', flex: 'none', transition: 'background var(--duration-fast)' } },
      indeterminate ? React.createElement('span', { style: { width: 8, height: 2, background: 'var(--fill-selected-fg)' } }) : checked ? React.createElement(Icon, { name: 'check', size: 12, strokeWidth: 3 }) : null),
    (label || description) ? React.createElement('span', { style: { display: 'flex', flexDirection: 'column', gap: 2 } }, label ? React.createElement('span', { style: { fontSize: 14, fontWeight: 500, color: 'var(--text-primary)' } }, label) : null, description ? React.createElement('span', { style: { fontSize: 12, color: 'var(--text-muted)' } }, description) : null) : null);
}
