<template>
  <div>
    <HeaderBar />
    <slot />
    <FooterBar />
    <SideNav />
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
