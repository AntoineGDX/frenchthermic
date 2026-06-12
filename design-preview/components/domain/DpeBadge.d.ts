import * as React from 'react';

export interface DpeBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Energy class A–G. @default "C" */
  grade?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Optional caption shown beside the chip. */
  label?: string;
}

/**
 * Energy-class chip mirroring France's official DPE label.
 * @startingPoint section="Domain" subtitle="DPE energy-class chip A–G" viewport="700x120"
 */
export function DpeBadge(props: DpeBadgeProps): JSX.Element;
