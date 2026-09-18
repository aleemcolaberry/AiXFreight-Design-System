/** Tab list — orange underline or pill segment. */
export interface TabsProps {
  items: Array<string | { value: string; label: string; count?: number }>;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'underline' | 'pill';
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
