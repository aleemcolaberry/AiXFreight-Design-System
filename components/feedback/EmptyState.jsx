import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function EmptyState({ icon = 'package', eyebrow, title, description, action, compact, style }) {
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 8, padding: compact ? 32 : 64, fontFamily: 'var(--font-body)', ...style } },
    React.createElement('span', { style: { display: 'grid', placeItems: 'center', width: 56, height: 56, borderRadius: 999, border: '3px solid var(--border-default)', color: 'var(--text-muted)', marginBottom: 8 } }, React.createElement(Icon, { name: icon, size: 24 })),
    eyebrow ? React.createElement('div', { style: { fontFamily:'var(--font-mono)',fontWeight:500,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase', color: 'var(--text-muted)' } }, eyebrow) : null,
    React.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, lineHeight: 1.2, textTransform: 'uppercase', margin: 0 } }, title),
    description ? React.createElement('p', { style: { margin: 0, color: 'var(--text-secondary)', fontSize: 14, maxWidth: 360, lineHeight: 1.5 } }, description) : null,
    action ? React.createElement('div', { style: { marginTop: 12 } }, action) : null);
}
