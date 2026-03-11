import { useEffect, useRef } from 'react';
import { trackSectionView } from './events';

/**
 * Hook para rastrear quando uma seção entra na viewport
 * @param sectionName - Nome da seção para tracking (ex: 'services', 'methodology')
 * @param threshold - Porcentagem da seção visível para disparar (padrão: 0.5 = 50%)
 * @returns ref para anexar ao elemento
 */
export function useSectionView(
  sectionName: string,
  threshold: number = 0.5
): React.RefObject<HTMLElement> {
  const ref = useRef<HTMLElement>(null);
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasTrackedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Dispara apenas uma vez quando a seção entra na viewport
        if (entry.isIntersecting && !hasTrackedRef.current) {
          hasTrackedRef.current = true;
          trackSectionView(sectionName);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionName, threshold]);

  return ref;
}
