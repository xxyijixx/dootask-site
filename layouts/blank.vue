<template>
  <div>
    <slot />
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
