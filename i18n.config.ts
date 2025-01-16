import zh from './i18n/locales/zh.json';
import en from './i18n/locales/en.json';


export default defineI18nConfig(() => ({
  legacy: false,
  lazy: true,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    zh,
    en,
  },
}));
