<!-- 关于我们头部 -->
<template>
  <header class="head" ref="header">
    <div class="nav" ref="nav">
      <div class="nav-layout">
        <NuxtLink to="/" class="logo">
          <img id="logo" :src="`/img/${theme}/logo.svg`" alt="DooTask,Logo" />
          <i class="dootask txt-7002027">DooTask</i>
        </NuxtLink>
        <ul class="nav-ul">
          <li class="nav-ul-item">
            <NuxtLink
              class="txt-4001620 txt nav-product"
              :to="`/${locale}/product`"
              :style="route.path === '/product' ? getTabStyles() : {}"
              >{{ $t('navigation.product') }}</NuxtLink
            >
          </li>
          <li class="nav-ul-item">
            <NuxtLink
              class="txt-4001620 txt nav-solutions"
              :to="`/${locale}/solutions`"
              :style="route.path === '/solutions' ? getTabStyles() : {}"
              >{{ $t('navigation.solution') }}</NuxtLink
            >
          </li>
          <!-- 支持部分 -->
          <li class="nav-ul-item">
            <i
              class="txt-4001620 txt nav-support"
              id="support-txt"
              @click="toggleMenuPopHandle"
            >
              {{ $t('navigation.support') }}
              <img
                src="/img/vector.svg"
                alt="支持"
                class="nav-vector"
                id="drop-down-svg"
                :style="isMenuPopVisisble ? 'transform: rotate(180deg)' : ''"
              />
            </i>
            <ol
              class="submenu-pop"
              id="submenu-pop"
              :style="isMenuPopVisisble ? 'display: block' : ''"
            >
            <li 
              v-for="(item, index) in supportItems" 
              :key="index" 
              class="submenu-pop-item" 
              @click="changeMenu()"

            >
              <a 
                :href="item.link"
                :target="item.target || '_self'"
                class="txt-4001418 txt-sub"
              >
                {{ item.text }}
              </a>
            </li>
            </ol>
          </li>
          <li class="nav-ul-item">
            <NuxtLink
              class="txt-4001620 txt nav-price"
              :to="`/${locale}/price`"
              :style="route.path === '/price' ? getTabStyles() : {}"
              >{{ $t('navigation.pricing') }}</NuxtLink
            >
          </li>
          <li class="nav-ul-item">
            <NuxtLink
              class="txt-4001620 txt nav-about"
              :to="`/${locale}/about`"
              :style="route.path === '/about' ? getTabStyles() : {}"
              >{{ $t('navigation.about_us') }}</NuxtLink
            >
          </li>
        </ul>
        <div class="nav-r">
          <div class="lang" id="lang-img">
            <img
              src="/img/lang-select.svg"
              alt="语言切换"
              @click="showLangPopHandle"
            />
            <ul
              class="lang-pop"
              id="lang-pop"
              :style="{ display: isLangPopVisisble ? 'block' : 'none' }"
            >
              <li class="lang-pop-item" @click="switchLanguage('zh')">
                <i class="lang-txt">简体中文</i>
              </li>
              <li class="lang-pop-item" @click="switchLanguage('en')">
                <i class="lang-txt">English</i>
              </li>
            </ul>
          </div>
          <i
            class="nav-r-icon"
            v-if="theme === 'dark'"
            @click="setTheme('light')"
          >
            <img src="/img/light.svg" alt="明亮主题" />
          </i>
          <i
            class="nav-r-icon"
            v-if="theme === 'light'"
            @click="setTheme('dark')"
          >
            <img src="/img/drak.svg" alt="暗黑主题" />
          </i>
          <a href="https://github.com/kuaifan/dootask" target="_blank">
            <i class="nav-r-icon">
              <img src="/img/github.svg" alt="github" />
            </i>
          </a>
          <i class="line-1"></i>
          <span class="get-started">
            <a href="https://www.dootask.com/manage/dashboard">
              <button class="btn btn-primary">
                {{ $t('common.try_now') }}
              </button>
            </a>
          </span>
        </div>
        <div class="menuBtn" @click="openDrawer">
          <img id="menuBtn" :src="`/img/menu.svg`" alt="菜单" />
        </div>
      </div>
    </div>
    <!-- 抽屉导航 -->
    <div class="drawer" :class="{ 'open-drawer': isDrawerVisible }">
      <div class="drawer-t mb-36">
        <a href="/" class="logo">
          <img id="logo" :src="`/img/${theme}/logo.svg`" alt="DooTaskLogo" />
          <i class="dootask txt-7002027">DooTask</i>
        </a>
        <i class="close-drawer" @click="closeDrawer">✕</i>
      </div>
      <ul class="drawer-ul">
        <li class="drawer-item-t mb-16">
          <div
            class="drawer-item"
            v-for="(item, index) in mainMenuItems.slice(0, 2)"
            :key="index"
          >
            <a class="txt-4001620 txt" :href="item.link" @click="closeDrawer">{{
              item.text
            }}</a>
          </div>
          <div class="drawer-item" @click="expandMenuHandle('support')">
            <i class="txt-4001620 txt">
              {{ $t('navigation.support') }}
              <img
                src="/img/vector.svg"
                class="nav-vector"
                alt="支持"
                id="drawer-down-support-svg"
                :style="isSupportMenuOpen ? 'transform: rotate(180deg)' : ''"
              />
            </i>
          </div>
          <ol class="drawer-active" v-show="isSupportMenuOpen" id="support">
            <div
              class="drawer-item"
              v-for="(item, index) in supportItems"
              :key="index"
            >
              <a
                class="txt-4001620 txt"
                :href="item.link"
                :target="item.target || '_self'"
                @click="closeDrawer"
                >{{ item.text }}</a
              >
            </div>
          </ol>
          <div
            class="drawer-item"
            v-for="(item, index) in mainMenuItems.slice(2, 5)"
            :key="index"
          >
            <a class="txt-4001620 txt" :href="item.link" @click="closeDrawer">{{
              item.text
            }}</a>
          </div>
        </li>
        <li class="drawer-item-c">
          <div class="drawer-item" @click.stop="expandMenuHandle('theme')">
            <i class="txt-4001620 txt">
              {{ $t('navigation.theme') }}
              <img
                src="/img/vector.svg"
                alt="主题"
                class="nav-vector"
                :style="isThemeMenuOpen ? 'transform: rotate(180deg)' : ''"
              />
            </i>
          </div>
          <ol class="drawer-active" v-show="isThemeMenuOpen" id="theme">
            <div
              class="drawer-item"
              v-for="(item, index) in themeItems"
              :key="index"
            >
              <a class="txt-4001620 txt" @click="setTheme(item.value)">{{
                item.text
              }}</a>
            </div>
          </ol>
        </li>

        <li class="drawer-item-c">
          <div class="drawer-item" @click="expandMenuHandle('language')">
            <i class="txt-4001620 txt">
              {{ $t('navigation.language') }}
              <img
                src="/img/vector.svg"
                alt="语言"
                class="nav-vector"
                :style="isLanguageMenuOpen ? 'transform: rotate(180deg)' : ''"
              />
            </i>
          </div>
          <ol
            class="drawer-active"
            :style="{ display: isLanguageMenuOpen ? 'block' : 'none' }"
            id="language"
          >
            <div
              class="drawer-item"
              v-for="(item, index) in languageItems"
              :key="index"
            >
              <a class="txt-4001620 txt" @click="handleSetLocale(item.value)">{{
                item.text
              }}</a>
            </div>
          </ol>
        </li>
        <li class="drawer-item">
          <a
            class="txt-4001620 txt"
            href="https://www.dootak.com/manage/dashboard"
            @click="closeDrawer"
            >{{ $t('common.try_now') }}</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const themeStore = useThemeStore();

