import React from 'react';
import { Icon } from '../core/Icon.jsx';
const T = { info: ['info', 'var(--color-ocean-dark)'], success: ['circleCheck', 'var(--color-eco)'], warning: ['alertTriangle', 'var(--color-gold)'], danger: ['alertTriangle', '#FF7A5C'], ai: ['sparkles', 'var(--accent)'] };
export function Toast({ tone = 'info', title, message, action, onAction, onClose, style }) {
  const [icon, c] = T[tone] || T.info;
  return React.createElement('div', { role: 'status', style: { display: 'flex', alignItems: 'flex-start', gap: 12, width: 380, maxWidth: '100%', padding: '14px 16px', background: '#0A1931', color: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', borderLeft: '3px solid ' + c, fontFamily: 'var(--font-body)', ...style } },
    React.createElement(Icon, { name: icon, size: 20, color: c, style: { marginTop: 1 } }),
    React.createElement('div', { style: { flex: 1, minWidth: 0 } }, title ? React.createElement('div', { style: { fontWeight: 600, fontSize: 14 } }, title) : null, message ? React.createElement('div', { style: { fontSize: 13, color: 'var(--text-on-inverse-muted)', marginTop: 2 } }, message) : null,
      action ? React.createElement('button', { type: 'button', onClick: onAction, style: { marginTop: 8, border: 0, background: 'transparent', padding: 0, color: c, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, cursor: 'pointer' } }, action) : null),
    onClose ? React.createElement('button', { type: 'button', 'aria-label': 'Dismiss', onClick: onClose, style: { border: 0, background: 'transparent', color: 'var(--text-on-inverse-muted)', cursor: 'pointer', padding: 0, display: 'grid' } }, React.createElement(Icon, { name: 'x', size: 16 })) : null);
}
