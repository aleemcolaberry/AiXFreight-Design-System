/**
 * AI failure/withhold states — what the recommendation slot shows when the model can't or shouldn't recommend.
 * Same footprint as the recommendation card; dashed border signals "no decision here"; never AI Orange (no AI move to highlight).
 * Copy templates take {confidence} {threshold} {age} {delta} {rule} placeholders.
 */
export type AiFallbackKind = 'lowConfidence' | 'unavailable' | 'staleData' | 'conflict' | 'noData' | 'blocked';
export interface AiFallbackProps {
  kind?: AiFallbackKind;
  title?: string;
  body?: string;
  action?: string;
  secondary?: string | null;
  onAction?: () => void;
  onSecondary?: () => void;
  /** Shown as mono "NN% conf." and fills {confidence}. */
  confidence?: number;
  threshold?: number;
  /** "42 min" — fills {age} for staleData. */
  age?: string;
  /** Fills {delta} for conflict. */
  delta?: number;
  /** Fills {rule} for blocked, e.g. "DG class 3". */
  rule?: string;
  /** On navy AI surfaces. */
  inverse?: boolean;
  compact?: boolean;
  style?: React.CSSProperties;
}
export const AI_FALLBACKS: Record<AiFallbackKind, { icon: string; eyebrow: string; title: string; body: string; action: string; secondary: string | null }>;
export function AiFallback(props: AiFallbackProps): JSX.Element;
