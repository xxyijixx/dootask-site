<template>
  <div>
    <HeaderBar>
      <template #ad>
        <AdBar />
      </template>
    </HeaderBar>

    <slot />
    <FooterBar />
    <SideNav />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import '@/assets/css/common.css';
import '@/assets/css/rem.css';
const themeStore = useThemeStore();

onMounted(() => {
  themeStore.loadTheme();
});
</script>

<style></style>
