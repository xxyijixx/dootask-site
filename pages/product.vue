<template>
  <ClientOnly>
    <main>
      <!-- <ProChoose></ProChoose> -->
      <ProManage></ProManage>
      <ProDigit></ProDigit>
    </main>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import '@/assets/scss/product.scss'
import ProChoose from '@/components/ProChoose.vue'
definePageMeta({
    layoutClass: 'product-page',
    headerClass: 'product'
})

const { t, locale } = useI18n();

useHead({
  title: t('produpage.headtitle'),
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: 'description',
      content: t('produpage.desc'),
    },
  ],
});
// 向父组件传递组件
const setHeaderContent = inject<((component: VNode) => void) | undefined>("setHeaderContent");
setHeaderContent?.(h(ProChoose));
</script>
