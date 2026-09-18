/** Radio group — navy ring, orange dot. */
export interface RadioProps {
  options: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  label?: string;
  direction?: 'row' | 'column';
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
