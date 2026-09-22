import React from 'react';
import { Icon } from '../core/Icon.jsx';
// Transparency surface for AI output: "Why this?" → rationale, sources with timestamps, known limits. Collapsed by default so it adds no cognitive load until asked.
export function AiDisclosure({ title = 'Why this recommendation', confidence, rationale, sources = [], limits = [], defaultOpen = false, open: openProp, onToggle, inverse, style }) {
  const [inner, setInner] = React.useState(defaultOpen);
  const open = openProp === undefined ? inner : openProp;
  const toggle = () => { setInner(!open); onToggle && onToggle(!open); };
  const fg = inverse ? 'var(--text-on-inverse)' : 'var(--text-primary)';
  const muted = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)';
  const sec = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-secondary)';
  const border = inverse ? 'var(--border-inverse)' : 'var(--border-default)';
  const cap = { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: muted, whiteSpace: 'nowrap', flex: 'none' };
  const id = React.useId ? React.useId() : 'aidisc';
  return React.createElement('div', { style: { border: `1px solid ${border}`, borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-body)', color: fg, minWidth: 0, ...style } },
    React.createElement('button', { type: 'button', 'aria-expanded': open, 'aria-controls': id, onClick: toggle, style: { display: 'flex', alignItems: 'center', gap: 10, width: '100%', minHeight: 40, padding: '8px 12px', border: 0, background: 'transparent', color: fg, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, textAlign: 'left', cursor: 'pointer' } },
      React.createElement(Icon, { name: 'sparkles', size: 16, color: 'var(--accent)' }),
      React.createElement('span', { style: { flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, title }, title),
      confidence != null ? React.createElement('span', { style: { ...cap, color: sec }, title: 'Model confidence' }, `${confidence}% conf.`) : null,
      React.createElement(Icon, { name: 'chevronDown', size: 16, color: muted, style: { transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-out)' } })),
    open ? React.createElement('div', { id, style: { padding: '0 12px 12px', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13, lineHeight: 1.5 } },
      rationale ? React.createElement('p', { style: { margin: 0, color: fg } }, rationale) : null,
      sources.length ? React.createElement('div', null, React.createElement('div', { style: { ...cap, marginBottom: 6 } }, 'Sources'), React.createElement('ul', { style: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 } }, sources.map((s, i) => React.createElement('li', { key: i, style: { display: 'flex', gap: 10, alignItems: 'baseline', minWidth: 0 } }, React.createElement(Icon, { name: 'fileText', size: 14, color: muted, style: { alignSelf: 'center' } }), s.href ? React.createElement('a', { href: s.href, style: { color: inverse ? 'var(--color-ocean-dark)' : 'var(--text-link)', flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, title: s.label }, s.label) : React.createElement('span', { style: { color: fg, flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, title: s.label }, s.label), s.time ? React.createElement('span', { style: { ...cap, marginLeft: 'auto', flex: 'none' } }, s.time) : null)))) : null,
      limits.length ? React.createElement('div', null, React.createElement('div', { style: { ...cap, marginBottom: 6 } }, 'Limits'), React.createElement('ul', { style: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4, color: sec } }, limits.map((l, i) => React.createElement('li', { key: i, style: { display: 'flex', gap: 8 } }, React.createElement(Icon, { name: 'alertTriangle', size: 14, color: 'var(--color-warning-fg)', style: { marginTop: 3 } }), React.createElement('span', null, l))))) : null) : null);
}
