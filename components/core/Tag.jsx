import React from 'react';
import { Icon } from './Icon.jsx';
export function Tag({ children, onRemove, selected, onClick, style }) {
  return React.createElement('span', { onClick, style: { display: 'inline-flex', alignItems: 'center', gap: 6, height: 28, padding: '0 10px', borderRadius: 999, border: '1px solid ' + (selected ? 'var(--fill-selected)' : 'var(--border-default)'), background: selected ? 'var(--fill-selected)' : 'var(--surface-card)', color: selected ? 'var(--fill-selected-fg)' : 'var(--text-secondary)', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13, cursor: onClick ? 'pointer' : 'default', whiteSpace: 'nowrap', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', ...style } },
    children, onRemove ? React.createElement('button', { type: 'button', 'aria-label': 'Remove', onClick: (e) => { e.stopPropagation(); onRemove(); }, style: { display: 'grid', placeItems: 'center', width: 16, height: 16, border: 0, borderRadius: 999, background: 'transparent', color: 'inherit', cursor: 'pointer', padding: 0, marginRight: -4 } }, React.createElement(Icon, { name: 'x', size: 12 })) : null);
}
