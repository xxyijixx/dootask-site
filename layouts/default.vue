<template>
  <div :class="layoutClass">
    <HeaderBar :class="headerClass">
      <template #ad>
        <AdBar />
      </template>
      <component :is="headerContent" v-if="headerContent" />
    </HeaderBar>

    <NuxtPage />
    <FooterBar />
    <SideNav />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, provide, type VNode } from 'vue';
import '@/assets/scss/common.scss';
import '@/assets/scss/rem.scss';

const route = useRoute();
const layoutClass = computed(() => {
  return route.meta.layoutClass || '';
});
const headerClass = computed(() => {
  return route.meta.headerClass || '';
});

const headerContent = ref<VNode | null>(null);
const setHeaderContent = (component: VNode) => {
  headerContent.value = component;
};

// 使用 provide 传递方法
provide('setHeaderContent', setHeaderContent);

const themeStore = useThemeStore();
const { locale } = useI18n();

onMounted(() => {
  themeStore.loadTheme(locale.value);
});
</script>

<style></style>
