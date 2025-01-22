<template>
  <main>
    <section>
      <AboutIntro />
      <AboutApply />
      <AboutSuggest />
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import '@/assets/css/about.css';

const { t, locale } = useI18n();

useHead({
  title: t('about.headtitle'),
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: 'description',
      content: t('about.description'),
    },
  ],
});
</script>
