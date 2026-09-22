import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';
// What the AI surface shows when it can't (or shouldn't) recommend. Same slot as the recommendation card, so nothing jumps. Never orange: no AI move to highlight.
export const AI_FALLBACKS = {
  lowConfidence: { icon: 'alertTriangle', eyebrow: 'Below threshold', title: 'Not confident enough to recommend', body: 'Best option scored {confidence}% — under your {threshold}% threshold. Review the options manually or lower the threshold for this lane.', action: 'Review options', secondary: 'Adjust threshold' },
  unavailable: { icon: 'cloudOff', eyebrow: 'AI unavailable', title: 'Recommendations paused', body: 'The optimisation service isn’t responding. Shipments and tracking are unaffected; manual routing is available.', action: 'Retry', secondary: 'Route manually' },
  staleData: { icon: 'clock', eyebrow: 'Stale inputs', title: 'Based on data from {age} ago', body: 'Carrier rates and port feeds haven’t refreshed. This recommendation may no longer hold.', action: 'Refresh data', secondary: 'Use anyway' },
  conflict: { icon: 'route', eyebrow: 'Conflicting signals', title: 'Two options are within {delta}% of each other', body: 'Cost favours ocean; ETA favours air. The model won’t pick when the difference is inside its error margin.', action: 'Compare both', secondary: null },
  noData: { icon: 'package', eyebrow: 'Not enough history', title: 'No recommendation for this lane yet', body: 'Fewer than 5 past shipments on this route. The model needs more examples before it can recommend.', action: 'Route manually', secondary: null },
  blocked: { icon: 'lock', eyebrow: 'Policy', title: 'Recommendation withheld', body: 'A compliance rule ({rule}) prevents automated routing on this shipment. A human must decide.', action: 'View rule', secondary: null },
};
const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] != null ? vars[k] : '—');
export function AiFallback({ kind = 'lowConfidence', title, body, action, secondary, onAction, onSecondary, confidence, threshold, age, delta, rule, inverse, compact, style }) {
  const k = AI_FALLBACKS[kind] || AI_FALLBACKS.lowConfidence;
  const vars = { confidence, threshold, age, delta, rule };
  const fg = inverse ? 'var(--text-on-inverse)' : 'var(--text-primary)', muted = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)', sec = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-secondary)';
  const cap = { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: muted };
  return React.createElement('div', { role: 'status', style: { display: 'flex', flexDirection: 'column', gap: 10, padding: compact ? 14 : 20, borderRadius: 'var(--radius-lg)', border: inverse ? '1px dashed var(--border-inverse)' : '1px dashed var(--border-strong)', background: inverse ? 'var(--surface-inverse-raised)' : 'var(--surface-card)', color: fg, fontFamily: 'var(--font-body)', minWidth: 0, ...style } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 8 } }, React.createElement(Icon, { name: 'sparkles', size: 14, color: muted }), React.createElement('span', { style: cap }, k.eyebrow), confidence != null ? React.createElement('span', { style: { ...cap, marginLeft: 'auto', color: sec } }, `${confidence}% conf.`) : null),
    React.createElement('div', { style: { display: 'flex', gap: 12, alignItems: 'flex-start' } },
      React.createElement(Icon, { name: k.icon, size: 22, color: kind === 'unavailable' || kind === 'blocked' ? 'var(--color-danger)' : 'var(--color-warning-fg)', style: { marginTop: 2 } }),
      React.createElement('div', { style: { minWidth: 0, flex: 1 } },
        React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: compact ? 18 : 22, lineHeight: 1.1, textTransform: 'uppercase', textWrap: 'balance', overflowWrap: 'anywhere' } }, fill(title || k.title, vars)),
        React.createElement('p', { style: { margin: '6px 0 0', color: sec, fontSize: 14, lineHeight: 1.5, textWrap: 'pretty' } }, fill(body || k.body, vars)))),
    React.createElement('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap' } },
      React.createElement(Button, { variant: inverse ? 'inverse' : 'navy', size: 'sm', onClick: onAction, icon: kind === 'unavailable' || kind === 'staleData' ? 'refresh' : undefined }, action || k.action),
      (secondary || (secondary === undefined && k.secondary)) ? React.createElement(Button, { variant: inverse ? 'inverse' : 'ghost', size: 'sm', onClick: onSecondary }, secondary || k.secondary) : null));
}
