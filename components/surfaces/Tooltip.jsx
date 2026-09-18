import React from 'react';
export function Tooltip({ content, children, placement = 'top', open, style }) {
  const [hover, setHover] = React.useState(false); const show = open ?? hover;
  const pos = placement === 'bottom' ? { top: '100%', left: '50%', transform: 'translate(-50%,8px)' } : placement === 'right' ? { left: '100%', top: '50%', transform: 'translate(8px,-50%)' } : placement === 'left' ? { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' } : { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' };
  return React.createElement('span', { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), style: { position: 'relative', display: 'inline-flex', ...style } }, children,
    React.createElement('span', { role: 'tooltip', style: { position: 'absolute', ...pos, background: '#0A1931', color: '#fff', fontFamily: 'var(--font-body)', fontSize: 12, lineHeight: 1.4, padding: '6px 10px', borderRadius: 'var(--radius-sm)', whiteSpace: 'normal', maxWidth: 260, width: 'max-content', overflowWrap: 'anywhere', boxShadow: 'var(--shadow-md)', opacity: show ? 1 : 0, pointerEvents: 'none', transition: 'opacity var(--duration-fast) var(--ease-out)', zIndex: 50 } }, content));
}
