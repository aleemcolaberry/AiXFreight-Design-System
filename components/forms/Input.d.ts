/** Text field with mono uppercase label, hint and error. */
export interface InputProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  /** Leading icon name */
  icon?: string;
  prefix?: string;
  suffix?: string;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: string;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
