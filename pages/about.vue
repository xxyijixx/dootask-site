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
import { useI18n } from 'vue-i18n';
import '@/assets/scss/about.scss';

const { t, locale } = useI18n();

definePageMeta({
  layoutClass: 'about-page about_green_bg',
  topicsName: 'about',
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
    },
  ],
});

</script>
