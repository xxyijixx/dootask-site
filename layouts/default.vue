<template>
  <div>
    <HeaderBar />
    <slot />
    <FooterBar />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.loadTheme();
});
</script>

<style></style>
