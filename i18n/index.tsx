import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import {enDictionary} from "./en.ts"
import {ruDictionary} from "./ru.ts"

const resources = {
    en: enDictionary,
    ru: ruDictionary
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lang') ?? "en",
        interpolation: {
            escapeValue: false
        }
    })

export default i18n