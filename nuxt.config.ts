//nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
  {
  ssr: false,
  components: {
      dirs: ['~/components']
    },
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
      ],
    }
  },
  
  modules: ['@nuxtjs/i18n', '@nuxt/content'],
  i18n: {
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
    './assets/css/product.css', // 添加 product.css
  ],
  router: {
    options: {
      strict: false  // 允许更灵活的路由匹配
    }
  },
  buildModules: ['@nuxt/content'],
},

);