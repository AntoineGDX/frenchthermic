Primary action control — teal by default; use `accent` (terracotta) for the single highest-emphasis CTA on a view.

```jsx
<Button variant="primary">Demander un devis</Button>
<Button variant="accent" size="lg" iconRight={<ArrowRight />}>Prendre rendez-vous</Button>
<Button variant="secondary">En savoir plus</Button>
<Button variant="ghost" size="sm">Annuler</Button>
```

Variants: `primary` (teal), `accent` (terracotta), `secondary` (outlined), `ghost` (text). Sizes: `sm` / `md` / `lg`. Pass `iconLeft` / `iconRight` for icon+label, `fullWidth` to stretch.
