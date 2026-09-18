/** KPI tile: mono label, display number, delta badge. */
export interface StatCardProps {
  label: string;
  value: string | number;
  delta?: string;
  deltaTone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'ai';
  hint?: string;
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function StatCard(props: StatCardProps): JSX.Element;
