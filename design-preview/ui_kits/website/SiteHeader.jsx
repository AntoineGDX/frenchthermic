// FRENCH THERMIC — site header with primary nav + Expertise flyout + mobile drawer
const { useState: useHState } = React;
const { Button, IconButton } = window.FrenchThermic_dd06d0;

const EXPERTISE = [
  { label: 'Clim sans unité extérieure', desc: 'Confort sans modifier la façade', icon: 'Wind' },
  { label: 'Audit énergétique & DPE', desc: 'Diagnostic et plan de travaux', icon: 'Gauge' },
  { label: 'Conseil technique', desc: 'Accompagnement et maîtrise d’œuvre', icon: 'Compass' },
];

function NavLink({ children, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      background: 'none', border: 'none', cursor: 'pointer', font: 'var(--fw-semibold) 15px/1 var(--font-sans)',
      color: active ? 'var(--color-primary)' : 'var(--text-body)', padding: '8px 2px', position: 'relative',
    }}>{children}</button>
  );
}

function SiteHeader({ onNavigate }) {
  const [openExp, setOpenExp] = useHState(false);
  const [drawer, setDrawer] = useHState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, height: 'var(--header-h)', background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', height: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 28 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="../../assets/logo/frenchthermic-logo.png" alt="FRENCH THERMIC" style={{ height: 38 }} />
        </a>
        <nav className="ft-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 26, marginLeft: 8 }}>
          <NavLink onClick={() => onNavigate('home')}>Accueil</NavLink>
          <div onMouseEnter={() => setOpenExp(true)} onMouseLeave={() => setOpenExp(false)} style={{ position: 'relative' }}>
            <NavLink active={openExp}>Expertise ▾</NavLink>
            {openExp && (
              <div style={{
                position: 'absolute', top: '100%', left: -16, width: 340, background: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)', padding: 8,
              }}>
                {EXPERTISE.map((e) => (
                  <button key={e.label} onClick={() => onNavigate('service')} style={{
                    display: 'flex', gap: 12, width: '100%', textAlign: 'left', background: 'none', border: 'none',
                    cursor: 'pointer', padding: 12, borderRadius: 'var(--radius-md)', alignItems: 'flex-start',
                  }} onMouseEnter={(ev) => ev.currentTarget.style.background = 'var(--color-primary-soft)'}
                     onMouseLeave={(ev) => ev.currentTarget.style.background = 'none'}>
                    <span data-ico={e.icon} style={{ color: 'var(--color-accent)', display: 'flex', marginTop: 2 }} />
                    <span>
                      <span style={{ display: 'block', font: 'var(--fw-bold) 14px/1.2 var(--font-sans)', color: 'var(--text-strong)' }}>{e.label}</span>
                      <span style={{ display: 'block', font: '13px/1.3 var(--font-sans)', color: 'var(--text-muted)', marginTop: 3 }}>{e.desc}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <NavLink onClick={() => onNavigate('about')}>L’entreprise</NavLink>
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="tel:+33000000000" className="ft-phone" style={{ display: 'flex', alignItems: 'center', gap: 8, font: 'var(--fw-bold) 15px/1 var(--font-sans)', color: 'var(--color-primary)', textDecoration: 'none' }}>
            <span data-ico="Phone" /> 01 23 45 67 89
          </a>
          <span className="ft-desktop-nav"><Button variant="accent" onClick={() => onNavigate('contact')}>Devis gratuit</Button></span>
          <span className="ft-mobile-only">
            <IconButton variant="secondary" aria-label="Menu" onClick={() => setDrawer(true)}><span data-ico="Menu" /></IconButton>
          </span>
        </div>
      </div>

      {drawer && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 60 }}>
          <div onClick={() => setDrawer(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(12,59,58,0.4)' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: '100%', background: 'var(--color-surface)', padding: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
              <IconButton variant="ghost" aria-label="Fermer" onClick={() => setDrawer(false)}><span data-ico="X" /></IconButton>
            </div>
            {['Accueil', 'Clim sans unité extérieure', 'Audit énergétique & DPE', 'Conseil technique', 'L’entreprise'].map((l, i) => (
              <button key={l} onClick={() => { setDrawer(false); onNavigate(i === 0 ? 'home' : i === 4 ? 'about' : 'service'); }} style={{
                textAlign: 'left', background: 'none', border: 'none', borderBottom: '1px solid var(--border)', padding: '14px 4px',
                font: 'var(--fw-semibold) 16px/1.2 var(--font-sans)', color: 'var(--text-strong)', cursor: 'pointer',
              }}>{l}</button>
            ))}
            <div style={{ marginTop: 16 }}><Button variant="accent" fullWidth onClick={() => { setDrawer(false); onNavigate('contact'); }}>Devis gratuit</Button></div>
          </div>
        </div>
      )}
    </header>
  );
}
window.SiteHeader = SiteHeader;
