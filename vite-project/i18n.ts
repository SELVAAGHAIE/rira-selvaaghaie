import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "Currency Converter": "Currency Converter",
      Mode: "Mode",
      Light: "Light",
      Dark: "Dark",
      Language: "Language",
      Exit: "Exit",
      DollartoToman: "Dollar to Toman",
      CurrencyConverter:"© 2024 Currency Converter",
      USD:"USD",
      TOMAN:"TOMAN",
      EnterUSDamount:"Enter USD amount",
      EnterTomanamount:"Enter Toman amount"
    },
  },
  fa: {
    translation: {
      "Currency Converter": "مبدل ارز",
      Mode: "حالت",
      Light: "روشن",
      Dark: "تاریک",
      Language: "زبان",
      Exit: "خروج",
      DollartoToman: "تبدیل دلار به تومان",
      CurrencyConverter:"مبدل ارز 2024",
      USD:"دلار",
      TOMAN:"تومان",
      EnterUSDamount:"مقدار دلار را وارد کنید",
      EnterTomanamount:"مقدار تومان را وارد کنید"

    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
