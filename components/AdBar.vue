<template>
  <div id="ad" class="ad" ref="AdRef" v-if="adDiaplsy">
    <div class="ad-content">
      <div class="ad-content-left">
        <p id="ad-text" class="ad-text" ref="AdTextRef">最新活动</p>
        <button id="ad-btn" class="ad-btn" ref="AdBtnRef">查看详情</button>
      </div>
      <div id="ad-close" class="ad-close" ref="AdCloseRef">
        <img src="/img/price_icon2.svg" alt="关闭" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import '@/assets/css/ad.css';
const { locale } = useI18n();
import { fetchData, handleError} from '../utils/fetch';
onMounted(() => {
  fetchAdBar(locale.value)
  // initializeAdBar();
});

const adDiaplsy = ref(false)

const AdRef = ref<HTMLElement | null>();
const AdTextRef = ref<HTMLElement | null>();
const AdBtnRef = ref<HTMLElement | null>();
const AdCloseRef = ref<HTMLElement | null>();

// 根据窗口宽度设置广告栏高度
let adBarHeight = window?.innerWidth <= 768 ? 48 : 64;
const adBarHeightPX = `${adBarHeight}px`;

// 初始化广告栏
const initializeAdBar = () => {
  displayAdBar();
  adjustNavPosition('down');

  // 添加关闭广告栏的事件监听器
  AdCloseRef.value?.addEventListener('click', () => {
    hideAdBar();
    adjustNavPosition('up');
  });
};

// 显示广告栏
function displayAdBar() {
  const adWrapper = AdRef.value;
  if (!adWrapper) return;
  adWrapper.style.height = adBarHeightPX;
  adWrapper.style.display = 'block';

  // 调整头部元素的边距
  const headerEl = document.getElementsByTagName('header')[0];
  if (!headerEl) return;
  headerEl.style.marginTop = adBarHeightPX;
}

// 隐藏广告栏
function hideAdBar() {
  const adWrapper = AdRef.value;
  if (!adWrapper) return;
  adWrapper.style.height = '0px';
  adWrapper.style.display = 'none';

  // 重置头部元素的边距
  const headerEl = document.getElementsByTagName('header')[0];
  if (!headerEl) return;
  headerEl.style.marginTop = '0px';
}

// 调整导航栏位置
function adjustNavPosition(direction: string) {
  const navWrapper = document.getElementsByClassName('nav')[0] as HTMLElement;
  navWrapper.style.top = direction === 'down' ? adBarHeightPX : '0';
}

// 获取广告栏数据
const fetchAdBar = (language: string) => {
  const apiUrl = `https://cms.hitosea.com/api/doo-task-ad-bar?locale=${language}&populate[0]=background`;
  fetchData(apiUrl)
    .then(({ data: { attributes } }) => {
      updateAdBar(attributes);
    })
    .catch(handleError);
};

// 更新广告栏内容
function updateAdBar({ background, text, buttonText }: any) {
  // insertAdBarElement();
  adDiaplsy.value = true

  const adWrapper = AdRef.value;
  if (!adWrapper) return;

  // 设置背景图片
  const backgroundUrl = background?.data?.attributes?.url;
  if (backgroundUrl) {
    adWrapper.style.backgroundImage = `url(https://cms.hitosea.com${backgroundUrl})`;
  }

  // 更新文本内容
  if (AdTextRef.value) {
    AdTextRef.value.textContent = text;
  }

  // 更新按钮文本
  if (AdBtnRef.value) {
    AdBtnRef.value.textContent = buttonText;
  }

  initializeAdBar();
}
</script>
