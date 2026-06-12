import React from 'react';

const DPE_COLORS = {
  A: 'var(--dpe-a)', B: 'var(--dpe-b)', C: 'var(--dpe-c)', D: 'var(--dpe-d)',
  E: 'var(--dpe-e)', F: 'var(--dpe-f)', G: 'var(--dpe-g)',
};
// D & E are bright → use dark text
const DARK_TEXT = { D: true, E: true };

/**
 * FRENCH THERMIC — DpeBadge
 * Energy-class chip (Diagnostic de Performance Énergétique).
 * The arrow shape mirrors France's official DPE label.
 */
export function DpeBadge({ grade = 'C', size = 'md', label, style = {}, ...rest }) {
  const g = String(grade).toUpperCase();
  const dim = { sm: 34, md: 46, lg: 60 }[size];
  const fs = { sm: 16, md: 22, lg: 30 }[size];

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-display)', ...style }} {...rest}>
      <span
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          paddingLeft: dim * 0.32,
          paddingRight: dim * 0.5,
          height: dim,
          background: DPE_COLORS[g] || 'var(--neutral-300)',
          color: DARK_TEXT[g] ? 'var(--neutral-900)' : '#fff',
          fontWeight: 'var(--fw-extra)',
          fontSize: fs,
          lineHeight: 1,
          clipPath: 'polygon(0 0, calc(100% - ' + dim * 0.45 + 'px) 0, 100% 50%, calc(100% - ' + dim * 0.45 + 'px) 100%, 0 100%)',
          borderRadius: '3px 0 0 3px',
        }}
      >
        {g}
      </span>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-semibold)', fontSize: 13, color: 'var(--text-body)' }}>{label}</span>}
    </span>
  );
}
