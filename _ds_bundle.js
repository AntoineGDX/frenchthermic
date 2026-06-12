/* @ds-bundle: {"format":3,"namespace":"FrenchThermic_dd06d0","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"DpeBadge","sourcePath":"components/domain/DpeBadge.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a4ccebc53a2f","components/core/Button.jsx":"1f9a11ba43a5","components/core/Card.jsx":"02f2b8afdf3f","components/core/IconButton.jsx":"432883b2e052","components/core/Input.jsx":"d7fc38fdf6a6","components/domain/DpeBadge.jsx":"90eb4d91ed40","ui_kits/website/ContactSection.jsx":"a94e5556076f","ui_kits/website/DpeSection.jsx":"dba4c866ca81","ui_kits/website/Hero.jsx":"67b3d17d9c75","ui_kits/website/Services.jsx":"2956763abd95","ui_kits/website/SiteHeader.jsx":"b24afa1ccc05"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FrenchThermic_dd06d0 = window.FrenchThermic_dd06d0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FRENCH THERMIC — Badge
 * Small status / label pill.
 */
function Badge({
  variant = 'neutral',
  size = 'md',
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'var(--neutral-100)',
      color: 'var(--neutral-700)'
    },
    teal: {
      background: 'var(--teal-50)',
      color: 'var(--teal-700)'
    },
    accent: {
      background: 'var(--terracotta-100)',
      color: 'var(--terracotta-700)'
    },
    success: {
      background: 'var(--success-100)',
      color: 'var(--success-500)'
    },
    warning: {
      background: 'var(--warning-100)',
      color: '#9a6a18'
    },
    danger: {
      background: 'var(--danger-100)',
      color: 'var(--danger-500)'
    },
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--text-inverse)'
    }
  }[variant];
  const sz = {
    sm: {
      fs: 11,
      pad: '3px 9px'
    },
    md: {
      fs: 12,
      pad: '5px 12px'
    }
  }[size];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: sz.pad,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: sz.fs,
      lineHeight: 1,
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-pill)',
      ...variants,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: 0.8
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FRENCH THERMIC — Button
 * Primary action control. Teal by default, terracotta for high-emphasis CTAs.
 */
