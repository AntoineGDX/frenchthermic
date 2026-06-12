---
name: frenchthermic-design
description: Use this skill to generate well-branded interfaces and assets for French Thermic (climatisation sans unité extérieure, audit énergétique & DPE, conseil technique), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `styles.css` — the single global entry point (tokens + fonts). Link this first.
- `tokens/` — colors (teal + terracotta + DPE A–G), typography (Sora / Manrope), spacing/radii/shadows/motion.
- `components/core/` + `components/domain/` — Button, IconButton, Badge, Card, Input, DpeBadge. Exposed at `window.FrenchThermic_dd06d0.*` after loading `_ds_bundle.js`. Each has a `.prompt.md` with usage.
- `ui_kits/website/` — interactive French HVAC marketing homepage; read these JSX files for composition patterns.
- `guidelines/cards/` — foundation specimens.
- `assets/logo/` — wordmark + monogram, light & on-dark.

## Brand essentials
- **Teal `#125C5E`** core, **terracotta `#DE865C`** single accent (CTA / eyebrows only). Warm teal-tinted neutrals. DPE green→red A–G scale for energy UI.
- **Sora** (display, heavy, tight tracking) + **Manrope** (body/UI). All-caps + wide tracking only for the wordmark and short eyebrows.
- French language, vous/nous, sentence case, no emoji. Exact regulatory terms: DPE, RGE, QualiPAC, MaPrimeRénov’, CEE.
- Soft rounded corners, cool teal-tinted shadows, terracotta focus ring, quiet ease-out motion, monogram-as-watermark on dark sections.

See README.md for full content, visual, and iconography guidance, plus important caveats (site content was password-protected; fonts/icons are close substitutes).
