import React from 'react';
const C = ['#0F55A0', '#3A4450', '#0F8B8F', '#1B3160'];
export function Avatar({ name = '', src, size = 'md', status, style }) {
  const px = size === 'xs' ? 24 : size === 'sm' ? 32 : size === 'lg' ? 48 : 40; const init = name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  const bg = C[name.split('').reduce((a, ch) => a + ch.charCodeAt(0), 0) % C.length];
  return React.createElement('span', { title: name, style: { position: 'relative', display: 'inline-grid', placeItems: 'center', width: px, height: px, borderRadius: 999, background: src ? 'var(--surface-sunken)' : bg, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: px * .38, overflow: 'visible', flex: 'none', ...style } },
    src ? React.createElement('img', { src, alt: name, style: { width: '100%', height: '100%', borderRadius: 999, objectFit: 'cover' } }) : init,
    status ? React.createElement('span', { style: { position: 'absolute', right: -1, bottom: -1, width: px * .3, height: px * .3, borderRadius: 999, background: status === 'online' ? 'var(--color-success)' : status === 'busy' ? 'var(--color-danger)' : 'var(--color-gray)', border: '2px solid #fff' } }) : null);
}
