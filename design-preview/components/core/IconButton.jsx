import React from 'react';

/**
 * FRENCH THERMIC — IconButton
 * Square/round icon-only control. Pass an icon node as children.
 */
export function IconButton({
  variant = 'secondary',
  size = 'md',
  round = false,
  disabled = false,
  'aria-label': ariaLabel,
  children,
  style = {},
  ...rest
}) {
  const dim = { sm: 36, md: 46, lg: 56 }[size];
  const variants = {
    primary:   { background: 'var(--color-primary)', color: 'var(--text-inverse)', border: '1px solid transparent' },
    accent:    { background: 'var(--color-accent)', color: 'var(--text-on-accent)', border: '1px solid transparent' },
    secondary: { background: 'var(--color-surface)', color: 'var(--color-primary)', border: '1px solid var(--border-strong)' },
    ghost:     { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
  }[variant];

  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-hover)',
    secondary: 'var(--color-primary-soft)',
    ghost: 'var(--color-surface-sunken)',
  }[variant];

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...variants,
    ...style,
  };

  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      style={base}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = hoverBg; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.background = variants.background; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px)'; }}
      onMouseUp={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(0)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
