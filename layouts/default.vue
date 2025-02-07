<template>
  <div :class="layoutClass">
    
    <HeaderBar :class="headerClass">
      <template #ad>
        <ClientOnly>
          <AdBar />
        </ClientOnly>
      </template>
        <ClientOnly>
          <component :is="headerContent" v-if="headerContent" />
        </ClientOnly>
    </HeaderBar>

    <NuxtPage  />
      <ClientOnly>
        <FooterBar />
      </ClientOnly>
    <SideNav />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, provide, type VNode } from 'vue';
import '@/assets/scss/common.scss';
import '@/assets/scss/rem.scss';

defineOgImageComponent('NuxtSeo')

const route = useRoute();
const layoutClass = computed(() => {
  return route.meta.layoutClass || '';
});
const headerClass = computed(() => {
  return route.meta.headerClass || '';
});

const headerContent = ref<VNode | null>(null);
const setHeaderContent = (component: VNode | null) => {
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
