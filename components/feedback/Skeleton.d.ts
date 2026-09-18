/** Shimmering placeholder for loading content. */
export interface SkeletonProps {
  width?: number | string;
  height?: number;
  radius?: number;
  circle?: boolean;
  /** Render N text lines, last one shorter */
  lines?: number;
  style?: React.CSSProperties;
}
export function Skeleton(props: SkeletonProps): JSX.Element;
