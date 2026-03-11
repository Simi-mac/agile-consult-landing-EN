import { trackEvent } from './trackEvent';

let scroll50Fired = false;
let scroll75Fired = false;

/**
 * Calcula a porcentagem de scroll da página
 */
function getScrollPercentage(): number {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return Math.round((scrollTop / docHeight) * 100);
}

/**
 * Handler de scroll que dispara eventos em 50% e 75%
 */
function handleScroll(): void {
  const scrollPercent = getScrollPercentage();

  // Dispara scroll_50 apenas uma vez
  if (scrollPercent >= 50 && !scroll50Fired) {
    scroll50Fired = true;
    trackEvent('scroll_50', {
      event_category: 'engagement',
      event_label: 'Scrolled 50%',
      scroll_depth: 50,
    });
  }

  // Dispara scroll_75 apenas uma vez
  if (scrollPercent >= 75 && !scroll75Fired) {
    scroll75Fired = true;
    trackEvent('scroll_75', {
      event_category: 'engagement',
      event_label: 'Scrolled 75%',
      scroll_depth: 75,
    });
  }

  // Remove listener se ambos eventos já foram disparados
  if (scroll50Fired && scroll75Fired) {
    window.removeEventListener('scroll', handleScroll);
  }
}

/**
 * Inicializa o tracking de scroll
 * Deve ser chamado uma vez no carregamento da aplicação
 */
export function initScrollTracking(): void {
  if (typeof window === 'undefined') return;

  // Reset flags (útil para desenvolvimento)
  scroll50Fired = false;
  scroll75Fired = false;

  // Adiciona listener de scroll
  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Cleanup para remover listener (útil em React strict mode)
 */
export function cleanupScrollTracking(): void {
  if (typeof window === 'undefined') return;
  window.removeEventListener('scroll', handleScroll);
}
