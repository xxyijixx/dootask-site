<template>
  <main>
    <section>
      <SoluApply></SoluApply>
      <Solusence></Solusence>
    </section>
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
    title: t('solution.headtitle'),
    htmlAttrs: {
      lang: locale.value
    },
    meta: [
      { 
        name: 'description', 
        content: t('solution.desc')
      }
    ]
  })
}, { immediate: true })
</script>
