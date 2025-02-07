<template>
  <div v-show="isHeaderContentReady">
    <CookieConsent></CookieConsent>
    <!-- <ClientOnly> -->
    <main>
      <!-- 主要区域划分 -->
      <section>
        <!-- <IndexMain /> -->
        <!-- 合作公司区域 -->
        <IndexCompanies />
        <!-- 功能卡片区域 -->
        <FunctionCard />
        <!-- 为什么选择我们区域 -->
        <WhyChoose />
        <IndexCollaboration />
      </section>
    </main>
  <!-- </ClientOnly> -->
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import '@/assets/scss/home.scss';
import IndexMain from '../components/IndexMain.vue';
const { t, locale } = useI18n();

definePageMeta({
  layoutClass: 'home-page',
  topicsName: 'index'
});

useHead({
  title: t('homepage.headtitle'),
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: 'description',
      content: t('homepage.hero.description'),
    },
    {
      name: 'keywords',
      content: t('seo.keywords'),
    },
  ],
});
// 向父组件传递组件
const setHeaderContent =
  inject<(component: VNode | null) => void>('setHeaderContent');

setHeaderContent?.(h(IndexMain));
// 添加一个 ref 用于控制子组件的渲染
const isHeaderContentReady = ref(false);

// 使用 nextTick 确保父组件传递内容后再渲染子组件
nextTick(() => {
  isHeaderContentReady.value = true;
});
</script>
