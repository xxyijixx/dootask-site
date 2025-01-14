<template>
  <div>
    <HeaderBar />
    <slot />
    <FooterBar />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
const nuxtApp = useNuxtApp();

onMounted(() => {
  nuxtApp.$loadTheme();
});
</script>

<style></style>
