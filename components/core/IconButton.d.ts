/** Square icon-only button; always pass a label. */
export interface IconButtonProps {
  icon: string;
  /** Accessible label — required for screen readers */
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'outline' | 'filled';
  /** Orange notification dot */
  badge?: boolean;
  /** Light glyph for navy surfaces */
  inverse?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
