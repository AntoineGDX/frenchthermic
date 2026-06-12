import React from 'react';

/**
 * FRENCH THERMIC — Card
 * Soft, elevated surface. `elevation` controls the shadow; `accent`
 * adds a terracotta top keyline (used for featured services).
 */
export function Card({ elevation = 'sm', accent = false, padding = 'lg', hoverable = false, children, style = {}, ...rest }) {
  const pad = { none: 0, sm: 'var(--space-4)', md: 'var(--space-5)', lg: 'var(--space-6)' }[padding];
  const shadow = {
    none: 'none', xs: 'var(--shadow-xs)', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)',
  }[elevation];

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--border)',
        borderTop: accent ? '3px solid var(--color-accent)' : '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: pad,
        boxShadow: shadow,
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        ...style,
      }}
      onMouseEnter={hoverable ? (e) => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-3px)'; } : undefined}
      onMouseLeave={hoverable ? (e) => { e.currentTarget.style.boxShadow = shadow; e.currentTarget.style.transform = 'translateY(0)'; } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
