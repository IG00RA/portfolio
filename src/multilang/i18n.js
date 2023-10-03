import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en/translation.json";
import ukTranslation from "./locales/uk/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    lng: localStorage.getItem("i18nextLng") || "en",
    resources: {
      en: {
        translation: enTranslation,
      },
      uk: {
        translation: ukTranslation,
      },
    },
  });

export default i18n;
