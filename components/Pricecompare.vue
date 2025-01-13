<template>
  <section class="plans">
    <div class="plans-con">
      <div class="plans-layout">
        <h2 class="txt-5004455 plans-tit-h2 mb-16">对比所有计划</h2>
        <h5 class="txt-4001830 plans-tit-h5 mb-80">
          该产品支持各种应用场景，帮助团队协作
        </h5>
        <ul class="plans-ul-t">
          <div class="price-ceiling">
            <li class="plans-ul-t-item grid-5" style="padding: 20px 24px">
              <h4 class="txt-5002024 plans-ul-t-item-h4">特点</h4>
              <h4
                v-for="(plan, index) in plans"
                :key="index"
                class="txt-5002024 plans-ul-t-item-h4"
              >
                {{ plan.name }}
              </h4>
            </li>
          </div>

          <li class="plans-ul-t-item grid-5" style="padding: 32px 24px">
            <h4 class="txt-5001616 plans-ul-t-item-h4">定价</h4>
            <div
              v-for="(plan, index) in plans"
              :key="index"
              class="plans-ul-t-item-h4"
            >
              <div class="price-card-money mb-24">
                <h2 class="txt-6003645 price-card-h2">
                  {{ plan.price }}
                </h2>
                <i v-if="plan.priceUnit" class="txt-5001628 price-card-unit">{{
                  plan.priceUnit
                }}</i>
              </div>
              <span class="plans-ul-b-item-btn">
                <a
                  v-if="plan.buttonLink"
                  :href="plan.buttonLink"
                  target="_blank"
                >
                  <button class="btn btn-primary">
                    {{ plan.buttonText }}
                  </button>
                </a>
                <button
                  v-else
                  class="btn btn-primary"
                  @click="handlePlanSelect(plan)"
                >
                  {{ plan.buttonText }}
                </button>
              </span>
            </div>
          </li>

          <template
            v-for="(section, sectionIndex) in compareSections"
            :key="sectionIndex"
          >
            <li class="plans-ul-t-item">
              <ol class="plans-ol">
                <li class="plans-ol-item">
                  <h6 class="txt-5001616 plans-ul-t-item-h4">
                    {{ section.title }}
                  </h6>
                </li>
                <li
                  v-for="(item, itemIndex) in section.items"
                  :key="itemIndex"
                  class="plans-ol-item grid-5"
                >
                  <h6 class="txt-4001616 plans-ol-item-h6">
                    {{ item.name }}
                  </h6>
                  <template v-for="(plan, planIndex) in plans" :key="planIndex">
                    <span v-if="typeof item.support[planIndex] === 'string'">
                      {{ item.support[planIndex] }}
                    </span>
                    <img
                      v-else-if="item.support[planIndex]"
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
        <!-- 小屏幕下的对比计划 -->
        <ul class="plans-ul-768">
          <li
            v-for="(plan, planIndex) in plans"
            :key="planIndex"
            class="plans-ul-768-item mb-36"
          >
            <h5 class="txt-5001822 help-h5 mb-16">
              {{ plan.name }}
            </h5>
            <ol class="plans-ol-768">
              <template
                v-for="(section, sectionIndex) in compareSections"
                :key="sectionIndex"
              >
                <li class="plans-ol-768-item">
                  <div class="plans-ol-768-content">
                    <h6 class="txt-5001616 plans-ol-item-h4">
                      {{ section.title }}
                    </h6>
                  </div>
                  <div
                    v-for="(item, itemIndex) in section.items"
                    :key="itemIndex"
                    class="plans-ol-768-content"
                  >
                    <h6 class="txt-4001516 plans-ol-item-h6">
                      {{ item.name }}
                    </h6>
                    <span v-if="typeof item.support[planIndex] === 'string'">
                      {{ item.support[planIndex] }}
                    </span>

                    <img
                      v-else-if="item.support[planIndex]"
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
                  </div>
                </li>
              </template>

              <li class="price-card-money mb-16">
                <h2 class="txt-6002430 price-card-h2">
                  {{ plan.price }}
                </h2>
                <i v-if="plan.priceUnit" class="txt-5001528 price-card-unit">{{
                  plan.priceUnit
                }}</i>
              </li>
              <li>
                <span style="display: inline-block; width: 100%">
                  <a
                    v-if="plan.buttonLink"
                    :href="plan.buttonLink"
                    target="_blank"
                    class="start_a"
                  >
                    <button class="btn btn-primary">
                      {{ plan.buttonText }}
                    </button>
                  </a>
                  <button
                    v-else
                    class="btn btn-primary"
                    @click="handlePlanSelect(plan)"
                  >
                    {{ plan.buttonText }}
                  </button>
                </span>
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>

    <!-- 联系我们模态框 -->
    <div v-if="showContactModal" @click.stop class="modal-overlay">
      <div class="modal-content">
        <h3>{{ modalTitle }}</h3>
        <br />
        <div class="modal-body">
          <p>如果有任何问题，欢迎使用以下方式与我们联系。</p>
          <p>座机电话：0771-3164099</p>
          <p>邮箱地址：service@hitosea.com</p>
        </div>
        <div class="modal-actions">
          <button @click="closeModal" class="btn-confirm">确定</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const darkTheme = ref(false); // 或者根据用户的设置来动态改变

