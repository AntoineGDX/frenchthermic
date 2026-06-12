// FRENCH THERMIC — shared site chrome (header, footer, contact, page hero, trust band)
// `base` is the relative path prefix back to the site root (e.g. "", "../", "../../").
const { Button: FtButton, IconButton: FtIconButton, Input: FtInput, Card: FtCard, Badge: FtBadge } = window.FrenchThermic_dd06d0;
const { useState: useFtState } = React;

const EXPERTISE_LINKS = [
  { label: 'Clim sans unité extérieure', desc: 'Confort sans modifier la façade', icon: 'Wind', href: 'expertise/clim-sans-unite-exterieure/' },
  { label: 'Audit énergétique & DPE', desc: 'Diagnostic et plan de travaux', icon: 'Gauge', href: 'expertise/dpe-audit-energetique/' },
  { label: 'Conseil technique', desc: 'Accompagnement et maîtrise d’œuvre', icon: 'Compass', href: 'expertise/conseil-technique/' },
];

function NavLink({ href, active, children }) {
  return (
    <a href={href} style={{
      textDecoration: 'none', font: 'var(--fw-semibold) 15px/1 var(--font-sans)',
      color: active ? 'var(--color-primary)' : 'var(--text-body)', padding: '8px 2px', position: 'relative',
    }}>{children}</a>
  );
}

