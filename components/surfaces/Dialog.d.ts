/** Modal dialog on a blurred navy scrim. */
export interface DialogProps {
  open?: boolean;
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
  /** Render the panel without the fixed scrim (for specimens) */
  inline?: boolean;
  style?: React.CSSProperties;
}
export function Dialog(props: DialogProps): JSX.Element;
