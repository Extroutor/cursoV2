import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import {enDictionary} from "./en.ts"
import {ruDictionary} from "./ru.ts"
// import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: enDictionary,
  ru: ruDictionary
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n