import { defineStore } from 'pinia';

interface ThemeStore {
  theme: string;
  lang: string;
}

export const useThemeStore = defineStore('themeStore', {
  state: (): ThemeStore => ({
    theme: 'light',
    lang: 'zh',
  }),
  actions: {
    initializeTheme() {
      if (import.meta.client) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme) {
          this.theme = savedTheme;
          document.documentElement.setAttribute('data-theme', savedTheme);
        }
      }
    },

    // Function to set the theme
    setTheme(theme: string, lang?: string): void {
      const root = document.documentElement;
      // console.log("加载语言主题", theme, lang)
      if (!lang) {
        lang = localStorage.getItem('language') || this.lang || 'zh';
      }
      this.theme = theme;
      this.lang = lang;
      root.style.setProperty(
        '--bg-pic1-url',
        `url(/img/${theme}/${lang}_dow_pic1.png)`,
      );

      // Store the theme in localStorage
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    },

    loadTheme(lang?: string): void {
      const theme = localStorage.getItem('theme');
      if (theme == 'dark') {
        this.setTheme('dark', lang);
      } else {
        this.setTheme('light', lang);
      }
    },
  },
});
