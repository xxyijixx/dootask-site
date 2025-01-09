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
    lazy: true,
    defaultLocale: 'zh',
    strategy: 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'zh',
      legacy: false,
    }
  },

  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  availableLocales: ['zh', 'en'],
  messages: {
    
    en: {
      dootask: 'DooTask',
      nav_product: 'Product',
      nav_solution: 'Solutions',
      nav_support: 'Support',
      nav_price: 'Pricing',
      nav_about_us: 'About Us',
    },
    zh: {
      dootask: 'DooTask',
      nav_product: '产品',
      nav_solution: '解决方案',
      nav_support: '支持',
      nav_price: '服务价格',
      nav_about_us: '关于我们',
    },
  },
  
}
)
);
