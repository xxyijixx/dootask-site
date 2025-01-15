<template>
  <div class="privacy-page">
    <div class="privacy-content">
      <div id="markdown-content" class="markdown-body"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

definePageMeta({
  layout: 'blank',
})

// 动态加载 Markdown 文件并渲染为 HTML
onMounted(() => {
  // 异步加载 markdown-it 库
  import('markdown-it').then(({ default: MarkdownIt }) => {
    const md = new MarkdownIt({
      html: true, // 允许渲染 HTML 标签
      breaks: true, // 转换换行符为 <br>
      linkify: true, // 自动识别链接
      typographer: true, // 启用 typographer 模式
    });

    // 加载 Markdown 文件并渲染
    fetch('./privacy.md')
      .then((response) => response.text())
      .then((markdownText) => {
        const htmlText = md.render(markdownText);
        document.getElementById('markdown-content').innerHTML = htmlText;
      })
      .catch((error) => {
        console.error('加载隐私政策失败:', error);
        document.getElementById('markdown-content').innerHTML =
          '<p>加载隐私政策时出错</p>';
      });
  });
});

// 设置页面元数据
useHead({
  title: '隐私政策 - DooTask',
  meta: [
    {
      name: 'description',
      content:
        'DooTask是一款轻量级的开源在线项目任务管理工具，提供各类文档协作工具、在线思维导图、在线流程图、项目管理、任务分发、即时IM，文件管理等工具。助力团队高效推进项目，让工作更简单。',
    },
    {
      name: 'keywords',
      content:
        '中国 DooTask 开源在线项目 任务管理工具 任务管理 轻量级 海豚有海 团队协作',
    },
  ],
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
