/** Data table: mono-caps header, hover rows, sorting, selection. */
export interface TableProps {
  columns: Array<{ key: string; label: string; width?: number | string; align?: 'left' | 'right' | 'center'; mono?: boolean; muted?: boolean; nowrap?: boolean; /** Cap the column and ellipsize overflow */ maxWidth?: number | string; truncate?: boolean; sortable?: boolean; render?: (value: any, row: any) => React.ReactNode }>;
  rows: any[];
  rowKey?: string;
  onRowClick?: (row: any) => void;
  sort?: { key: string; dir: 'asc' | 'desc' };
  onSort?: (key: string) => void;
  selectable?: boolean;
  selected?: any[];
  onSelect?: (keys: any[]) => void;
  dense?: boolean;
  emptyMessage?: string;
  stickyHeader?: boolean;
  style?: React.CSSProperties;
}
export function Table(props: TableProps): JSX.Element;
