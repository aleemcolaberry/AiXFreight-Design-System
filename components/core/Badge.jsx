import React from 'react';
const T = {
  neutral: ['var(--surface-sunken)', 'var(--text-secondary)'], success: ['var(--color-success-bg)', 'var(--color-success)'], warning: ['var(--color-warning-bg)', 'var(--color-warning-fg)'],
  danger: ['var(--color-danger-bg)', 'var(--color-danger)'], info: ['var(--color-info-bg)', 'var(--color-info)'], ai: ['var(--accent-soft)', 'var(--color-ai-orange-600)'], navy: ['var(--color-navy)', '#fff'],
};
export function Badge({ tone = 'neutral', dot, children, style }) {
  const [bg, fg] = T[tone] || T.neutral;
  return React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 6, height: 22, padding: '0 8px', borderRadius: 'var(--radius-sm)', background: bg, color: fg, fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', whiteSpace: 'nowrap', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', ...style } },
    dot ? React.createElement('span', { style: { width: 6, height: 6, borderRadius: 999, background: fg } }) : null, children);
}
