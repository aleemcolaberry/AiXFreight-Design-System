/**
 * Canonical shipment lifecycle badge + state machine. Tones are fixed per state — never map a status to a tone in product code.
 * Attention states (delayed, customsHold, exception) carry a dot and must appear in any "needs action" filter.
 */
export type ShipmentState = 'draft' | 'quoted' | 'booked' | 'pickedUp' | 'inTransit' | 'delayed' | 'customsHold' | 'exception' | 'outForDelivery' | 'delivered' | 'returned' | 'cancelled' | 'expired';
export interface ShipmentStatusProps {
  status: ShipmentState;
  /** Mono timestamp, e.g. "2h" or "09:41" */
  since?: string;
  /** One-line reason for attention states: "Missing commercial invoice" */
  detail?: string;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export const SHIPMENT_STATES: Record<ShipmentState, { label: string; tone: 'neutral' | 'info' | 'navy' | 'warning' | 'danger' | 'success'; dot?: boolean; next: ShipmentState[]; terminal: boolean }>;
export function canTransition(from: ShipmentState, to: ShipmentState): boolean;
export function isAttention(state: ShipmentState): boolean;
export function ShipmentStatus(props: ShipmentStatusProps): JSX.Element;
