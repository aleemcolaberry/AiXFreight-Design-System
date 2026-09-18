/** The brand route motif: dashed gold path between mode-colored dots. */
export interface RouteLineProps {
  /** Mode color of the origin dot */
  from?: 'land' | 'rail' | 'air' | 'ocean' | 'eco';
  to?: 'land' | 'rail' | 'air' | 'ocean' | 'eco';
  /** 0–100 of the dashed gold path drawn */
  progress?: number;
  /** 0–1 position of the orange AI-intervention ring */
  aiAt?: number;
  height?: number;
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function RouteLine(props: RouteLineProps): JSX.Element;
