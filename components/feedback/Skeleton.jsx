import React from 'react';
export function Skeleton({ width = '100%', height = 14, radius = 4, circle, lines, style }) {
  const base = { background: 'linear-gradient(90deg, var(--surface-sunken) 25%, var(--color-mist) 50%, var(--surface-sunken) 75%)', backgroundSize: '200% 100%', animation: 'aix-shimmer 1.4s ease-in-out infinite', borderRadius: circle ? 999 : radius };
  const kf = React.createElement('style', null, '@keyframes aix-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}');
  if (lines) return React.createElement('div', { 'aria-busy': true, style: { display: 'flex', flexDirection: 'column', gap: 8, ...style } }, kf, Array.from({ length: lines }).map((_, i) => React.createElement('div', { key: i, style: { ...base, height, width: i === lines - 1 ? '60%' : '100%' } })));
  return React.createElement('div', { 'aria-busy': true, style: { display: 'inline-block', ...style } }, kf, React.createElement('div', { style: { ...base, width: circle ? height : width, height } }));
}
