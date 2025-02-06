<template>
  <div class="topics">
    <div class="topics-con">
      <div class="topics-layout">
        <div class="topics-tit mb-32">
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
          <span class="txt-6007290 topics-h1">
            {{ $t('homepage.hero.subtitle') }}
          </span>
        </div>
        <h4 class="txt-4001830 topics-h4 mb-32" style="width: auto !important">
          {{ $t('homepage.hero.description') }}
        </h4>
        <div class="flex-cc topics-btn">
          <span class="mr-24 get-started">
            <NuxtLink to="/price">
              <button class="btn btn-primary mr-20">
                {{ $t('common.get_started') }}
              </button>
            </NuxtLink>
          </span>
          <a href="https://github.com/kuaifan/dootask/tree/pro" target="_blank">
            <button class="btn btn-default">
              {{ $t('homepage.hero.deployment') }}
            </button>
          </a>
        </div>
      </div>
      <div class="ten_img">
        <img
          id="home_pic"
          class="home-pic"
          :src="`/img/${theme}/${lang}_home_pic1.png`"
          alt="DooTask是一款轻量级的开源在线项目任务管理工具，提供各类文档协作工具、在线思维导图、在线流程图、项目管理、任务分发、即时IM，文件管理等工具。助力团队高效推进项目，让工作更简单。"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const themeStore = useThemeStore();

const { theme, lang } = toRefs(themeStore);
</script>

<style scoped>

</style>
