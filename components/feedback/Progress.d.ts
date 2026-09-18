/** Pill progress bar; fill takes the shipment mode color. */
export interface ProgressProps {
  value?: number;
  max?: number;
  /** Fill with a mode color */
  mode?: 'land' | 'rail' | 'air' | 'ocean' | 'eco' | 'ai';
  color?: string;
  label?: string;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  indeterminate?: boolean;
  style?: React.CSSProperties;
}
export function Progress(props: ProgressProps): JSX.Element;
