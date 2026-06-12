// FRENCH THERMIC — hero (illustration/color-led; no stock photos available behind the site password wall)
const { Button: HBtn, Badge: HBadge } = window.FrenchThermic_dd06d0;

function Hero({ onNavigate }) {
  return (
    <section style={{ position: 'relative', background: 'var(--color-surface-dark)', overflow: 'hidden' }}>
      {/* monogram watermark motif */}
      <img src="../../assets/logo/frenchthermic-mark-white.png" alt="" aria-hidden="true" style={{
        position: 'absolute', right: -60, top: -40, height: 'calc(100% + 120px)', opacity: 0.06, pointerEvents: 'none',
      }} />
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '92px 24px 100px',
        display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center',
      }} className="ft-hero-grid">
        <div>
          <HBadge variant="accent" dot>Climatisation sans unité extérieure</HBadge>
          <h1 style={{ font: 'var(--fw-extra) clamp(40px, 5vw, 64px)/1.04 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: '#fff', margin: '20px 0 0' }}>
            Le confort thermique,<br /><span style={{ color: 'var(--color-accent)' }}>sans compromis.</span>
          </h1>
          <p style={{ font: '18px/1.6 var(--font-sans)', color: 'rgba(255,255,255,0.78)', margin: '22px 0 0', maxWidth: 520 }}>
            Chauffage, rafraîchissement et performance énergétique pour les logements où l’on ne peut pas — ou ne veut pas — poser de groupe extérieur.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
            <HBtn variant="accent" size="lg" onClick={() => onNavigate('contact')} iconRight={<span data-ico="ArrowRight" />}>Demander un devis gratuit</HBtn>
            <HBtn variant="secondary" size="lg" onClick={() => onNavigate('service')} style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Découvrir l’expertise</HBtn>
          </div>
          <div style={{ display: 'flex', gap: 28, marginTop: 40, flexWrap: 'wrap' }}>
            {[['15 ans', 'd’expertise thermique'], ['Certifié', 'RGE & QualiPAC'], ['Sous 24h', 'réponse à votre demande']].map(([a, b]) => (
              <div key={a}>
                <div style={{ font: 'var(--fw-extra) 24px/1 var(--font-display)', color: '#fff' }}>{a}</div>
                <div style={{ font: '13px/1.3 var(--font-sans)', color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
        {/* glass info panel */}
        <div style={{
          background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 'var(--radius-xl)',
          padding: 28, backdropFilter: 'blur(8px)',
        }} className="ft-hero-panel">
          <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-sans)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>Gain de performance</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '20px 0' }}>
            {React.createElement(window.FrenchThermic_dd06d0.DpeBadge, { grade: 'F', size: 'lg', label: 'Avant' })}
            <span data-ico="ArrowRight" style={{ color: 'rgba(255,255,255,0.5)' }} />
            {React.createElement(window.FrenchThermic_dd06d0.DpeBadge, { grade: 'B', size: 'lg', label: 'Après' })}
          </div>
          <p style={{ font: '14px/1.55 var(--font-sans)', color: 'rgba(255,255,255,0.72)', margin: 0 }}>
            Un audit énergétique chiffre vos gains réels avant travaux — et les aides mobilisables (MaPrimeRénov’, CEE).
          </p>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
