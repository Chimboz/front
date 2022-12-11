import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

export default createI18n({
  legacy: false,
  locale: navigator.language.split("-")[0] || "fr",
  fallbackLocale: "fr",
  messages: { en, fr },
  globalInjection: true,
});
