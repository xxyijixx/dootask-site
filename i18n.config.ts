import zh from './i18n/locales/zh.json'
import en from './i18n/locales/en.json'

export default defineI18nConfig(() => ({
  i18n: {
    // 语言选项
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        name: '中文',
      },
    ],
    langDir: 'locales/',
    defaultLocale: 'zh',
    strategy: 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'zh',
      messages: {
        zh,
        en
      },
    },
  },
  legacy: false,
  lazy: true,
  locale: 'zh',
  fallbackLocale: 'zh',
  availableLocales: ['zh', 'en'],
}));
