import React from 'react';
import { Icon } from '../core/Icon.jsx';
const T = { info: ['info', 'var(--color-info)', 'var(--color-info-bg)'], success: ['circleCheck', 'var(--color-success)', 'var(--color-success-bg)'], warning: ['alertTriangle', 'var(--color-warning-fg)', 'var(--color-warning-bg)'], danger: ['alertTriangle', 'var(--color-danger)', 'var(--color-danger-bg)'], ai: ['sparkles', 'var(--color-ai-orange-600)', 'var(--accent-soft)'] };
export function Alert({ tone = 'info', title, children, action, onAction, onClose, style }) {
  const [icon, fg, bg] = T[tone] || T.info;
  return React.createElement('div', { role: tone === 'danger' ? 'alert' : 'status', style: { display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 16px', background: bg, borderRadius: 'var(--radius-md)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, ...style } },
    React.createElement(Icon, { name: icon, size: 18, color: fg, style: { marginTop: 2 } }),
    React.createElement('div', { style: { flex: 1, minWidth: 0 } }, title ? React.createElement('div', { style: { fontWeight: 600, color: fg } }, title) : null, children ? React.createElement('div', { style: { color: 'var(--text-secondary)' } }, children) : null),
    action ? React.createElement('button', { type: 'button', onClick: onAction, style: { border: 0, background: 'transparent', padding: 0, color: fg, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, cursor: 'pointer', flex: 'none' } }, action) : null,
    onClose ? React.createElement('button', { type: 'button', 'aria-label': 'Dismiss', onClick: onClose, style: { border: 0, background: 'transparent', padding: 0, color: 'var(--text-muted)', cursor: 'pointer', display: 'grid' } }, React.createElement(Icon, { name: 'x', size: 16 })) : null);
}
