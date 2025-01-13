<!-- 解决方案-团队运营 -->
<template>
  <article class="team solutions">
    <div class="team-con">
      <h1 class="txt-5004455 team-tit">团队运营</h1>
      <ul class="team-ul mt-80">
        <li
          v-for="(item, index) in teamOperations"
          :key="item.title"
          class="team-ul-item team-ul-item-zh"
          :style="{ '--delay': `${index * 0.1}s` }"
          v-show="item.icon && item.title && item.description"
        >
          <img class="team-icon mb-24" :src="item.icon" :alt="item.title" />
          <h4 class="txt-5002025 app-h4 mb-16">{{ item.title }}</h4>
          <h6 class="txt-4001624 app-h6">{{ item.description }}</h6>
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 创建响应式的调试信息
const debugInfo = ref('');
const teamOperations = [
  {
    icon: '/img/solution_icon1.svg',
    title: '公司管理',
    description:
      '帮助企业对其公司目标，将目标、关键结果与个人工作连接，共同推动战略落地、目标达成；通过协同创作，共享企业各项工作的进度、完成状态、日程安排，促进信息流动，让全员获取项目关键信息，及时跟进，推动跨部门协作。',
  },
  {
    icon: '/img/solution_icon2.svg',
    title: '产品管理',
    description:
      '自定义产品研发过程的工作流程，在不同阶段把任务分派不同角色，推动产品研发进程；各完成项目及任务历史资料统一归档，方便随时调用或展开讨论，形成知识沉淀到复用的闭环。',
  },
  {
    icon: '/img/solution_icon3.svg',
    title: '人事行政',
    description:
      '通过数据可视化统计报表获取多维度企业数据，全面了解员工表现，让绩效评价更客观、公正；使用公告发布通知，安排公司活动，传递企业决策，便于塑造企业文化，让员工更有参与感。',
  },
];
</script>