function SiteHeader({ base = '', active = '' }) {
  const [openExp, setOpenExp] = useFtState(false);
  const [drawer, setDrawer] = useFtState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, height: 'var(--header-h)', background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', height: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href={base || '.'} style={{ display: 'flex', alignItems: 'center' }}>
          <img src={base + 'assets/logo/frenchthermic-logo.png'} alt="FRENCH THERMIC" style={{ height: 38 }} />
        </a>
        <nav className="ft-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 26, marginLeft: 8 }}>
          <NavLink href={base || '.'} active={active === 'home'}>Accueil</NavLink>
          <div onMouseEnter={() => setOpenExp(true)} onMouseLeave={() => setOpenExp(false)} style={{ position: 'relative' }}>
            <NavLink href={base + 'expertise/'} active={active === 'expertise' || openExp}>Expertise ▾</NavLink>
            {openExp && (
              <div style={{
                position: 'absolute', top: '100%', left: -16, width: 340, background: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)', padding: 8,
              }}>
                {EXPERTISE_LINKS.map((e) => (
                  <a key={e.label} href={base + e.href} style={{
                    display: 'flex', gap: 12, width: '100%', textAlign: 'left', background: 'none', border: 'none', textDecoration: 'none',
                    cursor: 'pointer', padding: 12, borderRadius: 'var(--radius-md)', alignItems: 'flex-start',
                  }} onMouseEnter={(ev) => ev.currentTarget.style.background = 'var(--color-primary-soft)'}
                     onMouseLeave={(ev) => ev.currentTarget.style.background = 'none'}>
                    <span data-ico={e.icon} style={{ color: 'var(--color-accent)', display: 'flex', marginTop: 2 }} />
                    <span>
                      <span style={{ display: 'block', font: 'var(--fw-bold) 14px/1.2 var(--font-sans)', color: 'var(--text-strong)' }}>{e.label}</span>
                      <span style={{ display: 'block', font: '13px/1.3 var(--font-sans)', color: 'var(--text-muted)', marginTop: 3 }}>{e.desc}</span>
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <NavLink href={base + 'entreprise/'} active={active === 'entreprise'}>L’entreprise</NavLink>
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="tel:+33123456789" className="ft-phone" style={{ display: 'flex', alignItems: 'center', gap: 8, font: 'var(--fw-bold) 15px/1 var(--font-sans)', color: 'var(--color-primary)', textDecoration: 'none' }}>
            <span data-ico="Phone" /> 01 23 45 67 89
          </a>
          <span className="ft-desktop-nav"><FtButton variant="accent" onClick={() => { window.location.href = base + '#contact'; }}>Devis gratuit</FtButton></span>
          <span className="ft-mobile-only">
            <FtIconButton variant="secondary" aria-label="Menu" onClick={() => setDrawer(true)}><span data-ico="Menu" /></FtIconButton>
          </span>
        </div>
      </div>

      {drawer && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 60 }}>
          <div onClick={() => setDrawer(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(12,59,58,0.4)' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: '100%', background: 'var(--color-surface)', padding: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
              <FtIconButton variant="ghost" aria-label="Fermer" onClick={() => setDrawer(false)}><span data-ico="X" /></FtIconButton>
            </div>
            <a href={base || '.'} style={{ textAlign: 'left', textDecoration: 'none', borderBottom: '1px solid var(--border)', padding: '14px 4px', font: 'var(--fw-semibold) 16px/1.2 var(--font-sans)', color: 'var(--text-strong)' }}>Accueil</a>
            <a href={base + 'expertise/'} style={{ textAlign: 'left', textDecoration: 'none', borderBottom: '1px solid var(--border)', padding: '14px 4px', font: 'var(--fw-semibold) 16px/1.2 var(--font-sans)', color: 'var(--text-strong)' }}>Expertise</a>
            {EXPERTISE_LINKS.map((e) => (
              <a key={e.label} href={base + e.href} style={{ textAlign: 'left', textDecoration: 'none', borderBottom: '1px solid var(--border)', padding: '14px 4px 14px 16px', font: 'var(--fw-medium) 15px/1.2 var(--font-sans)', color: 'var(--text-body)' }}>{e.label}</a>
            ))}
            <a href={base + 'entreprise/'} style={{ textAlign: 'left', textDecoration: 'none', borderBottom: '1px solid var(--border)', padding: '14px 4px', font: 'var(--fw-semibold) 16px/1.2 var(--font-sans)', color: 'var(--text-strong)' }}>L’entreprise</a>
            <div style={{ marginTop: 16 }}><FtButton variant="accent" fullWidth onClick={() => { window.location.href = base + '#contact'; }}>Devis gratuit</FtButton></div>
          </div>
        </div>
      )}
    </header>
  );
}

function TrustBand() {
  const items = [['ShieldCheck', 'Certifié RGE'], ['BadgeCheck', 'Garantie décennale'], ['Leaf', 'Aides MaPrimeRénov’'], ['Clock', 'Réponse sous 24h']];
  return (
    <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '22px 24px', display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map(([ic, t]) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, font: 'var(--fw-semibold) 14px/1 var(--font-sans)', color: 'var(--text-body)' }}>
            <span data-ico={ic} data-ico-size="20" style={{ color: 'var(--color-primary)', display: 'flex' }} />{t}
          </div>
        ))}
      </div>
    </div>
  );
}

