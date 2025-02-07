// plugins/theme.client.ts
export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
});
