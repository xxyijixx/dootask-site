<template>
<div>
    <div class="topics">
      <div class="topics-con">
        <div class="topics-layout">
          <div class="topics-tit mb-32" style="width: auto !important">
            <span class="txt-6007290 topics-h1">一个产品，多种强大的工具</span>
          </div>
          <h4 class="txt-4001830 topics-h4 mb-32">
            该产品汇集了各种文档协作、在线思维导图、在线流程图、项目管理、任务分配、即时IM、文档管理等功能。
          </h4>
          <div class="flex-cc topics-btn">
            <span class="mr-24 get-started">
              <!-- <a href="./price.html"> -->
              <NuxtLink to="/price">
                <button class="btn btn-primary mr-20">开始使用</button>
              </NuxtLink>

              <!-- </a> -->
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="prooduct-con">
      <ul class="prooduct-list">
        <li>
          <i class="prev" @click="prevHandle">
            <img src="/img/prev.svg" alt="一个产品，多种强大的工具" />
          </i>
        </li>
        <li 
          v-for="(item, index) in productItems" 
          :key="index"
          class="prooduct-list-item"
          :class="{
            'active': index === currentIndex,
            'top': index < 5,
            'bot': index >= 5
          }"
          :style="{ '--delay': `${index * 0.1}s` }"
          @click="selectProductItem(index)"
        >
          <img class="icon" :src="getProductIcon(index)" :alt="item.title" />
          <h3 class="txt-4002025 txt">{{ item.title }}</h3>
        </li>
        <li>
          <i class="next" @click="nextHandle">
            <img src="/img/next.svg" alt="一个产品，多种强大的工具" />
          </i>
        </li>
      </ul>
      <ul class="prooduct-ul">
        <li 
          v-for="(detail, index) in productDetails" 
          :key="index"
          class="details"
          :class="{ 'active': index === currentIndex }"
          :style="{ display: index === currentIndex ? 'block' : 'none' }"
        >
          <div class="details-con" :class="`${detail.items ? detail.items.length : 1}`">
            <img v-show="theme === 'light'" class="pic theme_light" :src="`/img/light/product_pic${index + 1}.svg`" :alt="detail.alt" />
            <img v-show="theme === 'dark'" class="pic theme_dark" :src="`/img/dark/product_pic${index + 1}.svg`" :alt="detail.alt" />
            <ul class="details-ul" :class="detail.ulClass">
              <li 
                v-for="(item, itemIndex) in detail.items" 
                :key="itemIndex"
                class="details-ul-item"
                :class="item.class"
              >
                <h1 class="txt-7003645 serial-number mb-24">
                  {{ itemIndex + 1 < 10 ? `0${itemIndex + 1}` : itemIndex + 1 }}
                </h1>
                <h5 class="txt-5002025 mb-16 choose-con-item-h5">
                  {{ item.title }}
                </h5>
                <h6 class="txt-4001624 choose-con-item-h6">
                  {{ item.description }}
                </h6>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
</div>
</template>

<script setup>
  import { ref, watch, onMounted, onUnmounted } from 'vue'

    const currentIndex = ref(0)

    const theme = ref('light')

    const getInitialTheme = () => {
    // 首先检查系统主题
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    if (prefersDarkScheme.matches) return 'dark'

    // 其次检查 document.documentElement 上的 data-theme 属性
    const htmlTheme = document.documentElement.getAttribute('data-theme')
    if (htmlTheme) return htmlTheme

    // 再检查 localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme

    // 默认为 light
    return 'light'
}

    const handleThemeChange = (event) => {
        theme.value = event.detail
    }

