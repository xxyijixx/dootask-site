<template>
  <main>
    <section>
      <Aboutintro></Aboutintro>
      <Aboutapply></Aboutapply>
      <Aboutsuggest></Aboutsuggest>
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
    title: t('about.headtitle'),
    htmlAttrs: {
      lang: locale.value
    },
    meta: [
      { 
        name: 'description', 
        content: t('about.description')
      }
    ]
  })
}, { immediate: true })
</script>
