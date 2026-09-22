import React from 'react';
import { Icon } from '../core/Icon.jsx';
// Form-level error list (WCAG 3.3.1 / 3.3.3). Rendered above the form; each item links to the field. Focus lands here on submit failure.
export function FormErrorSummary({ errors = [], title, onFocusField, autoFocus = true, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => { if (autoFocus && errors.length && ref.current) ref.current.focus(); }, [errors.length, autoFocus]);
  if (!errors.length) return null;
  const n = errors.length;
  const go = (e, err) => { e.preventDefault(); if (onFocusField) return onFocusField(err.field); const el = document.getElementById(err.field); if (el) { el.focus(); if (el.getBoundingClientRect().top < 0) window.scrollBy(0, el.getBoundingClientRect().top - 80); } };
  return React.createElement('div', { ref, tabIndex: -1, role: 'alert', 'aria-labelledby': 'aix-fes-title', style: { display: 'flex', gap: 12, padding: '14px 16px', background: 'var(--color-danger-bg)', border: '1px solid var(--color-danger)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, color: 'var(--text-primary)', outline: 'none', ...style } },
    React.createElement(Icon, { name: 'alertTriangle', size: 18, color: 'var(--color-danger)', style: { marginTop: 2 } }),
    React.createElement('div', { style: { flex: 1, minWidth: 0 } },
      React.createElement('div', { id: 'aix-fes-title', style: { fontWeight: 600, color: 'var(--color-danger)' } }, title || (n === 1 ? 'Fix 1 field to continue' : `Fix ${n} fields to continue`)),
      React.createElement('ol', { style: { margin: '6px 0 0', padding: '0 0 0 18px', display: 'flex', flexDirection: 'column', gap: 4, color: 'var(--text-secondary)' } },
        errors.map((err, i) => React.createElement('li', { key: err.field || i },
          React.createElement('a', { href: '#' + err.field, onClick: (e) => go(e, err), style: { color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 } }, err.label),
          err.message ? React.createElement('span', null, ' — ' + err.message) : null)))));
}
