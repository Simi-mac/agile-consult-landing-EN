# Espaçamento

O projeto usa o sistema utilitário do Tailwind; contudo, recomendamos e usamos uma escala de espaçamento tokenizada para consistência.

Escala sugerida (mapeie para `tailwind.config.ts` se quiser valores customizados):

- `spacing-0`: 0px
- `spacing-1`: 4px (0.25rem)
- `spacing-2`: 8px (0.5rem)
- `spacing-3`: 12px (0.75rem)
- `spacing-4`: 16px (1rem)
- `spacing-5`: 24px (1.5rem)
- `spacing-6`: 32px (2rem)
- `spacing-8`: 40px (2.5rem)

Uso no projeto:

- Componentes e seções usam utilitários Tailwind (`p-4`, `px-8`, `gap-6`, etc.).
- Sempre preferir tokens (`spacing-4`) mapeados para classes utilitárias ao criar novos componentes.

Recomendações:

- Evitar valores arbitrários; use a escala para garantir consistência entre seções.
- Para espaçamentos horizontais do container, o `tailwind.config.ts` define `container.padding: "2rem"`.