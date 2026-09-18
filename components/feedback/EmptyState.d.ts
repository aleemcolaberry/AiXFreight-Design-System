/** Centered empty / no-results / not-in-kit state with one action. */
export interface EmptyStateProps {
  icon?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  compact?: boolean;
  style?: React.CSSProperties;
}
export function EmptyState(props: EmptyStateProps): JSX.Element;
