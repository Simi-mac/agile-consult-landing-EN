# Tipografia

Fontes definidas no projeto (ver `src/index.css`):

- `--font-display`: Sora — usada para títulos e elementos de destaque.
- `--font-body`: DM Sans — usada para texto corrido e interfaces.

Import das fontes no projeto:

```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
```

Recomendações e tokens:

- Variáveis: usar `var(--font-display)` para títulos e `var(--font-body)` para o corpo.
- Pesos comuns usados: 400 (regular), 600/700 (semibold/bold) para títulos e CTAs.

Escala base (mapear para classes Tailwind quando necessário):

- h1: 48px (ex.: `text-4xl` ou `text-[48px]`)
- h2: 32px (ex.: `text-3xl`)
- h3: 24px (ex.: `text-2xl`)
- body: 16px (ex.: `text-base`)
- small / caption: 13px (ex.: `text-sm`)

Boas práticas:

- Use as classes utilitárias do Tailwind combinadas com os tokens de fonte (ex.: `font-display` e `font-body` configuradas no Tailwind config).
- Defina `line-height` apropriada (ex.: 1.25–1.5) para legibilidade.
- Documente exceções (hero headings, CTAs) no `docs/design-system/components.md` quando necessário.