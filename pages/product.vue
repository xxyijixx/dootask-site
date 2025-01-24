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
import '@/assets/css/product.css'

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
