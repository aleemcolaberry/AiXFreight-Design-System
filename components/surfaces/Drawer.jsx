import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function Drawer({ open = true, title, eyebrow, children, footer, onClose, width = 440, side = 'right', inline, style }) {
  React.useEffect(() => { if (!open || !onClose) return; const h = (e) => { if (e.key === 'Escape') onClose(); }; document.addEventListener('keydown', h); return () => document.removeEventListener('keydown', h); }, [open, onClose]);
  if (!open) return null;
  const panel = React.createElement('aside', { role: 'dialog', 'aria-label': title, style: { width: '100%', maxWidth: width, height: inline ? 'auto' : '100%', background: 'var(--surface-card)', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)', borderRadius: inline ? 'var(--radius-lg)' : 0, border: inline ? '1px solid var(--border-default)' : 0, ...style } },
    React.createElement('header', { style: { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, padding: '20px 24px', borderBottom: '1px solid var(--border-default)' } },
      React.createElement('div', { style: { minWidth: 0, flex: '1 1 auto' } }, eyebrow ? React.createElement('div', { style: { fontFamily:'var(--font-mono)',fontWeight:500,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase', color: 'var(--text-muted)', marginBottom: 4 } }, eyebrow) : null, React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, lineHeight: 1.2, textTransform: 'uppercase', margin: 0 } }, title)),
      onClose ? React.createElement(IconButton, { icon: 'x', label: 'Close', onClick: onClose }) : null),
    React.createElement('div', { style: { padding: 24, flex: 1, overflow: 'auto', color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.55 } }, children),
    footer ? React.createElement('footer', { style: { display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '16px 24px', borderTop: '1px solid var(--border-default)', background: 'var(--surface-sunken)' } }, footer) : null);
  if (inline) return panel;
  return React.createElement('div', { onClick: onClose, style: { position: 'fixed', inset: 0, background: 'rgba(10,25,49,.5)', display: 'flex', justifyContent: side === 'left' ? 'flex-start' : 'flex-end', zIndex: 100 } }, React.createElement('div', { onClick: (e) => e.stopPropagation(), style: { height: '100%', display: 'flex' } }, panel));
}