// 监听 currentIndex 更新后，确保 DOM 渲染完成
watch(currentIndex, async (newIndex) => {
  // 等待 DOM 渲染完成
  await nextTick()

  const detailsItems = document.querySelectorAll('.details')
  detailsItems.forEach((item, index) => {
    if (index === newIndex) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
}, { immediate: true })


    onMounted(() => {
        // 获取初始主题
        theme.value = getInitialTheme()

        // 监听主题变化事件
        window.addEventListener('theme-change', handleThemeChange)
    })

    onUnmounted(() => {
        // 清理事件监听器
        window.removeEventListener('theme-change', handleThemeChange)
    })
      
  const productItems = [
    { icon: '/img/product_icons0_h.svg', title: '机器人助理' },
    { icon: '/img/product_icons1.svg', title: '即时沟通' },
    { icon: '/img/product_icons2.svg', title: '项目管理' },
    { icon: '/img/product_icons3.svg', title: '任务仪表盘' },
    { icon: '/img/product_icons4.svg', title: '任务日历' },
    { icon: '/img/product_icons5.svg', title: '机器人助手' },
    { icon: '/img/product_icons6.svg', title: '团队管理' },
    { icon: '/img/product_icons7.svg', title: '端到端加密' },
    { icon: '/img/product_icons8.svg', title: '多平台应用' }
  ]
  
  const productDetails = [
  {
    alt: '团队协作无界限,不再是文件孤岛',
    items: [
      {
        title: '团队协作无界限',
        description: '汇集文档、电子表格、思维笔记等多种在线工具，汇聚企业知识资源于一处，支持多人实时协同编辑，让团队协作更便捷。'
      },
      {
        title: '不再是文件孤岛',
        description: '具有多种文件格式支持，团队内部文件共享，可控制的文件权限、历史版本追踪等，方便团队成员之间进行文件协作和讨论，提高工作效率。'
      }
    ]
  },
  {
    alt: '聚焦沟通高效交流,消息必达沟通无阻碍,云端同步查阅历史信息不受限,随时随地参会',
    items: [
      {
        title: '聚焦沟通，高效交流',
        description: '针对项目和任务建立群组，即时IM功能可以帮助团队成员之间实时沟通，在任务卡片中添加评论、附件、提醒等，促进团队快速协作，提高团队工作效率。'
      },
      {
        title: '消息必达沟通无阻碍',
        description: '消息支持查看已读未读，未读消息通过官方邮件通知对方，高效传达。'
      },
      {
        title: '云端同步查阅历史信息不受限',
        description: '信息多端同步，不丢失。新员工加入组织，支持查看聊天历史消息，无缝融入团队。'
      },
      {
        title: '随时随地参会',
        description: '使用沟通群组视频会议，项目人员随时随地参会，提升线上会议便捷性，保证会议全程安全可控，有序进行。'
      }
    ],
    ulClass: 'item4'
  },
  {
    alt: '多样式管理模版,关联文件一键归档,项目化办公，行动可视化,动态管理，实时监控',
    items: [
      {
        title: '多样式管理模版',
        description: '模版满足多种团队协作场景，同时支持自定义模版，满足团队个性化场景管理需求，可直观的查看项目的进展情况，团队协作更方便。'
      },
      {
        title: '项目化办公，行动可视化',
        description: '使用看板、表格、列表等多种视图让整体项目一目了然；成员可对任务灵活筛选、排序和分组，让要事优先，并保持专注。'
      },
      {
        title: '动态管理，实时监控',
        description: '实时变更项目动态，具体任务变更情况记录提醒，以便团队把控项目整体进程，制定相应计划。'
      },
      {
        title: '关联文件一键归档',
        description: '项目及相关任务文件自动归档储存，便于之后查阅使用。'
      }
    ],
    ulClass: 'item4'
  },
  {
    alt: '全面洞悉任务数据',
    items: [
      {
        title: '全面洞悉任务数据',
        description: '任务仪表盘内展示任务状态分类统计，便于个人掌握任务进度，合理安排和规划工作，提高工作效率。'
      }
    ]
  },
  {
    alt: '精准掌握时间进度,多款日历视图',
    items: [
      {
        title: '精准掌握时间进度',
        description: '展现各项工作的日程排期，让工作任务一目了然，更好的平衡工作和生活。'
      },
      {
        title: '多款日历视图',
        description: '提供月/周/日等多款日历视图，便捷切换；支持按使用目的创建多个日历，自定义可见范围和颜色标识，让日程分类展示。'
      }
    ]
  },
  {
    alt: '智能提示，让科技贴近生活',
    items: [
      {
        title: '智能提示，让科技贴近生活',
        description: '智能机器人可对员工日常签到打卡、任务提醒、推送最新咨询消息等进行服务，帮用户实现有效的工作进度管理及时间规划。'
      },
      {
        title: '人工智能，实现与AI实时交流',
        description: '聪明的小海豚，基于人工智能技术的语言处理工具，能够通过学习和理解人类的语言来进行对话，实时交流，全面掌握各种文字信息，极大提高工作的便捷性。'
      }
    ]
  },
  {
    alt: '全面提升层级化组织效能,多功能协助企业管理团队',
    items: [
      {
        title: '全面提升层级化组织效能',
        description: '管理人员可在后台设置公司人员架构，形成完整团队形态，便于对项目和相关任务进行分级协同管理。'
      },
      {
        title: '多功能协助企业管理团队',
        description: '提供日常工作报告编辑汇总，项目及任务数据汇总统计，多种功能协助企业管理团队和项目，提高公司管理效率和管理水平。'
      }
    ]
  },
  {
    alt: '掌控加密密钥，保障安全可靠',
    items: [
      {
        title: '掌控加密密钥，保障安全可靠',
        description: '使用端到端加密技术，确保用户的数据只能由他们自己解密。这意味着即使黑客入侵了DooTask的服务器，也无法访问用户的数据。'
      },
      {
        title: '数据分类加密，实现安全同步',
        description: '使用分类加密技术，用户可以在多个设备间同步其任务和文件，不必担心数据被窃取或篡改。'
      }
    ]
  },
  {
    alt: '多平台应用',
    items: [
      {
        title: '多平台应用',
        description: '多平台应用支持，随时随地追踪项目进度，同时让你在工作中每一个步骤都能拥有更高效愉悦的体验。'
      }
    ]
  }
]
  
  function selectProductItem(index) {
    currentIndex.value = index
  }
  
  function prevHandle() {
    currentIndex.value = (currentIndex.value - 1 + productDetails.length) % productDetails.length
  }
  
  function nextHandle() {
    currentIndex.value = (currentIndex.value + 1) % productDetails.length
  }

  // 动态更改当前激活项的图标
function getProductIcon(index) {
  return index === currentIndex.value
    ? `/img/product_icons${index}_h.svg`  // 激活状态下的图标
    : `/img/product_icons${index}.svg`    // 普通状态下的图标
}

  
  // 监听 currentIndex 变化
watch(currentIndex, (newIndex) => {
  const detailsItems = document.querySelectorAll('.details')
  detailsItems.forEach((item, index) => {
    if (index === newIndex) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
}, { immediate: true })

</script>

<style scoped>
.topics {
    text-align: center;
    background: var(--bg-3-url) top left no-repeat;
    background-size: cover;
}
@media (max-width: 768px) {
  .details-ul {
    flex-direction: column; /* 小屏时竖直排列 */
  }
  .details-con .details-ul.item4 .details-ul-item {
    width: calc(100vw - 90px) !important;
  }
}

</style>