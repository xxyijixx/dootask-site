<script setup>
import { ref, reactive } from 'vue'

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
  selectedPlan.value = plan
  handlePlanAction(plan)
}

function handlePlanAction(plan) {
  if (plan.buttonLink) {
    window.open(plan.buttonLink, '_blank')
  } else {
    // 打开联系模态框
    modalTitle.value = plan.name === '专业版' ? '联系我们' : '定制咨询'
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

<template>
  <div class="price-section">
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
            class="price-card-item price-animate-box" 
            :class="{ 
              'active': plan.recommended || selectedPlan === plan,
              'hover-effect': hoveredPlan === plan 
            }"
            :style="{ '--delay': `${index * 0.1}s` }"
            @mouseenter="hoveredPlan = plan"
            @mouseleave="hoveredPlan = null"
            @click="handlePlanSelect(plan)"
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
  </div>
</template>

<style scoped>
.active {
  border: 2px solid #28a745;
  box-shadow: 0 15px 45px rgba(40, 167, 69, 0.2);
  transform: scale(1.02);
}

.hover-effect {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.btn-selected {
  background-color: #28a745;
  color: white;
  transform: scale(1.05);
}

.feature-highlight {
  color: #28a745;
  font-weight: bold;
}

.icon-selected {
  transform: scale(1.2);
  filter: brightness(1.2);
}

.rec-icon {
  background: #28a745;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
}

/* 其他样式保持不变 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  position: relative;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
  color: #6c757d;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #dc3545;
}

.modal form {
  display: flex;
  flex-direction: column;
}

.modal input, 
.modal textarea {
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.modal input:focus, 
.modal textarea:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.modal textarea {
  min-height: 120px;
  resize: vertical;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>