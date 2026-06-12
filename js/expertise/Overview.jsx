// FRENCH THERMIC — expertise overview page (base = "../")
const { Card: OCard, Badge: OBadge, Button: OBtn } = window.FrenchThermic_dd06d0;

const OVERVIEW_SERVICES = [
  {
    icon: 'Wind', tag: 'Le plus demandé', title: 'Clim sans unité extérieure',
    body: 'Rafraîchir et chauffer un logement sans poser de groupe extérieur visible — solution idéale en copropriété, centre-ville, immeuble classé ou façade protégée.',
    items: ['Aucune modification de façade', 'Fonctionnement silencieux', 'Réversible chaud / froid'],
    href: '../expertise/clim-sans-unite-exterieure/',
  },
  {
    icon: 'Gauge', tag: null, title: 'Audit énergétique & DPE',
    body: 'Un diagnostic complet de votre logement : classe énergétique actuelle, points faibles, scénarios de travaux chiffrés et aides mobilisables.',
    items: ['DPE réglementaire opposable', 'Scénarios de rénovation', 'MaPrimeRénov’ & CEE'],
    href: '../expertise/dpe-audit-energetique/',
  },
  {
    icon: 'Compass', tag: null, title: 'Conseil technique',
    body: 'Un accompagnement indépendant à chaque étape : dimensionnement, choix des équipements, consultation d’artisans et suivi de chantier.',
    items: ['Étude thermique détaillée', 'Cahier des charges & devis comparés', 'Maîtrise d’œuvre jusqu’à la réception'],
    href: '../expertise/conseil-technique/',
  },
];

function ExpertiseOverview() {
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Notre expertise"
        title="Trois métiers, une obsession : votre confort thermique"
        subtitle="Du premier diagnostic à la mise en service, French Thermic accompagne particuliers, syndics et professionnels sur l’ensemble de leurs projets de confort thermique et de performance énergétique."
      />
      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {OVERVIEW_SERVICES.map((s, i) => (
            <OCard key={s.title} elevation="sm" padding="lg" style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? 'auto 1fr' : '1fr auto', gap: 32, alignItems: 'center' }} className="ft-hero-grid">
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <span style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span data-ico={s.icon} data-ico-size="26" />
                  </span>
                  {s.tag && <OBadge variant="accent">{s.tag}</OBadge>}
                </div>
                <h2 style={{ font: 'var(--fw-bold) 26px/1.2 var(--font-display)', color: 'var(--text-strong)', margin: '0 0 10px' }}>{s.title}</h2>
                <p style={{ font: '15px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: '0 0 18px', maxWidth: 520 }}>{s.body}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {s.items.map((it) => (
                    <li key={it} style={{ display: 'flex', gap: 9, alignItems: 'center', font: 'var(--fw-medium) 14px/1.3 var(--font-sans)', color: 'var(--text-strong)' }}>
                      <span data-ico="Check" data-ico-size="16" style={{ color: 'var(--success-500)', display: 'flex' }} />{it}
                    </li>
                  ))}
                </ul>
                <OBtn variant="primary" onClick={() => { window.location.href = s.href; }} iconRight={<span data-ico="ArrowRight" data-ico-size="16" />}>Découvrir cette expertise</OBtn>
              </div>
            </OCard>
          ))}
        </div>
      </section>
      <ContactSection />
      <SiteFooter base="../" />
    </React.Fragment>
  );
}
window.ExpertiseOverview = ExpertiseOverview;
