// FRENCH THERMIC — homepage services / expertise grid
const { Card: SCard, Badge: SBadge, Button: SBtn } = window.FrenchThermic_dd06d0;

const SERVICES = [
  { icon: 'Wind', tag: 'Phare', title: 'Clim sans unité extérieure', body: 'Rafraîchir et chauffer sans groupe en façade — idéal en copropriété, centre-ville ou bâtiment classé.', items: ['Sans modification de façade', 'Silencieux', 'Réversible chaud / froid'], href: 'expertise/clim-sans-unite-exterieure/' },
  { icon: 'Gauge', tag: null, title: 'Audit énergétique & DPE', body: 'Diagnostic complet, classe énergétique et plan de travaux chiffré avec les aides mobilisables.', items: ['DPE réglementaire', 'Scénarios de rénovation', 'MaPrimeRénov’ & CEE'], href: 'expertise/dpe-audit-energetique/' },
  { icon: 'Compass', tag: null, title: 'Conseil technique', body: 'Accompagnement indépendant, du dimensionnement à la réception du chantier.', items: ['Étude thermique', 'Choix des équipements', 'Maîtrise d’œuvre'], href: 'expertise/conseil-technique/' },
];

function Services() {
  return (
    <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '96px 24px' }}>
      <div style={{ maxWidth: 640, marginBottom: 44 }}>
        <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Notre expertise</div>
        <h2 style={{ font: 'var(--fw-extra) clamp(30px,3.4vw,42px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>
          Trois métiers, une obsession : votre confort
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {SERVICES.map((s) => (
          <SCard key={s.title} accent={!!s.tag} hoverable padding="lg" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <span data-ico={s.icon} data-ico-size="26" />
              </span>
              {s.tag && <SBadge variant="accent">{s.tag}</SBadge>}
            </div>
            <h3 style={{ font: 'var(--fw-bold) 21px/1.2 var(--font-display)', color: 'var(--text-strong)', margin: '20px 0 10px' }}>{s.title}</h3>
            <p style={{ font: '15px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: '0 0 18px' }}>{s.body}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {s.items.map((it) => (
                <li key={it} style={{ display: 'flex', gap: 9, alignItems: 'center', font: 'var(--fw-medium) 14px/1.3 var(--font-sans)', color: 'var(--text-strong)' }}>
                  <span data-ico="Check" data-ico-size="16" style={{ color: 'var(--success-500)', display: 'flex' }} />{it}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 'auto' }}>
              <SBtn variant="ghost" onClick={() => { window.location.href = s.href; }} iconRight={<span data-ico="ArrowRight" data-ico-size="16" />} style={{ padding: '0 2px', height: 'auto' }}>En savoir plus</SBtn>
            </div>
          </SCard>
        ))}
      </div>
    </section>
  );
}
window.Services = Services;
