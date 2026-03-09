# Components

Catálogo inicial de componentes encontrados em `src/components` com notas de uso e tokens aplicados.

Componentes principais:

- `Navbar` (`src/components/Navbar.tsx`)
	- Propósito: navegação global e CTA para WhatsApp
	- Tokens: `--teal`, `--primary`, `--primary-foreground`, `--radius`
	- Observações: utiliza gradientes e placeholders para logo.

- `Footer` (`src/components/Footer.tsx`)
	- Propósito: informações de contato, links e redes sociais
	- Tokens: `--primary`, `--gray-1`, `--radius`

- `HeroSection` (`src/components/HeroSection.tsx`)
	- Propósito: seção principal com headline e CTA
	- Tokens: `--teal`, `--teal-light`, gradientes `from-primary to-teal-dark`

- `ServicesSection`, `MethodologySection`, `AboutSection`, `TestimonialsSection`, `TrustBar`, `CtaSection`
	- Propósito: seções de conteúdo; cada uma usa classes utilitárias do Tailwind e tokens para bordas, sombras e cores.

- `WhatsAppFloat` (`src/components/WhatsAppFloat.tsx`)
	- Propósito: botão flutuante de contato (WhatsApp)
	- Tokens: `--teal`, animações `wa-pulse` definidas no Tailwind config

Componentes utilitários (UI primitives em `src/components/ui`):

- Botões, inputs, dialogs, toasts, cards, etc., seguem padrões do projeto (`shadcn-ui` patterns). Ver `src/components/ui/*`.

Boas práticas ao documentar um componente:

- Incluir prop-types/TS interface, variantes, exemplos de uso (JSX) e notas de acessibilidade.
- Referenciar tokens utilizados e mapear para classes Tailwind equivalentes.

Próximo passo sugerido:

- Para cada componente acima, adicionar uma seção detalhada com snippets e critérios de aceitação.