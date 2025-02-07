<template>
    <main>
      <section>
        <!-- <PriceWay></PriceWay> -->
        <PriceCompare></PriceCompare>
      </section>
    </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
// import PriceWay from '../components/PriceWay.vue'
import '@/assets/scss/price.scss';

definePageMeta({
  layoutClass: 'price-page',
  topicsName: 'price'
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
// const setHeaderContent =
//   inject<(component: VNode | null) => void>('setHeaderContent');
// setHeaderContent?.(h(PriceWay));

// 添加一个 ref 用于控制子组件的渲染
// const isHeaderContentReady = ref(false);

// 使用 nextTick 确保父组件传递内容后再渲染子组件
// nextTick(() => {
//   isHeaderContentReady.value = true;
// });
</script>
