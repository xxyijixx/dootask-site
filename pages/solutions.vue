<template>
  <main>
    <section>
      <SoluApply />
      <SoluSence />
    </section>
  </main>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n';
import '@/assets/scss/solution.scss';

definePageMeta({
  layoutClass: 'solution-page',
  topicsName: 'solution',
});

const { t, locale } = useI18n();

useHead({
  title: t('solution.headtitle'),
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: 'description',
      content: t('solution.desc'),
    },
  ],
});

</script>
