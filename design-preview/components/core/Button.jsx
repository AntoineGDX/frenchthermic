import React from 'react';

/**
 * FRENCH THERMIC — Button
 * Primary action control. Teal by default, terracotta for high-emphasis CTAs.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '0 14px', height: 36, fontSize: 14, gap: 7, radius: 'var(--radius-sm)' },
    md: { padding: '0 20px', height: 46, fontSize: 15, gap: 9, radius: 'var(--radius-md)' },
    lg: { padding: '0 28px', height: 56, fontSize: 17, gap: 10, radius: 'var(--radius-md)' },
  }[size];

  const variants = {
    primary: { background: 'var(--color-primary)', color: 'var(--text-inverse)', border: '1px solid transparent' },
    accent:  { background: 'var(--color-accent)', color: 'var(--text-on-accent)', border: '1px solid transparent' },
    secondary: { background: 'var(--color-surface)', color: 'var(--color-primary)', border: '1px solid var(--border-strong)' },
    ghost:   { background: 'transparent', color: 'var(--color-primary)', border: '1px solid transparent' },
  }[variant];

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes.gap,
    height: sizes.height,
    padding: sizes.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-bold)',
    fontSize: sizes.fontSize,
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: sizes.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    ...variants,
    ...style,
  };

  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-hover)',
    secondary: 'var(--color-primary-soft)',
    ghost: 'var(--color-primary-soft)',
  }[variant];

  const onEnter = (e) => { if (!disabled) { e.currentTarget.style.background = hoverBg; } };
  const onLeave = (e) => { if (!disabled) { e.currentTarget.style.background = variants.background; } };
  const onDown = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px)'; };
  const onUp = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(0)'; };

  return (
    <button
      type={type}
      disabled={disabled}
      style={base}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
