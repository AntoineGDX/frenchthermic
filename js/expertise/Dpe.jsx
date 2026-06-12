// FRENCH THERMIC — Audit énergétique & DPE (base = "../../")
const { Card: DpCard, Badge: DpBadge, Button: DpBtn, DpeBadge: DpDpeBadge } = window.FrenchThermic_dd06d0;
const { useState: useDpState } = React;

const DPE_GRADES = ['G', 'F', 'E', 'D', 'C', 'B', 'A'];

const DPE_STEPS = [
  { n: '01', title: 'Prise de mesures', body: 'Relevé complet du logement : surfaces, isolation, menuiseries, systèmes de chauffage, ventilation et eau chaude.' },
  { n: '02', title: 'Calcul réglementaire', body: 'Modélisation selon la méthode 3CL-DPE et édition du diagnostic opposable, avec étiquettes énergie et climat.' },
  { n: '03', title: 'Scénarios de travaux', body: 'Plusieurs scénarios chiffrés, classés par rapport coût / gain de classe énergétique, pour prioriser vos investissements.' },
  { n: '04', title: 'Dossier d’aides', body: 'Estimation de MaPrimeRénov’, des CEE et de l’éco-PTZ mobilisables, et accompagnement dans le montage des dossiers.' },
];

const AIDES = [
  { icon: 'PiggyBank', title: 'MaPrimeRénov’', body: 'Aide de l’État calculée selon vos revenus et le gain de performance obtenu, cumulable avec d’autres dispositifs.' },
  { icon: 'Recycle', title: 'Certificats d’économie d’énergie (CEE)', body: 'Primes versées par les fournisseurs d’énergie pour certains travaux d’isolation ou de changement de chauffage.' },
  { icon: 'Landmark', title: 'Éco-prêt à taux zéro', body: 'Financement sans intérêt pour compléter le reste à charge d’un bouquet de travaux de rénovation énergétique.' },
  { icon: 'Percent', title: 'TVA à taux réduit', body: 'TVA à 5,5 % sur la fourniture et la pose d’équipements de rénovation énergétique éligibles.' },
];

const DPE_FAQ = [
  { q: 'Le DPE réalisé est-il opposable et valable pour une vente ou une location ?', a: 'Oui. Nos diagnostics sont réalisés selon la méthode réglementaire 3CL-DPE en vigueur et sont opposables, comme l’exige la loi pour toute vente ou mise en location.' },
  { q: 'Combien de temps dure une visite ?', a: 'Comptez en moyenne 1h30 à 2h pour un logement standard, en fonction de sa surface et de la complexité des équipements.' },
  { q: 'Puis-je obtenir un plan de travaux sans m’engager ?', a: 'Bien sûr. Le rapport d’audit comprend plusieurs scénarios indépendants : vous restez libre de réaliser tout ou partie des travaux, avec ou sans nous.' },
  { q: 'Travaillez-vous avec mon syndic ou ma copropriété ?', a: 'Oui, nous réalisons régulièrement des audits énergétiques collectifs pour des copropriétés, en lien avec le syndic et le conseil syndical.' },
];

