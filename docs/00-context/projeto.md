# Contexto do Projeto

Resumo:

Repositório do site institucional da Tribo Ágil (landing page), construído com Vite + React + TypeScript e Tailwind.

Status atual:

- Referências ao gerador automático (Lovable) foram removidas do código e da documentação.
- Dependência `lovable-tagger` removida do `package.json`.
- Logos embutidos no markup foram substituídos por placeholders; ainda resta revisar e atualizar arquivos em `src/assets` e `public` (favicon/placeholder).
- Documentação criada: `/docs` com roadmap, tasks, design-system e guia de motion/effects.
- Ainda pendente: rodar `npm install` para regenerar lockfiles e remover dependências residuais.

Principais ações realizadas até o momento:

- Limpeza de referências ao Lovable (código, `index.html`, `README.md`).
- Criação da estrutura de documentação em `/docs` (tasks, design-system, prompts, checklists).
- Substituição imediata das imagens de logo em `Navbar` e `Footer` por placeholders textuais.

Pendências e próximos passos:

- Remover/atualizar arquivos de logo e favicon em `src/assets` e `public` (Task 007/pendente).
- Executar `npm install` para atualizar `package-lock.json`/`bun.lockb` e garantir dependências consistentes.
- Validar layout e conteúdo com o cliente (Task 002).
- Configurar SEO básico, Google Analytics (GA4), Open Graph e contatos (Tasks 003–006).
- Executar revisão final e configuração DNS/publicação (Tasks 008–010).

Público-alvo deste documento:

- Product Engineers, UI Developers, DevOps e responsáveis por validação com o cliente.

Responsáveis e comunicação:

- Owner do repositório: Tribo Ágil (time de produto)
- Contato técnico: atualizar com responsável interno
- Progresso e issues: gerenciados em `/docs/02-tasks/` (backlog / em-andamento / concluidas)

Como colaborar:

- Crie novas tasks usando o template em `/docs/02-tasks/template-task.md`.
- Ao alterar tokens em `src/index.css` ou `tailwind.config.ts`, atualize `docs/design-system/tokens.md`.
- Antes de merges de produção, execute `npm run build` e valide o checklist em `docs/02-tasks/INDEX.md`.

Observação final:

Atualize este arquivo sempre que decisões significativas forem tomadas (mudança de branding, domínio, configuração de tracking, etc.).