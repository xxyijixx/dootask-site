<template>
  <div class="topics">
    <div class="topics-con">
      <div class="topics-layout">
        <div class="topics-tit mb-32">
          <span class="txt-6007290 topics-h1">选择你的方案</span>
        </div>
        <h4 class="txt-4001830 topics-h4 mb-64">
          根据你的企业的规模和需求，有不同的版本可供选择
        </h4>
        <ul class="price-card">
          <li 
            v-for="(plan, index) in pricePlans" 
            :key="index"
            class="price-card-item" 
            :class="{ 
              'active': plan.recommended || selectedPlan === plan,
              'hover-effect': hoveredPlan === plan && selectedPlan !== plan 
            }"
            :style="{ '--delay': `${index * 0.2}s` }"
          >
            <h4 class="txt-5002025 price-card-h4 mb-24">
              {{ plan.name }}
              <i v-if="plan.recommended" class="rec-icon">Rec.</i>
            </h4>
            <div class="price-card-money mb-12">
              <h2 class="txt-6003645 price-card-h2">
                {{ plan.price }}
              </h2>
              <i v-if="plan.priceUnit" class="txt-5001628 price-card-unit">{{ plan.priceUnit }}</i>
            </div>
            <h6 class="txt-4001624 price-card-h6 mb-24" style="height: 48px">
              {{ plan.userLimit }}
            </h6>
            <button 
              class="btn btn-green mb-24" 
              @click.stop="handlePlanSelect(plan)"
              :class="{ 
                'btn-primary': hoveredPlan === plan || selectedPlan === plan,
                'btn-selected': selectedPlan === plan
              }"
            >
              {{ plan.buttonText }}
            </button>
            <ol class="price-card-ol">
              <li 
                v-for="(feature, featureIndex) in plan.features" 
                :key="featureIndex"
                class="price-card-ol-item mb-12"
                :class="{ 
                  'feature-highlight': hoveredPlan === plan || selectedPlan === plan 
                }"
              >
                <img 
                  class="icon mr-12" 
                  :src="feature.icon" 
                  :alt="feature.text"
                  :class="{ 
                    'icon-selected': hoveredPlan === plan || selectedPlan === plan 
                  }"
                />
                <h6 class="txt-4001624 price-card-h6">
                  {{ feature.text }}
                </h6>
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>

    <!-- 联系我们模态框 -->
    <div 
      v-if="showContactModal" 
      @click.stop 
      class="modal-overlay" 
    >
    <div class="modal-content" @click.stop >
      <h3>{{ modalTitle }}</h3>
      <br>
          <div class="modal-body">
                <p>如果有任何问题，欢迎使用以下方式与我们联系。</p>
                <p>座机电话：0771-3164099</p>
                <p>邮箱地址：service@hitosea.com</p>
          </div>
          <div class="modal-actions">
            <button  @click="closeModal" class="btn-confirm" >
              确定
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const selectedPlan = ref(null)
const hoveredPlan = ref(null)
const showContactModal = ref(false)
const modalTitle = ref('')
const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

const pricePlans = reactive([
  {
    name: '普通版',
    price: '¥0',
    priceUnit: '/月',
    userLimit: '人数无限制',
    buttonText: '立即部署',
    buttonLink: 'https://github.com/kuaifan/dootask/tree/v0.13.0',
    features: [
      {
        icon: '/img/price_icon1.svg',
        text: '支持私有化部署'
      }
    ],
    recommended: false
  },
  {
    name: '专业版',
    price: '¥0',
    priceUnit: '/月',
    userLimit: '最多3人',
    buttonText: '立即部署',
    buttonLink: 'https://github.com/kuaifan/dootask/tree/pro',
    features: [
      {
        icon: '/img/price_icon1.svg',
        text: '支持私有化部署'
      },
      {
        icon: '/img/price_icon1.svg',
        text: '技术咨询服务'
      },
      {
        icon: '/img/price_icon1.svg',
        text: '24小时服务响应'
      }
    ],
    recommended: false
  },
  {
    name: '专业版',
    price: '¥18,888',
    userLimit: '人数无限制',
    buttonText: '联系我们',
    recommended: true,
    features: [
      {
        icon: '/img/price_icon1.svg',
        text: '支持私有化部署'
      },
      {
        icon: '/img/price_icon1.svg',
        text: '技术咨询服务'
      },
      {
        icon: '/img/price_icon1.svg',
        text: 'Logo定制'
      },
      {
        icon: '/img/price_icon1.svg',
        text: '专属客户经理'
      },
      {
        icon: '/img/price_icon1.svg',
        text: '12小时服务响应'
      }
    ]
  },
  {
    name: '定制版',
    price: '定制',
    userLimit: '人数可定制',
    buttonText: '定制咨询',
    features: [
      {
        icon: '/img/price_icon1.svg',
        text: '支持私有化部署'
      },
      {
        icon: '/img/price_icon1.svg',
        text: '技术咨询服务'
      },
      {
        icon: '/img/price_icon1.svg',
        text: 'Logo定制'
      },
      {
        icon: '/img/price_icon1.svg',
        text: '专属客户经理'
      },
      {
        icon: '/img/price_icon1.svg',
        text: '12小时服务响应'
      }
    ],
    recommended: false
  }
])

function handlePlanSelect(plan) {
  // 如果有直接链接，打开链接
  if (plan.buttonLink) {
    window.open(plan.buttonLink, '_blank')
    return
  }

  // 打开联系模态框
  modalTitle.value = plan.buttonText
  showContactModal.value = true
}

// 改进 closeModal 函数
function closeModal() {
  showContactModal.value = false
}



</script>


<style scoped>
.topics {
    text-align: center;
    background: var(--bg-10-url) top left no-repeat;
    background-size: cover;
}

</style>