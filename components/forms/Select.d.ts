/** Native select styled to the field system. */
export interface SelectProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  options: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
