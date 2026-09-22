/**
 * Full-page failure state. Replaces page content (not a banner — that's Alert). Ships canonical copy per kind; override only when you have a more specific "what happened + what to do".
 * Never AI Orange: the primary action is navy — orange is reserved for the AI's move, and a broken page has none.
 */
export type ErrorKind = 'notFound' | 'forbidden' | 'server' | 'offline' | 'expired' | 'maintenance';
export interface ErrorPageProps {
  kind?: ErrorKind;
  /** Mono eyebrow. Defaults per kind (404, 403, 500, OFFLINE, SESSION, MAINTENANCE). */
  code?: string;
  title?: string;
  description?: string;
  action?: string;
  /** Pass null to hide the secondary button. */
  secondary?: string | null;
  onAction?: () => void;
  onSecondary?: () => void;
  /** Support/incident id shown in mono under the actions (server errors). */
  reference?: string;
  /** "Last update 09:41" — required for offline so users know how stale the data is. */
  lastUpdated?: string;
  compact?: boolean;
  style?: React.CSSProperties;
}
export const ERROR_KINDS: Record<ErrorKind, { code: string; icon: string; title: string; description: string; action: string; secondary: string | null }>;
export function ErrorPage(props: ErrorPageProps): JSX.Element;
