/** Navy hover tooltip. */
export interface TooltipProps {
  content: React.ReactNode;
  children?: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Force visible (specimens) */
  open?: boolean;
  style?: React.CSSProperties;
}
export function Tooltip(props: TooltipProps): JSX.Element;
