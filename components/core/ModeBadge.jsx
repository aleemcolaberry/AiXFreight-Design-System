import React from 'react';
import { Icon } from './Icon.jsx';
const M = { land: ['truck', 'var(--color-land)', 'var(--color-land-dark)', 'Land'], rail: ['train', 'var(--color-land)', 'var(--color-land-dark)', 'Rail'], air: ['plane', 'var(--color-air)', 'var(--color-air-dark)', 'Air'], ocean: ['ship', 'var(--color-ocean)', 'var(--color-ocean-dark)', 'Ocean'], eco: ['leaf', 'var(--color-eco)', 'var(--color-eco)', 'Eco lane'], ai: ['sparkles', 'var(--color-ai-orange)', 'var(--color-ai-orange)', 'AI'] };
export function ModeBadge({ mode = 'ocean', label, inverse, size = 'md', iconOnly, style }) {
  const [icon, light, dark, def] = M[mode] || M.ocean; const c = inverse ? dark : light; const sm = size === 'sm';
  return React.createElement('span', { title: label || def, style: { display: 'inline-flex', alignItems: 'center', gap: sm ? 4 : 6, height: sm ? 22 : 28, padding: iconOnly ? 0 : '0 ' + (sm ? 8 : 10) + 'px', width: iconOnly ? (sm ? 22 : 28) : undefined, justifyContent: 'center', borderRadius: 999, border: '2px solid ' + c, color: c, fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: sm ? 10 : 11, letterSpacing: '.08em', textTransform: 'uppercase', whiteSpace: 'nowrap', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', ...style } },
    React.createElement(Icon, { name: icon, size: sm ? 12 : 14, strokeWidth: 2.2 }), iconOnly ? null : (label || def));
}
