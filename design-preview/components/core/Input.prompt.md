Text field with label, optional leading icon, helper text and error state.

```jsx
<Input label="Email" type="email" placeholder="vous@exemple.fr" iconLeft={<Mail />} />
<Input label="Code postal" error="Code postal invalide" />
```

Focus shows a terracotta focus ring; `error` turns the border red and replaces `helper`.
