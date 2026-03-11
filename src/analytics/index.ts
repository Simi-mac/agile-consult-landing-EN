// Exporta todas as funções e hooks de analytics
export { trackEvent } from './trackEvent';
export {
  trackCtaAgendarDiagnostico,
  trackCtaAgendarConversa,
  trackWhatsAppClick,
  trackCtaConhecerServicos,
  trackServiceCtaClick,
  trackSectionView,
  trackTimeOnPage60s,
} from './events';
export { initScrollTracking, cleanupScrollTracking } from './initScrollTracking';
export { initTimeOnPage, cleanupTimeOnPage } from './initTimeOnPage';
export { useSectionView } from './useSectionView';
