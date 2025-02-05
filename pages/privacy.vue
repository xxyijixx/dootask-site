<template>
  <div id="markdown-content" ref="PrivacyContentRef"></div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import MarkdownIt from 'markdown-it';

// 使用 i18n 替代 themeStore
const { locale } = useI18n();

const PrivacyContentRef = ref<HTMLElement | null>();

const loadPrivacyPolicy = async () => {
  // 确定要加载的文件
  const markdownFile = locale.value === 'zh' ? '/privacy.md' : '/privacy_en.md';

  // 尝试获取文件内容
  fetch(markdownFile)
    .then((response) => response.text())
    .then((markdownText) => {
      const md = new MarkdownIt();
      if (PrivacyContentRef.value) {
        document.body.style.margin = '20px';
        document.body.style.fontFamily = 'Arial, sans-serif';
        PrivacyContentRef.value.innerHTML = md.render(markdownText);
      }
    })
    .catch(() => {});
};

definePageMeta({
  layout: 'blank',
  navbar: false,
});

onMounted(loadPrivacyPolicy);

// 动态设置页面元数据
useHead({
  title: computed(() =>
    locale.value === 'zh' ? '隐私政策 - DooTask' : 'Privacy Policy - DooTask',
  ),
  meta: [
    {
      name: 'description',
      content: computed(() =>
        locale.value === 'zh'
          ? 'DooTask是一款轻量级的开源在线项目任务管理工具'
          : 'DooTask is a lightweight open-source online project task management tool',
      ),
    },
  ],
});
</script>

<style></style>
