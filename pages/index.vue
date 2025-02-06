<template>
  <div>
    <CookieConsent></CookieConsent>
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
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import '@/assets/scss/home.scss';
import IndexMain from '@/components/IndexMain.vue';
const { t, locale } = useI18n();

definePageMeta({
  layoutClass: 'home-page',
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
  ],
});
// 向父组件传递组件
const setHeaderContent = inject<((component: VNode) => void) | undefined>("setHeaderContent");

setHeaderContent?.(h(IndexMain));

</script>
