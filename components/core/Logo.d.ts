/** Brand lockup or mark from assets/logo. */
export interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'mark';
  /** Use the dark-surface artwork */
  inverse?: boolean;
  height?: number;
  /** Relative path to the design-system root (where assets/ lives) */
  base?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
