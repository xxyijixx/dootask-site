<template>
  <main>
    <ProChoose></ProChoose>
    <ProManage></ProManage>
    <ProDigit></ProDigit>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

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
