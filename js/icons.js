// Hydrate [data-ico="LucideName"] spans with real Lucide SVGs (kept in sync across React re-renders)
function ftHydrateIcons() {
  if (!window.lucide) return;
  document.querySelectorAll('[data-ico]').forEach((el) => {
    const name = el.getAttribute('data-ico');
    const size = el.getAttribute('data-ico-size') || 20;
    const sig = name + ':' + size;
    if (el.__icoSig === sig && el.firstChild) return;
    const icon = window.lucide[name];
    if (!icon) return;
    const svg = window.lucide.createElement(icon);
    svg.setAttribute('width', size); svg.setAttribute('height', size);
    svg.setAttribute('stroke-width', '2');
    el.innerHTML = ''; el.appendChild(svg); el.__icoSig = sig;
  });
}
window.ftHydrateIcons = ftHydrateIcons;

function ftMountApp(App) {
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
  const mo = new MutationObserver(() => window.ftHydrateIcons());
  mo.observe(document.getElementById('root'), { childList: true, subtree: true });
  setTimeout(() => window.ftHydrateIcons(), 300);
}
window.ftMountApp = ftMountApp;
