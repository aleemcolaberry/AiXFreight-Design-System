import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Icon } from '../core/Icon.jsx';
// Canonical shipment lifecycle. One source of truth for label ↔ tone ↔ allowed transitions so no product team picks its own colors.
export const SHIPMENT_STATES = {
  draft: { label: 'Draft', tone: 'neutral', next: ['quoted', 'cancelled'], terminal: false },
  quoted: { label: 'Quoted', tone: 'info', next: ['booked', 'expired', 'cancelled'], terminal: false },
  booked: { label: 'Booked', tone: 'navy', next: ['pickedUp', 'cancelled'], terminal: false },
  pickedUp: { label: 'Picked up', tone: 'info', next: ['inTransit', 'exception'], terminal: false },
  inTransit: { label: 'In transit', tone: 'info', dot: true, next: ['customsHold', 'outForDelivery', 'exception', 'delayed'], terminal: false },
  delayed: { label: 'Delayed', tone: 'warning', dot: true, next: ['inTransit', 'exception', 'outForDelivery'], terminal: false },
  customsHold: { label: 'Customs hold', tone: 'warning', dot: true, next: ['inTransit', 'exception'], terminal: false },
  exception: { label: 'Exception', tone: 'danger', dot: true, next: ['inTransit', 'cancelled', 'returned'], terminal: false },
  outForDelivery: { label: 'Out for delivery', tone: 'info', dot: true, next: ['delivered', 'exception'], terminal: false },
  delivered: { label: 'Delivered', tone: 'success', next: [], terminal: true },
  returned: { label: 'Returned', tone: 'neutral', next: [], terminal: true },
  cancelled: { label: 'Cancelled', tone: 'neutral', next: [], terminal: true },
  expired: { label: 'Expired', tone: 'neutral', next: ['quoted'], terminal: true },
};
export const canTransition = (from, to) => !!(SHIPMENT_STATES[from] && SHIPMENT_STATES[from].next.includes(to));
export const isAttention = (s) => ['delayed', 'customsHold', 'exception'].includes(s);
export function ShipmentStatus({ status = 'draft', since, detail, size = 'md', style }) {
  const s = SHIPMENT_STATES[status] || { label: status, tone: 'neutral' };
  const badge = React.createElement(Badge, { tone: s.tone, dot: s.dot, style: size === 'sm' ? { height: 20, fontSize: 10 } : undefined }, s.label);
  if (!since && !detail) return badge;
  const cap = { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 11, letterSpacing: '.06em', color: 'var(--text-muted)', whiteSpace: 'nowrap' };
  return React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, minWidth: 0, ...style } }, badge,
    since ? React.createElement('span', { style: cap }, since) : null,
    detail ? React.createElement('span', { style: { fontFamily: 'var(--font-body)', fontSize: 13, color: isAttention(status) ? 'var(--text-primary)' : 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }, title: detail }, detail) : null);
}
