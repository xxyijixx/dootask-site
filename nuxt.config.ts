//nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  components: {
    dirs: ['~/components'],
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: [
    // '~/plugins/theme.ts',
    // '~/plugins/i18n.ts',  // 添加 i18n 插件
    // '~/plugins/logger.ts' //添加屏蔽控制台warn插件
  ],
  app: {
    head: {
      title: 'DooTask - 协作项目管理工具',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'DooTask - 简单高效的团队协作与项目管理平台，助力企业提升工作效率',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'keywords', content: '项目管理, 团队协作, 工作流, 效率工具' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }],
    },
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/seo',
    'nuxt-gtag',
  ],
  // SEO配置
  site: {
    url: 'http://localhost:3000',
    name: 'DooTask',
    defaultLocale: 'zh',
    cacheMaxAgeSeconds: 24 * 3600, // 缓存时间设置为24小时
    autoLastmod: true
  },
  robots: {
    disallow: ['/cookie', '/privacy', '/ad']
  },
  sitemap: {
    cacheMaxAgeSeconds: 3600, // 缓存时间设置为1小时
  },
  ogImage: {
    defaults: {
      renderer: 'chromium'
    }
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'zh', iso: 'zh-CN', name: '简体中文' },
    ],
    strategy: 'prefix_except_default', // 语言前缀策略
    vueI18n: './i18n.config.ts',
  },
  gtag: {
    enabled: true,
    tags: [
      {
        id: 'G-PE77P6491J', // Google Analytics ID
        config: {
          anonymize_ip: true, // 例如：匿名化 IP 地址
        },
      },
      {
        id: 'AW-16660800396', // Google Ads ID
        config: {
          // 可以添加 Google Ads 相关的配置
        },
      },
    ],
  },
  router: {
    options: {
      strict: false, // 允许更灵活的路由匹配
    },
  },
  generate: {
    routes: ['/zh', '/en'], // 生成的语言版本页面
  },
  eslint: {},
});
