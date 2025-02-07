<template>
  <main>
    <section>
      <SoluApply />
      <SoluSence />
    </section>
  </main>
</template>

<script setup lang="ts">
import { inject, h } from 'vue';
import { useI18n } from 'vue-i18n';
import '@/assets/scss/solution.scss';
import SuloTopics from '../components/SuloTopics.vue';

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
// 向父组件传递组件
const setHeaderContent =
  inject<(component: VNode | null) => void>('setHeaderContent');
setHeaderContent?.(h(SuloTopics));
</script>
