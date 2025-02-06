<template>
  <ClientOnly>
    <main>
      <section>
        <!-- <PriceWay></PriceWay> -->
        <PriceCompare></PriceCompare>
      </section>
    </main>
  </ClientOnly>
</template>

<script setup lang="ts">
import { inject, h } from 'vue'
import { useI18n } from 'vue-i18n';
import '@/assets/scss/price.scss'
import PriceWay from '@/components/PriceWay.vue'

definePageMeta({
    layoutClass: 'price-page',
})

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
  ],
});
// 向父组件传递组件
const setHeaderContent = inject<((component: VNode) => void) | undefined>("setHeaderContent");
setHeaderContent?.(h(PriceWay));
</script>
