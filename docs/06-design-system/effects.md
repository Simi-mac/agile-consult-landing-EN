# Motion & Effects

Documento que descreve os efeitos visuais reutilizáveis do projeto (gradientes, glows, hover effects, animações de entrada e microinterações). Baseado em implementações encontradas em `src/index.css`, `tailwind.config.ts` e componentes em `src/components`.

## Hero Gradient
Descrição:
Camadas sobrepostas que combinam imagem de fundo, gradiente vertical e um padrão sutil em grade com máscara radial para criar profundidade no hero.

Uso:
Seção `HeroSection` como background principal do topo da página para destacar headline e CTA.

Implementação CSS / Tailwind:
- Background image com `background-image: url(...)` e `opacity: 0.2` + `animate-fade-in`.
- Gradient vertical: `bg-gradient-to-b from-background via-background/80 to-background` (Tailwind).
- Grid overlay: `backgroundImage: "linear-gradient(hsl(var(--teal) / 0.035) 1px, transparent 1px), linear-gradient(90deg, ...)"` com `backgroundSize: '56px 56px'` e `maskImage: 'radial-gradient(...)'` aplicado inline no componente.
- Blur blobs (glow): elementos `div` com `bg-primary/5` / `bg-secondary/5`, `rounded-full`, `blur-[100px]` e `animate-pulse-scale`.

Arquivos relacionados:
- `src/components/HeroSection.tsx`
- `src/assets/hero-bg.jpg`
- `src/index.css` (tokens)
- `tailwind.config.ts` (animações: `fade-in`, `pulse-scale`)

## CTA Glow
Descrição:
Gradiente + sombra e leve elevação no hover para criar destaque visual em botões principais.

Uso:
Botões de call-to-action no `HeroSection`, `Navbar` e outros CTAs importantes.

Implementação CSS / Tailwind:
- Gradiente: `bg-gradient-to-br from-primary to-teal-dark` (Tailwind).
- Texto com token `text-primary-foreground`.
- Box-shadow custom: `shadow-[0_6px_26px_hsl(var(--teal)/0.38)]` e hover maior: `hover:shadow-[0_14px_38px_hsl(var(--teal)/0.55)]`.
- Hover transform: `hover:-translate-y-[3px]` + `transition-all duration-200`.

Arquivos relacionados:
- `src/components/HeroSection.tsx` (CTA principal)
- `src/components/Navbar.tsx` (botão de contato)

Recomendações de uso:
- Reservar o efeito para CTAs primários; para variantes secundárias usar bordas/texto com hover mais sutil.
- Evitar aplicar sombras muito pesadas sobre fundos já escuros sem contraste suficiente.

## Card Hover Elevation
Descrição:
Elevação e sombra aumentada ao passar o mouse sobre cards para sugerir interatividade e profundidade.

Uso:
Cartões na `ServicesSection` e possivelmente outros blocos de conteúdo clicáveis.

Implementação CSS / Tailwind:
- Container com classes: `transition-all duration-300 hover:-translate-y-[7px] hover:shadow-[0_22px_56px_rgba(0,0,0,0.28),0_0_36px_hsl(var(--teal)/0.07)]`.
- Linha de topo com `opacity: 0` e `group-hover:opacity-100 transition-opacity duration-[400ms]` para um indicador visual adicional.
- Marca d'água numérica com `opacity-[0.06]` e cor tokenizada.
- Entrada/saída de hover depende apenas de CSS (Tailwind classes e `group` state).

Arquivos relacionados:
- `src/components/ServicesSection.tsx` (componente `ServiceCard`)

Recomendações de uso:
- Usar para itens interativos que levam a ações (links, CTAs internos). Não usar em elementos puramente informativos.
- Garantir desempenho testando muitos cards numa grid (evitar sombras pesadas em muitos elementos simultaneamente).

## Section Fade-in (Entry Animations)
Descrição:
Animações de entrada que trazem elementos com fade e deslocamento (slide/up) para foco progressivo ao carregar seção ou ao entrar no viewport.

Uso:
Headlines, parágrafos, listas e componentes que aparecem progressivamente nas seções `Hero`, `Services`, `Methodology`, etc.

Implementação CSS / Tailwind / JS:
- Animações definidas em `tailwind.config.ts`: `fade-up`, `fade-in`.
- Classe utilitária `.animate-fade-up` / `.animate-fade-in` é usada inline nos elementos (ex.: `className="animate-fade-up"`).
- Reveal utilities: `.rv` (opacidade 0 + translate), `.rv.visible` (opacidade 1 + transform reset) definidas em `src/index.css` combinadas com o hook `useReveal()` que adiciona a classe `visible` quando o elemento entra no viewport (JS).
- Staggering: `style={{ transitionDelay: '0.15s' }}` ou `animationDelay` nos elementos para sequência.

