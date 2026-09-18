import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function DropdownMenu({ trigger, items = [], align = 'left', open: openProp, onOpenChange, style }) {
  const [inner, setInner] = React.useState(false); const open = openProp ?? inner; const set = (v) => { setInner(v); onOpenChange && onOpenChange(v); };
  const ref = React.useRef(null);
  React.useEffect(() => { if (!open) return; const h = (e) => { if (ref.current && !ref.current.contains(e.target)) set(false); }; const k = (e) => { if (e.key === 'Escape') set(false); }; document.addEventListener('mousedown', h); document.addEventListener('keydown', k); return () => { document.removeEventListener('mousedown', h); document.removeEventListener('keydown', k); }; }, [open]);
  return React.createElement('div', { ref, style: { position: 'relative', display: 'inline-flex', ...style } },
    React.createElement('span', { onClick: () => set(!open), 'aria-haspopup': 'menu', 'aria-expanded': open, style: { display: 'inline-flex' } }, trigger),
    open ? React.createElement('div', { role: 'menu', style: { position: 'absolute', top: '100%', [align === 'right' ? 'right' : 'left']: 0, marginTop: 6, minWidth: 200, background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: 6, zIndex: 40, fontFamily: 'var(--font-body)' } },
      items.map((it, i) => it === '-' || it.divider ? React.createElement('hr', { key: i, style: { border: 0, borderTop: '1px solid var(--border-default)', margin: '6px 0' } })
        : React.createElement('button', { key: i, type: 'button', role: 'menuitem', disabled: it.disabled, onClick: () => { set(false); it.onClick && it.onClick(); }, onMouseEnter: (e) => e.currentTarget.style.background = 'var(--surface-sunken)', onMouseLeave: (e) => e.currentTarget.style.background = 'transparent',
          style: { display: 'flex', alignItems: 'center', gap: 10, width: '100%', height: 36, padding: '0 10px', border: 0, borderRadius: 6, background: 'transparent', color: it.danger ? 'var(--color-danger)' : 'var(--text-primary)', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, textAlign: 'left', cursor: it.disabled ? 'not-allowed' : 'pointer', opacity: it.disabled ? .45 : 1 } },
          it.icon ? React.createElement(Icon, { name: it.icon, size: 16, color: it.danger ? 'var(--color-danger)' : 'var(--text-muted)' }) : null, it.label,
          it.shortcut ? React.createElement('span', { style: { marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' } }, it.shortcut) : null))) : null);
}
