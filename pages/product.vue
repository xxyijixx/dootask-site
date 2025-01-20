<template>
  <main>
    <Prochoose></Prochoose>
    <Promanage></Promanage>
    <Prodigit></Prodigit>
  </main>
</template>


<script setup>
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'

const { t, locale } = useI18n()
const themeStore = useThemeStore()
const { lang } = toRefs(themeStore)

// 监听语言变化并动态更新 head
watch(lang, () => {
  useHead({
    title: t('produpage.headtitle'),
    htmlAttrs: {
      lang: locale.value
    },
    meta: [
      { 
        name: 'description', 
        content: t('produpage.desc')
      }
    ]
  })
}, { immediate: true })
</script>

