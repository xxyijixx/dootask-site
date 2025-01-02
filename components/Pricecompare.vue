<template>
    <section class="plans">
      <div class="plans-con">
        <div class="plans-layout">
          <h2 class="txt-5004455 plans-tit-h2 mb-16">
            对比所有计划
          </h2>
          <h5 class="txt-4001830 plans-tit-h5 mb-80">
            该产品支持各种应用场景，帮助团队协作
          </h5>
          <ul class="plans-ul-t">
            <div class="price-ceiling">
              <li class="plans-ul-t-item grid-5" style="padding: 20px 24px">
                <h4 class="txt-5002024 plans-ul-t-item-h4">
                  特点
                </h4>
                <h4 v-for="(plan, index) in plans" :key="index" class="txt-5002024 plans-ul-t-item-h4">
                  {{ plan.name }}
                </h4>
              </li>
            </div>
            
            <li class="plans-ul-t-item grid-5" style="padding: 32px 24px">
              <h4 class="txt-5001616 plans-ul-t-item-h4">
                定价
              </h4>
              <div v-for="(plan, index) in plans" :key="index" class="plans-ul-t-item-h4">
                <div class="price-card-money mb-24">
                  <h2 class="txt-6003645 price-card-h2">
                    {{ plan.price }}
                  </h2>
                  <i v-if="plan.priceUnit" class="txt-5001628 price-card-unit">{{ plan.priceUnit }}</i>
                </div>
                <span class="plans-ul-b-item-btn">
                  <a v-if="plan.buttonLink" :href="plan.buttonLink" target="_blank">
                    <button class="btn btn-primary">
                      {{ plan.buttonText }}
                    </button>
                  </a>
                  <button v-else class="btn btn-primary" @click="handlePlanAction(plan)">
                    {{ plan.buttonText }}
                  </button>
                </span>
              </div>
            </li>
  
            <template v-for="(section, sectionIndex) in compareSections" :key="sectionIndex">
              <li class="plans-ul-t-item">
                <ol class="plans-ol">
                  <li class="plans-ol-item">
                    <h6 class="txt-5001616 plans-ul-t-item-h4">
                      {{ section.title }}
                    </h6>
                  </li>
                  <li v-for="(item, itemIndex) in section.items" :key="itemIndex" class="plans-ol-item grid-5">
                    <h6 class="txt-4001616 plans-ol-item-h6">
                      {{ item.name }}
                    </h6>
                    <template v-for="(plan, planIndex) in plans" :key="planIndex">
                      <img 
                        v-if="item.support[planIndex]" 
                        class="plans-ol-item-icon" 
                        src="/img/price_icon1.svg" 
                        :alt="item.name" 
                      />
                      <img 
                        v-else 
                        class="plans-ol-item-icon2" 
                        src="/img/price_icon2.svg" 
                        :alt="item.name" 
                      />
                    </template>
                  </li>
                </ol>
              </li>
            </template>
          </ul>
        </div>
      </div>
  
      <!-- 联系我们模态框 -->
      <div v-if="showContactModal" class="modal">
        <div class="modal-content">
          <span class="close-btn" @click="showContactModal = false">&times;</span>
          <h2>{{ modalTitle }}</h2>
          <form @submit.prevent="submitContactForm">
            <input 
              type="text" 
              v-model="contactForm.name" 
              placeholder="姓名" 
              required 
            />
            <input 
              type="email" 
              v-model="contactForm.email" 
              placeholder="邮箱" 
              required 
            />
            <textarea 
              v-model="contactForm.message" 
              placeholder="您的需求" 
              required
            ></textarea>
            <button type="submit" class="btn btn-primary">提交</button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showContactModal = ref(false)
  const modalTitle = ref('')
  const contactForm = ref({
    name: '',
    email: '',
    message: ''
  })
  
  const plans = [
    {
      name: '普通版',
      price: '¥0',
      priceUnit: '/月',
      buttonText: '立即部署',
      buttonLink: 'https://github.com/kuaifan/dootask/tree/v0.13.0'
    },
    {
      name: '专业版',
      price: '¥0',
      priceUnit: '/月',
      buttonText: '立即部署',
      buttonLink: 'https://github.com/kuaifan/dootask/tree/pro'
    },
    {
      name: '专业版',
      price: '¥18,888',
      buttonText: '联系我们'
    },
    {
      name: '定制版',
      price: '定制',
      buttonText: '定制咨询'
    }
  ]
  
  const compareSections = [
  {
    title: '系统使用',
    items: [
      { 
        name: '用户数量', 
        support: [true, true, true, true] 
      },
      { 
        name: '项目数量', 
        support: [true, true, true, true] 
      },
      { 
        name: '任务数量', 
        support: [true, true, true, true] 
      },
      { 
        name: '离线部署', 
        support: [true, true, true, true] 
      }
    ]
  },
  {
    title: '任务协作',
    items: [
      { 
        name: '多视图展示', 
        support: [true, true, true, true] 
      },
      { 
        name: '自定义栏目', 
        support: [true, true, true, true] 
      },
      { 
        name: '可见性设置', 
        support: [false, true, true, true] 
      },
      { 
        name: '重复周期', 
        support: [false, true, true, true] 
      }
    ]
  },
  {
    title: '项目管理',
    items: [
      { 
        name: '项目进度', 
        support: [true, true, true, true] 
      },
      { 
        name: '项目模板', 
        support: [true, true, true, true] 
      },
      { 
        name: '甘特图', 
        support: [true, true, true, true] 
      }
    ]
  },
  {
    title: '应用',
    items: [
      { 
        name: '审批中心', 
        support: [false, true, true, true] 
      },
      { 
        name: 'OKR管理', 
        support: [false, true, true, true] 
      },
      { 
        name: 'AI机器人', 
        support: [false, true, true, true] 
      },
      { 
        name: '会议', 
        support: [false, true, true, true] 
      },
      { 
        name: 'OKR结果分析', 
        support: [false, true, true, true] 
      },
      { 
        name: 'LDAP', 
        support: [false, true, true, true] 
      },
      { 
        name: '邮件', 
        support: [true, true, true, true] 
      },
      { 
        name: 'APP推送', 
        support: [false, true, true, true] 
      },
      { 
        name: '团队管理', 
        support: [true, true, true, true] 
      }
    ]
  },
  {
    title: '聊天',
    items: [
      { 
        name: '@功能', 
        support: [false, true, true, true] 
      },
      { 
        name: '关联任务', 
        support: [false, true, true, true] 
      },
      { 
        name: '表情', 
        support: [false, true, true, true] 
      }
    ]
  }
]
  
  function handlePlanAction(plan) {
    if (plan.buttonText === '联系我们') {
      modalTitle.value = '联系我们'
      showContactModal.value = true
    } else if (plan.buttonText === '定制咨询') {
      modalTitle.value = '定制咨询'
      showContactModal.value = true
    }
  }
  
  function submitContactForm() {
    console.log('提交表单:', contactForm.value)
    
    alert('感谢您的咨询，我们将尽快与您联系！')
    
    contactForm.value = { name: '', email: '', message: '' }
    showContactModal.value = false
  }
  </script>
