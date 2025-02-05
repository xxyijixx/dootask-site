<template>
  <main>
    <section>
      <AboutIntro />
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
    layoutClass: 'about-page',
})

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
