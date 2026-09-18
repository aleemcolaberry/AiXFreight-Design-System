/** Mono-caps breadcrumb trail; last item is current page. */
export interface BreadcrumbProps {
  items: Array<string | { label: string; href?: string; onClick?: () => void }>;
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
