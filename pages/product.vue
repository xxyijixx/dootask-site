<template>
    <main>
      <!-- <ProChoose></ProChoose> -->
      <ProManage></ProManage>
      <ProDigit></ProDigit>
    </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
// import ProChoose from '../components/ProChoose.vue'
import '@/assets/scss/product.scss';
definePageMeta({
  layoutClass: 'product-page',
  headerClass: 'product',
  topicsName: 'product',
});

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
