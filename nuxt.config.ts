//nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  components: {
    dirs: ['~/components'],
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: [],
  css: ['~/assets/scss/theme.scss'],
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
            'DooTask是一款轻量级的开源在线项目任务管理工具，提供各类文档协作工具、在线思维导图、在线流程图、项目管理、任务分发、即时IM，文件管理等工具。助力团队高效推进项目，让工作更简单。',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'keywords', content: '中国 DooTask 开源在线项目 任务管理工具 任务管理 轻量级 海豚有海 团队协作' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }],
      // htmlAttrs: {
      //   'data-theme': 'light', // 默认设置为 light，后续会通过 JS 替换为 dark
      // },
      // script: [
      //   {
      //     innerHTML: `
      //       (function() {
      //         var theme = localStorage.getItem('theme') || 'light';
      //         document.documentElement.setAttribute('data-theme', theme);
      //       })();
      //     `,
      //     type: 'text/javascript',
      //   },
      // ],
      // // 确保 CSS 样式文件优先加载
      // style: [
      //   {
      //     children: `
      //       [data-theme="dark"] {
      //         --bg-color: #1E1E1E;
      //       }
      //       [data-theme="light"] {
      //         --bg-color: #fff;
      //       }
      //     `,
      //     // type: 'text/css',
      //   },
      // ],
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
  seo: {
    
  },  
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
