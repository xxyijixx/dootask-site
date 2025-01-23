<template>
  <ClientOnly>
    <main>
      <section>
        <PriceWay></PriceWay>
        <PriceCompare></PriceCompare>
      </section>
    </main>
  </ClientOnly>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

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
</script>
