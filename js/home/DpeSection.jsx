// FRENCH THERMIC — interactive energy-class simulator strip
const { DpeBadge: DSimBadge, Card: DSimCard } = window.FrenchThermic_dd06d0;
const { useState: useDState } = React;

const GRADES = ['G', 'F', 'E', 'D', 'C', 'B', 'A'];

function DpeSection() {
  const [from, setFrom] = useDState(1); // F
  const [to, setTo] = useDState(5);     // B
  const gain = Math.max(0, to - from);
  return (
    <section style={{ background: 'var(--color-bg-warm)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'center' }} className="ft-hero-grid">
        <div>
          <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Performance énergétique</div>
          <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.12 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: '0 0 16px' }}>
            Visualisez vos gains avant de vous engager
          </h2>
          <p style={{ font: '16px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: '0 0 24px', maxWidth: 480 }}>
            Notre audit traduit vos travaux en classes DPE concrètes. Faites glisser pour estimer le saut de performance.
          </p>
          <a href="expertise/dpe-audit-energetique/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: 'var(--fw-bold) 15px/1 var(--font-sans)', color: 'var(--color-primary)', textDecoration: 'none' }}>
            Découvrir l’audit énergétique & DPE <span data-ico="ArrowRight" data-ico-size="16" />
          </a>
        </div>
        <DSimCard elevation="lg" padding="lg">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginBottom: 26 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ font: 'var(--fw-semibold) 12px/1 var(--font-sans)', color: 'var(--text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Avant</div>
              <DSimBadge grade={GRADES[from]} size="lg" />
            </div>
            <div style={{ textAlign: 'center', color: 'var(--success-500)' }}>
              <div style={{ font: 'var(--fw-extra) 30px/1 var(--font-display)' }}>+{gain}</div>
              <div style={{ font: 'var(--fw-semibold) 11px/1.2 var(--font-sans)', color: 'var(--text-muted)' }}>classes</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ font: 'var(--fw-semibold) 12px/1 var(--font-sans)', color: 'var(--text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Après</div>
              <DSimBadge grade={GRADES[to]} size="lg" />
            </div>
          </div>
          <label style={{ display: 'block', font: 'var(--fw-semibold) 13px/1 var(--font-sans)', color: 'var(--text-strong)', marginBottom: 8 }}>Situation actuelle</label>
          <input type="range" min="0" max="6" value={from} onChange={(e) => { const v = +e.target.value; setFrom(v); if (v > to) setTo(v); }} className="ft-range" style={{ width: '100%', accentColor: 'var(--color-primary)' }} />
          <label style={{ display: 'block', font: 'var(--fw-semibold) 13px/1 var(--font-sans)', color: 'var(--text-strong)', margin: '16px 0 8px' }}>Objectif après travaux</label>
          <input type="range" min="0" max="6" value={to} onChange={(e) => { const v = +e.target.value; setTo(v); if (v < from) setFrom(v); }} className="ft-range" style={{ width: '100%', accentColor: 'var(--color-accent)' }} />
        </DSimCard>
      </div>
    </section>
  );
}
window.DpeSection = DpeSection;
