import React from 'react';
import { Icon } from '../core/Icon.jsx';
function Field({ label, hint, error, required, children }) {
  return React.createElement('label', { style: { display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' } },
    label ? React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: error ? 'var(--color-danger)' : 'var(--text-secondary)' } }, label, required ? React.createElement('span', { style: { color: 'var(--accent)' } }, ' *') : null) : null,
    children,
    (error || hint) ? React.createElement('span', { style: { fontSize: 12, color: error ? 'var(--color-danger)' : 'var(--text-muted)' } }, error || hint) : null);
}
export function Input({ label, hint, error, required, icon, prefix, suffix, size = 'md', disabled, style, ...rest }) {
  const [focus, setFocus] = React.useState(false); const h = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  return React.createElement(Field, { label, hint, error, required },
    React.createElement('span', { style: { display: 'flex', alignItems: 'center', gap: 8, height: h, padding: '0 12px', background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)', border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--border-strong)' : 'var(--border-default)'), borderRadius: 'var(--radius-md)', boxShadow: focus ? '0 0 0 3px rgba(10,25,49,.12)' : 'none', transition: 'box-shadow var(--duration-fast), border-color var(--duration-fast)', opacity: disabled ? .6 : 1, ...style } },
      icon ? React.createElement(Icon, { name: icon, size: 18, color: 'var(--text-muted)' }) : null,
      prefix ? React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' } }, prefix) : null,
      React.createElement('input', { disabled, ...rest, onFocus: (e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }, onBlur: (e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }, style: { flex: 1, minWidth: 0, border: 0, outline: 0, background: 'transparent', fontFamily: rest.mono ? 'var(--font-mono)' : 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)' } }),
      suffix ? React.createElement('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' } }, suffix) : null));
}
