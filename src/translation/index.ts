import i18next from "i18next";
import _ from "lodash";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18nNextHttpBackend from "i18next-http-backend";
export const TranslationFile = {
  COMMON: "common",
};

export const TranslationPage = {
  HOME: "home",
  LOGIN: "login",
  NOTFOUND: "404",
  CHANGE_USER: "change-user",
};

const nsFile = _.values(TranslationFile);
const nsPage = _.values(TranslationPage);
const supportedLngs = ["vi"];
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(I18nNextHttpBackend)
  .init({
    react: { useSuspense: false },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "vi",
    lng: "vi",
    defaultNS: TranslationFile.COMMON,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs,
    ns: [...nsFile, ...nsPage],
  });

export default i18next;
