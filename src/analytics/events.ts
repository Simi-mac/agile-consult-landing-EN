import { trackEvent } from './trackEvent';

/**
 * Rastreia clique no CTA "Agendar diagnóstico gratuito"
 * @param section - Seção onde o CTA foi clicado (ex: 'hero', 'navbar')
 */
export function trackCtaAgendarDiagnostico(section: string): void {
  trackEvent('cta_agendar_diagnostico', {
    event_category: 'engagement',
    event_label: 'Agendar Diagnóstico',
    section,
  });
}

/**
 * Rastreia clique no CTA "Agendar conversa estratégica"
 * @param section - Seção onde o CTA foi clicado (ex: 'cta_section', 'footer')
 */
export function trackCtaAgendarConversa(section: string): void {
  trackEvent('cta_agendar_conversa', {
    event_category: 'engagement',
    event_label: 'Agendar Conversa',
    section,
  });
}

/**
 * Rastreia clique no botão do WhatsApp
 * @param section - Origem do clique (ex: 'float_button', 'hero', 'footer')
 */
export function trackWhatsAppClick(section: string): void {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    event_label: 'WhatsApp',
    section,
  });
}

/**
 * Rastreia clique no CTA "Conheça nossos serviços"
 * @param section - Seção onde o CTA foi clicado (ex: 'hero')
 */
export function trackCtaConhecerServicos(section: string): void {
  trackEvent('cta_conhecer_servicos', {
    event_category: 'navigation',
    event_label: 'Conhecer Serviços',
    section,
  });
}

/**
 * Rastreia clique em CTA de serviço específico
 * @param serviceName - Nome do serviço (ex: 'Consultoria', 'Mentoria', 'Treinamento')
 * @param section - Seção onde o clique ocorreu (padrão: 'services')
 */
export function trackServiceCtaClick(
  serviceName: string,
  section: string = 'services'
): void {
  trackEvent('service_cta_click', {
    event_category: 'engagement',
    event_label: serviceName,
    service_name: serviceName,
    section,
  });
}

/**
 * Rastreia visualização de seção importante
 * @param sectionName - Nome da seção visualizada
 */
export function trackSectionView(sectionName: string): void {
  trackEvent(`section_${sectionName}_view`, {
    event_category: 'engagement',
    event_label: `Section ${sectionName} viewed`,
    section: sectionName,
  });
}

/**
 * Rastreia que o usuário ficou 60 segundos na página
 */
export function trackTimeOnPage60s(): void {
  trackEvent('time_on_page_60s', {
    event_category: 'engagement',
    event_label: 'Time on page: 60s',
  });
}
