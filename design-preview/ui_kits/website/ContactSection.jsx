// FRENCH THERMIC — contact / quote request + footer
const { Input: CInput, Button: CButton, Card: CCard } = window.FrenchThermic_dd06d0;
const { useState: useCState } = React;

function ContactSection() {
  const [sent, setSent] = useCState(false);
  return (
    <section id="contact" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '96px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: 56, alignItems: 'start' }} className="ft-hero-grid">
        <div>
          <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 14 }}>Contact</div>
          <h2 style={{ font: 'var(--fw-extra) clamp(30px,3.4vw,42px)/1.1 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)', margin: '0 0 16px' }}>
            Parlons de votre projet
          </h2>
          <p style={{ font: '16px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: '0 0 28px', maxWidth: 420 }}>
            Décrivez votre logement et vos contraintes. Nous revenons vers vous sous 24h avec un premier avis et un rendez-vous.
          </p>
          {[['Phone', '01 23 45 67 89'], ['Mail', 'contact@frenchthermic.fr'], ['MapPin', 'Île-de-France & alentours']].map(([ic, t]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><span data-ico={ic} data-ico-size="18" /></span>
              <span style={{ font: 'var(--fw-semibold) 15px/1.2 var(--font-sans)', color: 'var(--text-strong)' }}>{t}</span>
            </div>
          ))}
        </div>
        <CCard elevation="md" padding="lg">
          {sent ? (
            <div style={{ textAlign: 'center', padding: '36px 12px' }}>
              <span style={{ width: 58, height: 58, borderRadius: '50%', background: 'var(--success-100)', color: 'var(--success-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><span data-ico="Check" data-ico-size="28" /></span>
              <h3 style={{ font: 'var(--fw-bold) 22px/1.2 var(--font-display)', color: 'var(--text-strong)', margin: '0 0 8px' }}>Demande envoyée</h3>
              <p style={{ font: '15px/1.5 var(--font-sans)', color: 'var(--text-body)', margin: 0 }}>Merci ! Nous vous recontactons sous 24h.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <CInput label="Prénom" placeholder="Marie" />
                <CInput label="Nom" placeholder="Durand" />
              </div>
              <CInput label="Email" type="email" placeholder="vous@exemple.fr" iconLeft={<span data-ico="Mail" data-ico-size="16" />} />
              <CInput label="Code postal" placeholder="75011" iconLeft={<span data-ico="MapPin" data-ico-size="16" />} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ font: 'var(--fw-semibold) 13px/1 var(--font-sans)', color: 'var(--text-strong)' }}>Votre projet</label>
                <textarea rows="3" placeholder="Ex. climatiser un T3 en copropriété, sans unité extérieure…" style={{ font: '15px/1.5 var(--font-sans)', color: 'var(--text-strong)', padding: 12, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-strong)', outline: 'none', resize: 'vertical' }} />
              </div>
              <CButton variant="accent" size="lg" type="submit" fullWidth iconRight={<span data-ico="Send" data-ico-size="16" />}>Envoyer ma demande</CButton>
            </form>
          )}
        </CCard>
      </div>
    </section>
  );
}

function SiteFooter() {
  const cols = [
    ['Expertise', ['Clim sans unité extérieure', 'Audit énergétique & DPE', 'Conseil technique']],
    ['Entreprise', ['À propos', 'Certifications RGE', 'Zones d’intervention', 'Contact']],
    ['Ressources', ['Aides & MaPrimeRénov’', 'FAQ', 'Mentions légales']],
  ];
  return (
    <footer style={{ background: 'var(--color-surface-dark)', color: 'rgba(255,255,255,0.7)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '64px 24px 36px', display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: 40 }} className="ft-footer-grid">
        <div>
          <img src="../../assets/logo/frenchthermic-logo-white.png" alt="FRENCH THERMIC" style={{ height: 34, marginBottom: 18 }} />
          <p style={{ font: '14px/1.6 var(--font-sans)', maxWidth: 260, margin: 0 }}>Confort thermique et performance énergétique, sans unité extérieure.</p>
        </div>
        {cols.map(([title, links]) => (
          <div key={title}>
            <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>{title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {links.map((l) => <li key={l}><a href="#" style={{ font: '14px/1.3 var(--font-sans)', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '20px 24px', font: '13px/1.4 var(--font-sans)', color: 'rgba(255,255,255,0.5)' }}>© 2026 French Thermic — Tous droits réservés.</div>
      </div>
    </footer>
  );
}
window.ContactSection = ContactSection;
window.SiteFooter = SiteFooter;
