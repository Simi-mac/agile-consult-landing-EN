# Task 011 - Proposta de Internacionalização (i18n)

Status:
Backlog

Tipo:
Feature / Arquitetura

Pedido:
Adicionar suporte a múltiplos idiomas (pt-BR e en) para o site, garantindo URLs SEO-friendly, metatags corretas e fluxo simples de tradução para a equipe.

Contexto:
O site atual está em português. Há necessidade de oferecer uma versão em inglês com gestão simples das traduções e boa indexação por mecanismos de busca.

Objetivo:
Implementar uma solução de i18n que permita manter uma única codebase, rotas por prefixo de idioma e fácil manutenção de conteúdo traduzido.

Recomendação técnica (sugestão preferencial):
- Biblioteca: `react-i18next` (leve, madura e com boa integração com React/Vite).
- Estrutura de arquivos:
  - `src/i18n.ts` (inicialização do i18next)
  - `src/locales/pt.json` (strings PT-BR)
  - `src/locales/en.json` (strings EN)
- Roteamento: path-based routing (ex.: `/` ou `/pt/` para português, `/en/` para inglês). Evita configuração extra de domínios/subdomínios e é SEO-friendly.
- Detecção: uso opcional de detecção via `navigator.language` com redirecionamento condicionais no edge ou client-side (respeitar preferência do usuário).

Escopo técnico (tarefas):
1. Instalar `react-i18next` e `i18next`.
2. Criar `src/i18n.ts` e arquivos `src/locales/pt.json` e `src/locales/en.json` com chaves iniciais.
3. Envolver `App` com o provider (`I18nextProvider` / hook `useTranslation`).
4. Alterar textos estáticos (componentes principais: `Navbar`, `Footer`, `HeroSection`, `AboutSection`, etc.) para usar `t('key')`.
5. Implementar roteamento por prefixo (ajuste no roteador atual para suportar `/en`), incluindo links para alternância de idioma.
6. Adicionar metatags `hreflang` e `og:locale` em `index.html` ou via componentes dinâmicos por rota.
7. Testar `npm run dev` e `npm run build` garantindo que ambas as rotas funcionem e as traduções sejam carregadas.

Critérios de aceite:
- Páginas acessíveis em `/` (pt-BR) e `/en/` (EN) com conteúdo traduzido.
- Metatags `hreflang` presentes nas páginas principais.
- Sem regressões: `npm run dev` e `npm run build` executam sem erros relevantes.
- Processo de atualização de tradução documentado em `docs/`.

Estimativa:
- 1 a 2 dias de trabalho (configuração + tradução das strings principais + ajustes de roteamento).

Observações / notas arquiteturais:
- Para conteúdo extenso (blog / landing content em MDX), considerar estrutura `content/pt/...` e `content/en/...`.
- Em um deploy estático (Vercel/Netlify/Cloudflare Pages) o path-based routing gera páginas estáticas separadas por idioma, sem necessidade de builds separados.

Tarefas adicionais sugeridas (opcional):
- Criar script para extrair keys de translação automaticamente.
- Integrar com serviço de tradução (Crowdin/Localize) se o volume justificar.
