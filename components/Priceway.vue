<template>
  <div class="topics">
    <div class="topics-con">
      <div class="topics-layout">
        <div class="topics-tit mb-32">
          <span class="txt-6007290 topics-h1">{{ $t('pricing.title') }}</span>
        </div>
        <h4 class="txt-4001830 topics-h4 mb-64">
          {{ $t('pricing.desc') }}
        </h4>
        <ul class="price-card">
          <li
            v-for="(plan, index) in pricePlans"
            :key="index"
            class="price-card-item"
            :class="{
              'active': selectedPlan === plan,
              'hover-effect': hoveredPlan === plan && selectedPlan !== plan,
            }"
            @click="selectCard(plan)"
          >
            <h4 class="txt-5002025 price-card-h4 mb-24">
              {{ plan.name }}
              <i v-if="index === 2" class="rec-icon">Rec.</i>
            </h4>
            <div class="price-card-money mb-12">
              <h2 class="txt-6003645 price-card-h2">
                {{ plan.price }}
              </h2>
              <i v-if="plan.priceUnit" class="txt-5001628 price-card-unit">{{plan.priceUnit}}</i>
            </div>
            <h6 class="txt-4001624 price-card-h6 mb-24" style="height: 48px">
              {{ plan.userLimit }}
            </h6>
            <button
              class="btn btn-green mb-24"
              @click.stop="handlePlanSelect(plan)"
              :class="{
                'btn-primary': hoveredPlan === plan ,
                'btn-selected': selectedPlan === plan,
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
                  'feature-highlight':
                    hoveredPlan === plan || selectedPlan === plan,
                }"
              >
                <img
                  class="icon mr-12"
                  :src="feature.icon"
                  :alt="feature.text"
                  :class="{
                    'icon-selected':
                      hoveredPlan === plan || selectedPlan === plan,
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
    <div v-if="showContactModal" @click.stop class="modal-overlay" :class="{ dark: theme === 'dark' }">
      <div class="modal-content" @click.stop >
        <h3>{{ modalTitle }}</h3>
        <br />
        <div class="modal-body">
            <p>{{ $t('pricing.modaldesc') }}</p>
            <p>{{ $t('pricing.modalphone') }}</p>
            <p>{{ $t('pricing.modaladdr1') }}@{{ $t('pricing.modaladdr2') }}</p>
        </div>
        <div class="modal-actions">
          <button @click="closeModal" class="btn-confirm">{{ $t('pricing.btn') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useThemeStore } from '@/stores/theme'; // 假设你的主题管理 store 路径

const { t } = useI18n();
const themeStore = useThemeStore();
const { theme, lang } = toRefs(themeStore);

const selectedPlan = ref(null);
const hoveredPlan = ref(null);
const showContactModal = ref(false);
const modalTitle = ref('');


const pricePlans = ref([
  {
    name: t('pricing.plans.free.name'),
    price: '¥0',
    priceUnit: t('pricing.plans.free.unit'),
    userLimit: t('pricing.plans.free.limit'),
    buttonText: t('pricing.plans.deploy'),
    buttonLink: 'https://github.com/kuaifan/dootask/tree/v0.13.0',
    features: [
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_first'),
      },
    ],
  },
  {
    name: t('pricing.plans.free_sec.name'),
    price: '¥0',
    priceUnit: t('pricing.plans.free_sec.unit'),
    userLimit: t('pricing.plans.free_sec.limit'),
    buttonText: t('pricing.plans.deploy'),
    buttonLink: 'https://github.com/kuaifan/dootask/tree/pro',
    features: [
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_first'),
      },
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_sec'),
      },
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_third'),
      },
    ],
  },
  {
    name: t('pricing.plans.pro.name'),
    price: '¥18,888',
    userLimit:  t('pricing.plans.pro.limit'),
    buttonText:  t('pricing.plans.communicate'),
    features: [
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_first'),
      },
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_sec'),
      },
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_forth'),
      },
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_five'),
      },
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_six'),
      },
    ],
  },
  {
    name: t('pricing.plans.enterprise.name'),
    price: t('pricing.plans.enterprise.price'),
    userLimit: t('pricing.plans.enterprise.limit'),
    buttonText: t('pricing.plans.custom'),
    features: [
      {
        icon: '/img/price_icon1.svg',
        text:t('pricing.plans.features_first'),
      },
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_sec'),
      },
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_forth'),
      },
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_five'),
      },
      {
        icon: '/img/price_icon1.svg',
        text: t('pricing.plans.features_six'),
      },
    ],
  },
]);

// 设置默认选中第三张卡片
onMounted(() => {
  selectedPlan.value = pricePlans.value[2];
});

const selectCard = (plan) => {
  // 更新选中的卡片，仅保存选中状态
  selectedPlan.value = plan;
};

function handlePlanSelect(plan) {
  // 如果有直接链接，打开链接
  if (plan.buttonLink) {
    window.open(plan.buttonLink, '_blank');
    // return;
  }

  // 重置所有卡片的 recommended 为 false
  pricePlans.value.forEach(p => {
    p.recommended = false;
  });

  // 将当前点击的卡片设置为选中状态
  selectedPlan.value = plan;

  // 对于有通信按钮的卡片，打开模态框
  if (plan.buttonText === t('pricing.plans.communicate')) {
    modalTitle.value = t('pricing.plans.communicate');
    showContactModal.value = true;
  } else if (plan.buttonText === t('pricing.plans.custom')) {
    modalTitle.value = t('pricing.custom');
    showContactModal.value = true;
  }
}

// 改进 closeModal 函数
function closeModal() {
  showContactModal.value = false;
}

</script>

<style>
.topics {
  text-align: center;
  background: var(--bg-10-url) top left no-repeat;
  background-size: cover;
}
</style>
