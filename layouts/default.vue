<template>
  <div :class="layoutClass">
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
import { onMounted, computed } from 'vue';
import '@/assets/scss/common.scss';
import '@/assets/scss/rem.scss';

const route = useRoute();
const layoutClass = computed(() => {
  return route.meta.layoutClass || '';
});

const themeStore = useThemeStore();
const { locale } = useI18n();



onMounted(() => {
  themeStore.loadTheme(locale.value);
});
</script>

<style></style>
