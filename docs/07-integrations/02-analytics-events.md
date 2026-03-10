# Analytics Events - Google Analytics 4

Este documento descreve os eventos configurados e recomendados para o Google Analytics 4 (GA4) no site da Tribo Ágil.

## Configuração Atual

### Measurement ID
- **ID:** `G-T36JXG1HSY`
- **Localização:** `index.html` (script inserido no `<head>`)

### Eventos Automáticos Ativos

O GA4 rastreia automaticamente os seguintes eventos:

1. **page_view**
   - Disparado automaticamente em cada carregamento de página
   - Captura: URL, título da página, referrer

2. **session_start**
   - Início de nova sessão do usuário

3. **first_visit**
   - Primeira visita do usuário ao site

4. **scroll**
   - Usuário rola a página até 90%

5. **click** (outbound)
   - Cliques em links externos

## Eventos Personalizados Recomendados

### Eventos de Conversão

#### 1. **cta_click**
Rastrear cliques nos botões de Call-to-Action principais.

```javascript
gtag('event', 'cta_click', {
  cta_location: 'hero', // ou 'services', 'footer', etc.
  cta_text: 'Fale com um Especialista',
  event_category: 'engagement',
  event_label: 'CTA Principal'
});
```

**Locais de implementação:**
- HeroSection - CTA principal
- ServicesSection - CTAs de serviços
- CtaSection - CTA de conversão final
- Footer - Links de contato

#### 2. **whatsapp_click**
Rastrear cliques no botão flutuante do WhatsApp.

```javascript
gtag('event', 'whatsapp_click', {
  button_location: 'float_button', // ou 'cta', 'footer'
  event_category: 'contact',
  event_label: 'WhatsApp'
});
```

**Locais de implementação:**
- WhatsAppFloat component
- Links diretos do WhatsApp em CTAs

#### 3. **service_interest**
Rastrear interesse em serviços específicos.

```javascript
gtag('event', 'service_interest', {
  service_name: 'Consultoria', // ou 'Mentoria', 'Treinamento'
  event_category: 'engagement',
  event_label: 'Serviço Visualizado'
});
```

**Locais de implementação:**
- ServicesSection - clique/expansão de cards de serviços

#### 4. **methodology_engagement**
Rastrear interação com a seção de metodologia.

```javascript
gtag('event', 'methodology_engagement', {
  interaction_type: 'read_more', // ou 'accordion_open'
  event_category: 'engagement',
  event_label: 'Metodologia'
});
```

#### 5. **social_click**
Rastrear cliques em links de redes sociais.

```javascript
gtag('event', 'social_click', {
  social_network: 'linkedin', // ou 'instagram', 'youtube'
  link_location: 'footer', // ou 'navbar'
  event_category: 'social_media'
});
```

## Implementação Técnica

### Opção 1: Implementação Direta no Componente

```tsx
// Exemplo: HeroSection.tsx
const handleCtaClick = () => {
  // Enviar evento para GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      cta_location: 'hero',
      cta_text: 'Fale com um Especialista',
      event_category: 'engagement'
    });
  }
  
  // Ação principal (ex: abrir WhatsApp)
  window.open(whatsappUrl, '_blank');
};
```

### Opção 2: Criar Hook de Analytics

Criar um hook personalizado para centralizar o rastreamento:

```tsx
// src/hooks/use-analytics.ts
export const useAnalytics = () => {
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    }
  };

  const trackCtaClick = (location: string, text: string) => {
    trackEvent('cta_click', {
      cta_location: location,
      cta_text: text,
      event_category: 'engagement'
    });
  };

  const trackWhatsAppClick = (location: string) => {
    trackEvent('whatsapp_click', {
      button_location: location,
      event_category: 'contact'
    });
  };

  return { trackEvent, trackCtaClick, trackWhatsAppClick };
};
```

### Opção 3: Usar Google Tag Manager

Para gestão mais flexível, considere migrar para GTM:
- Configurar triggers baseados em classes CSS ou data attributes
- Gerenciar eventos sem necessidade de deploy
- Facilitar inclusão de novos pixels e tags

## Conversões e Objetivos no GA4

Após implementar os eventos, configure como conversões no painel do GA4:

1. Acesse **Admin → Events → Mark as conversion**
2. Marque os seguintes eventos como conversão:
   - `cta_click` (principal)
   - `whatsapp_click` (contato)
   - `service_interest` (engajamento)

## Validação e Testes

### Como validar eventos

1. **GA4 DebugView**
   - Ative o modo de debug: `gtag('config', 'G-T36JXG1HSY', { debug_mode: true });`
   - Acesse Admin → DebugView no GA4
   - Execute as ações no site e verifique os eventos em tempo real

2. **Tempo Real**
   - Acesse Reports → Realtime no GA4
   - Navegue pelo site e verifique se os eventos aparecem

3. **Browser DevTools**
   - Abra o Console e verifique se `window.gtag` está disponível
   - Monitore requisições de rede para `google-analytics.com/g/collect`

### Checklist de Validação

- [ ] Script GA4 carrega corretamente
- [ ] `page_view` é registrado ao acessar páginas
- [ ] Eventos de scroll funcionam
- [ ] CTAs disparam eventos personalizados (se implementados)
- [ ] WhatsApp Float dispara evento (se implementado)
- [ ] Eventos aparecem no Tempo Real do GA4

## Próximos Passos

1. **Implementar eventos personalizados** nos componentes principais
2. **Criar hook de analytics** para centralizar o código
3. **Configurar conversões** no painel do GA4
4. **Validar dados** após 24-48h de coleta
5. **Criar dashboards personalizados** conforme necessidades do cliente
6. **Considerar GTM** se houver necessidade de múltiplas tags

## Referências

- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [GA4 Custom Events](https://support.google.com/analytics/answer/12229021)
- [gtag.js API](https://developers.google.com/analytics/devguides/collection/gtagjs)
