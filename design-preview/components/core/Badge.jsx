import React from 'react';

/**
 * FRENCH THERMIC — Badge
 * Small status / label pill.
 */
export function Badge({ variant = 'neutral', size = 'md', dot = false, children, style = {}, ...rest }) {
  const variants = {
    neutral:   { background: 'var(--neutral-100)', color: 'var(--neutral-700)' },
    teal:      { background: 'var(--teal-50)', color: 'var(--teal-700)' },
    accent:    { background: 'var(--terracotta-100)', color: 'var(--terracotta-700)' },
    success:   { background: 'var(--success-100)', color: 'var(--success-500)' },
    warning:   { background: 'var(--warning-100)', color: '#9a6a18' },
    danger:    { background: 'var(--danger-100)', color: 'var(--danger-500)' },
    solid:     { background: 'var(--color-primary)', color: 'var(--text-inverse)' },
  }[variant];

  const sz = { sm: { fs: 11, pad: '3px 9px' }, md: { fs: 12, pad: '5px 12px' } }[size];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: sz.pad,
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--fw-bold)',
        fontSize: sz.fs,
        lineHeight: 1,
        letterSpacing: '0.02em',
        borderRadius: 'var(--radius-pill)',
        ...variants,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', opacity: 0.8 }} />
      )}
      {children}
    </span>
  );
}
