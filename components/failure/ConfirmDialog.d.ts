/**
 * Confirmation for destructive or irreversible actions. Wraps Dialog; the primary button repeats the verb (never "OK"/"Yes"); cancel is the safe, neutral choice.
 * Use `typeToConfirm` only when undo is impossible AND the blast radius is large (cancel a booked shipment, delete an org).
 */
export interface ConfirmDialogProps {
  open?: boolean;
  title: string;
  /** Default "Confirm" */
  eyebrow?: string;
  children?: React.ReactNode;
  /** Primary button label — the action verb. Default "Delete" */
  verb?: string;
  /** Default "Keep" */
  cancelLabel?: string;
  /** danger → red primary; warning → navy primary (irreversible but not destructive, e.g. "Submit to customs"). */
  tone?: 'danger' | 'warning';
  /** Bulleted consequences ("3 linked quotes will be voided") */
  consequences?: string[];
  /** Exact string the user must type, e.g. the shipment ID. */
  typeToConfirm?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  loading?: boolean;
  inline?: boolean;
  style?: React.CSSProperties;
}
export function ConfirmDialog(props: ConfirmDialogProps): JSX.Element | null;
