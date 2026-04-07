import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptCommon from "./locales/pt/common.json";
import enCommon from "./locales/en/common.json";

i18n.use(initReactI18next).init({
  resources: {
    pt: { common: ptCommon },
    en: { common: enCommon },
  },
  lng: "en",
  fallbackLng: "en",
  defaultNS: "common",
  interpolation: {
    escapeValue: false, // React já faz o escape
  },
  returnObjects: true, // permite retornar arrays e objetos via t()
});

export default i18n;
