import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // 只在客户端运行
    const navbar = document.querySelector('.nav') as HTMLElement;
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 30) {
          navbar.classList.add('navbar-white');
        } else {
          navbar.classList.remove('navbar-white');
        }
      });
    }
  }
});