const { theme, lang } = toRefs(themeStore);

// 获取当前路由信息
const route = useRoute();

// 在 setup 顶部立即调用 useI18n()
const { t, setLocale,locale, setLocaleMessage } = useI18n();

// 抽屉相关状态和方法
const isDrawerOpen = ref(false);

//控制菜单三个选项的展开
const isSupportMenuOpen = ref(false);
const isThemeMenuOpen = ref(false);
const isLanguageMenuOpen = ref(false);

//语言设置
// 语言切换方法
const switchLanguage = async (lang: 'zh' | 'en') => {
  console.log('Switching language to:', lang);
  setLocale(lang);
  // 更新 themeStore
  themeStore.lang = lang;
  // 保存到 localStorage
  localStorage.setItem('language', lang);
};

// 背景映射
const backgroundMap = computed(() => ({
  [`/${locale.value}`]: 'var(--bg-1-url)',
  [`/${locale.value}/product`]: 'var(--bg-3-url)',
  [`/${locale.value}/download`]: 'var(--bg-8-url)',
  [`/${locale.value}/about`]: 'var(--bg-11-url)',
  [`/${locale.value}/solutions`]: 'var(--bg-5-url)',
  [`/${locale.value}/price`]: 'var(--bg-10-url)',
}));

// 修改背景获取逻辑
const getBackgroundUrl = computed(() => {
  // 优先使用带语言前缀的路径
  const localizedPath = backgroundMap.value[route.path];
  
  // 如果没有找到，尝试使用原始路径作为备选
  if (localizedPath) {
    return localizedPath;
  }
  
  // 默认背景
  return 'var(--bg-1-url)';
});

// 背景显示状态
const showBackground = ref(true);

