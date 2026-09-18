/**
 * Surface container — 12px radius, Mist border, navy-tinted shadow.
 */
export interface CardProps {
  title?: string;
  /** Mono caps label above the title */
  eyebrow?: string;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  padding?: number;
  /** Navy raised surface */
  inverse?: boolean;
  elevated?: boolean;
  /** Hover raises shadow; pass onClick */
  interactive?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
