/** Page controls with range summary. */
export interface PaginationProps {
  page: number;
  pageCount: number;
  onChange?: (page: number) => void;
  /** Show "1–20 of 128" */
  total?: number;
  pageSize?: number;
  style?: React.CSSProperties;
}
export function Pagination(props: PaginationProps): JSX.Element;
