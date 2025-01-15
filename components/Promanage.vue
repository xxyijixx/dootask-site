<!-- 产品-组织管理 -->
<template>
  <article class="manage">
    <div class="manage-con">
      <div class="manage-t">
        <h1 class="txt-5004455 manage-h1 mb-16">{{ $t('produpage.org.title') }}</h1>
        <h5 class="txt-4001830 manage-h5">
          {{ $t('produpage.org.desc') }}
        </h5>
      </div>
      <div class="manage-b mt-80">
        <ul class="manage-ul">
          <li
            v-for="(item, index) in manageItems.slice(0, 2)"
            :key="index"
            class="manage-ul-item mb-32"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <img class="manage-icon mr-16" :src="item.icon" :alt="item.title" />
            <div class="manage-tit">
              <h3 class="txt-5002025 manage-h3 mb-16">
                {{ item.title }}
              </h3>
              <h6 class="txt-4001624 manage-h6">
                {{ item.description }}
              </h6>
            </div>
          </li>
        </ul>
        <ul class="manage-ul">
          <li
            v-for="(item, index) in manageItems.slice(2)"
            :key="index"
            class="manage-ul-item mb-32"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <img class="manage-icon mr-16" :src="item.icon" :alt="item.title" />
            <div class="manage-tit">
              <h3 class="txt-5002025 manage-h3 mb-16">
                {{ item.title }}
              </h3>
              <h6 class="txt-4001624 manage-h6">
                {{ item.description }}
              </h6>
            </div>
          </li>
        </ul>
        <div class="manage-svg" :style="{ '--delay': '0.2s' }">
          <img
            class="manage-bg"

            :src="`/img/${theme}/product_pic10.svg`"
            alt="顺利打卡上班"
          />

          <div class="manage-tips">
            <img src="/img/product_icon1.svg" alt="出勤签到" />
            <i class="manage-tips-txt txt-4001822">{{ $t('produpage.org.tips') }}</i>
          </div>
          <h2 class="manage-svg-h2 txt-6003652">{{ $t('produpage.org.checkin') }}</h2>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import {toRefs } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const themeStore = useThemeStore();

const { theme } = toRefs(themeStore);


const manageItems = computed(() => [
  {
    icon: '/img/product_subtract.svg',
    title: t('produpage.org.org_list.title_one'),
    description:t('produpage.org.org_list.desc_one'),
  },
  {
    icon: '/img/product_subtract.svg',
    title: t('produpage.org.org_list.title_two'),
    description:t('produpage.org.org_list.desc_two'),
  },
  {
    icon: '/img/product_subtract.svg',
    title: t('produpage.org.org_list.title_three'),
    description:t('produpage.org.org_list.desc_three'),
  },
]);
</script>
