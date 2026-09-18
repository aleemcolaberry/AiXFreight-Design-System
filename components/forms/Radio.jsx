import React from 'react';
export function Radio({ options = [], value, onChange, name, label, direction = 'column', disabled, style }) {
  return React.createElement('fieldset', { style: { border: 0, padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-body)', ...style } },
    label ? React.createElement('legend', { style: { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 8, padding: 0 } }, label) : null,
    React.createElement('div', { style: { display: 'flex', flexDirection: direction, gap: direction === 'row' ? 20 : 10 } },
      options.map((o) => { const v = typeof o === 'string' ? o : o.value, l = typeof o === 'string' ? o : o.label, on = v === value;
        return React.createElement('label', { key: v, style: { display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .5 : 1 } },
          React.createElement('input', { type: 'radio', name, value: v, checked: on, disabled, onChange: () => onChange && onChange(v), style: { position: 'absolute', opacity: 0, width: 0, height: 0 } }),
          React.createElement('span', { style: { display: 'grid', placeItems: 'center', width: 18, height: 18, borderRadius: 999, border: '2px solid ' + (on ? 'var(--fill-selected)' : 'var(--border-strong)'), background: 'var(--surface-card)', flex: 'none' } }, on ? React.createElement('span', { style: { width: 8, height: 8, borderRadius: 999, background: 'var(--accent)' } }) : null),
          React.createElement('span', { style: { fontSize: 14, fontWeight: 500, color: 'var(--text-primary)' } }, l)); })));
}
