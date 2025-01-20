<template>
  <main>
    <!-- 主要区域划分 -->
    <section>
      <Indexmain></Indexmain>
      <!-- 合作公司区域 -->
      <Companies></Companies>
      <!-- 功能卡片区域 -->
      <FunctionCard></FunctionCard>
      <!-- 为什么选择我们区域 -->
      <WhyChoose></WhyChoose>
      <Collaboration></Collaboration>
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
    title: t('homepage.headtitle'),
    htmlAttrs: {
      lang: locale.value
    },
    meta: [
      { 
        name: 'description', 
        content: t('homepage.hero.description')
      }
    ]
  })
}, { immediate: true })
</script>
