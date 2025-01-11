<template>
  <article class="choose">
    <!-- 大屏幕版本 -->
    <div class="choose-con">
      <ul class="choose-con-ul mb-32">
        <li class="choose-con-item">
          <h1 class="txt-5004455 choose-con-tit">
            为什么选择我们
            <svg
              class="arcs2"
              width="312"
              height="23"
              viewBox="0 0 312 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="home_arc"
                opacity="0.5"
                d="M3 20C47.4822 7.1714 170.957 -10.7886 309 20"
                stroke="#8BCF70"
                stroke-width="6"
                stroke-linecap="round"
                stroke-dasharray="600, 600"
                stroke-dashoffset="0"
              />
            </svg>
          </h1>
        </li>

        <li 
            v-for="(item, index) in chooseItems.slice(0, 2)" 
            :key="index"
            class="choose-con-item hover home-animate"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <h1 class="txt-7003645 serial-number mb-24">{{ item.number }}</h1>
            <h5 class="txt-5002025 mb-16 choose-con-item-h5">
              {{ item.title }}
            </h5>
            <h6 class="txt-4001624 choose-con-item-h6">
              {{ item.description }}
            </h6>
          </li>
      </ul>
      <ul class="choose-con-ul mb-32">
          <li 
            v-for="(item, index) in chooseItems.slice(2)" 
            :key="index"
            class="choose-con-item hover home-animate"
            :style="{ '--delay': `${(index + 2) * 0.1}s` }"
          >
            <h1 class="txt-7003645 serial-number mb-24">{{ item.number }}</h1>
            <h5 class="txt-5002025 mb-16 choose-con-item-h5">
              {{ item.title }}
            </h5>
            <h6 class="txt-4001624 choose-con-item-h6">
              {{ item.description }}
            </h6>
          </li>
        </ul>
    </div>
      <!-- 移动端版本 -->
    <div class="choose-con-768">
      <h1 class="txt-5004455 choose-con-tit">
        为什么选择我们
        <img
          class="arcs2"
          src="/img/arcs.svg"
          alt="为什么选择我们"
        />
      </h1>
      <div class="choose-con-768-box">
        <ul class="choose-con-768-ul">
          <li 
            v-for="(item, index) in chooseItems" 
            :key="index"
            class="choose-con-768-item"
            :class="{ 'active': activeIndex === index }"
          >
            <h1 class="txt-7003240 serial-number mb-24">{{ item.number }}</h1>
            <h5 class="txt-5002025 mb-16 choose-con-item-h5">
              {{ item.title }}
            </h5>
            <h6 class="txt-4001524 choose-con-item-h6">
              {{ item.description }}
            </h6>
          </li>
        </ul>
      </div>
      <ul id="card-indicators">
        <li 
          v-for="(_, index) in chooseItems" 
          :key="index"
          class="card-indicators-item"
          :class="{ 'active': activeIndex === index }"
          @click="changeActiveItem(index)"
        ></li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'

interface ChooseItem {
  number: string;
  title: string;
  description: string;
}

const activeIndex = ref(0)
const isMobile = ref(false)

const chooseItems = ref<ChooseItem[]>([
  {
    number: '01',
    title: '高效便捷的团队沟通工具',
    description: '针对项目和任务建立群组，工作问题可及时沟通，促进团队快速协作，提高团队工作效率。'
  },
  {
    number: '02',
    title: '强大易用的协同创作云文档',
    description: '汇集文档、电子表格、思维笔记等多种在线工具，汇聚企业知识资源于一处，支持多人实时协同编辑，让团队协作更便捷。'
  },
  {
    number: '03',
    title: '便捷多样的项目管理模版',
    description: '模版满足多种团队协作场景，同时支持自定义模版，满足团队个性化场景管理需求，可直观的查看项目的进展情况，团队协作更方便。'
  },
  {
    number: '04',
    title: '清晰直观的任务日历',
    description: '通过灵活的任务日历，轻松安排每一天的日程，把任务拆解到每天，让工作目标更清晰，时间分配更合理。'
  },
  {
    number: '05',
    title: '支持多平台应用',
    description: '多平台应用支持，随时随地追踪项目进度，同时让你在工作中每一个步骤都能拥有更高效愉悦的体验。'
  }
])

const changeActiveItem = (index: number) => {
  activeIndex.value = index
}

// 检查屏幕尺寸
const checkMobileView = () => {
  isMobile.value = window.innerWidth <= 768
}

// 自动轮播功能
let autoPlayTimer: number | null = null
const startAutoPlay = () => {
  if (isMobile.value) {
    autoPlayTimer = window.setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % chooseItems.value.length
    }, 3000)
  }
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

onMounted(() => {
  checkMobileView()
  window.addEventListener('resize', checkMobileView)
  
  // 如果是移动端，启动自动轮播
  if (isMobile.value) {
    startAutoPlay()
  }

  // 监听移动端状态变化
  watch(isMobile, (newValue) => {
    if (newValue) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobileView)
  stopAutoPlay()
})
</script>
