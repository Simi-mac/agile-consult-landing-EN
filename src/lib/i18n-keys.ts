/**
 * Centraliza todas as chaves de tradução do projeto.
 *
 * Uso recomendado:
 *   import { I18N } from "@/lib/i18n-keys";
 *   const { t } = useTranslation();
 *   t(I18N.HERO.TITLE_PRE)
 *
 * Convenção de naming:
 *   - SEÇÃO.ELEMENTO (SCREAMING_SNAKE_CASE)
 *   - Arrays: SEÇÃO.ITEMS  →  t(I18N.SERVICES.ITEMS, { returnObjects: true })
 */
export const I18N = {
  NAV: {
    ABOUT:       "nav.about",
    SERVICES:    "nav.services",
    METHODOLOGY: "nav.methodology",
    CTA:         "nav.cta",
  },

  HERO: {
    BADGE:         "hero.badge",
    TITLE_PRE:     "hero.title_pre",
    TITLE_HL1:     "hero.title_hl1",
    TITLE_MID:     "hero.title_mid",
    TITLE_HL2:     "hero.title_hl2",
    DESCRIPTION:   "hero.description",
    CHIPS:         "hero.chips",        // array — usar { returnObjects: true }
    CTA_PRIMARY:   "hero.cta_primary",
    CTA_SECONDARY: "hero.cta_secondary",
  },

  ABOUT: {
    BADGE:            "about.badge",
    TITLE_PRE:        "about.title_pre",
    TITLE_HL:         "about.title_hl",
    DESCRIPTION:      "about.description",
    BENEFITS:         "about.benefits",       // array — usar { returnObjects: true }
    STATS_BADGE:      "about.stats_badge",
    STATS:            "about.stats",          // array — usar { returnObjects: true }
    METHODOLOGY_HL:   "about.methodology_hl",
    METHODOLOGY_DESC: "about.methodology_desc",
    SINCE_PREFIX:     "about.since_prefix",
    SINCE_YEAR:       "about.since_year",
    SINCE_SUFFIX:     "about.since_suffix",
  },

  SERVICES: {
    BADGE:       "services.badge",
    TITLE:       "services.title",
    DESCRIPTION: "services.description",
    ITEMS:       "services.items", // array — usar { returnObjects: true }
  },

  METHODOLOGY: {
    BADGE:            "methodology.badge",
    TITLE_PRE:        "methodology.title_pre",
    TITLE_HL:         "methodology.title_hl",
    DESCRIPTION:      "methodology.description",
    STEPS:            "methodology.steps",   // array — usar { returnObjects: true }
    RESULTS_TITLE:    "methodology.results_title",
    BARS:             "methodology.bars",    // array — usar { returnObjects: true }
    METHODOLOGY_HL:   "methodology.methodology_hl",
    METHODOLOGY_DESC: "methodology.methodology_desc",
    DISCLAIMER:       "methodology.disclaimer",
  },

  CTA: {
    BADGE:          "cta.badge",
    TITLE_1:        "cta.title_1",
    TITLE_2:        "cta.title_2",
    TITLE_HIGHLIGHT:"cta.title_highlight",
    DESCRIPTION:    "cta.description",
    BUTTON:         "cta.button",
    ONLINE_LABEL:   "cta.online_label",
    TAGLINE:        "cta.tagline",
  },

  FOOTER: {
    NAV:          "footer.nav",          // array — usar { returnObjects: true }
    COPYRIGHT:    "footer.copyright",   // suporta interpolação {{year}}
    DEVELOPED_BY: "footer.developed_by",
  },

  WHATSAPP: {
    ARIA_LABEL: "whatsapp.aria_label",
  },

  SEO: {
    TITLE:       "seo.title",
    DESCRIPTION: "seo.description",
  },
} as const;
