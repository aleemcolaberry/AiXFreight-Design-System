/**
 * Form-level error summary shown above a form after a failed submit. Complements the per-field `Input error`: one place lists every failure and links to it.
 * Receives focus on appearance (role=alert) so screen readers announce it; clicking an item focuses the field with that `id`.
 */
export interface FormError {
  /** DOM id of the field to focus. */
  field: string;
  /** Field label, e.g. "Pickup date" */
  label: string;
  /** What + how to fix, e.g. "must be after today" */
  message?: string;
}
export interface FormErrorSummaryProps {
  errors: FormError[];
  /** Default: "Fix N fields to continue" */
  title?: string;
  /** Override default focus-by-id behaviour (e.g. fields inside a Drawer). */
  onFocusField?: (field: string) => void;
  autoFocus?: boolean;
  style?: React.CSSProperties;
}
export function FormErrorSummary(props: FormErrorSummaryProps): JSX.Element | null;
