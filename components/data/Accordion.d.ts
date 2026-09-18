/** Expandable sections for FAQs, document groups, settings. */
export interface AccordionProps {
  items: Array<{ title: string; eyebrow?: string; content: React.ReactNode }>;
  multiple?: boolean;
  defaultOpen?: number[];
  style?: React.CSSProperties;
}
export function Accordion(props: AccordionProps): JSX.Element;
