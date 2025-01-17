<template>
  <div class="privacy-page">
    <div class="privacy-content">
      <div id="markdown-content" class="markdown-body"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';

// 使用 i18n 替代 themeStore
const { locale } = useI18n();

const loadPrivacyPolicy = async () => {
  try {
    // 异步加载 markdown-it 库
    const { default: MarkdownIt } = await import('markdown-it');
    
    const md = new MarkdownIt({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true,
    });

    
    // 确定要加载的文件
    const markdownFile = locale.value === 'zh' ? '/privacy.md' : '/privacy_en.md';

    // 尝试获取文件内容
    const response = await fetch(markdownFile);
    
    if (!response.ok) {
      console.error(`Failed to fetch ${markdownFile}. Status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const markdownText = await response.text();
    
    const htmlText = md.render(markdownText);
    
    // 安全地更新内容
    const contentElement = document.getElementById('markdown-content');
    if (contentElement) {
      contentElement.innerHTML = htmlText;
      console.log('Successfully rendered markdown');
    } else {
      console.error('Markdown content element not found');
    }
  } catch (error) {
    console.error('加载隐私政策失败:', error);
    const contentElement = document.getElementById('markdown-content');
    if (contentElement) {
      contentElement.innerHTML = `<p>加载隐私政策失败: ${error.message}</p>`;
    }
  }
};

definePageMeta({
  layout: 'blank',
  navbar: false
});

onMounted(loadPrivacyPolicy);

// 监听语言变化并重新加载
watch(locale, (newLocale, oldLocale) => {
  console.log(`Language changed from ${oldLocale} to ${newLocale}`);
  loadPrivacyPolicy();
}, { immediate: true });

// 动态设置页面元数据
useHead({
  title: computed(() => locale.value === 'zh' ? '隐私政策 - DooTask' : 'Privacy Policy - DooTask'),
  meta: [
    {
      name: 'description',
      content: computed(() => 
        locale.value === 'zh' 
          ? 'DooTask是一款轻量级的开源在线项目任务管理工具' 
          : 'DooTask is a lightweight open-source online project task management tool'
      )
    }
  ]
});
</script>

<style>
.privacy-page {
  padding: 0 20px;
}
.privacy-page .privacy-content .markdown-body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif !important;
  line-height: 2.5 !important;
  word-wrap: break-word !important;
  background-color: transparent !important;
  max-width: 100% !important;
}

.privacy-page .privacy-content .markdown-body ul,
.privacy-page .privacy-content .markdown-body ol {
  list-style: disc !important;
  margin-left: 3em !important;
}

.privacy-page .privacy-content .markdown-body a {
  color: #0366d6 !important;
  text-decoration: none !important;
}

.privacy-page .privacy-content .markdown-body a:hover {
  text-decoration: underline !important;
}

/* 其他样式保持不变 */
.privacy-page .privacy-content .markdown-body h1,
.privacy-page .privacy-content .markdown-body h2,
.privacy-page .privacy-content .markdown-body h3,
.privacy-page .privacy-content .markdown-body h4,
.privacy-page .privacy-content .markdown-body h5,
.privacy-page .privacy-content .markdown-body h6 {
  margin-top: 24px !important;
  margin-bottom: 16px !important;
  font-weight: 600 !important;
  line-height: 1.25 !important;
}

/* 暗黑模式样式保持不变 */
html.dark .privacy-page .privacy-content .markdown-body {
  color: #e0e0e0 !important;
  background-color: transparent !important;
}
</style>
