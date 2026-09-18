/** Stroke icon from the curated Lucide subset. */
export interface IconProps {
  /** Lucide-derived glyph name (truck, plane, ship, sparkles, search, bell, chevronDown, chevronRight, arrowRight, check, x, plus, alertTriangle, info, circleCheck, mapPin, package, layoutDashboard, route, fileText, settings, clock, dollar, leaf, menu, moreHorizontal, download, filter, user, train, sun, moon, monitor) */
  name: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
