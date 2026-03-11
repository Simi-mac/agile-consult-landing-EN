/**
 * Função central para rastrear eventos no Google Analytics 4
 * @param eventName - Nome do evento a ser rastreado
 * @param params - Parâmetros adicionais do evento
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  // Proteger contra SSR ou ambiente sem window
  if (typeof window === 'undefined') {
    if (import.meta.env.DEV) {
      console.log('[Analytics] Window undefined, skipping event:', eventName);
    }
    return;
  }

  // Proteger caso gtag não esteja carregado
  if (typeof window.gtag !== 'function') {
    if (import.meta.env.DEV) {
      console.log('[Analytics] gtag not loaded, skipping event:', eventName, params);
    }
    return;
  }

  // Enviar evento para GA4
  window.gtag('event', eventName, params);

  // Log em desenvolvimento
  if (import.meta.env.DEV) {
    console.log('[Analytics] Event tracked:', eventName, params);
  }
}
