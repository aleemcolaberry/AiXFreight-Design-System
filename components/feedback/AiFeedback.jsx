import React from 'react';
import { Icon } from '../core/Icon.jsx';
// Response-satisfaction signal for AI output: thumbs + one-tap reason on thumbs-down. Feeds the "Response satisfaction" metric (guidelines/ai-ux.md).
export function AiFeedback({ value, onChange, reasons = ['Wrong cost', 'Wrong ETA', 'Not relevant', 'Too much to review'], reason, onReason, label = 'Was this useful?', thanks = 'Thanks — this tunes future recommendations.', inverse, size = 'md', style }) {
  const [inner, setInner] = React.useState(value ?? null);
  const [innerReason, setInnerReason] = React.useState(reason ?? null);
  const v = value === undefined ? inner : value;
  const r = reason === undefined ? innerReason : reason;
  const pick = (n) => { const next = v === n ? null : n; setInner(next); onChange && onChange(next); if (next !== 'down') { setInnerReason(null); onReason && onReason(null); } };
  const pickReason = (x) => { setInnerReason(x); onReason && onReason(x); };
  const h = size === 'sm' ? 32 : 40;
  const mutedFg = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-secondary)';
  const border = inverse ? 'var(--border-inverse)' : 'var(--border-strong)';
  const btn = (n, icon, onColor, onBg) => { const on = v === n; return React.createElement('button', { type: 'button', 'aria-pressed': on, 'aria-label': n === 'up' ? 'Useful' : 'Not useful', onClick: () => pick(n), style: { width: h, height: h, display: 'grid', placeItems: 'center', borderRadius: 'var(--radius-md)', border: `1px solid ${on ? onColor : border}`, background: on ? onBg : 'transparent', color: on ? onColor : mutedFg, cursor: 'pointer', transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)' } }, React.createElement(Icon, { name: icon, size: size === 'sm' ? 16 : 18 })); };
  return React.createElement('div', { role: 'group', 'aria-label': label, style: { display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'var(--font-body)', ...style } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' } },
      React.createElement('span', { style: { fontSize: 13, color: mutedFg, minWidth: 0 } }, v ? thanks : label),
      React.createElement('div', { style: { display: 'flex', gap: 6, marginLeft: 'auto' } }, btn('up', 'thumbsUp', 'var(--color-eco)', 'var(--color-eco-100)'), btn('down', 'thumbsDown', 'var(--color-danger)', 'var(--color-danger-bg)'))),
    v === 'down' && reasons.length ? React.createElement('div', { role: 'radiogroup', 'aria-label': 'What was wrong?', style: { display: 'flex', gap: 6, flexWrap: 'wrap' } }, reasons.map((x) => { const on = r === x; return React.createElement('button', { key: x, type: 'button', role: 'radio', 'aria-checked': on, onClick: () => pickReason(x), style: { height: 28, padding: '0 10px', borderRadius: 999, border: `1px solid ${on ? 'var(--fill-selected)' : border}`, background: on ? 'var(--fill-selected)' : 'transparent', color: on ? 'var(--fill-selected-fg)' : mutedFg, fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', cursor: 'pointer' } }, x); })) : null);
}
