# Bugs e Correções

Este documento registra bugs identificados no projeto, análise técnica e soluções aplicadas.

---

## Bug #001 - Scroll travando no Safari (RESOLVIDO)

**Data:** 9 de março de 2026  
**Severidade:** Alta  
**Browsers afetados:** Safari (macOS e iOS)  
**Status:** ✅ Resolvido

### Descrição do Problema
Cliente reportou que ao rolar a página no Safari, seções ficavam "presas" ou apresentavam lag/travamento durante o scroll, prejudicando a experiência do usuário.

### Investigação Técnica

Checklist executado:
1. ✅ Verificação de `position: sticky` e elementos pai com `overflow`/`transform`/`filter`
2. ✅ Análise de `backdrop-filter`, `filter: blur`, glows e efeitos pesados
3. ✅ Revisão de `min-height: 100vh` vs `100svh`
4. ✅ Verificação de `scroll-behavior: smooth` e lógica JS de scroll
5. ✅ Revisão de animações, Intersection Observer e parallax
6. ✅ Teste de remoção de `overflow-hidden` em wrappers principais

### Causas Identificadas

#### 1. Backdrop-filter no Navbar (causa principal)
```tsx
// ANTES (problemático no Safari)
style={{ background: "rgba(245,241,236,0.92)", backdropFilter: "blur(12px)" }}
```

**Problema:**  
Safari tem problemas críticos de performance com `backdrop-filter: blur()` em elementos com `position: fixed` durante scroll. O browser recalcula o blur a cada frame, causando travamento.

#### 2. Glows com blur pesado sem otimização
```tsx
// ANTES (sem otimização)
<div className="... blur-[100px] animate-pulse-scale" />
<div className="... blur-[80px] animate-pulse-scale" />
```

**Problema:**  
Filtros `blur()` com valores altos (80px, 100px) causam repaint/reflow intensivo no Safari, especialmente quando combinados com animações.

#### 3. Overflow-hidden em seção principal
```tsx
// ANTES
<section className="... overflow-hidden">
```

**Problema:**  
`overflow-hidden` em seções principais combinado com navbar `position: fixed` cria contextos de scroll conflitantes no Safari.

#### 4. Falta de isolação de contexto de empilhamento
**Problema:**  
Elementos com `z-index` e `blur` sem isolação causam bleeding de efeitos e conflitos de renderização entre camadas.

### Soluções Aplicadas

#### Arquivo: `src/components/Navbar.tsx`
```tsx
// DEPOIS (corrigido)
style={{ background: "rgba(245,241,236,0.97)" }}
```
- ❌ Removido `backdropFilter: "blur(12px)"`
- ✅ Aumentado opacity de `0.92` para `0.97` (compensação visual)
- ✅ Background sólido sem custo de performance

#### Arquivo: `src/components/HeroSection.tsx`

**Otimização dos glows:**
```tsx
// DEPOIS (corrigido)
<div 
  className="... blur-[100px] animate-pulse-scale" 
  style={{ willChange: "transform", transform: "translateZ(0)" }} 
/>
<div 
  className="... blur-[80px] animate-pulse-scale" 
  style={{ 
    animationDelay: "2.5s", 
    willChange: "transform", 
    transform: "translateZ(0)" 
  }} 
/>
```
- ✅ Adicionado `willChange: "transform"` — avisa o browser para otimizar
- ✅ Adicionado `transform: "translateZ(0)"` — força aceleração por GPU
- ✅ Isola blur em camada própria de composição

**Remoção de overflow:**
```tsx
// ANTES
<section className="relative h-[80vh] min-h-[560px] flex items-center pt-24 pb-12 overflow-hidden">

// DEPOIS
<section className="relative h-[80vh] min-h-[560px] flex items-center pt-24 pb-12">
```
- ✅ Removido `overflow-hidden`
- ✅ Elimina conflito com navbar fixed
- ✅ Elementos ainda contidos por limites visuais naturais

**Isolação de contexto:**
```tsx
// DEPOIS
<div className="container relative z-10" style={{ isolation: "isolate" }}>
```
- ✅ Cria novo contexto de empilhamento com `isolation: isolate`
- ✅ Previne bleeding de efeitos entre camadas
- ✅ Melhora composição de layers no Safari

### Resultado

**Antes:**
- ❌ Scroll travando/com lag no Safari
- ❌ Seções "presas" durante rolagem
- ❌ Performance degradada em mobile Safari

**Depois:**
- ✅ Scroll suave e fluido no Safari
- ✅ Sem travamentos ou lag
- ✅ Aparência visual mantida (background ligeiramente mais opaco compensa blur removido)
- ✅ Responsividade preservada
- ✅ Performance melhorada em TODOS os browsers (não só Safari)

### Testes Realizados
- ✅ Safari macOS (desktop)
- ✅ Safari iOS (mobile)
- ✅ Chrome (validação de que não quebrou)
- ✅ Firefox (validação de que não quebrou)

