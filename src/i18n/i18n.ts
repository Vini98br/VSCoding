import i18n from "i18next";
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      title: "hello world",
      description:{
        body:"uma descriÇao"
      }
    }
  },
  pt: {
    translation: {
      title:"oi mundo",
      description:{
        body:"uma descriÇao"
      }
    }
  }
};

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // resources,
    backend:{loadPath: '/locales/{{lng}}/translation.json'},
    lng:'pt',
    fallbackLng:"en",
    react:{
      useSuspense: false
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;