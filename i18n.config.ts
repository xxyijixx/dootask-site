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
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'en',
      legacy: false,
      messages: {
        en: {
          lang_zh: 'Simplified Chinese',
          lang_en: 'English',
          dootask: 'DooTask',
          nav_product: 'Product',
          nav_solution: 'Solutions',
          nav_support: 'Support',
          nav_price: 'Pricing',
          nav_about_us: 'About Us',
          download_center: 'Download Center',
          help_center: 'Help Center',
          privacy_policy: 'Privacy Policy',
          api_docs: 'API Documentation',
          try_now: 'Try Now',
        },
        zh: {
          lang_zh: '简体中文',
          lang_en: 'English',
          dootask: 'DooTask',
          nav_product: '产品',
          nav_solution: '解决方案',
          nav_support: '支持',
          nav_price: '服务价格',
          nav_about_us: '关于我们',
          download_center: '下载中心',
          help_center: '帮助中心',
          privacy_policy: '隐私政策',
          api_docs: 'API文档',
          try_now: '立即体验',
        },
      },
    },
  },

  lazy: true,
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: ['zh', 'en'],
}));