Arquivos relacionados:
- `src/index.css` (reveal utilities: `.rv`)
- `tailwind.config.ts` (animações: `fade-up`, `fade-in`)
- `src/hooks/use-reveal.tsx` (hook que detecta visibilidade)
- `src/components/HeroSection.tsx`, `src/components/ServicesSection.tsx` (uso de `animate-fade-up` e `.rv`)

Recomendações de uso:
- Preferir estas animações para entradas discretas; evitar em elementos que se repetem frequentemente (pouca vantagem perceptual e custo de motor de layout).
- Usar redução de movimento respeitando `prefers-reduced-motion`.

## Scroll Float / Floating Indicators
Descrição:
Animações suaves de flutuação usadas para ícones/sugestões de scroll e elementos decorativos que sugerem movimento contínuo.

Uso:
Indicador de scroll no `Hero` (`animate-scroll-float`) e triângulos decorativos flutuantes.

Implementação CSS / Tailwind:
- `animate-scroll-float` e `animate-float` declarados em `tailwind.config.ts` com keyframes que traduzem em Y e ajustam opacidade.
- Aplicado via classes Tailwind nos elementos (ex.: `className="absolute ... animate-float"`).

Arquivos relacionados:
- `src/components/HeroSection.tsx` (triângulos e scroll indicator)
- `tailwind.config.ts` (definição das keyframes/animations)

Recomendações de uso:
- Usar para elementos decorativos ou para reforçar affordance (ex.: call-to-action flutuante), evitando distração excessiva.

## WhatsApp Pulse (Microinteraction)
Descrição:
Pulso contínuo que destaca o botão flutuante de WhatsApp e microinteração de hover (scale).

Uso:
Botão flutuante de contato `WhatsAppFloat`.

Implementação CSS / Tailwind:
- Classe `animate-wa-pulse` definida em `tailwind.config.ts` (keyframes `wa-pulse` com box-shadow variável).
- Botão usa `hover:scale-110 transition-transform duration-[250ms]` para microinteração.

Arquivos relacionados:
- `src/components/WhatsAppFloat.tsx`
- `tailwind.config.ts` (animação `wa-pulse`)

Recomendações de uso:
- Reservar para ações de suporte/contato importantes; desabilitar em telas de impressão e respeitar `prefers-reduced-motion`.

## Hover Transitions & Microinteractions
Descrição:
Conjunto de transições curtas aplicadas a botões, links e chips: `transition-all`, `duration-200/300`, `hover:translate`, `hover:gap` e mudanças de `opacity`/`border`.

Uso:
Chips do hero, botões secundários, links de CTA em cards e badges.

Implementação CSS / Tailwind:
- Classes utilitárias Tailwind: `transition-all duration-200`, `hover:-translate-y-[3px]`, `hover:gap-3`, `hover:border-primary/30`, `hover:bg-primary/5`.
- Alguns efeitos usam `group` + `group-hover` para desencadear estados em elementos filhos.

Arquivos relacionados:
- `src/components/HeroSection.tsx` (chips, CTAs)
- `src/components/ServicesSection.tsx` (cards)
- `src/components/Navbar.tsx` (CTA)

Recomendações de uso:
- Padronizar durações (200ms/300ms) e curvas de transição para consistência.
- Usar `group` quando múltiplos elementos devem reagir ao hover do container.

## Scrollbar & Noise Overlay (UI polish)
Descrição:
Personalização sutil do scrollbar e adição de uma camada de ruído (noise) para textura de fundo.

Uso:
Aplicado globalmente ao `body` para dar textura e ajustar o visual do site.

Implementação CSS:
- `body::before` cria overlay SVG noise com baixa opacidade em `src/index.css`.
- Scrollbar personalizado via `::-webkit-scrollbar` em `src/index.css` (thumb `background: hsl(var(--teal) / 0.3)` e hover mais escuro).

Arquivos relacionados:
- `src/index.css`

Recomendações de uso:
- Manter opacidade baixa para não competir com conteúdo; verificar contraste e performance em dispositivos móveis.

---

Efeitos que podem virar componentes reutilizáveis
- `GradientHeroBackground`: encapsular as camadas (imagem, gradient, overlay grid, glow blobs) como um componente que recebe variantes e velocidade das animações.
- `PrimaryCTA` (componentizar gradiente + glow + sombra + hover): facilita consistência e troca centralizada de tokens.
- `Reveal`: componente/HOC que encapsula a lógica de `useReveal()` com propriedades de `delay` e `animation` para reuse em lists/grids.
- `FloatingDecor`: wrapper para elementos decorativos flutuantes (triângulos, blobs) com props de posição, delay e duração.

Observação final:
Documentar estes efeitos no catálogo de componentes (ex.: `docs/design-system/components.md`) e adicionar snippets de implementação (JSX + classes) para acelerar adoção pela equipe.
