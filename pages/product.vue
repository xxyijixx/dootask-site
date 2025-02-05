<template>
  <ClientOnly>
    <main>
      <ProChoose></ProChoose>
      <ProManage></ProManage>
      <ProDigit></ProDigit>
    </main>
  </ClientOnly>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import '@/assets/scss/product.scss'

definePageMeta({
    layoutClass: 'product-page',
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
</script>
