/** Navy notification toast with tone-colored edge. */
export interface ToastProps {
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'ai';
  title?: string;
  message?: string;
  action?: string;
  onAction?: () => void;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element;
