# Integrations

Este documento lista as integrações técnicas planejadas ou recomendadas para o site da Tribo Ágil, com notas de implementação e arquivos onde configurá-las.

## 1. Google Analytics (GA4)
- Objetivo: monitoramento de tráfego e comportamento (page_view, eventos de CTA).
- Onde configurar: criar propriedade GA4 e obter Measurement ID.
- Implementação: inserir `gtag` no `index.html` ou inicializar via `src/main.tsx` (import dynamic) ou com Google Tag Manager.
- Arquivos relacionados: `index.html`, `src/main.tsx`.
- Checklist de validação: GA4 recebe `page_view` em tempo real; eventos de clique em CTAs enviados.

## 2. Google Tag Manager (GTM)
- Objetivo: centralizar scripts (analytics, pixels, tags de marketing) e gerenciar sem deploys.
- Implementação: inserir snippet GTM no `index.html` e configurar tags via painel do GTM.
- Arquivos relacionados: `index.html`.
- Observação: recomendado para clientes que irão adicionar/criar tags com frequência.

## 3. Open Graph / Social Previews
- Objetivo: controlar previews em redes sociais (LinkedIn, WhatsApp, Twitter).
- Implementação: gerar `og:image` em `/public` (preferir PNG 1200x630 para compatibilidade), inserir `og:title`, `og:description`, `og:image`, `og:url`, `og:image:width` e `og:image:height` no `index.html`.
- Arquivos relacionados: `index.html`, `public/og-image.png` (ou `og-image.svg` como placeholder).
- Checklist: preview correto ao compartilhar em LinkedIn e WhatsApp.

## 4. WhatsApp / Contact Links
- Objetivo: contato direto via WhatsApp com mensagens pré-definidas.
- Implementação: configurar `src/lib/whatsapp.ts` com número internacional e mensagens; usar links `https://wa.me/...` ou `https://api.whatsapp.com/send`.
- Arquivos relacionados: `src/lib/whatsapp.ts`, `src/components/WhatsAppFloat.tsx`, CTAs.

## 5. Email / SMTP (form fallback)
- Objetivo: receber leads via formulário caso haja backend.
- Implementação: preferir integração com serviço de terceiros (SendGrid, Mailgun) ou uso de serverless endpoint que encaminha e armazena leads.
- Arquivos relacionados: (se houver formulários) `src/components/*`, `src/lib/*`.
- Observação: definir política de privacidade e consentimento de dados.

## 6. CRM / Lead Collection
- Objetivo: enviar leads para CRM (Pipedrive, HubSpot, RD Station, etc.).
- Implementação: configurar webhooks ou API server-side; garantir que dados sejam enviados com segurança.
- Arquivos relacionados: endpoints serverless, integração em backend ou scripts de deploy.

## 7. Social Pixels / Ads (opcional)
- Objetivo: remarketing e conversões via Facebook/Meta Pixel, LinkedIn Insight, etc.
- Implementação: preferir GTM para gerenciar pixels; caso contrário, inserir scripts condicionais com consentimento de cookies.
- Arquivos relacionados: `index.html`, GTM.

## 8. Monitoring & Error Tracking
- Objetivo: capturar erros JS e monitorar performance (Sentry, LogRocket).
- Implementação: inicializar SDK no `src/main.tsx` com chave do projeto; filtrar dados sensíveis.
- Arquivos relacionados: `src/main.tsx`.

## 9. Deployment Integrations
- Objetivo: CI/CD (Vercel, Netlify) com deploys automáticos a partir do repositório.
- Implementação: configurar projeto no provedor, adicionar variáveis de ambiente (GA ID, keys), e processo de build (`npm run build`).
- Arquivos relacionados: `package.json` (scripts), `vite.config.ts`.

## 10. Webhooks / Automations
- Objetivo: enviar notificações para Slack, criar tarefas em ferramentas de gestão quando leads chegam.
- Implementação: via backend / serverless que recebe payloads e encaminha para 3rd-party.

---

### Boas práticas e recomendações
- Priorizar privacidade: avisos de cookies e consentimento para trackers.
- Preferir GTM quando houver múltiplas tags/pixels.
- Manter chaves e IDs em variáveis de ambiente no provedor de hospedagem.
- Testar cada integração em ambiente de preview antes de produção.

### Checklist rápido por integração
- [ ] GA4 configurado e recebendo page_view
- [ ] GTM (opcional) instalado
- [ ] OG image em `/public` e meta tags definidas
- [ ] WhatsApp number confirmado em `src/lib/whatsapp.ts`
- [ ] CRM integrado (se aplicável)
- [ ] Pixel/ads configurados via GTM (se aplicável)
- [ ] Monitoring (Sentry) ativo (se aplicável)

***

Adicione instruções específicas ou credenciais ausentes neste documento quando estiver pronto para a integração.
