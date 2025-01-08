<template>
  <div class="privacy-page">
    <!-- <HeaderBar /> -->
    <div class="privacy-content">
      <div id="markdown-content" v-html="privacyHtml"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MarkdownIt from 'markdown-it'

const privacyHtml = ref('')

onMounted(async () => {
  try {
    const md = new MarkdownIt()
    const response = await fetch('/privacy.md')
    const markdownText = await response.text()
    privacyHtml.value = md.render(markdownText)
  } catch (error) {
    console.error('Error loading privacy policy:', error)
    privacyHtml.value = '<p>加载隐私政策时出错</p>'
  }
})

// 设置页面元数据
useHead({
  title: '隐私政策 - DooTask',
  meta: [
    { 
      name: 'description', 
      content: 'DooTask是一款轻量级的开源在线项目任务管理工具，提供各类文档协作工具、在线思维导图、在线流程图、项目管理、任务分发、即时IM，文件管理等工具。助力团队高效推进项目，让工作更简单。' 
    },
    { 
      name: 'keywords', 
      content: '中国 DooTask 开源在线项目 任务管理工具 任务管理 轻量级 海豚有海 团队协作' 
    }
  ]
})
</script>

