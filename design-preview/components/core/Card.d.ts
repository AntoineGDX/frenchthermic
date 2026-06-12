import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shadow depth. @default "sm" */
  elevation?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  /** Terracotta top keyline for featured cards. @default false */
  accent?: boolean;
  /** Inner padding. @default "lg" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift + deepen shadow on hover. @default false */
  hoverable?: boolean;
  children?: React.ReactNode;
}

/**
 * Soft elevated surface for content blocks and service tiles.
 * @startingPoint section="Core" subtitle="Elevated content surface" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
