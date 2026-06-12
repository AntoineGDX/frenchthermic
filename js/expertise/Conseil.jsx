// FRENCH THERMIC — Conseil technique (base = "../../")
const { Card: CnCard, Badge: CnBadge, Button: CnBtn } = window.FrenchThermic_dd06d0;

const CONSEIL_OFFERS = [
  { icon: 'Thermometer', title: 'Étude thermique', body: 'Calcul des besoins en chauffage et en rafraîchissement, déperditions, ponts thermiques et confort d’été, pour dimensionner les équipements au plus juste.' },
  { icon: 'ListChecks', title: 'Cahier des charges & devis comparés', body: 'Rédaction d’un cahier des charges technique neutre, mise en concurrence des artisans et analyse comparée des devis reçus.' },
  { icon: 'HardHat', title: 'Maîtrise d’œuvre', body: 'Coordination des intervenants, suivi de chantier, contrôle de conformité et assistance à la réception des travaux.' },
  { icon: 'FileCheck2', title: 'Accompagnement administratif', body: 'Constitution des dossiers d’aides, déclarations préalables et relations avec le syndic ou la copropriété.' },
];

const CONSEIL_FOR = [
  { icon: 'User', title: 'Particuliers', body: 'Vous rénovez votre logement et voulez un avis indépendant avant de signer un devis.' },
  { icon: 'Building2', title: 'Syndics & copropriétés', body: 'Vous préparez des travaux collectifs (chauffage, climatisation, isolation) et avez besoin d’un cadrage technique partagé.' },
  { icon: 'Briefcase', title: 'Professionnels', body: 'Vous gérez un parc de locaux et souhaitez prioriser vos investissements de rénovation énergétique.' },
];

const CONSEIL_FAQ = [
  { q: 'Le conseil technique est-il indépendant des entreprises qui réalisent les travaux ?', a: 'Oui. Notre mission de conseil est rémunérée séparément et ne dépend pas du choix de l’installateur. Nous défendons votre intérêt, pas celui d’un fournisseur en particulier.' },
  { q: 'Pouvez-vous intervenir uniquement pour relire un devis ?', a: 'Tout à fait, c’est une de nos missions courtes les plus demandées : analyse d’un ou plusieurs devis, vérification du dimensionnement et des prix proposés.' },
  { q: 'Suivez-vous le chantier jusqu’à la fin ?', a: 'Si vous le souhaitez, nous assurons un suivi régulier jusqu’à la réception des travaux et la vérification du bon fonctionnement des équipements installés.' },
];

function ConseilPage() {
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Conseil technique"
        title="Un regard indépendant sur votre projet, du premier schéma au dernier réglage"
        subtitle="French Thermic intervient en amont des travaux pour vous aider à faire les bons choix techniques, comparer les offres et sécuriser le déroulement du chantier."
      />

      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ maxWidth: 640, marginBottom: 44 }}>
          <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Notre accompagnement</div>
          <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>Quatre missions, à la carte</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {CONSEIL_OFFERS.map((o) => (
            <CnCard key={o.title} padding="lg" elevation="sm">
              <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <span data-ico={o.icon} data-ico-size="24" />
              </span>
              <h3 style={{ font: 'var(--fw-bold) 17px/1.25 var(--font-display)', color: 'var(--text-strong)', margin: '0 0 8px' }}>{o.title}</h3>
              <p style={{ font: '14px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: 0 }}>{o.body}</p>
            </CnCard>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--color-bg-warm)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px' }}>
          <div style={{ maxWidth: 640, marginBottom: 44 }}>
            <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Pour qui</div>
            <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>Un conseil adapté à chaque profil</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {CONSEIL_FOR.map((c) => (
              <CnCard key={c.title} padding="lg" elevation="sm">
                <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <span data-ico={c.icon} data-ico-size="24" />
                </span>
                <h3 style={{ font: 'var(--fw-bold) 17px/1.25 var(--font-display)', color: 'var(--text-strong)', margin: '0 0 8px' }}>{c.title}</h3>
                <p style={{ font: '14px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: 0 }}>{c.body}</p>
              </CnCard>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 800, margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Questions fréquentes</div>
          <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>Tout savoir sur le conseil technique</h2>
        </div>
        <FaqAccordion items={CONSEIL_FAQ} />
      </section>

      <ContactSection />
      <SiteFooter base="../../" />
    </React.Fragment>
  );
}
window.ConseilPage = ConseilPage;
