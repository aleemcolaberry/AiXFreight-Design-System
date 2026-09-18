import React from 'react';
export function Timeline({ events = [], orientation = 'horizontal', style }) {
  const h = orientation === 'horizontal';
  return React.createElement('ol', { style: { listStyle: 'none', margin: 0, padding: 0, display: h ? 'grid' : 'flex', gridTemplateColumns: h ? 'repeat(auto-fit,minmax(120px,1fr))' : undefined, flexDirection: h ? undefined : 'column', gap: h ? 0 : 20, fontFamily: 'var(--font-body)', ...style } },
    events.map((e, i) => { const c = e.ai ? 'var(--accent)' : e.done ? 'var(--fill-selected)' : 'var(--border-strong)'; const last = i === events.length - 1;
      return React.createElement('li', { key: i, style: { position: 'relative', paddingTop: h ? 22 : 0, paddingLeft: h ? 0 : 28 } },
        React.createElement('span', { style: h ? { position: 'absolute', top: 6, left: 0, right: last ? 'auto' : 0, width: last ? 14 : 'auto', height: 2, background: e.done ? 'var(--fill-selected)' : 'var(--border-default)' } : { position: 'absolute', left: 6, top: 14, bottom: last ? 'auto' : -20, width: 2, height: last ? 0 : 'auto', background: e.done ? 'var(--fill-selected)' : 'var(--border-default)' } }),
        React.createElement('span', { style: { position: 'absolute', top: 0, left: 0, width: 14, height: 14, borderRadius: 999, background: e.ai ? 'var(--accent)' : e.done ? 'var(--fill-selected)' : 'var(--surface-card)', border: '2px solid ' + c, boxShadow: e.current ? '0 0 0 4px rgba(255,107,0,.25)' : 'none' } }),
        React.createElement('div', { style: { fontFamily:'var(--font-mono)',fontWeight:500,fontSize:11,letterSpacing:'.08em',textTransform:'uppercase', color: e.ai ? 'var(--accent)' : 'var(--text-muted)' } }, e.time),
        React.createElement('div', { style: { fontWeight: 600, fontSize: 14, marginTop: 4, paddingRight: h ? 16 : 0, color: 'var(--text-primary)' } }, e.title),
        e.where ? React.createElement('div', { style: { fontSize: 12, color: 'var(--text-muted)', marginTop: 2 } }, e.where) : null); }));
}
