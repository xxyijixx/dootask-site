<template>
  <main>
    <div>
      <section>
        <!-- <DownloadPart /> -->
        <DownloadLog />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import '@/assets/scss/download.scss';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

definePageMeta({
  layoutClass: 'download-page',
  topicsName: 'download',
});

useHead({
  title: t('download.headtitle'),
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: 'description',
      content: t('download.desc'),
    },
    {
      name: 'keywords',
      content: t('seo.keywords'),
    },
  ],
});
</script>
