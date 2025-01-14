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
    changeImageSrc(selector: string, src: string): void {
      const element = document.querySelector(selector) as HTMLImageElement;
      if (element) {
        element.src = src;
      }
    },


    // Function to set the theme
    setTheme(theme: string): void {
      const root = document.documentElement;
      const lang = localStorage.getItem('lang') || 'zh';
      this.theme = theme;
      this.lang = lang;
      console.log('设置主题9999999', theme);
      // Change images dynamically
      this.changeImageSrc('#logo', `/img/${theme}/logo.svg`);
      this.changeImageSrc('#home_pic', `/img/${theme}/${lang}_home_pic1.png`);
      this.changeImageSrc('#home_pic2', `/img/${theme}/${lang}_home_pic2.png`);
      this.changeImageSrc('#home_pic3', `/img/${theme}/${lang}_home_pic3.png`);
      this.changeImageSrc('#home_pic4', `/img/${theme}/${lang}_home_pic4.png`);
      this.changeImageSrc('#home_pic5', `/img/${theme}/${lang}_home_pic5.png`);
      this.changeImageSrc('#home_pic6', `/img/${theme}/${lang}_home_pic6.png`);
      this.changeImageSrc(
        '#solution_pic1',
        `/img/${theme}/${lang}_solution_pic1.png`,
      );
      this.changeImageSrc(
        '#solution_pic2',
        `/img/${theme}/${lang}_solution_pic2.png`,
      );
      this.changeImageSrc(
        '#solution_pic3',
        `/img/${theme}/${lang}_solution_pic3.png`,
      );
      this.changeImageSrc('#dow_pic1', `/img/${theme}/${lang}_dow_pic1.png`);
      this.changeImageSrc('#solution_pic4', `/img/${theme}/solution_pic4.png`);
      this.changeImageSrc('#about_pic1', `/img/${theme}/about_pic1.png`);
      this.changeImageSrc('#home_icon1', `/img/${theme}/home_icon1.png`);
      this.changeImageSrc('#home_icon2', `/img/${theme}/home_icon2.png`);
      this.changeImageSrc('#home_icon3', `/img/${theme}/home_icon3.png`);
      this.changeImageSrc('#home_icon4', `/img/${theme}/home_icon4.png`);
      this.changeImageSrc('#home_pic7', `/img/${theme}/home_pic7.svg`);
      this.changeImageSrc('#home_pic7_768', `/img/${theme}/home_pic7_768.svg`);
      this.changeImageSrc('#help_pic2', `/img/${theme}/help_pic2.png`);
      this.changeImageSrc('#help_pic3', `/img/${theme}/help_pic3.png`);

      // Set CSS custom properties for background images and colors
      root.style.setProperty(
        '--bg-pic7-url',
        `url(/img/${theme}/home_pic7.svg)`,
      );
      root.style.setProperty(
        '--bg-pic7-768-url',
        `url(/img/${theme}/home_pic7-768.svg)`,
      );
      root.style.setProperty(
        '--bg-pic1-url',
        `url(/img/${theme}/${lang}_dow_pic1.png)`,
      );
      root.style.setProperty(
        '--bg-pic2-url',
        `url(/img/${theme}/help_pic1.svg)`,
      );
      root.style.setProperty('--bg-1-url', `url(/img/${theme}/bg1.png)`);
      root.style.setProperty('--bg-2-url', `url(/img/${theme}/bg2.png)`);
      root.style.setProperty('--bg-3-url', `url(/img/${theme}/bg3.png)`);
      root.style.setProperty('--bg-4-url', `url(/img/${theme}/bg4.png)`);
      root.style.setProperty('--bg-5-url', `url(/img/${theme}/bg5.png)`);
      root.style.setProperty('--bg-6-url', `url(/img/${theme}/bg6.png)`);
      root.style.setProperty('--bg-7-url', `url(/img/${theme}/bg7.png)`);
      root.style.setProperty('--bg-8-url', `url(/img/${theme}/bg8.png)`);
      root.style.setProperty('--bg-9-url', `url(/img/${theme}/bg9.png)`);
      root.style.setProperty('--bg-10-url', `url(/img/${theme}/bg10.png)`);
      root.style.setProperty('--bg-11-url', `url(/img/${theme}/bg11.png)`);
      root.style.setProperty(
        '--bg-768-3-url',
        `url(/img/${theme}/bg3_768.png)`,
      );
      root.style.setProperty(
        '--bg-768-4-url',
        `url(/img/${theme}/bg4_768.png)`,
      );
      root.style.setProperty(
        '--bg-768-5-url',
        `url(/img/${theme}/bg5_768.png)`,
      );
      root.style.setProperty(
        '--bg-768-6-url',
        `url(/img/${theme}/bg6_768.png)`,
      );
      root.style.setProperty(
        '--bg-768-7-url',
        `url(/img/${theme}/bg7_768.png)`,
      );
      root.style.setProperty(
        '--bg-768-8-url',
        `url(/img/${theme}/bg8_768.png)`,
      );
      root.style.setProperty(
        '--bg-768-9-url',
        `url(/img/${theme}/bg9_768.png)`,
      );

      root.style.setProperty(
        '--bg-color',
        theme === 'dark' ? '#1E1E1E' : '#fff',
      );
      root.style.setProperty(
        '--text-color',
        theme === 'dark' ? '#fff' : '#000',
      );
      root.style.setProperty(
        '--txt-gray-color',
        theme === 'dark' ? '#888C8A' : '#727570',
      );
      root.style.setProperty(
        '--txt-4ca5',
        theme === 'dark' ? '#A5ACA9' : '#4C4E4B',
      );
      root.style.setProperty(
        '--txt-theme-color',
        theme === 'dark' ? '#58A738' : '#8BCF70',
      );
      root.style.setProperty(
        '--bg-hover-color',
        theme === 'dark' ? '#2C312E' : '#F2F3F1',
      );
      root.style.setProperty(
        '--btn-hover-color',
        theme === 'dark' ? '#5EB939' : '#98d87f',
      );
      root.style.setProperty(
        '--choose-bg-hover-color',
        theme === 'dark' ? '#2E3533' : '#fff',
      );
      root.style.setProperty(
        '--box-shadow-color',
        theme === 'dark' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(234, 236, 242, 0.5)',
      );
      root.style.setProperty(
        '--border-color',
        theme === 'dark' ? '#2F3329' : '#E7E9E4',
      );
      root.style.setProperty(
        '--pop-bg-color',
        theme === 'dark' ? '#202124' : '#fff',
      );
      root.style.setProperty(
        '--bg-fa-color',
        theme === 'dark' ? '#262B2A' : '#fafafa',
      );
      root.style.setProperty(
        '--txt-191a15-color',
        theme === 'dark' ? '#fff' : '#191a15',
      );
      root.style.setProperty(
        '--bg-rec-color',
        theme === 'dark' ? '#D6B300' : '#FFDD33',
      );
      root.style.setProperty(
        '--bg-292c2f-color',
        theme === 'dark' ? '#292C2F' : '#fff',
      );
      root.style.setProperty(
        '--pop-box-shadow',
        theme === 'dark'
          ? '0px 4px 16px 8px rgba(0, 0, 0, 0.12)'
          : '0px 0px 8px #F3F2F5',
      );
      root.style.setProperty(
        '--code-bg-color',
        theme === 'dark' ? '#2E3533' : '#000',
      );

      // Store the theme in localStorage
      localStorage.setItem('theme', theme);
    },

    loadTheme(): void {
      const theme = localStorage.getItem('theme');
      if (theme == 'dark') {
        this.setTheme('dark');
      } else {
        this.setTheme('light');
      }
    },
  },
});
