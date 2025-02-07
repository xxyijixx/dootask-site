<template>
  <main>
    <section>
      <!-- <AboutIntro /> -->
      <AboutApply />
      <AboutSuggest />
    </section>
  </main>
</template>

<script setup lang="ts">
import { inject, h } from 'vue';
import { useI18n } from 'vue-i18n';
import '@/assets/scss/about.scss';
import AboutIntro from '@/components/AboutIntro.vue';

const { t, locale } = useI18n();

definePageMeta({
  layoutClass: 'about-page about_green_bg',
});

useHead({
  title: t('about.headtitle'),
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: 'description',
      content: t('about.desc'),
    },
    {
      name: 'keywords',
      content: t('seo.keywords'),
    }
  ],
});

// 向父组件传递组件
const setHeaderContent = inject<((component: VNode) => void) | undefined>(
  'setHeaderContent',
);
setHeaderContent?.(h(AboutIntro));
</script>
