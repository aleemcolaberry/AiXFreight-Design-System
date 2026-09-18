import React from 'react';
import { Icon } from '../core/Icon.jsx';
function Field({ label, hint, error, required, children }) {
  return React.createElement('label', { style: { display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' } },
    label ? React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: error ? 'var(--color-danger)' : 'var(--text-secondary)' } }, label, required ? React.createElement('span', { style: { color: 'var(--accent)' } }, ' *') : null) : null,
    children,
    (error || hint) ? React.createElement('span', { style: { fontSize: 12, color: error ? 'var(--color-danger)' : 'var(--text-muted)' } }, error || hint) : null);
}
export function Select({ label, hint, error, required, options = [], value, onChange, placeholder, disabled, size = 'md', style }) {
  const h = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  return React.createElement(Field, { label, hint, error, required },
    React.createElement('span', { style: { position: 'relative', display: 'block' } },
      React.createElement('select', { value: value ?? '', disabled, onChange: (e) => onChange && onChange(e.target.value), style: { appearance: 'none', WebkitAppearance: 'none', width: '100%', height: h, padding: '0 36px 0 12px', background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)', border: '1px solid ' + (error ? 'var(--color-danger)' : 'var(--border-default)'), borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-body)', fontSize: 14, color: value ? 'var(--text-primary)' : 'var(--text-muted)', cursor: disabled ? 'not-allowed' : 'pointer', ...style } },
        placeholder ? React.createElement('option', { value: '', disabled: true }, placeholder) : null,
        options.map((o) => { const v = typeof o === 'string' ? o : o.value, l = typeof o === 'string' ? o : o.label; return React.createElement('option', { key: v, value: v }, l); })),
      React.createElement(Icon, { name: 'chevronDown', size: 16, color: 'var(--text-muted)', style: { position: 'absolute', right: 12, top: '50%', marginTop: -8, pointerEvents: 'none' } })));
}
