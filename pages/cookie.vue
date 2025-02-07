<template>
  <div id="markdown-content" ref="CookieContentRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import MarkdownIt from 'markdown-it';

definePageMeta({
  layout: 'blank',
});

const { t, locale } = useI18n();

const CookieContentRef = ref<HTMLElement | null>();
// 使用 i18n 替代 themeStore

const loadContent = () => {
  const markdownFile = locale.value === 'zh' ? '/cookie.md' : '/cookie_en.md';
  fetch(markdownFile)
    .then((response) => response.text())
    .then((markdownText) => {
      const md = new MarkdownIt();
      if (CookieContentRef.value) {
        document.body.style.margin = '20px';
        document.body.style.fontFamily = 'Arial, sans-serif';
        CookieContentRef.value.innerHTML = md.render(markdownText);
      }
    });
};

onMounted(async () => {
  loadContent();
});

useHead({
  title: computed(() =>
    locale.value === 'zh'
      ? 'Cookie Policy - DooTask'
      : 'Cookie Policy - DooTask',
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
    {
      name: 'keywords',
      content: t('seo.keywords'),
    },
  ],
});
</script>

<style></style>
