import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Field label rendered above the control. */
  label?: string;
  /** @default "text" */
  type?: string;
  placeholder?: string;
  /** Muted helper text below the field. */
  helper?: string;
  /** Error message — turns the border red and replaces the helper. */
  error?: string;
  /** Leading icon node. */
  iconLeft?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Text input with label, optional leading icon, helper and error states. */
export function Input(props: InputProps): JSX.Element;