const getTabStyles = () => {
  return {
    backgroundColor: 'var(--bg-hover-color)', // 设置背景色
    color: 'var(--text-color)', // 设置文本颜色
    borderRadius: '6px', // 设置圆角
  };
};

onMounted(() => {
  const menuBtn = document.getElementById('menuBtn');
  const drawer = document.querySelector('.drawer');
  const supportTxt = document.getElementById('support-txt');
  const submenuPop = document.getElementById('submenu-pop');
  const langImg = document.getElementById('lang-img');
  const langPop = document.getElementById('lang-pop');

  // 点击菜单外部关闭各种弹出菜单
  window.addEventListener('click', (e) => {
    // 关闭支持菜单弹窗
    if (
      submenuPop &&
      !submenuPop.contains(e.target as Node) &&
      e.target !== supportTxt
    ) {
      isMenuPopVisisble.value = false;
    }

    // 关闭语言选择弹窗
    if (
      langPop &&
      !langPop.contains(e.target as Node) &&
      e.target !== langImg
    ) {
      isLangPopVisisble.value = false;
    }
  });


  showBackground.value = true;

  const navbar = document.querySelector('.nav') as HTMLElement;
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 30) {
        // 当滚动距离大于30px时，添加navbar-white类，remove后导航栏背景色为白色
        navbar.classList.add('navbar-white');
      } else {
        navbar.classList.remove('navbar-white');
      }
    });
  }
});

onUnmounted(() => {});

// 语言选择
const isLangPopVisisble = ref(false);

const showLangPopHandle = (e: Event) => {
  // 阻止事件冒泡
  e.stopPropagation();
  // 切换语言弹窗的可见性
  isLangPopVisisble.value = !isLangPopVisisble.value;
};

// 设置主题
const setTheme = (newTheme: 'light' | 'dark') => {
  try {
    themeStore.setTheme(newTheme);
  } catch (error) {
    console.error('切换主题时出错:', error);
  }
};

// 导航下拉菜单
const isMenuPopVisisble = ref(false);

const toggleMenuPopHandle = () => {
  isMenuPopVisisble.value = !isMenuPopVisisble.value;
};

const changeMenu = (type?: string) => {
  isMenuPopVisisble.value = false;
};

// 状态管理
const isDrawerVisible = ref(false);
const drawerRef = ref<HTMLElement | null>(null);

// 创建带语言前缀的路径
const localizedRoutes = computed(() => ({
  product: `/${locale.value}/product`,
  solutions: `/${locale.value}/solutions`,
  pricing: `/${locale.value}/price`,
  about: `/${locale.value}/about`,
  download: `/${locale.value}/download`,
  help: `/${locale.value}/help`,
  privacy: `/${locale.value}/privacy`
}));

// 菜单项数据
const mainMenuItems = computed(() => [
  { text: t('navigation.product'), link: localizedRoutes.value.product  },
  { text: t('navigation.solution'), link: localizedRoutes.value.solutions },
  { text: t('navigation.pricing'), link: localizedRoutes.value.pricing },
  { text: t('navigation.about_us'), link: localizedRoutes.value.about },
]);

const supportItems = computed(() => [
  { text: t('navigation.download'), link: localizedRoutes.value.download },
  { text: t('navigation.help_center'), link: localizedRoutes.value.help },
  { text: t('navigation.privacy_policy'), link: localizedRoutes.value.privacy, target: '_blank' },
  {
    text: t('navigation.api_docs'),
    link: 'https://www.dootask.com/docs/index.html',
    target: '_blank',
  },
]);

interface ThemeItem {
  text: string;
  value: 'light' | 'dark';
}

const themeItems: ThemeItem[] = [
  { text: 'Light', value: 'light' },
  { text: 'Dark', value: 'dark' },
];

interface LanguageItem {
  text: string;
  value: 'zh' | 'en';
}

const languageItems: LanguageItem[] = [
  { text: t('common.lang_zh'), value: 'zh' },
  { text: t('common.lang_en'), value: 'en' },
];

const openDrawer = () => {
  isDrawerVisible.value = true;
};

const closeDrawer = () => {
  isDrawerVisible.value = false;
};

const expandMenuHandle = (val: string) => {
  if (val === 'support') {
    isSupportMenuOpen.value = !isSupportMenuOpen.value;
  } else if (val === 'language') {
    isLanguageMenuOpen.value = !isLanguageMenuOpen.value;
    // 关闭其他可能打开的菜单
    isSupportMenuOpen.value = false;
    isThemeMenuOpen.value = false;
  } else if (val === 'theme') {
    isThemeMenuOpen.value = !isThemeMenuOpen.value; // 切换主题菜单的显示状态
  }
};

//语言选择
const handleSetLocale = (newLocale: 'zh' | 'en') => {
  switchLanguage(newLocale);
  isLangPopVisisble.value = false;
};
</script>
