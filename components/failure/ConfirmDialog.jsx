import React from 'react';
import { Dialog } from '../surfaces/Dialog.jsx';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';
// Destructive / irreversible confirmation. Verb repeats in the primary button; optional typed confirmation for high-stakes actions (cancel booking, delete org).
export function ConfirmDialog({ open = true, title, eyebrow = 'Confirm', children, verb = 'Delete', cancelLabel = 'Keep', tone = 'danger', consequences = [], typeToConfirm, onConfirm, onCancel, loading, inline, style }) {
  const [typed, setTyped] = React.useState('');
  React.useEffect(() => { if (!open) setTyped(''); }, [open]);
  const ok = !typeToConfirm || typed.trim() === typeToConfirm;
  const cap = { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-muted)' };
  return React.createElement(Dialog, { open, title, eyebrow, onClose: onCancel, width: 480, inline, style,
    footer: [React.createElement(Button, { key: 'c', variant: 'secondary', onClick: onCancel, disabled: loading }, cancelLabel), React.createElement(Button, { key: 'k', variant: tone === 'danger' ? 'danger' : 'navy', disabled: !ok, loading, onClick: onConfirm, icon: tone === 'danger' ? 'trash' : undefined }, verb)] },
    children ? React.createElement('p', { style: { margin: 0 } }, children) : null,
    consequences.length ? React.createElement('ul', { style: { margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 } }, consequences.map((c, i) => React.createElement('li', { key: i, style: { display: 'flex', gap: 8, alignItems: 'flex-start' } }, React.createElement(Icon, { name: 'alertTriangle', size: 16, color: tone === 'danger' ? 'var(--color-danger)' : 'var(--color-warning-fg)', style: { marginTop: 3 } }), React.createElement('span', null, c)))) : null,
    typeToConfirm ? React.createElement('div', { style: { marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 } },
      React.createElement('label', { htmlFor: 'aix-confirm-input', style: cap }, 'Type ', React.createElement('span', { style: { color: 'var(--text-primary)' } }, typeToConfirm), ' to confirm'),
      React.createElement('input', { id: 'aix-confirm-input', value: typed, onChange: (e) => setTyped(e.target.value), autoComplete: 'off', spellCheck: false, style: { height: 'var(--control-height-md)', padding: '0 12px', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-primary)', background: 'var(--surface-card)', outline: 'none' } })) : null);
}
