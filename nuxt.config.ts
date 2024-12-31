// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: [
    '~/plugins/global.ts',
    '~/plugins/toolbar.ts',
    '~/plugins/theme.ts',
  ],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    // 语言选项
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'zh', iso: 'zh-CN', name: '中文' },
    ],
    // 路由配置：通过路径区分语言
    strategy: 'prefix_except_default', // 默认语言无前缀，其余语言使用前缀
    // 语言文件路径
    vueI18n: './i18n.config.ts',
  },
  css: [
    './assets/css/about.css',
    './assets/css/ad.css',
    './assets/css/animate.min.css',
    './assets/css/common.css',
    './assets/css/distribution.css',
    './assets/css/download.css',
    './assets/css/help.css',
    './assets/css/home.css',
    './assets/css/log.css',
    './assets/css/price.css',
    './assets/css/privacy.css',
    './assets/css/rem.css',
    './assets/css/side_nav.css',
    './assets/css/solution.css',
  ],
});
