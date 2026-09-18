/** Milestone timeline — navy for done, orange for AI events. */
export interface TimelineProps {
  events: Array<{ time: string; title: string; where?: string; done?: boolean; ai?: boolean; current?: boolean }>;
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}
export function Timeline(props: TimelineProps): JSX.Element;
