<template>
  <main>
    <div>
      <section>
        <DownloadPart />
        <DownloadLog />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import '@/assets/css/download.css';

import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

useHead({
  title: t('download.headtitle'),
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: 'description',
      content: t('download.description'),
    },
  ],
});
</script>
