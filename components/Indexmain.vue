<template>
  <div class="topics">
    <div class="topics-con">
      <div class="topics-layout">
        <div class="topics-tit mb-32" style="width: auto !important">
          <span class="txt-6007290 topics-h1-green">
            DooTask
            <svg
              class="arcs"
              width="312"
              height="23"
              viewBox="0 0 312 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="arc"
                opacity="0.5"
                d="M3 20C47.4822 7.1714 170.957 -10.7886 309 20"
                stroke="#8BCF70"
                stroke-width="6"
                stroke-linecap="round"
                stroke-dasharray="600, 600"
                stroke-dashoffset="0"
              />
            </svg>
          </span>
          <span class="txt-6007290 topics-h1">,轻量级任务管理工具</span>
        </div>
        <h4 class="txt-4001830 topics-h4 mb-32">
          DooTask是一款轻量级的开源在线项目任务管理工具，提供各类文档协作工具、在线思维导图、在线流程图、项目管理、任务分发、即时IM，文件管理等工具。助力团队高效推进项目，让工作更简单。
        </h4>
        <div class="flex-cc topics-btn">
          <span class="mr-24 get-started">
            <NuxtLink to="/price">
              <button class="btn btn-primary mr-20">开始使用</button>
            </NuxtLink>
          </span>
          <a href="https://github.com/kuaifan/dootask/tree/pro" target="_blank">
            <button class="btn btn-default">私有化部署</button>
          </a>
        </div>
      </div>
      <div class="ten_img">
        <img
          class="home-pic"
          id="home_pic"
          :src="useImage('home_pic1.png')"
          alt="DooTask是一款轻量级的开源在线项目任务管理工具，提供各类文档协作工具、在线思维导图、在线流程图、项目管理、任务分发、即时IM，文件管理等工具。助力团队高效推进项目，让工作更简单。"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const { $setTheme } = useNuxtApp();
const { locale } = useI18n();

// 主题控制，默认值为从 localStorage 中读取
// const storedTheme = localStorage.getItem('theme') || 'light';
// const isDarkMode = ref(storedTheme === 'dark');
// 初始化主题
// $setTheme(storedTheme);

const isDarkMode = ref(false);

// 延迟获取主题和初始化
onMounted(() => {
  const storedTheme = localStorage.getItem('theme') || 'light';
  isDarkMode.value = storedTheme === 'dark';
  $setTheme(storedTheme);
});

// 切换主题
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  const newTheme = isDarkMode.value ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  $setTheme(newTheme);
};

// 图片路径处理函数，根据主题和语言动态返回不同图片
const useImage = (
  src: string,
  useTheme: boolean = true,
  useLang: boolean = true,
) => {
  const lang = locale.value || 'zh';
  const theme = isDarkMode.value ? 'dark' : 'light';

  if (useTheme && useLang) {
    return `/img/${theme}/${lang}_${src}`;
  }
  if (useTheme) {
    return `/img/${theme}/${src}`;
  }
  if (useLang) {
    return `/img/${lang}_${src}`;
  }

  return `/img/${src}`;
};
</script>

<style scoped>
.topics {
  text-align: center;
  background: var(--bg-1-url) center left no-repeat;
  background-size: cover;
}
</style>
