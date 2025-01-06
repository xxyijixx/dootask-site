import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const theme = localStorage.getItem('theme'); // 获取本地存储的主题
    // 只在客户端运行
    const navbar = document.querySelector('.nav') as HTMLElement;
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 30) {   // 当滚动距离大于30px时，添加navbar-white类，remove后导航栏背景色为白色
          navbar.classList.add('navbar-white');
        } else {
          navbar.classList.remove('navbar-white');
        }
      });
    }
  }
});
