// FRENCH THERMIC — Clim sans unité extérieure (base = "../../")
const { Card: ClCard, Badge: ClBadge, Button: ClBtn } = window.FrenchThermic_dd06d0;

const CLIM_STEPS = [
  { n: '01', title: 'Visite technique', body: 'Étude de votre logement, de la copropriété et des contraintes (façade, ABF, copropriété) pour identifier les solutions possibles.' },
  { n: '02', title: 'Proposition chiffrée', body: 'Choix de la technologie adaptée (gainable, console, unité extérieure déportée et masquée) et devis détaillé.' },
  { n: '03', title: 'Installation', body: 'Pose par nos équipes certifiées, sans percement de façade visible, avec mise en service et réglages personnalisés.' },
  { n: '04', title: 'Suivi & SAV', body: 'Entretien annuel, garantie décennale et assistance pour faire fonctionner durablement votre installation.' },
];

const CLIM_FAQ = [
  { q: 'Comment climatiser sans unité extérieure visible ?', a: 'L’unité extérieure n’est pas supprimée mais déportée et masquée : en toiture, en cour intérieure, dans un local technique ou derrière une grille décorative. Nous étudions chaque configuration pour respecter le règlement de copropriété et l’aspect de la façade.' },
  { q: 'Cette solution fonctionne-t-elle aussi pour le chauffage ?', a: 'Oui. Les systèmes que nous installons sont réversibles : ils rafraîchissent en été et chauffent en hiver, avec un excellent rendement (pompe à chaleur air/air ou air/eau).' },
  { q: 'Est-ce compatible avec un immeuble classé ou en secteur protégé ?', a: 'C’est précisément l’un de nos cas d’usage les plus fréquents. Nous travaillons avec les syndics et, si nécessaire, préparons les dossiers à présenter à l’architecte des bâtiments de France (ABF).' },
  { q: 'Quel est le niveau de bruit ?', a: 'Les unités intérieures récentes sont très silencieuses (autour de 20 dB en mode nuit). L’unité extérieure, déportée et capotée, n’est généralement pas perceptible depuis les pièces de vie.' },
];

function ClimPage() {
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Clim sans unité extérieure"
        title="Rafraîchir et chauffer votre logement, sans toucher à la façade"
        subtitle="Idéale en copropriété, en centre-ville ou dans un immeuble classé : notre solution offre tout le confort d’une climatisation réversible, sans groupe extérieur visible ni percement de façade."
      />

      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'center' }} className="ft-hero-grid">
          <div>
            <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Pourquoi cette solution</div>
            <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.15 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: '0 0 16px' }}>
              Le confort d’une clim réversible, sans en avoir l’air
            </h2>
            <p style={{ font: '16px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: '0 0 18px' }}>
              De nombreux logements ne peuvent pas accueillir d’unité extérieure en façade : règlement de copropriété, immeuble haussmannien, secteur classé, absence de balcon ou de cour. French Thermic propose des solutions techniques qui contournent ces contraintes tout en conservant les performances d’une climatisation réversible classique.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Unité extérieure déportée et masquée (toiture, cour, local technique)', 'Diffusion par gainable invisible ou console discrète', 'Fonctionnement réversible chaud / froid', 'Compatible règlement de copropriété et secteurs protégés'].map((it) => (
                <li key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', font: 'var(--fw-medium) 15px/1.4 var(--font-sans)', color: 'var(--text-strong)' }}>
                  <span data-ico="Check" data-ico-size="18" style={{ color: 'var(--success-500)', display: 'flex', marginTop: 2 }} />{it}
                </li>
              ))}
            </ul>
          </div>
          <ClCard elevation="lg" padding="lg">
            <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-sans)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Cas d’usage fréquents</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[['Building', 'Appartements en copropriété parisienne'], ['Landmark', 'Immeubles classés ou en secteur ABF'], ['Home', 'Maisons sans espace pour un groupe au sol'], ['Store', 'Commerces et bureaux en rez-de-chaussée']].map(([ic, t]) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span data-ico={ic} data-ico-size="22" />
                  </span>
                  <span style={{ font: 'var(--fw-semibold) 15px/1.3 var(--font-sans)', color: 'var(--text-strong)' }}>{t}</span>
                </div>
              ))}
            </div>
          </ClCard>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg-warm)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px' }}>
          <div style={{ maxWidth: 640, marginBottom: 44 }}>
            <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Notre méthode</div>
            <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>De l’étude à la mise en service</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {CLIM_STEPS.map((s) => (
              <ClCard key={s.n} padding="lg" elevation="sm">
                <div style={{ font: 'var(--fw-extra) 30px/1 var(--font-display)', color: 'var(--color-accent)', marginBottom: 12 }}>{s.n}</div>
                <h3 style={{ font: 'var(--fw-bold) 18px/1.2 var(--font-display)', color: 'var(--text-strong)', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ font: '14px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: 0 }}>{s.body}</p>
              </ClCard>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 800, margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Questions fréquentes</div>
          <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>Tout savoir avant de vous lancer</h2>
        </div>
        <FaqAccordion items={CLIM_FAQ} />
      </section>

      <ContactSection />
      <SiteFooter base="../../" />
    </React.Fragment>
  );
}
window.ClimPage = ClimPage;
