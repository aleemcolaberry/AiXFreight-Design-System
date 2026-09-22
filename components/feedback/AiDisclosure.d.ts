/** "Why this?" disclosure under AI output — rationale, timestamped sources, known limits. Collapsed by default. Feeds the Transparency and User-confidence metrics (guidelines/ai-ux.md). */
export interface AiDisclosureSource { label: string; time?: string; href?: string }
export interface AiDisclosureProps {
  /** Default "Why this recommendation" */
  title?: string;
  /** Model confidence 0–100, shown in the header as mono caption. */
  confidence?: number;
  /** One or two sentences: what the AI knows and what it did. Plain language, no model internals. */
  rationale?: string;
  sources?: AiDisclosureSource[];
  /** What the AI did not consider or cannot see. */
  limits?: string[];
  defaultOpen?: boolean;
  open?: boolean;
  /** Log opens — this is the Source-discoverability signal. */
  onToggle?: (open: boolean) => void;
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function AiDisclosure(props: AiDisclosureProps): JSX.Element;
