<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
const themeStore = useThemeStore();
const { locale } = useI18n();

onMounted(() => {
  themeStore.loadTheme(locale.value);
});
</script>

<style></style>
