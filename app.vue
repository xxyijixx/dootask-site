<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      innerHTML: `(function(){var theme=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',theme)})();`,
      type: 'text/javascript'
    }
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : 'DooTask';
  },
});
</script>