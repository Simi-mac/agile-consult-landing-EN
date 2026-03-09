# 08 — Arquitetura

> Documento de referência técnica da arquitetura do projeto **Tribo Ágil Landing Page**.  
> Atualizar sempre que houver mudanças estruturais na stack, convenções de pastas ou fluxo de build.

---

## Stack Principal

| Camada          | Tecnologia                          | Versão / Nota                         |
|-----------------|--------------------------------------|---------------------------------------|
| Framework UI    | React                                | v18 — SPA pura, sem SSR               |
| Linguagem       | TypeScript                           | tsconfig strict                       |
| Build tool      | Vite                                 | Bundler + dev server                  |
| Estilização     | Tailwind CSS                         | v3 — tokens via CSS variables         |
| Componentes UI  | shadcn/ui                            | Radix UI + Tailwind, em `/ui/`        |
| Animações       | framer-motion + CSS keyframes        | Ver `docs/06-design-system/effects.md`|
| Ícones          | lucide-react                         | Tree-shakeable                        |
| Gerenciador pkg | Bun                                  | `bun.lockb` como lockfile             |
| Testes          | Vitest                               | Config em `vitest.config.ts`          |

---

## Estrutura de Pastas

```
src/
├── assets/           # Imagens, logos e arquivos estáticos importados pelo código
├── components/       # Componentes React da landing page
│   └── ui/           # Componentes base (shadcn/ui) — não editar diretamente
├── hooks/            # Custom hooks reutilizáveis
├── lib/              # Utilitários e helpers (utils.ts, whatsapp.ts)
├── pages/            # Páginas (Index.tsx, NotFound.tsx)
└── test/             # Testes unitários (Vitest)

public/               # Arquivos servidos diretamente (robots.txt, favicon)
docs/                 # Documentação do projeto (este arquivo)
```

---

## Fluxo de Dados

```
index.html
  └── main.tsx                  (ReactDOM.createRoot)
        └── App.tsx             (router + global styles)
              └── pages/Index.tsx
                    ├── Navbar.tsx
                    ├── HeroSection.tsx
                    ├── AboutSection.tsx
                    ├── ServicesSection.tsx
                    ├── MethodologySection.tsx
                    ├── CtaSection.tsx
                    ├── Footer.tsx
                    └── WhatsAppFloat.tsx
```

Não há gerenciamento de estado global (Redux/Zustand). O estado é local por componente (hooks React padrão).

---

## Sistema de Design / Tokens

Os tokens de design são definidos como CSS custom properties em `src/index.css` (`:root`) e mapeados no `tailwind.config.ts` para classes utilitárias.

**Fluxo:**
```
src/index.css (:root { --primary: ... })
  → tailwind.config.ts (colors.primary: hsl(var(--primary)))
    → classes Tailwind nos componentes (bg-primary, text-primary, etc.)
```

Ver detalhes completos em `docs/06-design-system/`.

---

## Convenções de Componentes

- **Nomenclatura:** PascalCase para componentes, camelCase para hooks (`use-reveal.ts`, `use-mobile.tsx`)
- **Co-localização:** cada componente de seção é um arquivo `.tsx` independente em `src/components/`
- **Componentes base (shadcn/ui):** ficam em `src/components/ui/` — gerados via CLI, não editados manualmente
- **Hooks customizados:** `use-reveal.ts` (scroll reveal com IntersectionObserver), `use-mobile.tsx` (breakpoint), `use-toast.ts` (notificações)
- **Utilitários:** `lib/utils.ts` exporta `cn()` (merge de classes Tailwind); `lib/whatsapp.ts` centraliza links e mensagens do WhatsApp

---

## Build & Deploy

```bash
# Desenvolvimento
bun run dev        # Vite dev server em localhost:5173

# Build de produção
bun run build      # Saída em /dist

# Preview do build
bun run preview

# Testes
bun run test
```

**Deploy recomendado:** Vercel ou Netlify (SPA estática, sem servidor).  
Configurar `_redirects` ou `vercel.json` para redirecionar todas as rotas para `index.html`.

---

## Dependências Externas

| Serviço         | Uso                              | Status         |
|-----------------|-----------------------------------|----------------|
| WhatsApp API    | Links de contato direto           | Ativo          |
| Google Analytics| Rastreamento de eventos (GA4)     | Pendente setup |
| Google Tag Mgr  | Gestão de tags                    | Pendente setup |
| Domínio / DNS   | Produção                          | Pendente config|

Ver `docs/07-integrations/README.md` para detalhes de cada integração.

---

## Decisões de Arquitetura Relevantes

| Decisão                              | Motivo                                                         |
|--------------------------------------|----------------------------------------------------------------|
| SPA sem SSR                          | Projeto é landing page institucional; SEO básico via meta tags |
| Tailwind com CSS variables           | Flexibilidade de tema sem duplicação de tokens                 |
| shadcn/ui como base                  | Acessibilidade (Radix) + customização total                    |
| framer-motion para animações         | Controle de entrada/saída de elementos com scroll              |
| Bun como gerenciador de pacotes      | Performance de instalação no ambiente Mac local                |
| Assets importados via `@/assets/`   | Vite processa e faz hash dos arquivos para cache-busting       |
| Nomes de arquivos sem espaços        | Evitar problemas de resolução no Vite (ex: `hero-photo.png`)   |

---

## Pontos de Atenção

- **Assets com espaços no nome** (`Design sem nome (XX).png`) não funcionam corretamente como imports estáticos no Vite — sempre copiar com nome limpo antes de importar.
- **Componentes `ui/`** são gerenciados pelo CLI do shadcn/ui; alterações manuais podem ser sobrescritas num `add` futuro.
- **`TrustBar.tsx`** e **`TestimonialsSection.tsx`** existem no código mas retornam `null` / foram removidos de `Index.tsx` — podem ser deletados numa limpeza futura.
