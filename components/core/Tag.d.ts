/** Filter chip / removable tag. */
export interface TagProps {
  children?: React.ReactNode;
  onRemove?: () => void;
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