function DpePage() {
  const [from, setFrom] = useDpState(1);
  const [to, setTo] = useDpState(5);
  const gain = Math.max(0, to - from);
  return (
    <React.Fragment>
      <PageHero
        eyebrow="Audit énergétique & DPE"
        title="Connaître la performance réelle de votre logement avant d’agir"
        subtitle="Notre audit énergétique va au-delà du DPE réglementaire : il vous donne une feuille de route chiffrée, hiérarchisée, et compatible avec les aides à la rénovation."
      />

      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'center' }} className="ft-hero-grid">
          <div>
            <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Simulateur</div>
            <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.15 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: '0 0 16px' }}>
              Visualisez le gain de classe énergétique
            </h2>
            <p style={{ font: '16px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: '0 0 18px', maxWidth: 480 }}>
              Faites glisser les curseurs pour estimer le saut de performance entre votre situation actuelle et un objectif de rénovation. L’audit transformera cette estimation en plan de travaux précis.
            </p>
          </div>
          <DpCard elevation="lg" padding="lg">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginBottom: 26 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ font: 'var(--fw-semibold) 12px/1 var(--font-sans)', color: 'var(--text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Avant</div>
                <DpDpeBadge grade={DPE_GRADES[from]} size="lg" />
              </div>
              <div style={{ textAlign: 'center', color: 'var(--success-500)' }}>
                <div style={{ font: 'var(--fw-extra) 30px/1 var(--font-display)' }}>+{gain}</div>
                <div style={{ font: 'var(--fw-semibold) 11px/1.2 var(--font-sans)', color: 'var(--text-muted)' }}>classes</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ font: 'var(--fw-semibold) 12px/1 var(--font-sans)', color: 'var(--text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Après</div>
                <DpDpeBadge grade={DPE_GRADES[to]} size="lg" />
              </div>
            </div>
            <label style={{ display: 'block', font: 'var(--fw-semibold) 13px/1 var(--font-sans)', color: 'var(--text-strong)', marginBottom: 8 }}>Situation actuelle</label>
            <input type="range" min="0" max="6" value={from} onChange={(e) => { const v = +e.target.value; setFrom(v); if (v > to) setTo(v); }} className="ft-range" style={{ width: '100%', accentColor: 'var(--color-primary)' }} />
            <label style={{ display: 'block', font: 'var(--fw-semibold) 13px/1 var(--font-sans)', color: 'var(--text-strong)', margin: '16px 0 8px' }}>Objectif après travaux</label>
            <input type="range" min="0" max="6" value={to} onChange={(e) => { const v = +e.target.value; setTo(v); if (v < from) setFrom(v); }} className="ft-range" style={{ width: '100%', accentColor: 'var(--color-accent)' }} />
          </DpCard>
        </div>
      </section>

      <section style={{ background: 'var(--color-bg-warm)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px' }}>
          <div style={{ maxWidth: 640, marginBottom: 44 }}>
            <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Notre méthode</div>
            <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>Un audit, un plan de travaux, des aides</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {DPE_STEPS.map((s) => (
              <DpCard key={s.n} padding="lg" elevation="sm">
                <div style={{ font: 'var(--fw-extra) 30px/1 var(--font-display)', color: 'var(--color-accent)', marginBottom: 12 }}>{s.n}</div>
                <h3 style={{ font: 'var(--fw-bold) 18px/1.2 var(--font-display)', color: 'var(--text-strong)', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ font: '14px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: 0 }}>{s.body}</p>
              </DpCard>
            ))}
          </div>
        </div>
      </section>

      <section id="aides" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ maxWidth: 640, marginBottom: 44 }}>
          <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Aides à la rénovation</div>
          <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>Des dispositifs pour financer vos travaux</h2>
          <p style={{ font: '16px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: '16px 0 0' }}>
            Notre audit énergétique inclut une estimation des aides auxquelles vous êtes éligible. Nous vous accompagnons dans la constitution des dossiers.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {AIDES.map((a) => (
            <DpCard key={a.title} padding="lg" elevation="sm">
              <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <span data-ico={a.icon} data-ico-size="24" />
              </span>
              <h3 style={{ font: 'var(--fw-bold) 17px/1.25 var(--font-display)', color: 'var(--text-strong)', margin: '0 0 8px' }}>{a.title}</h3>
              <p style={{ font: '14px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: 0 }}>{a.body}</p>
            </DpCard>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 88px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Questions fréquentes</div>
          <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>Tout savoir sur l’audit énergétique</h2>
        </div>
        <FaqAccordion items={DPE_FAQ} />
      </section>

      <ContactSection />
      <SiteFooter base="../../" />
    </React.Fragment>
  );
}
window.DpePage = DpePage;
