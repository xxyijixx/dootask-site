// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
  {
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: [
    '~/plugins/global.ts',
    '~/plugins/toolbar.ts',
    '~/plugins/theme.ts',
  ],
  app: {
    head: {
      title: 'DooTask - 协作项目管理工具',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'DooTask - 简单高效的团队协作与项目管理平台，助力企业提升工作效率' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'keywords', content: '项目管理, 团队协作, 工作流, 效率工具' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
      ]
    }
  },
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
},

);
