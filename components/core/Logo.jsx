import React from 'react';
const SRC = { horizontal: 'assets/logo/lockup-horizontal-light.svg', horizontalDark: 'assets/logo/lockup-horizontal-dark.svg', vertical: 'assets/logo/lockup-vertical-light.svg', verticalDark: 'assets/logo/lockup-vertical-dark.svg', mark: 'assets/logo/mark-horizontal.svg', markDark: 'assets/logo/mark-dark.svg' };
export function Logo({ variant = 'horizontal', inverse, height = 40, base = '', style }) {
  const key = variant + (inverse ? 'Dark' : ''); const src = (base ? base.replace(/\/?$/, '/') : '') + (SRC[key] || SRC.horizontal);
  return React.createElement('img', { src, alt: 'AiXFreight', style: { height, width: 'auto', display: 'block', ...style } });
}
