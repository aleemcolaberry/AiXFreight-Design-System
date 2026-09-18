/** Initials or photo avatar; color derived from the name. */
export interface AvatarProps {
  name: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  status?: 'online' | 'busy' | 'away';
  style?: React.CSSProperties;
}
export function Avatar(props: AvatarProps): JSX.Element;
