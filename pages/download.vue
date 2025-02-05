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
import DownloadPart from '@/components/DownloadPart.vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

definePageMeta({
    layoutClass: 'download-page',
})

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
// 向父组件传递组件
const setHeaderContent = inject<((component: VNode) => void) | undefined>("setHeaderContent");
setHeaderContent(h(DownloadPart));
</script>
