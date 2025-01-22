<!-- 解决方案-场景应用 -->
<template>
  <div>
    <div class="topics">
      <div class="topics-con">
        <div class="topics-layout">
          <div class="topics-tit mb-32" style="width: auto !important">
            <span class="txt-6007290 topics-h1">{{ $t('solution.title') }}</span>
          </div>
          <h4 class="txt-4001830 topics-h4 mb-32">
            {{ $t('solution.desc') }}
          </h4>
          <div class="flex-cc topics-btn">
            <span class="mr-24 get-started">
              <!-- <a href="./price.html"> -->
              <NuxtLink to="/price">
                <button class="btn btn-primary mr-20">{{ $t('common.get_started') }}</button>
              </NuxtLink>
              <!-- </a> -->
            </span>
          </div>
        </div>
      </div>
    </div>
    <article class="app">
      <div class="bg-style">
        <div class="app-con">
          <div class="app-tit">
            <h1 class="txt-5004455 app-h1 mb-16">{{ $t('solution.apply.title') }}</h1>
            <div style="text-align: center">
              <h6 class="txt-4001830 app-h5" style="width: 600px">
                {{ $t('solution.apply.desc') }}
              </h6>
            </div>
          </div>
          <ul class="app-ul mt-80">
            <li
              v-for="(item, index) in sceneApplications"
              :key="index"
              class="app-ul-item"
              :class="{ 'mb-48': index < sceneApplications.length - 1 }"
            >
              <div class="app-bg-box">
                <img
                  class="app-bg"
                  :id="`solution_pic${index + 1}`"
                  :src="item.picSrc"
                  :alt="item.title"
                />
              </div>
              <h4 class="txt-5002025 app-h4 mb-16">{{ item.title }}</h4>
              <h6 class="txt-4001624 app-h6">{{ item.description }}</h6>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
import { toRefs } from 'vue';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const themeStore = useThemeStore();
const { theme, lang } = toRefs(themeStore);

// 场景应用列表
const sceneApplications = computed(() => [
  {
    picSrc: `/img/${theme.value}/${lang.value}_solution_pic1.png`,
    title: t('solution.apply.title_one'),
    description: t('solution.apply.desc_one'),
  },
  {
    picSrc: `/img/${theme.value}/${lang.value}_solution_pic2.png`,
    title: t('solution.apply.title_two'),
    description: t('solution.apply.desc_two'),
  },
  {
    picSrc: `/img/${theme.value}/${lang.value}_solution_pic3.png`,
    title: t('solution.apply.title_three'),
    description: t('solution.apply.desc_three'),
  },
  {
    picSrc: `/img/${theme.value}/solution_pic4.png`,
    title: t('solution.apply.title_four'),
    description: t('solution.apply.desc_four'),
  },
]);
</script>

<style scoped>
.topics {
  text-align: center;
  background: var(--bg-5-url) top center no-repeat;
  background-size: cover;
}
</style>
