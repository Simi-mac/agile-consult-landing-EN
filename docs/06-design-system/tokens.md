# Design Tokens

Este arquivo reúne os tokens efetivamente usados pelo projeto, conforme definidos em `src/index.css` e mapeados no `tailwind.config.ts`.

Tokens principais (variáveis CSS, valores em HSL quando aplicável):

- `--background`: 210 33% 4%
- `--foreground`: 0 0% 100%
- `--card`: 210 30% 7%
- `--card-foreground`: 0 0% 100%
- `--popover`: 210 30% 7%
- `--popover-foreground`: 0 0% 100%
- `--primary`: 177 100% 35%
- `--primary-foreground`: 210 33% 4%
- `--secondary`: 37 91% 55%
- `--secondary-foreground`: 210 33% 4%
- `--muted`: 210 25% 12%
- `--muted-foreground`: 205 25% 60%
- `--accent`: 210 20% 16%
- `--accent-foreground`: 0 0% 100%
- `--destructive`: 0 84% 60%
- `--destructive-foreground`: 0 0% 100%
- `--border`: 210 20% 14%
- `--input`: 210 20% 14%
- `--ring`: 177 100% 35%
- `--radius`: 0.75rem

Tokens adicionais (branding / utilitários):

- `--teal`: 177 100% 35%
- `--teal-light`: 174 77% 45%
- `--teal-dark`: 174 100% 24%
- `--gold`: 37 91% 55%
- `--gold-light`: 40 100% 60%
- `--gold-dark`: 37 88% 40%
- `--dark-2`: 210 30% 9%
- `--dark-3`: 210 28% 14%
- `--dark-4`: 210 25% 18%
- `--dark-5`: 210 22% 24%
- `--gray-1`: 205 20% 47%
- `--gray-2`: 205 22% 64%
- `--gray-3`: 205 28% 78%

Fontes (tokens):

- `--font-display`: 'Sora', sans-serif
- `--font-body`: 'DM Sans', sans-serif

Como usar:

- No CSS: `color: hsl(var(--primary))` ou `background: hsl(var(--teal) / 0.3)`
- No Tailwind: os tokens já estão mapeados em `tailwind.config.ts` (ex.: `bg-primary`, `text-primary-foreground`).

Notas:
- `--radius` é usado para `borderRadius` estendido no Tailwind (ex.: `rounded-lg` mapeado para `var(--radius)`).
- Atualize este arquivo quando `src/index.css` ou `tailwind.config.ts` mudarem; mantenha consistência entre tokens e classes utilitárias.