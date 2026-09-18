/** 56px white app header: title, search, actions, bell, avatar. */
export interface TopbarProps {
  title: string;
  breadcrumb?: React.ReactNode;
  actions?: React.ReactNode;
  search?: boolean;
  searchPlaceholder?: string;
  onSearch?: (q: string) => void;
  user?: { name: string; src?: string };
  /** Show the orange dot on the bell */
  notifications?: boolean;
  /** Show the sun/moon ThemeToggle */
  themeToggle?: boolean;
  style?: React.CSSProperties;
}
export function Topbar(props: TopbarProps): JSX.Element;
