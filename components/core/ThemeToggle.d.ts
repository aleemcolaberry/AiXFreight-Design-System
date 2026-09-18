/** Light / System / Dark switcher. Persists to localStorage and sets <html data-theme>; also exposes window.AiXTheme.set(). */
export interface ThemeToggleProps {
  /** segmented = Light · System · Dark radio group; icon = single sun/moon button */
  variant?: 'segmented' | 'icon';
  size?: 'sm' | 'md';
  /** For navy surfaces */
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function ThemeToggle(props: ThemeToggleProps): JSX.Element;
