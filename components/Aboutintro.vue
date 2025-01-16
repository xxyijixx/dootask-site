<template>
  <div class="about-intro">
    <div class="topics">
      <div class="topics-con">
        <div class="topics-layout">
          <div class="topics-tit mb-32">
            <span class="txt-6007290 topics-h1">{{ $t('about.title') }}</span>
          </div>
          <h4 class="txt-4001830 topics-h4 mb-32">
            {{ $t('about.desc') }}
          </h4>
          <ul class="company-ul">
            <li class="company-ul-item">
              <h2 ref="yearEl" class="txt-5003636 company-h2 mb-8 company-year">
                {{ companyYear }}
              </h2>
              <h6 class="txt-4001624 company-h6">{{ $t('about.founded') }}</h6>
            </li>
            <li class="company-ul-item">
              <div class="flex-sc">
                <h2
                  ref="areaEl"
                  class="txt-5003636 company-h2 mb-8 company-area"
                >
                  {{ companyAreaText }}
                </h2>
                <i class="company-sup">+</i>
              </div>
              <h6 class="txt-4001624 company-h6">{{ $t('about.expertise') }}</h6>
            </li>
            <li class="company-ul-item">
              <div class="flex-sc">
                <h2
                  ref="sizeEl"
                  class="txt-5003636 company-h2 mb-8 company-size"
                >
                  {{ companySize }}
                </h2>
                <i class="company-sup">%</i>
              </div>
              <h6 class="txt-4001624 company-h6">{{ $t('about.clientsatis') }}</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <article class="company-profile">
      <div class="company-profile-con">
        <div class="company-profile-layout">
          <img
            class="company-profile-l"
            :src="`/img/${theme}/about_pic1.png`"
            alt="广西海豚有海信息科技公司,HITOSEA,海豚有海,广西海豚有海"
          />
          <div class="company-profile-r">
            <h1 class="txt-5004455 company-profile-h1 mb-80">
              {{ $t('about.profile.title') }}
              <svg
                style="bottom: -15px !important"
                class="company-profile-arcs"
                width="312"
                height="23"
                viewBox="0 0 312 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="arc"
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
            <h6 class="txt-4001830 company-profile-h6">
              {{ $t('about.profile.desc') }}
            </h6>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, toRefs } from 'vue';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const themeStore = useThemeStore();

const { theme } = toRefs(themeStore);

const companyYear = ref(999);
const companyArea = ref(0);
const companySize = ref(0);

const companyAreaText = ref('0');

const yearEl = ref(null);
const areaEl = ref(null);
const sizeEl = ref(null);

let yearTimerId = null;
let areaTimerId = null;
let sizeTimerId = null;

const updateYearNumber = () => {
  const increment = Math.ceil((2020 - companyYear.value) / 50);
  companyYear.value += increment;
  if (companyYear.value >= 2020) {
    clearInterval(yearTimerId);
    companyYear.value = 2020;
  }
};

const updateAreaNumber = () => {
  companyArea.value += 0.05;
  if (companyArea.value >= 10) {
    clearInterval(areaTimerId);
    companyArea.value = 10;
  }
  companyAreaText.value = Number(companyArea.value.toFixed(1)).toString();
};

const updateSizeNumber = () => {
  companySize.value += 0.5;
  if (companySize.value >= 99) {
    clearInterval(sizeTimerId);
    companySize.value = 99;
  }
};

onMounted(() => {
  const isMobile = window.matchMedia(
    'only screen and (max-width: 768px)',
  ).matches;

  yearTimerId = setInterval(updateYearNumber, 1);
  areaTimerId = setInterval(updateAreaNumber, 1);
  sizeTimerId = setInterval(updateSizeNumber, 1);
});

onUnmounted(() => {
  if (yearTimerId) clearInterval(yearTimerId);
  if (areaTimerId) clearInterval(areaTimerId);
  if (sizeTimerId) clearInterval(sizeTimerId);
});
</script>

<style scoped>
/* You can add any specific scoped styles here if needed */
</style>

<style scoped>
.topics {
  text-align: center;
  background: var(--bg-11-url) top right no-repeat;
  background-size: cover;
}
</style>