const showContactModal = ref(false);
const modalTitle = ref('');
const contactForm = ref({
  name: '',
  email: '',
  message: '',
});

const plans = [
  {
    name: '普通版',
    price: '¥0',
    priceUnit: '/月',
    buttonText: '立即部署',
    buttonLink: 'https://github.com/kuaifan/dootask/tree/v0.13.0',
  },
  {
    name: '专业版',
    price: '¥0',
    priceUnit: '/月',
    buttonText: '立即部署',
    buttonLink: 'https://github.com/kuaifan/dootask/tree/pro',
  },
  {
    name: '专业版',
    price: '¥18,888',
    buttonText: '联系我们',
  },
  {
    name: '定制版',
    price: '定制',
    buttonText: '定制咨询',
  },
];

const compareSections = [
  {
    title: '系统使用',
    items: [
      {
        name: '用户数量',
        support: ['无限制', '≤3', '无限制', '可定制'],
      },
      {
        name: '项目数量',
        support: ['无限制', '无限制', '无限制', '无限制'],
      },
      {
        name: '任务数量',
        support: ['无限制', '无限制', '无限制', '无限制'],
      },
      {
        name: '离线部署',
        support: ['支持', '支持', '官方支持', '官方支持'],
      },
    ],
  },
  {
    title: '任务协作',
    items: [
      {
        name: '多视图展示',
        support: [true, true, true, true],
      },
      {
        name: '自定义栏目',
        support: [true, true, true, true],
      },
      {
        name: '可见性设置',
        support: [false, true, true, true],
      },
      {
        name: '重复周期',
        support: [false, true, true, true],
      },
    ],
  },
  {
    title: '项目管理',
    items: [
      {
        name: '项目进度',
        support: [true, true, true, true],
      },
      {
        name: '项目模板',
        support: [true, true, true, true],
      },
      {
        name: '甘特图',
        support: [true, true, true, true],
      },
    ],
  },
  {
    title: '应用',
    items: [
      {
        name: '审批中心',
        support: [false, true, true, true],
      },
      {
        name: 'OKR管理',
        support: [false, true, true, true],
      },
      {
        name: 'AI机器人',
        support: [false, true, true, true],
      },
      {
        name: '会议',
        support: [false, true, true, true],
      },
      {
        name: 'OKR结果分析',
        support: [false, true, true, true],
      },
      {
        name: 'LDAP',
        support: [false, true, true, true],
      },
      {
        name: '邮件',
        support: [true, true, true, true],
      },
      {
        name: 'APP推送',
        support: [false, true, true, true],
      },
      {
        name: '团队管理',
        support: [true, true, true, true],
      },
    ],
  },
  {
    title: '聊天',
    items: [
      {
        name: '@功能',
        support: [false, true, true, true],
      },
      {
        name: '关联任务',
        support: [false, true, true, true],
      },
      {
        name: '表情',
        support: [false, true, true, true],
      },
    ],
  },
];

function handlePlanAction(plan) {
  if (plan.buttonText === '联系我们') {
    modalTitle.value = '联系我们';
    showContactModal.value = true;
  } else if (plan.buttonText === '定制咨询') {
    modalTitle.value = '定制咨询';
    showContactModal.value = true;
  }
}

function handlePlanSelect(plan) {
  // 如果有直接链接，打开链接
  if (plan.buttonLink) {
    window.open(plan.buttonLink, '_blank');
    return;
  }

  // 打开联系模态框
  modalTitle.value = plan.buttonText;
  showContactModal.value = true;
}

// 改进 closeModal 函数
function closeModal() {
  showContactModal.value = false;
}
</script>
