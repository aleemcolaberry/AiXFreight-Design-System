/** Thumbs up/down under any AI output, with one-tap reason chips on thumbs-down. Feeds the Response-satisfaction metric (guidelines/ai-ux.md). Controlled or uncontrolled. */
export interface AiFeedbackProps {
  value?: 'up' | 'down' | null;
  onChange?: (value: 'up' | 'down' | null) => void;
  /** Reason chips shown after thumbs-down. Default: Wrong cost · Wrong ETA · Not relevant · Too much to review */
  reasons?: string[];
  reason?: string | null;
  onReason?: (reason: string | null) => void;
  /** Prompt before a vote. Default "Was this useful?" */
  label?: string;
  /** Replaces the prompt after a vote. */
  thanks?: string;
  /** On navy surfaces (AI recommendation card). */
  inverse?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export function AiFeedback(props: AiFeedbackProps): JSX.Element;
