import React from 'react';
import { Icon } from './Icon.jsx';
const V = {
  primary: { bg: 'var(--accent)', fg: 'var(--text-on-accent)', border: 'var(--accent)', hover: 'var(--accent-hover)' },
  navy: { bg: 'var(--fill-selected)', fg: 'var(--fill-selected-fg)', border: 'var(--fill-selected)', hover: 'var(--fill-selected-hover)' },
  secondary: { bg: 'var(--surface-card)', fg: 'var(--text-primary)', border: 'var(--border-strong)', hover: 'var(--surface-sunken)' },
  ghost: { bg: 'transparent', fg: 'var(--text-secondary)', border: 'transparent', hover: 'var(--surface-sunken)' },
  danger: { bg: 'var(--color-danger)', fg: '#fff', border: 'var(--color-danger)', hover: '#B8321A' },
  inverse: { bg: 'transparent', fg: '#fff', border: 'rgba(255,255,255,.35)', hover: 'rgba(255,255,255,.1)' },
};
const S = { sm: { h: 'var(--control-height-sm)', px: 12, fs: 13, icon: 16 }, md: { h: 'var(--control-height-md)', px: 16, fs: 14, icon: 18 }, lg: { h: 'var(--control-height-lg)', px: 22, fs: 15, icon: 20 } };
export function Button({ variant = 'primary', size = 'md', icon, iconRight, children, disabled, loading, fullWidth, onClick, style, type = 'button', ...rest }) {
  const off = disabled || loading;
  const v = V[variant] || V.primary, s = S[size] || S.md;
  const [hover, setHover] = React.useState(false), [press, setPress] = React.useState(false);
  return React.createElement('button', { type, disabled: off, 'aria-busy': loading || undefined, onClick, ...rest,
    onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setPress(false); }, onMouseDown: () => setPress(true), onMouseUp: () => setPress(false),
    style: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: s.h, padding: '0 ' + s.px + 'px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: s.fs, lineHeight: 1, color: v.fg, background: hover && !off ? v.hover : v.bg, border: '1px solid ' + v.border, borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : loading ? 'progress' : 'pointer', opacity: disabled ? .45 : 1, width: fullWidth ? '100%' : undefined, transform: press && !off ? 'scale(.98)' : 'none', transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)', whiteSpace: 'nowrap', maxWidth: '100%', minWidth: 0, ...style } },
    loading ? React.createElement('span', { 'aria-hidden': true, style: { width: s.icon - 4, height: s.icon - 4, border: '2px solid rgba(255,255,255,.4)', borderTopColor: 'currentColor', borderRadius: 999, animation: 'aix-spin .8s linear infinite', flex: 'none' } }) : icon && React.createElement(Icon, { name: icon, size: s.icon }), React.createElement('span', { style: { overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 } }, children), iconRight && !loading && React.createElement(Icon, { name: iconRight, size: s.icon }), loading ? React.createElement('style', null, '@keyframes aix-spin{to{transform:rotate(360deg)}}') : null);
}
