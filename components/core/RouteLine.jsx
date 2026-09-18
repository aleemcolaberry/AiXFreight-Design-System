import React from 'react';
const MC = { land: 'var(--color-land)', rail: 'var(--color-land)', air: 'var(--color-air)', ocean: 'var(--color-ocean)', eco: 'var(--color-eco)' };
export function RouteLine({ from = 'land', to = 'ocean', progress = 0, aiAt, height = 80, inverse, style }) {
  const w = 600, y0 = height - 12, y1 = 12; const d = 'M10 ' + y0 + ' C ' + (w * .35) + ' ' + y0 + ', ' + (w * .55) + ' ' + y1 + ', ' + (w - 10) + ' ' + y1;
  const ref = React.useRef(null); const [len, setLen] = React.useState(1000);
  React.useEffect(() => { if (ref.current) setLen(ref.current.getTotalLength()); }, [height]);
  const pt = (t) => { if (!ref.current) return { x: 10, y: y0 }; return ref.current.getPointAtLength(len * t); }; const a = aiAt != null ? pt(aiAt) : null;
  return React.createElement('svg', { viewBox: '0 0 ' + w + ' ' + height, preserveAspectRatio: 'none', style: { width: '100%', height, display: 'block', overflow: 'visible', ...style }, fill: 'none' },
    React.createElement('path', { ref, d, stroke: inverse ? 'var(--border-inverse)' : 'var(--border-default)', strokeWidth: 4, strokeLinecap: 'round' }),
    React.createElement('path', { d, stroke: 'var(--color-gold)', strokeWidth: 4, strokeLinecap: 'round', strokeDasharray: '8 8', pathLength: 100, style: { strokeDasharray: (progress) + ' 100', strokeDashoffset: 0 } }),
    React.createElement('path', { d, stroke: 'var(--color-gold)', strokeWidth: 4, strokeLinecap: 'round', strokeDasharray: len * progress / 100 + ' ' + len, opacity: .001 }),
    React.createElement('circle', { cx: 10, cy: y0, r: 7, fill: MC[from] || MC.land }),
    a ? React.createElement('circle', { cx: a.x, cy: a.y, r: 9, fill: inverse ? '#0A1931' : 'var(--surface-card)', stroke: 'var(--accent)', strokeWidth: 4 }) : null,
    React.createElement('circle', { cx: w - 10, cy: y1, r: 7, fill: MC[to] || MC.ocean }));
}