// Compact dark hero used on sub-pages (Expertise detail, Entreprise)
function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section style={{ position: 'relative', background: 'var(--color-surface-dark)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '64px 24px 64px', position: 'relative' }}>
        {eyebrow && <FtBadge variant="accent" dot>{eyebrow}</FtBadge>}
        <h1 style={{ font: 'var(--fw-extra) clamp(32px, 4.5vw, 52px)/1.08 var(--font-display)', letterSpacing: 'var(--tracking-tight)', color: '#fff', margin: '18px 0 0' }}>{title}</h1>
        {subtitle && <p style={{ font: '17px/1.6 var(--font-sans)', color: 'rgba(255,255,255,0.78)', margin: '18px 0 0', maxWidth: 620 }}>{subtitle}</p>}
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useFtState(false);
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
        <FtCard elevation="md" padding="lg">
          {sent ? (
            <div style={{ textAlign: 'center', padding: '36px 12px' }}>
              <span style={{ width: 58, height: 58, borderRadius: '50%', background: 'var(--success-100)', color: 'var(--success-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><span data-ico="Check" data-ico-size="28" /></span>
              <h3 style={{ font: 'var(--fw-bold) 22px/1.2 var(--font-display)', color: 'var(--text-strong)', margin: '0 0 8px' }}>Demande envoyée</h3>
              <p style={{ font: '15px/1.5 var(--font-sans)', color: 'var(--text-body)', margin: 0 }}>Merci ! Nous vous recontactons sous 24h.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <FtInput label="Prénom" placeholder="Marie" />
                <FtInput label="Nom" placeholder="Durand" />
              </div>
              <FtInput label="Email" type="email" placeholder="vous@exemple.fr" iconLeft={<span data-ico="Mail" data-ico-size="16" />} />
              <FtInput label="Code postal" placeholder="75011" iconLeft={<span data-ico="MapPin" data-ico-size="16" />} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ font: 'var(--fw-semibold) 13px/1 var(--font-sans)', color: 'var(--text-strong)' }}>Votre projet</label>
                <textarea rows="3" placeholder="Ex. climatiser un T3 en copropriété, sans unité extérieure…" style={{ font: '15px/1.5 var(--font-sans)', color: 'var(--text-strong)', padding: 12, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-strong)', outline: 'none', resize: 'vertical' }} />
              </div>
              <FtButton variant="accent" size="lg" type="submit" fullWidth iconRight={<span data-ico="Send" data-ico-size="16" />}>Envoyer ma demande</FtButton>
            </form>
          )}
        </FtCard>
      </div>
    </section>
  );
}

function SiteFooter({ base = '' }) {
  const cols = [
    ['Expertise', EXPERTISE_LINKS.map((e) => [e.label, base + e.href])],
    ['Entreprise', [['À propos', base + 'entreprise/'], ['Certifications RGE', base + 'entreprise/#certifications'], ['Zones d’intervention', base + 'entreprise/#zones'], ['Contact', base + '#contact']]],
    ['Ressources', [['Aides & MaPrimeRénov’', base + 'expertise/dpe-audit-energetique/#aides'], ['FAQ', base + 'entreprise/#faq'], ['Mentions légales', base + 'entreprise/#mentions']]],
  ];
  return (
    <footer style={{ background: 'var(--color-surface-dark)', color: 'rgba(255,255,255,0.7)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '64px 24px 36px', display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: 40 }} className="ft-footer-grid">
        <div>
          <img src={base + 'assets/logo/frenchthermic-logo-white.png'} alt="FRENCH THERMIC" style={{ height: 34, marginBottom: 18 }} />
          <p style={{ font: '14px/1.6 var(--font-sans)', maxWidth: 260, margin: 0 }}>Confort thermique et performance énergétique, sans unité extérieure.</p>
        </div>
        {cols.map(([title, links]) => (
          <div key={title}>
            <div style={{ font: 'var(--fw-bold) 13px/1 var(--font-display)', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>{title}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {links.map(([l, href]) => <li key={l}><a href={href} style={{ font: '14px/1.3 var(--font-sans)', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{l}</a></li>)}
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

// Simple accordion for FAQ-style content blocks
function FaqAccordion({ items }) {
  const [open, setOpen] = useFtState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((it, i) => (
        <FtCard key={it.q} padding="md" elevation="sm">
          <button onClick={() => setOpen(open === i ? -1 : i)} style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
            background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0,
            font: 'var(--fw-bold) 16px/1.3 var(--font-sans)', color: 'var(--text-strong)',
          }}>
            {it.q}
            <span data-ico={open === i ? 'Minus' : 'Plus'} data-ico-size="18" style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
          </button>
          {open === i && <p style={{ font: '15px/1.6 var(--font-sans)', color: 'var(--text-body)', margin: '14px 0 0' }}>{it.a}</p>}
        </FtCard>
      ))}
    </div>
  );
}

window.FaqAccordion = FaqAccordion;
window.SiteHeader = SiteHeader;
window.SiteFooter = SiteFooter;
window.TrustBand = TrustBand;
window.PageHero = PageHero;
window.ContactSection = ContactSection;
window.EXPERTISE_LINKS = EXPERTISE_LINKS;
