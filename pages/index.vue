<template>
  <div>
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

</script>
