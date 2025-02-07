<template>
    <main>
      <section>
        <!-- <PriceWay></PriceWay> -->
        <PriceCompare></PriceCompare>
      </section>
    </main>
</template>

<script setup lang="ts">
import { inject, h } from 'vue';
import { useI18n } from 'vue-i18n';
import PriceWay from '../components/PriceWay.vue'
import '@/assets/scss/price.scss';

definePageMeta({
  layoutClass: 'price-page',
});

const { t, locale } = useI18n();
useHead({
  title: t('pricing.headtitle'),
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: 'description',
      content: t('pricing.desc'),
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
setHeaderContent?.(h(PriceWay));
</script>
