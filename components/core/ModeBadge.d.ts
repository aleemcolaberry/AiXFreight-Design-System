/** Transport-mode pill in the brand mode color; shaped like a chain link. */
export interface ModeBadgeProps {
  mode: 'land' | 'rail' | 'air' | 'ocean' | 'eco' | 'ai';
  label?: string;
  /** Dark-mode color steps on navy */
  inverse?: boolean;
  size?: 'sm' | 'md';
  iconOnly?: boolean;
  style?: React.CSSProperties;
}
export function ModeBadge(props: ModeBadgeProps): JSX.Element;
