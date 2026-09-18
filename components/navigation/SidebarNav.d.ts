/** Navy app sidebar with logo, nav items and footer slot. */
export interface SidebarNavProps {
  items: Array<{ value: string; label: string; icon?: string; count?: number }>;
  value?: string;
  onChange?: (value: string) => void;
  /** Path to the design-system root for the Logo */
  base?: string;
  footer?: React.ReactNode;
  collapsed?: boolean;
  style?: React.CSSProperties;
}
export function SidebarNav(props: SidebarNavProps): JSX.Element;
