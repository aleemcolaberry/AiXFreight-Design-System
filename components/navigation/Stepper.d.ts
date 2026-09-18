/** Horizontal progress steps for multi-step flows. */
export interface StepperProps {
  steps: Array<string | { label: string }>;
  /** Zero-based current step */
  current: number;
  onSelect?: (index: number) => void;
  style?: React.CSSProperties;
}
export function Stepper(props: StepperProps): JSX.Element;
