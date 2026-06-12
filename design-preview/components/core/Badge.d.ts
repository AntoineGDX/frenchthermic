import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  variant?: 'neutral' | 'teal' | 'accent' | 'success' | 'warning' | 'danger' | 'solid';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Small pill for statuses, categories and labels. */
export function Badge(props: BadgeProps): JSX.Element;
