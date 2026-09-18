/**
 * Primary action control. AI Orange is reserved for the single primary action on a view.
 */
export interface ButtonProps {
  variant?: 'primary' | 'navy' | 'secondary' | 'ghost' | 'danger' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Icon name (see Icon) rendered before the label */
  icon?: string;
  iconRight?: string;
  disabled?: boolean;
  /** Shows a spinner, disables the button, keeps width */
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
