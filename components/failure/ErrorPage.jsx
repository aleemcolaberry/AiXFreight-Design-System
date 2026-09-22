import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';
// Full-page failure surface. One canonical copy set per kind so teams never invent tone; overridable per prop.
export const ERROR_KINDS = {
  notFound: { code: '404', icon: 'search', title: 'Page not found', description: 'The link may be outdated, or the shipment was moved. Check the ID and try again.', action: 'Back to dashboard', secondary: 'Search shipments' },
  forbidden: { code: '403', icon: 'lock', title: 'You don’t have access', description: 'This view is limited to your organisation’s admins. Ask an admin to grant the Shipments · Edit permission.', action: 'Request access', secondary: 'Back' },
  server: { code: '500', icon: 'alertTriangle', title: 'Something broke on our side', description: 'Your data is safe. We logged the error and the team is notified. Try again in a moment.', action: 'Retry', secondary: 'Status page' },
  offline: { code: 'OFFLINE', icon: 'wifiOff', title: 'You’re offline', description: 'Live tracking paused. Showing the last update we received; changes will sync when you reconnect.', action: 'Retry connection', secondary: null },
  expired: { code: 'SESSION', icon: 'clock', title: 'Session expired', description: 'You were signed out after 8 hours of inactivity. Unsaved changes on this page were kept locally.', action: 'Sign in again', secondary: null },
  maintenance: { code: 'MAINTENANCE', icon: 'settings', title: 'Scheduled maintenance', description: 'AiXFreight is being updated. Tracking links still work; booking returns at the time below.', action: 'Check status', secondary: null },
};
export function ErrorPage({ kind = 'server', code, title, description, action, secondary, onAction, onSecondary, reference, lastUpdated, compact, style }) {
  const k = ERROR_KINDS[kind] || ERROR_KINDS.server;
  const cap = { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-muted)' };
  const tone = kind === 'server' ? 'var(--color-danger)' : kind === 'offline' || kind === 'maintenance' ? 'var(--color-warning-fg)' : 'var(--text-muted)';
  return React.createElement('div', { role: kind === 'server' ? 'alert' : 'region', 'aria-label': title || k.title, style: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 8, padding: compact ? 32 : '72px 32px', fontFamily: 'var(--font-body)', color: 'var(--text-primary)', ...style } },
    React.createElement('span', { style: { display: 'grid', placeItems: 'center', width: 64, height: 64, borderRadius: 999, border: '3px solid var(--border-default)', color: tone, marginBottom: 12 } }, React.createElement(Icon, { name: k.icon, size: 28 })),
    React.createElement('div', { style: { ...cap, color: tone } }, code || k.code),
    React.createElement('h1', { style: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: compact ? 28 : 40, lineHeight: 1.05, textTransform: 'uppercase', margin: 0, textWrap: 'balance', overflowWrap: 'anywhere' } }, title || k.title),
    React.createElement('p', { style: { margin: 0, color: 'var(--text-secondary)', fontSize: 15, maxWidth: 440, lineHeight: 1.55, textWrap: 'pretty' } }, description || k.description),
    lastUpdated ? React.createElement('div', { style: { ...cap, marginTop: 4 } }, 'Last update ' + lastUpdated) : null,
    React.createElement('div', { style: { display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap', justifyContent: 'center' } },
      React.createElement(Button, { variant: 'navy', icon: kind === 'server' || kind === 'offline' ? 'refresh' : undefined, onClick: onAction }, action || k.action),
      (secondary || (secondary === undefined && k.secondary)) ? React.createElement(Button, { variant: 'secondary', onClick: onSecondary }, secondary || k.secondary) : null),
    reference ? React.createElement('div', { style: { ...cap, marginTop: 20, letterSpacing: '.04em', textTransform: 'none' } }, 'Reference ' + reference) : null);
}
