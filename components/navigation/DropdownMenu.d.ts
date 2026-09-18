/** Click-to-open action menu anchored to a trigger. */
export interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: Array<'-' | { label?: string; icon?: string; shortcut?: string; onClick?: () => void; danger?: boolean; disabled?: boolean; divider?: boolean }>;
  align?: 'left' | 'right';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  style?: React.CSSProperties;
}
export function DropdownMenu(props: DropdownMenuProps): JSX.Element;
