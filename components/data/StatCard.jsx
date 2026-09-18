import React from 'react';
import { Badge } from '../core/Badge.jsx';
export function StatCard({ label, value, delta, deltaTone = 'neutral', hint, inverse, style }) {
  return React.createElement('section', { style: { background: inverse ? 'var(--surface-inverse-raised)' : 'var(--surface-card)', color: inverse ? '#fff' : 'var(--text-primary)', border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-default)'), borderRadius: 'var(--radius-lg)', padding: 20, boxShadow: 'var(--shadow-sm)', fontFamily: 'var(--font-body)', ...style } },
    React.createElement('div', { style: { fontFamily:'var(--font-mono)',fontWeight:500,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase', fontSize: 12, color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)' } }, label),
    React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 6, flexWrap: 'wrap' } }, React.createElement('span', { style: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px, 2.4vw, 36px)', lineHeight: 1, letterSpacing: '-.01em', overflowWrap: 'anywhere', minWidth: 0 } }, value), delta ? React.createElement(Badge, { tone: deltaTone }, delta) : null),
    hint ? React.createElement('div', { style: { fontSize: 12, color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)', marginTop: 8 } }, hint) : null);
}
