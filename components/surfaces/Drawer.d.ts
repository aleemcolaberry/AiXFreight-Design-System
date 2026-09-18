/** Side panel for detail/edit without leaving the list. */
export interface DrawerProps {
  open?: boolean;
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
  side?: 'left' | 'right';
  /** Render without the fixed scrim */
  inline?: boolean;
  style?: React.CSSProperties;
}
export function Drawer(props: DrawerProps): JSX.Element;
