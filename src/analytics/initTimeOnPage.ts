import { trackTimeOnPage60s } from './events';

let timeoutId: number | null = null;

/**
 * Inicializa o tracking de tempo na página
 * Dispara evento após 60 segundos
 */
export function initTimeOnPage(): void {
  if (typeof window === 'undefined') return;

  // Limpa timeout anterior se existir
  if (timeoutId !== null) {
    clearTimeout(timeoutId);
  }

  // Agenda evento para 60 segundos
  timeoutId = window.setTimeout(() => {
    trackTimeOnPage60s();
    timeoutId = null;
  }, 60000); // 60 segundos
}

/**
 * Cleanup para cancelar o timeout
 */
export function cleanupTimeOnPage(): void {
  if (timeoutId !== null) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
}
