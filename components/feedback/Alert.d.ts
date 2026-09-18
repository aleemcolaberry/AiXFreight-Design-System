/** Inline banner on a tinted surface — persistent, in-page (Toast is transient). */
export interface AlertProps {
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'ai';
  title?: string;
  children?: React.ReactNode;
  action?: string;
  onAction?: () => void;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Alert(props: AlertProps): JSX.Element;
