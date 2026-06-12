// FRENCH THERMIC — L'entreprise (base = "../")
const { Card: EnCard, Badge: EnBadge } = window.FrenchThermic_dd06d0;

const CERTIFICATIONS = [
  { icon: 'ShieldCheck', title: 'RGE', body: 'Reconnu Garant de l’Environnement — condition d’éligibilité aux aides à la rénovation énergétique.' },
  { icon: 'BadgeCheck', title: 'QualiPAC', body: 'Qualification spécifique à l’installation de pompes à chaleur air/air et air/eau.' },
  { icon: 'FileCheck2', title: 'Qualibat', body: 'Certification reconnue pour la qualité d’exécution des travaux de rénovation énergétique.' },
  { icon: 'Umbrella', title: 'Garantie décennale', body: 'Toutes nos installations sont couvertes par une assurance décennale et une garantie constructeur.' },
];

const ZONES = ['Paris', 'Hauts-de-Seine', 'Seine-Saint-Denis', 'Val-de-Marne', 'Yvelines', 'Essonne', 'Val-d’Oise', 'Seine-et-Marne'];

const FAQ = [
  { q: 'Intervenez-vous partout en Île-de-France ?', a: 'Oui, nous intervenons dans Paris et l’ensemble de la petite et grande couronne. Pour les projets plus éloignés, contactez-nous : nous étudions chaque demande.' },
  { q: 'Combien de temps faut-il pour obtenir un devis ?', a: 'Nous revenons vers vous sous 24h ouvrées après votre demande, avec un premier avis et une proposition de rendez-vous pour la visite technique.' },
  { q: 'Proposez-vous un contrat d’entretien ?', a: 'Oui, nous proposons des contrats d’entretien annuel pour garantir la performance et la durée de vie de vos équipements, et conserver leur garantie.' },
  { q: 'Travaillez-vous avec des artisans partenaires ?', a: 'Pour certaines missions de conseil, nous pouvons mettre en concurrence plusieurs artisans partenaires, tout en gardant un rôle de conseil indépendant.' },
];

function EntreprisePage() {
  return (
    <React.Fragment>
      <PageHero
        eyebrow="L’entreprise"
        title="Une équipe d’ingénieurs et de techniciens au service de votre confort"
        subtitle="French Thermic est un bureau d’études et d’installation spécialisé en climatisation, chauffage et performance énergétique, fondé pour proposer des solutions techniques adaptées aux logements contraints — sans sacrifier le confort."
      />

      <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 56, alignItems: 'center' }} className="ft-hero-grid">
          <div>
            <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Notre approche</div>
            <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.15 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: '0 0 16px' }}>
              Des solutions sur-mesure, pensées pour durer
            </h2>
            <p style={{ font: '16px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: '0 0 16px' }}>
              Chaque logement a ses contraintes : copropriété, façade protégée, isolation existante, budget. Plutôt que d’appliquer une solution standard, nous étudions votre cas particulier et proposons les options techniquement et économiquement les plus pertinentes.
            </p>
            <p style={{ font: '16px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: 0 }}>
              Nos équipes interviennent aussi bien sur des appartements individuels que sur des projets collectifs en copropriété, en lien avec les syndics et les conseils syndicaux.
            </p>
          </div>
          <EnCard elevation="lg" padding="lg">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[['15 ans', 'd’expertise en thermique du bâtiment'], ['500+', 'logements équipés en Île-de-France'], ['24h', 'délai moyen de première réponse']].map(([a, b]) => (
                <div key={a} style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                  <div style={{ font: 'var(--fw-extra) 30px/1 var(--font-display)', color: 'var(--color-primary)', minWidth: 80 }}>{a}</div>
                  <div style={{ font: '15px/1.4 var(--font-sans)', color: 'var(--text-body)' }}>{b}</div>
                </div>
              ))}
            </div>
          </EnCard>
        </div>
      </section>

      <section id="certifications" style={{ background: 'var(--color-bg-warm)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px' }}>
          <div style={{ maxWidth: 640, marginBottom: 44 }}>
            <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Certifications</div>
            <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>Des garanties pour vous et vos aides</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {CERTIFICATIONS.map((c) => (
              <EnCard key={c.title} padding="lg" elevation="sm">
                <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <span data-ico={c.icon} data-ico-size="24" />
                </span>
                <h3 style={{ font: 'var(--fw-bold) 17px/1.25 var(--font-display)', color: 'var(--text-strong)', margin: '0 0 8px' }}>{c.title}</h3>
                <p style={{ font: '14px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: 0 }}>{c.body}</p>
              </EnCard>
            ))}
          </div>
        </div>
      </section>

      <section id="zones" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ maxWidth: 640, marginBottom: 32 }}>
          <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Zones d’intervention</div>
          <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: '0 0 16px' }}>Île-de-France & alentours</h2>
          <p style={{ font: '16px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: 0 }}>
            Nous intervenons dans Paris et toute la région Île-de-France. Vous êtes situé ailleurs ? Contactez-nous, nous étudions chaque demande au cas par cas.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {ZONES.map((z) => (
            <EnBadge key={z} variant="neutral">{z}</EnBadge>
          ))}
        </div>
      </section>

      <section id="faq" style={{ background: 'var(--color-bg-warm)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '88px 24px' }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Questions fréquentes</div>
            <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>Encore des questions ?</h2>
          </div>
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <section id="mentions" style={{ maxWidth: 800, margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Mentions légales</div>
          <h2 style={{ font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: 0 }}>Informations légales</h2>
        </div>
        <div style={{ font: '15px/1.7 var(--font-sans)', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p style={{ margin: 0 }}><strong style={{ color: 'var(--text-strong)' }}>Éditeur du site :</strong> French Thermic — Société spécialisée en climatisation, chauffage et performance énergétique, Île-de-France.</p>
          <p style={{ margin: 0 }}><strong style={{ color: 'var(--text-strong)' }}>Contact :</strong> contact@frenchthermic.fr — 01 23 45 67 89</p>
          <p style={{ margin: 0 }}><strong style={{ color: 'var(--text-strong)' }}>Hébergement :</strong> GitHub Pages, GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.</p>
          <p style={{ margin: 0 }}>Ce site ne dépose aucun cookie de suivi publicitaire. Le formulaire de contact est utilisé uniquement pour répondre à votre demande.</p>
        </div>
      </section>

      <ContactSection />
      <SiteFooter base="../" />
    </React.Fragment>
  );
}
window.EntreprisePage = EntreprisePage;
