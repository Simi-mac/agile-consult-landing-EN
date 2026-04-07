import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * Hook que sincroniza SEO (title, meta description, html[lang])
 * com o idioma ativo do i18n.
 *
 * Deve ser chamado uma vez na página raiz (Index.tsx).
 */
export const useSEO = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Atualiza o <title>
    document.title = t("seo.title");

    // Atualiza a meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t("seo.description"));
    }

    // Atualiza o atributo lang do <html>
    document.documentElement.lang = i18n.language === "en" ? "en" : "pt-BR";
  }, [t, i18n.language]);
};