function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 36,
      fontSize: 14,
      gap: 7,
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '0 20px',
      height: 46,
      fontSize: 15,
      gap: 9,
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '0 28px',
      height: 56,
      fontSize: 17,
      gap: 10,
      radius: 'var(--radius-md)'
    }
  }[size];
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--color-surface)',
      color: 'var(--color-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid transparent'
    }
  }[variant];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes.gap,
    height: sizes.height,
    padding: sizes.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-bold)',
    fontSize: sizes.fontSize,
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: sizes.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    ...variants,
    ...style
  };
  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-hover)',
    secondary: 'var(--color-primary-soft)',
    ghost: 'var(--color-primary-soft)'
  }[variant];
  const onEnter = e => {
    if (!disabled) {
      e.currentTarget.style.background = hoverBg;
    }
  };
  const onLeave = e => {
    if (!disabled) {
      e.currentTarget.style.background = variants.background;
    }
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'translateY(0)';
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FRENCH THERMIC — Card
 * Soft, elevated surface. `elevation` controls the shadow; `accent`
 * adds a terracotta top keyline (used for featured services).
 */
function Card({
  elevation = 'sm',
  accent = false,
  padding = 'lg',
  hoverable = false,
  children,
  style = {},
  ...rest
}) {
  const pad = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  }[padding];
  const shadow = {
    none: 'none',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--border)',
      borderTop: accent ? '3px solid var(--color-accent)' : '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: pad,
      boxShadow: shadow,
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: hoverable ? e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      e.currentTarget.style.transform = 'translateY(-3px)';
    } : undefined,
    onMouseLeave: hoverable ? e => {
      e.currentTarget.style.boxShadow = shadow;
      e.currentTarget.style.transform = 'translateY(0)';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FRENCH THERMIC — IconButton
 * Square/round icon-only control. Pass an icon node as children.
 */
function IconButton({
  variant = 'secondary',
  size = 'md',
  round = false,
  disabled = false,
  'aria-label': ariaLabel,
  children,
  style = {},
  ...rest
}) {
  const dim = {
    sm: 36,
    md: 46,
    lg: 56
  }[size];
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--color-surface)',
      color: 'var(--color-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    }
  }[variant];
  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-hover)',
    secondary: 'var(--color-primary-soft)',
    ghost: 'var(--color-surface-sunken)'
  }[variant];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...variants,
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hoverBg;
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants.background;
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FRENCH THERMIC — Input
 * Text field with optional label, leading icon and helper/error text.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  helper,
  error,
  iconLeft = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? `ft-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--danger-500)' : focused ? 'var(--color-primary)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 13,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 48,
      padding: '0 14px',
      background: disabled ? 'var(--color-surface-sunken)' : 'var(--color-surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/domain/DpeBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DPE_COLORS = {
  A: 'var(--dpe-a)',
  B: 'var(--dpe-b)',
  C: 'var(--dpe-c)',
  D: 'var(--dpe-d)',
  E: 'var(--dpe-e)',
  F: 'var(--dpe-f)',
  G: 'var(--dpe-g)'
};
// D & E are bright → use dark text
const DARK_TEXT = {
  D: true,
  E: true
};

/**
 * FRENCH THERMIC — DpeBadge
 * Energy-class chip (Diagnostic de Performance Énergétique).
 * The arrow shape mirrors France's official DPE label.
 */
function DpeBadge({
  grade = 'C',
  size = 'md',
  label,
  style = {},
  ...rest
}) {
  const g = String(grade).toUpperCase();
  const dim = {
    sm: 34,
    md: 46,
    lg: 60
  }[size];
  const fs = {
    sm: 16,
    md: 22,
    lg: 30
  }[size];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-display)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      paddingLeft: dim * 0.32,
      paddingRight: dim * 0.5,
      height: dim,
      background: DPE_COLORS[g] || 'var(--neutral-300)',
      color: DARK_TEXT[g] ? 'var(--neutral-900)' : '#fff',
      fontWeight: 'var(--fw-extra)',
      fontSize: fs,
      lineHeight: 1,
      clipPath: 'polygon(0 0, calc(100% - ' + dim * 0.45 + 'px) 0, 100% 50%, calc(100% - ' + dim * 0.45 + 'px) 100%, 0 100%)',
      borderRadius: '3px 0 0 3px'
    }
  }, g), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { DpeBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/DpeBadge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactSection.jsx
try { (() => {
// FRENCH THERMIC — contact / quote request + footer
const {
  Input: CInput,
  Button: CButton,
  Card: CCard
} = window.FrenchThermic_dd06d0;
const {
  useState: useCState
} = React;
function ContactSection() {
  const [sent, setSent] = useCState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 56,
      alignItems: 'start'
    },
    className: "ft-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 13px/1 var(--font-display)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-accent)',
      marginBottom: 14
    }
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-extra) clamp(30px,3.4vw,42px)/1.1 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      margin: '0 0 16px'
    }
  }, "Parlons de votre projet"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '16px/1.6 var(--font-sans)',
      color: 'var(--text-body)',
      margin: '0 0 28px',
      maxWidth: 420
    }
  }, "D\xE9crivez votre logement et vos contraintes. Nous revenons vers vous sous 24h avec un premier avis et un rendez-vous."), [['Phone', '01 23 45 67 89'], ['Mail', 'contact@frenchthermic.fr'], ['MapPin', 'Île-de-France & alentours']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "data-ico": ic,
    "data-ico-size": "18"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 15px/1.2 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, t)))), /*#__PURE__*/React.createElement(CCard, {
    elevation: "md",
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '36px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 58,
      height: 58,
      borderRadius: '50%',
      background: 'var(--success-100)',
      color: 'var(--success-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    "data-ico": "Check",
    "data-ico-size": "28"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--fw-bold) 22px/1.2 var(--font-display)',
      color: 'var(--text-strong)',
      margin: '0 0 8px'
    }
  }, "Demande envoy\xE9e"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '15px/1.5 var(--font-sans)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, "Merci ! Nous vous recontactons sous 24h.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(CInput, {
    label: "Pr\xE9nom",
    placeholder: "Marie"
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "Nom",
    placeholder: "Durand"
  })), /*#__PURE__*/React.createElement(CInput, {
    label: "Email",
    type: "email",
    placeholder: "vous@exemple.fr",
    iconLeft: /*#__PURE__*/React.createElement("span", {
      "data-ico": "Mail",
      "data-ico-size": "16"
    })
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "Code postal",
    placeholder: "75011",
    iconLeft: /*#__PURE__*/React.createElement("span", {
      "data-ico": "MapPin",
      "data-ico-size": "16"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      font: 'var(--fw-semibold) 13px/1 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Votre projet"), /*#__PURE__*/React.createElement("textarea", {
    rows: "3",
    placeholder: "Ex. climatiser un T3 en copropri\xE9t\xE9, sans unit\xE9 ext\xE9rieure\u2026",
    style: {
      font: '15px/1.5 var(--font-sans)',
      color: 'var(--text-strong)',
      padding: 12,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-strong)',
      outline: 'none',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement(CButton, {
    variant: "accent",
    size: "lg",
    type: "submit",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement("span", {
      "data-ico": "Send",
      "data-ico-size": "16"
    })
  }, "Envoyer ma demande")))));
}
function SiteFooter() {
  const cols = [['Expertise', ['Clim sans unité extérieure', 'Audit énergétique & DPE', 'Conseil technique']], ['Entreprise', ['À propos', 'Certifications RGE', 'Zones d’intervention', 'Contact']], ['Ressources', ['Aides & MaPrimeRénov’', 'FAQ', 'Mentions légales']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-surface-dark)',
      color: 'rgba(255,255,255,0.7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '64px 24px 36px',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 40
    },
    className: "ft-footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/frenchthermic-logo-white.png",
    alt: "FRENCH THERMIC",
    style: {
      height: 34,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '14px/1.6 var(--font-sans)',
      maxWidth: 260,
      margin: 0
    }
  }, "Confort thermique et performance \xE9nerg\xE9tique, sans unit\xE9 ext\xE9rieure.")), cols.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 13px/1 var(--font-display)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#fff',
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      font: '14px/1.3 var(--font-sans)',
      color: 'rgba(255,255,255,0.7)',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '20px 24px',
      font: '13px/1.4 var(--font-sans)',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "\xA9 2026 French Thermic \u2014 Tous droits r\xE9serv\xE9s.")));
}
window.ContactSection = ContactSection;
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DpeSection.jsx
try { (() => {
// FRENCH THERMIC — interactive energy-class simulator strip
const {
  DpeBadge: DSimBadge,
  Card: DSimCard
} = window.FrenchThermic_dd06d0;
const {
  useState: useDState
} = React;
const GRADES = ['G', 'F', 'E', 'D', 'C', 'B', 'A'];
function DpeSection() {
  const [from, setFrom] = useDState(1); // F
  const [to, setTo] = useDState(5); // B
  const gain = Math.max(0, to - from);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-bg-warm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '88px 24px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 56,
      alignItems: 'center'
    },
    className: "ft-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 13px/1 var(--font-display)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-accent)',
      marginBottom: 14
    }
  }, "Performance \xE9nerg\xE9tique"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-extra) clamp(28px,3.2vw,40px)/1.12 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      margin: '0 0 16px'
    }
  }, "Visualisez vos gains avant de vous engager"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '16px/1.6 var(--font-sans)',
      color: 'var(--text-body)',
      margin: 0,
      maxWidth: 480
    }
  }, "Notre audit traduit vos travaux en classes DPE concr\xE8tes. Faites glisser pour estimer le saut de performance.")), /*#__PURE__*/React.createElement(DSimCard, {
    elevation: "lg",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 12px/1 var(--font-sans)',
      color: 'var(--text-muted)',
      marginBottom: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "Avant"), /*#__PURE__*/React.createElement(DSimBadge, {
    grade: GRADES[from],
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--success-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-extra) 30px/1 var(--font-display)'
    }
  }, "+", gain), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 11px/1.2 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "classes")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 12px/1 var(--font-sans)',
      color: 'var(--text-muted)',
      marginBottom: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "Apr\xE8s"), /*#__PURE__*/React.createElement(DSimBadge, {
    grade: GRADES[to],
    size: "lg"
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: 'var(--fw-semibold) 13px/1 var(--font-sans)',
      color: 'var(--text-strong)',
      marginBottom: 8
    }
  }, "Situation actuelle"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "6",
    value: from,
    onChange: e => {
      const v = +e.target.value;
      setFrom(v);
      if (v > to) setTo(v);
    },
    className: "ft-range",
    style: {
      width: '100%',
      accentColor: 'var(--color-primary)'
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: 'var(--fw-semibold) 13px/1 var(--font-sans)',
      color: 'var(--text-strong)',
      margin: '16px 0 8px'
    }
  }, "Objectif apr\xE8s travaux"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "6",
    value: to,
    onChange: e => {
      const v = +e.target.value;
      setTo(v);
      if (v < from) setFrom(v);
    },
    className: "ft-range",
    style: {
      width: '100%',
      accentColor: 'var(--color-accent)'
    }
  }))));
}
window.DpeSection = DpeSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DpeSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// FRENCH THERMIC — hero (illustration/color-led; no stock photos available behind the site password wall)
const {
  Button: HBtn,
  Badge: HBadge
} = window.FrenchThermic_dd06d0;
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--color-surface-dark)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/frenchthermic-mark-white.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: -60,
      top: -40,
      height: 'calc(100% + 120px)',
      opacity: 0.06,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '92px 24px 100px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)',
      gap: 56,
      alignItems: 'center'
    },
    className: "ft-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HBadge, {
    variant: "accent",
    dot: true
  }, "Climatisation sans unit\xE9 ext\xE9rieure"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-extra) clamp(40px, 5vw, 64px)/1.04 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: '#fff',
      margin: '20px 0 0'
    }
  }, "Le confort thermique,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent)'
    }
  }, "sans compromis.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '18px/1.6 var(--font-sans)',
      color: 'rgba(255,255,255,0.78)',
      margin: '22px 0 0',
      maxWidth: 520
    }
  }, "Chauffage, rafra\xEEchissement et performance \xE9nerg\xE9tique pour les logements o\xF9 l\u2019on ne peut pas \u2014 ou ne veut pas \u2014 poser de groupe ext\xE9rieur."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "accent",
    size: "lg",
    onClick: () => onNavigate('contact'),
    iconRight: /*#__PURE__*/React.createElement("span", {
      "data-ico": "ArrowRight"
    })
  }, "Demander un devis gratuit"), /*#__PURE__*/React.createElement(HBtn, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('service'),
    style: {
      background: 'transparent',
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.3)'
    }
  }, "D\xE9couvrir l\u2019expertise")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, [['15 ans', 'd’expertise thermique'], ['Certifié', 'RGE & QualiPAC'], ['Sous 24h', 'réponse à votre demande']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-extra) 24px/1 var(--font-display)',
      color: '#fff'
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '13px/1.3 var(--font-sans)',
      color: 'rgba(255,255,255,0.6)',
      marginTop: 4
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.07)',
      border: '1px solid rgba(255,255,255,0.14)',
      borderRadius: 'var(--radius-xl)',
      padding: 28,
      backdropFilter: 'blur(8px)'
    },
    className: "ft-hero-panel"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 13px/1 var(--font-sans)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--color-accent)'
    }
  }, "Gain de performance"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      margin: '20px 0'
    }
  }, React.createElement(window.FrenchThermic_dd06d0.DpeBadge, {
    grade: 'F',
    size: 'lg',
    label: 'Avant'
  }), /*#__PURE__*/React.createElement("span", {
    "data-ico": "ArrowRight",
    style: {
      color: 'rgba(255,255,255,0.5)'
    }
  }), React.createElement(window.FrenchThermic_dd06d0.DpeBadge, {
    grade: 'B',
    size: 'lg',
    label: 'Après'
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '14px/1.55 var(--font-sans)',
      color: 'rgba(255,255,255,0.72)',
      margin: 0
    }
  }, "Un audit \xE9nerg\xE9tique chiffre vos gains r\xE9els avant travaux \u2014 et les aides mobilisables (MaPrimeR\xE9nov\u2019, CEE)."))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// FRENCH THERMIC — services / expertise grid (the three real Expertise sub-pages)
const {
  Card: SCard,
  Badge: SBadge,
  Button: SBtn
} = window.FrenchThermic_dd06d0;
const SERVICES = [{
  icon: 'Wind',
  tag: 'Phare',
  title: 'Clim sans unité extérieure',
  body: 'Rafraîchir et chauffer sans groupe en façade — idéal en copropriété, centre-ville ou bâtiment classé.',
  items: ['Sans modification de façade', 'Silencieux', 'Réversible chaud / froid']
}, {
  icon: 'Gauge',
  tag: null,
  title: 'Audit énergétique & DPE',
  body: 'Diagnostic complet, classe énergétique et plan de travaux chiffré avec les aides mobilisables.',
  items: ['DPE réglementaire', 'Scénarios de rénovation', 'MaPrimeRénov’ & CEE']
}, {
  icon: 'Compass',
  tag: null,
  title: 'Conseil technique',
  body: 'Accompagnement indépendant, du dimensionnement à la réception du chantier.',
  items: ['Étude thermique', 'Choix des équipements', 'Maîtrise d’œuvre']
}];
function Services({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 13px/1 var(--font-display)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-accent)',
      marginBottom: 14
    }
  }, "Notre expertise"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-extra) clamp(30px,3.4vw,42px)/1.1 var(--font-display)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Trois m\xE9tiers, une obsession : votre confort")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 24
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(SCard, {
    key: s.title,
    accent: !!s.tag,
    hoverable: true,
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "data-ico": s.icon,
    "data-ico-size": "26"
  })), s.tag && /*#__PURE__*/React.createElement(SBadge, {
    variant: "accent"
  }, s.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--fw-bold) 21px/1.2 var(--font-display)',
      color: 'var(--text-strong)',
      margin: '20px 0 10px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '15px/1.6 var(--font-sans)',
      color: 'var(--text-body)',
      margin: '0 0 18px'
    }
  }, s.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, s.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center',
      font: 'var(--fw-medium) 14px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "data-ico": "Check",
    "data-ico-size": "16",
    style: {
      color: 'var(--success-500)',
      display: 'flex'
    }
  }), it))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SBtn, {
    variant: "ghost",
    onClick: () => onNavigate('service'),
    iconRight: /*#__PURE__*/React.createElement("span", {
      "data-ico": "ArrowRight",
      "data-ico-size": "16"
    }),
    style: {
      padding: '0 2px',
      height: 'auto'
    }
  }, "En savoir plus"))))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// FRENCH THERMIC — site header with primary nav + Expertise flyout + mobile drawer
const {
  useState: useHState
} = React;
const {
  Button,
  IconButton
} = window.FrenchThermic_dd06d0;
const EXPERTISE = [{
  label: 'Clim sans unité extérieure',
  desc: 'Confort sans modifier la façade',
  icon: 'Wind'
}, {
  label: 'Audit énergétique & DPE',
  desc: 'Diagnostic et plan de travaux',
  icon: 'Gauge'
}, {
  label: 'Conseil technique',
  desc: 'Accompagnement et maîtrise d’œuvre',
  icon: 'Compass'
}];
function NavLink({
  children,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      font: 'var(--fw-semibold) 15px/1 var(--font-sans)',
      color: active ? 'var(--color-primary)' : 'var(--text-body)',
      padding: '8px 2px',
      position: 'relative'
    }
  }, children);
}
function SiteHeader({
  onNavigate
}) {
  const [openExp, setOpenExp] = useHState(false);
  const [drawer, setDrawer] = useHState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 'var(--header-h)',
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      height: '100%',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/frenchthermic-logo.png",
    alt: "FRENCH THERMIC",
    style: {
      height: 38
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "ft-desktop-nav",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    onClick: () => onNavigate('home')
  }, "Accueil"), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setOpenExp(true),
    onMouseLeave: () => setOpenExp(false),
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    active: openExp
  }, "Expertise \u25BE"), openExp && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: -16,
      width: 340,
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border)',
      padding: 8
    }
  }, EXPERTISE.map(e => /*#__PURE__*/React.createElement("button", {
    key: e.label,
    onClick: () => onNavigate('service'),
    style: {
      display: 'flex',
      gap: 12,
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 12,
      borderRadius: 'var(--radius-md)',
      alignItems: 'flex-start'
    },
    onMouseEnter: ev => ev.currentTarget.style.background = 'var(--color-primary-soft)',
    onMouseLeave: ev => ev.currentTarget.style.background = 'none'
  }, /*#__PURE__*/React.createElement("span", {
    "data-ico": e.icon,
    style: {
      color: 'var(--color-accent)',
      display: 'flex',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--fw-bold) 14px/1.2 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, e.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '13px/1.3 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, e.desc)))))), /*#__PURE__*/React.createElement(NavLink, {
    onClick: () => onNavigate('about')
  }, "L\u2019entreprise")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+33000000000",
    className: "ft-phone",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--fw-bold) 15px/1 var(--font-sans)',
      color: 'var(--color-primary)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "data-ico": "Phone"
  }), " 01 23 45 67 89"), /*#__PURE__*/React.createElement("span", {
    className: "ft-desktop-nav"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNavigate('contact')
  }, "Devis gratuit")), /*#__PURE__*/React.createElement("span", {
    className: "ft-mobile-only"
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "secondary",
    "aria-label": "Menu",
    onClick: () => setDrawer(true)
  }, /*#__PURE__*/React.createElement("span", {
    "data-ico": "Menu"
  }))))), drawer && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setDrawer(false),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(12,59,58,0.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 300,
      height: '100%',
      background: 'var(--color-surface)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    "aria-label": "Fermer",
    onClick: () => setDrawer(false)
  }, /*#__PURE__*/React.createElement("span", {
    "data-ico": "X"
  }))), ['Accueil', 'Clim sans unité extérieure', 'Audit énergétique & DPE', 'Conseil technique', 'L’entreprise'].map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => {
      setDrawer(false);
      onNavigate(i === 0 ? 'home' : i === 4 ? 'about' : 'service');
    },
    style: {
      textAlign: 'left',
      background: 'none',
      border: 'none',
      borderBottom: '1px solid var(--border)',
      padding: '14px 4px',
      font: 'var(--fw-semibold) 16px/1.2 var(--font-sans)',
      color: 'var(--text-strong)',
      cursor: 'pointer'
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    onClick: () => {
      setDrawer(false);
      onNavigate('contact');
    }
  }, "Devis gratuit")))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.DpeBadge = __ds_scope.DpeBadge;

})();