### Referências Técnicas
- [Safari backdrop-filter performance issues](https://bugs.webkit.org/show_bug.cgi?id=192087)
- [CSS will-change optimization](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)
- [GPU acceleration with translateZ(0)](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/)
- [CSS isolation property](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation)

---

## Bug #002 - Indicador de scroll sobrepondo CTAs em mobile (RESOLVIDO)

**Data:** 9 de março de 2026  
**Severidade:** Média  
**Browsers afetados:** Todos (layout)  
**Status:** ✅ Resolvido

### Descrição do Problema
O indicador de scroll (ícone de mouse com animação) ficava sobreposto aos botões CTA no hero em resoluções mobile/tablet, prejudicando a usabilidade.

### Causa
- Tamanho fixo e grande do indicador tipo "mouse"
- `bottom: 36px` insuficiente para telas pequenas
- Escala responsiva complexa (`scale-75 md:scale-100`) não resolvia completamente

### Solução Aplicada

#### Arquivo: `src/components/HeroSection.tsx`
```tsx
// Substituído indicador tipo "mouse" por seta minimalista
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
  <span className="text-[10px] text-gray-2 tracking-[2.5px] uppercase font-medium">Scroll</span>
  <svg className="w-5 h-5 text-primary animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
  </svg>
</div>
```

#### Arquivo: `src/index.css`
- ❌ Removidas ~40 linhas de CSS customizado (`.scroll-mouse`, `.scroll-dot`, keyframes)
- ✅ Usa animação nativa do Tailwind (`animate-bounce`)

### Resultado
- ✅ Indicador visível em todas as telas (mobile e desktop)
- ✅ Não sobrepõe CTAs
- ✅ Mais leve (removido CSS customizado)
- ✅ Clicável — scroll suave para seção de serviços
- ✅ Visual minimalista e consistente com o design

---

## Bug #003 - LCP ruim por imagem hero pesada (RESOLVIDO)

**Data:** 9 de março de 2026  
**Severidade:** Alta (SEO/Performance)  
**Browsers afetados:** Todos  
**Status:** ✅ Resolvido

### Descrição do Problema
Largest Contentful Paint (LCP) acima de 2.5s devido à imagem hero PNG de 1.3MB não otimizada.

### Causa
- Imagem `hero-photo.png` com **1.3MB** de tamanho
- Formato PNG não otimizado para web
- LCP crítico para Core Web Vitals e ranking Google

### Solução Aplicada

#### Conversão para WebP
```bash
cwebp -q 80 src/assets/hero-photo.png -o src/assets/hero-photo.webp
```

#### Arquivo: `src/components/HeroSection.tsx`
```tsx
// ANTES
import heroBg from "@/assets/hero-photo.png";

// DEPOIS
import heroBg from "@/assets/hero-photo.webp";
```

### Resultado
- **Antes:** `hero-photo.png` — 1.3MB
- **Depois:** `hero-photo.webp` — 91KB
- **Redução:** ~93% (de 1.3MB para 91KB)
- ✅ Imagem carrega ~14x mais rápido
- ✅ Economia de ~1.2MB de dados
- ✅ WebP suportado por >96% dos browsers
- ✅ LCP melhorado significativamente

---

## Boas Práticas para Prevenir Bugs

### Performance Safari
- ❌ Evitar `backdrop-filter` em elementos `position: fixed`
- ✅ Usar `will-change` e `transform: translateZ(0)` em elementos com `filter: blur()` animados
- ✅ Preferir backgrounds sólidos com opacity alta em vez de backdrop-filter quando possível
- ✅ Testar sempre no Safari (desktop e mobile) antes de deploy

### Layout Responsivo
- ✅ Testar todos os breakpoints (mobile, tablet, desktop)
- ✅ Usar `hidden sm:flex` para elementos que não cabem em mobile
- ✅ Validar que CTAs nunca sejam sobrepostos por elementos decorativos

### Performance de Imagens
- ✅ Sempre usar WebP para imagens hero/LCP
- ✅ Manter imagens hero < 100KB quando possível
- ✅ Usar ferramentas de conversão com qualidade 75-85
- ✅ Considerar `<picture>` com fallback para PNG se necessário suportar browsers antigos

### Debugging
- ✅ Usar DevTools do Safari para testar performance
- ✅ Verificar Core Web Vitals (LCP, FID, CLS) com Lighthouse
- ✅ Testar scroll em diferentes browsers antes de marcar como concluído
- ✅ Documentar bugs e soluções neste arquivo

---

## Template para Novos Bugs

```markdown
## Bug #XXX - [Título descritivo] (STATUS)

**Data:** [data]  
**Severidade:** [Baixa/Média/Alta/Crítica]  
**Browsers afetados:** [lista]  
**Status:** [🔴 Aberto | 🟡 Em análise | ✅ Resolvido | ❌ Won't fix]

### Descrição do Problema
[Descrição clara do problema]

### Investigação Técnica
[Passos executados para identificar a causa]

### Causas Identificadas
[Lista de causas raiz]

### Soluções Aplicadas
[Código antes/depois e explicação]

### Resultado
[Validação de que o bug foi corrigido]

### Testes Realizados
[Lista de testes feitos]
```

---

**Última atualização:** 9 de março de 2026
