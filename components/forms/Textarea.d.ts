/** Multi-line field with optional character counter. */
export interface TextareaProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  rows?: number;
  /** Shows a mono counter */
  maxLength?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
}
export function Textarea(props: TextareaProps): JSX.Element;
