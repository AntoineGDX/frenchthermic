# French Thermic — Design System

A brand & UI design system for **French Thermic**, a French thermal-engineering company specialising in **climatisation sans unité extérieure** (air conditioning without an outdoor unit), **energy audits & DPE**, and **technical consulting** for home comfort and energy performance.

> **Namespace:** components are exposed at `window.FrenchThermic_dd06d0.*` in card/kit HTML.
> Consumers link a single file — **`styles.css`** — for all tokens and fonts.

---

## Sources & provenance

This system was derived from the brand the user pointed us at:

- **Live site:** https://antoinegdx.github.io/frenchthermic/ (a WordPress / Divi build)
  - Information architecture observed: **Accueil** · **Expertise** → *Clim sans unité extérieure* / *Audit énergétique & DPE* / *Conseil technique* · **Sample Page**
- **GitHub repo:** https://github.com/AntoineGDX/frenchthermic — explore further to build higher-fidelity recreations once it contains the published source.
- **Logo artwork:** `uploads/French thermic.png` (provided by the user) → `assets/logo/`

> ⚠️ **Important caveat — content was inaccessible.** Every page on the live site is behind a WordPress password wall (*"Protégé Par Mot De Passe"*), and the GitHub repo returned no published source at the time of build. As a result, **the palette and type are sampled from the real logo and the IA is real, but page copy, photography, and exact section layouts in the UI kit are an informed interpretation of a French HVAC service site — not a pixel recreation of the live pages.** Provide the site password, a code export, or the Divi theme files and we can raise the kit to a faithful recreation.

---

## Brand in one breath

Deep, trustworthy **teal** (engineering, water, climate) warmed by a single **terracotta** accent (comfort, the human side of "home"). Professional but not cold; technical but approachable. French-language, B2C-leaning service brand operating in the energy-renovation space.

---

## Content fundamentals

How French Thermic writes (as reflected in this system's sample copy — adjust to the client's real voice once available):

- **Language:** French (France). Use proper typography — `’` curly apostrophe (*l’entreprise*, *MaPrimeRénov’*), `«　»` guillemets for quotes, `é/è/ê` accents, non-breaking space before `: ; ? !`.
- **Voice:** addresses the customer as **vous** (formal/respectful). Brand speaks as **nous**. Confident and reassuring, never salesy-loud.
- **Tone:** clear, concrete, benefit-led. Lead with the customer's constraint ("sans modifier la façade", "en copropriété"), then the outcome ("le confort, sans compromis").
- **Casing:** sentence case for body and most headings; **ALL-CAPS only for the wordmark and short eyebrow labels** (with wide tracking). Never all-caps full sentences.
- **Numbers & domain terms:** keep regulatory vocabulary exact and capitalised as official — **DPE**, **RGE**, **QualiPAC**, **MaPrimeRénov’**, **CEE**. Energy classes are single letters **A–G**.
- **Emoji:** none. This is a technical service brand — convey warmth through color and copy, not emoji.
- **Examples in use:** *"Le confort thermique, sans compromis."* · *"Demander un devis gratuit"* · *"Réponse sous 24h"* · *"Visualisez vos gains avant de vous engager."*

---

## Visual foundations

