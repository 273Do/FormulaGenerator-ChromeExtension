import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from "@/i18n/locales/en.json";
import jaJson from "@/i18n/locales/ja.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enJson },
    ja: { translation: jaJson },
  },
  lng: "en",
  fallbackLng: false,
  interpolation: { escapeValue: false },
});

export default i18n;
