
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import  TranslationEn from "./lang/en.json"
import  TranslationAr from "./lang/ar.json"

const resources = {
  en: {
    translation: TranslationEn
  },
  ar: {
    translation: TranslationAr
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    
    interpolation: {
      escapeValue: false 
      
    }
  });

  export default i18n;