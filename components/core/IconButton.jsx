import React from 'react';
import { Icon } from './Icon.jsx';
export function IconButton({ icon = 'moreHorizontal', label, size = 'md', variant = 'ghost', onClick, disabled, badge, inverse, style, ...rest }) {
  const px = size === 'sm' ? 32 : size === 'lg' ? 48 : 40, ic = size === 'sm' ? 16 : size === 'lg' ? 22 : 20;
  const [hover, setHover] = React.useState(false);
  const bg = variant === 'filled' ? 'var(--accent)' : variant === 'outline' ? 'var(--surface-card)' : 'transparent';
  const fg = variant === 'filled' ? '#fff' : inverse ? '#fff' : 'var(--text-secondary)';
  const hv = variant === 'filled' ? 'var(--accent-hover)' : inverse ? 'rgba(255,255,255,.1)' : 'var(--surface-sunken)';
  return React.createElement('button', { type: 'button', 'aria-label': label || icon, onClick, disabled, ...rest, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    style: { position: 'relative', display: 'inline-grid', placeItems: 'center', width: px, height: px, borderRadius: 'var(--radius-md)', border: variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent', background: hover && !disabled ? hv : bg, color: fg, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1, transition: 'background var(--duration-fast) var(--ease-out)', flex: 'none', ...style } },
    React.createElement(Icon, { name: icon, size: ic }),
    badge ? React.createElement('span', { style: { position: 'absolute', top: 6, right: 6, width: 8, height: 8, borderRadius: 999, background: 'var(--accent)', boxShadow: '0 0 0 2px ' + (inverse ? 'var(--color-navy)' : '#fff') } }) : null);
}
