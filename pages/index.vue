<template>
  <div>
    <CookieConsent></CookieConsent>
    <main>
      <!-- 主要区域划分 -->
      <section>
        <IndexMain />
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
<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

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
</script>
