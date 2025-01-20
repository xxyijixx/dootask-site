<template>
  <main>
    <div>
      <section>
        <Downloadpart></Downloadpart>
        <Downloadlog></Downloadlog>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import '@/assets/css/download.css';

import { useI18n } from 'vue-i18n';
import { useThemeStore } from '@/stores/theme'

const { t, locale } = useI18n()
const themeStore = useThemeStore()
const { lang } = toRefs(themeStore)

// 监听语言变化并动态更新 head
watch(lang, () => {
  useHead({
    title: t('download.headtitle'),
    htmlAttrs: {
      lang: locale.value
    },
    meta: [
      { 
        name: 'description', 
        content: t('download.description')
      }
    ]
  })
}, { immediate: true })
</script>
