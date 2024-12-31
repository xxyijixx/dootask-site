<!-- 主页 -->
<template>
  <!-- 功能卡片区域 -->
  <article class="card">
    <div class="card-con">
      <h1 class="txt-5004455 card-h1 mb-80">使用场景</h1>
      <div class="card-con-layout">
        <ul class="card-ul">
          <li 
            v-for="(item, index) in scenarioItems" 
            :key="index"
            :class="['card-ul-item', { 'active': activeCardIndex === index }]"
            @click="toggleCard(index)"
          >
            <img class="icon" :src="item.icon" :alt="item.title" />
            <div class="card-ul-item-unfolded">
              <h3 class="txt-5002025 card-ul-item-h3">{{ item.title }}</h3>
              <img class="arrows" src="/img/vector.svg" :alt="item.title" />
            </div>
            <div class="card-ul-item-expand">
              <div class="card-ul-item-expand-tit">
                <h3 class="txt-5002025 card-ul-item-h3">{{ item.title }}</h3>
                <img
                  class="arrows"
                  src="/img/vector.svg"
                  :alt="item.description"
                />
              </div>
              <i class="txt-4001624 card-ul-item-txt" :style="{ '--delay': '0.3s' }">
                {{ item.description }}
              </i>
            </div>
          </li>
        </ul>
        <img
          class="card-pic"
          id="home_pic2"
          :src="currentPicSrc"
          :alt="currentPicAlt"
        />
      </div>
    </div>
    
    <!-- 移动端版本 -->
    <div class="card-con-768">
      <h1 class="txt-5002228 card-h1 mb-32">使用场景</h1>
      <div class="card-con-layout">
        <ul class="card-768-ul">
          <li 
            v-for="(item, index) in mobileScenarioItems" 
            :key="index" 
            style="width: 100%"
          >
            <img class="icon" :src="item.icon" :alt="item.title" />
            <h3 class="txt-5001822 card-ul-item-h3 mb-12">{{ item.title }}</h3>
            <i class="txt-4001524 card-ul-item-txt mb-16">{{ item.description }}</i>
            <img
              class="card-pic mb-40"
              :id="`home_pic${index + 2}`"
              :src="item.picSrc"
              :alt="item.picAlt"
            />
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script setup>
const activeCardIndex = ref(0)

const toggleCard = (index) => {
  activeCardIndex.value = activeCardIndex.value === index ? -1 : index
}

const scenarioItems = [
  { 
    icon: '/img/home_icon1.svg', 
    title: '项目管理', 
    description: '支持多种项目管理模式，适用于各种规模和类型的项目管理，实时掌控项目进度，优化工作流程。',
    picAlt: '支持多种项目管理模式，适用于各种规模和类型的项目管理，实时掌控项目进度，优化工作流程。',
    picSrc: '/img/light/zh_home_pic2.png'
  },
  { 
    icon: '/img/home_icon2.svg', 
    title: '团队协作', 
    description: '提供丰富实用的在线文档协作工具，方便团队成员之间的沟通和协作，提高工作效率。',
    picAlt: '提供丰富实用的在线文档协作工具，方便团队成员之间的沟通和协作，提高工作效率。',
    picSrc: '/img/light/zh_home_pic3.png'
  },
  { 
    icon: '/img/home_icon3.svg', 
    title: '任务协同', 
    description: '以任务化的方式让团队的工作井井有条，保证团队协作的高效性和任务分工的明确性。',
    picAlt: '以任务化的方式让团队的工作井井有条，保证团队协作的高效性和任务分工的明确性。',
    picSrc: '/img/light/zh_home_pic4.png'
  },
  { 
    icon: '/img/home_icon4.svg', 
    title: '绩效衡量', 
    description: '建立可量化的评价标准，数据化呈现工作成效，凝聚核心人才。',
    picAlt: '建立可量化的评价标准，数据化呈现工作成效，凝聚核心人才。',
    picSrc: '/img/light/zh_home_pic5.png'
  },
  { 
    icon: '/img/home_icon5.svg', 
    title: '沟通汇报', 
    description: '基于工作场景的即时通讯及共享，实现更好的团队沟通。',
    picAlt: '基于工作场景的即时通讯和分享，以实现更好的团队沟通。',
    picSrc: '/img/light/zh_home_pic6.png'
  }
]

const mobileScenarioItems = scenarioItems

// 新增计算属性，根据activeCardIndex动态获取图片
const currentPicSrc = computed(() => {
  return scenarioItems[activeCardIndex.value].picSrc
})

const currentPicAlt = computed(() => {
  return scenarioItems[activeCardIndex.value].picAlt
})
</script>
