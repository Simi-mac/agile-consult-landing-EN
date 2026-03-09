# Guidelines de Uso

Princípios gerais:

- Composição sobre duplicação: preferir combinar componentes menores do que criar variações ad-hoc.
- Tokens primeiro: use `--*` tokens e classes Tailwind mapeadas; se precisar de novos tokens, registre em `docs/design-system/tokens.md`.
- Acessibilidade: todos os componentes interativos devem ter foco visível, labels, roles e suporte a teclado.

Padrões do projeto:

- Fontes: `font-display` para títulos (`Sora`), `font-body` para textos (`DM Sans`).
- Cores: use tokens HSL (`hsl(var(--teal))`, `hsl(var(--gold))`) — evite cores hardcoded.
- Espaçamento: utilize a escala tokenizada (ex.: `spacing-4` → `p-4`/`m-4`).
- Bordas e raios: `--radius` (0.75rem) para `rounded-lg` e variantes.

Naming e classes:

- Nome de classe/variant: use nomes semânticos (`primary`, `ghost`, `danger`).
- Variantes de componente: documente cada variante no ficheiro do componente.

Performance e responsividade:

- Prefira classes utilitárias e CSS-in-Tailwind para evitar estilos duplicados.
- Teste em pontos de breakpoints definidos no `tailwind.config.ts` (container e telas padrão).

Checklist rápido antes de merge:

- Componentes têm documentação e exemplos em `docs/design-system/components.md`?
- Tokens criados foram adicionados em `tokens.md` e sincronizados com `tailwind.config.ts`?
- Testes manuais de acessibilidade básicos (foco, leitura por teclado) foram executados?

Observações:

- Para mudanças de branding (cores / tipografia), atualize primeiro `src/index.css` (tokens) e rode build/testes para validar impacto visual.