import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default "secondary" */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Pill shape instead of rounded square. @default false */
  round?: boolean;
  /** Required for accessibility — describes the action. */
  'aria-label': string;
  /** The icon node. */
  children?: React.ReactNode;
}

/** Icon-only button for toolbars, cards and headers. */
export function IconButton(props: IconButtonProps): JSX.Element;