- **Color.** Teal `#125C5E` is the brand core (sampled from the logo); a 50–950 scale supports it. The lone accent is terracotta `#DE865C` (the orange square in the mark) — used sparingly for the single most important CTA, eyebrows, and highlights. Neutrals are warm, faintly teal-tinted grays. A domain-specific **DPE A→G scale** (green→red) is included for energy-performance UI. See `tokens/colors.css`.
- **Type.** Display = **Sora** (geometric, echoes the bold geometric caps of the wordmark); Text/UI = **Manrope** (clean humanist grotesque). Headlines are heavy (800/700) with tight tracking `-0.02em`; eyebrows are all-caps Sora with `0.12em` tracking lifted straight from the logo. Body is Manrope 16px / 1.6. See `tokens/typography.css`.
- **Backgrounds.** Three registers: light (`--color-bg`, near-white), warm (`--color-bg-warm`, faint terracotta) for alternating sections, and dark (`--color-surface-dark`, teal-900) for hero/footer. No photographic backgrounds are shipped (none were available); the **monogram is used as a large low-opacity watermark motif** on dark sections instead. Add real photography when supplied.
- **Spacing & layout.** 4px base scale; `--container` 1200px; sticky 76px header. Generous section padding (~88–96px vertical).
- **Radii.** Soft and rounded, echoing the logo's rounded stroke terminals: cards `--radius-lg` (18px), buttons `--radius-md` (12px), pills/badges full-round. Nothing sharp-cornered.
- **Shadows.** Soft and **cool teal-tinted** (`rgba(12,59,58,…)`), never neutral-black. Five-step scale from `xs` hairline to `xl` hero-card lift.
- **Cards.** White surface, 1px neutral border, `--radius-lg`, soft shadow. Featured cards get a **3px terracotta top keyline** (`accent` prop) — the only "colored border" pattern used.
- **Borders.** 1px `--border` (neutral-200) at rest, `--border-strong` for inputs; on dark surfaces use `--border-on-dark` (white @ 16%).
- **Motion.** Quiet and functional: 140–220ms, `ease-out`. Hover = darken (primary/accent) or soft-tint (secondary/ghost); cards **lift 3px + deepen shadow**. Press = `translateY(1px)`. No bounces, no infinite loops, no parallax. Respect `prefers-reduced-motion`.
- **Focus.** Terracotta focus ring (`--shadow-focus`, terracotta @ 45%) — warm, high-visibility, on-brand.
- **Transparency & blur.** Used deliberately: the sticky header is `rgba(255,255,255,0.88)` + `blur(12px)`; the hero info panel is a glass card (`rgba(255,255,255,0.07)` + blur) on the dark hero. Not used decoratively elsewhere.
- **Imagery vibe (target).** When real photos arrive: warm, naturally-lit interiors; avoid cold blue casts (the brand's warmth lives in the terracotta + neutral tones). Pair photos with the teal/terracotta system rather than competing with it.

---

## Iconography

- **Set:** [**Lucide**](https://lucide.dev) (CDN), stroke-based, 2px weight, rounded joins — matches the soft, rounded, geometric feel of the logo and avoids heavy/filled icons. **This is a substitution:** the live site is a Divi build that would ship Divi's own `ETmodules` icon font, which was inaccessible. Swap Lucide for the real icon set if/when the theme files are provided.
- **Usage:** rendered via the `[data-ico="LucideName"]` hydration helper in the UI kit (`ftHydrateIcons`), or `lucide.createElement` in component cards. Default 20px, `currentColor` so they inherit text/brand color.
- **Common glyphs in use:** `Wind` (climatisation), `Gauge` (audit/DPE), `Compass` (conseil), `Leaf` (energy/aides), `ShieldCheck`/`BadgeCheck` (certifications), `Phone`/`Mail`/`MapPin` (contact), `ArrowRight`, `Check`, `Send`.
- **Emoji / unicode icons:** not used. The DPE arrow chip is drawn with CSS `clip-path`, not an emoji or image.
- **No hand-drawn SVG illustrations** are shipped. The only brand graphic is the **FF monogram** (`assets/logo/`), reused as a watermark.

---

## Index — what's in this system

**Foundations / tokens** (`tokens/`, reached from root `styles.css`)
- `tokens/colors.css` — teal & terracotta scales, neutrals, status, DPE A–G, semantic aliases
- `tokens/typography.css` — font families, weights, type scale, line-heights, tracking
- `tokens/spacing.css` — spacing, radii, shadows, motion, layout
- `tokens/fonts.css` — Sora + Manrope (Google Fonts CDN — see Caveats)

**Components** (`components/`, exposed at `window.FrenchThermic_dd06d0`)
- `core/Button` · `core/IconButton` · `core/Badge` · `core/Card` · `core/Input`
- `domain/DpeBadge` — energy-class chip (A–G), shaped like the official DPE label

**UI kit** (`ui_kits/website/`)
- `index.html` — interactive marketing homepage (header + Expertise flyout + mobile drawer, hero, trust band, services, DPE simulator, contact form, footer)
- Composed from `SiteHeader` · `Hero` · `Services` · `DpeSection` · `ContactSection` / `SiteFooter`

**Specimen cards** (`guidelines/cards/`) — populate the Design System tab: Colors (5), Type (4), Spacing (3), Brand (3).

**Brand assets** (`assets/logo/`)
- `frenchthermic-logo.png` / `-white.png` — full lockups (light / on-dark)
- `frenchthermic-mark.png` / `-white.png` — FF monogram

---

## Caveats & open questions

1. **Content is locked.** The live site is password-protected — copy, photography, and exact layouts are interpretations. *Please share the password, a code export, or the Divi theme to make the UI kit a true recreation.*
2. **Fonts are a CDN match.** Sora + Manrope are loaded from Google Fonts as close, free stand-ins for the wordmark's geometry. *Send the real licensed font files and we'll self-host them via `@font-face`.*
3. **Icons are Lucide (substitute)** for Divi's inaccessible `ETmodules` font.
4. **No product photography** was available; the system leans on color, the monogram motif, and icons. Real imagery should be added.
