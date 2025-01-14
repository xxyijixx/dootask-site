<!-- 关于我们头部 -->
<template>
  <header class="head" ref="header">
    <div class="nav" ref="nav">
      <div class="nav-layout">
        <NuxtLink to="/" class="logo">
          <img
            id="logo"
            :src="useImage('logo.svg', true, false)"
            alt="DooTask,Logo"
          />
          <i class="dootask txt-7002027">DooTask</i>
        </NuxtLink>
        <ul class="nav-ul">
          <li class="nav-ul-item">
            <NuxtLink
              class="txt-4001620 txt nav-product"
              to="/product"
              :class="{ active: route.path === '/product' }"
              >产品</NuxtLink
            >
          </li>
          <li class="nav-ul-item">
            <NuxtLink
              class="txt-4001620 txt nav-solutions"
              to="/solutions"
              :class="{ active: route.path === '/solutions' }"
              >解决方案</NuxtLink
            >
          </li>
          <li class="nav-ul-item">
            <i
              class="txt-4001620 txt nav-support"
              id="support-txt"
              @click="toggleMenuPopHandle"
            >
              支持
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
              <li class="submenu-pop-item" @click="changeMenu()">
                <NuxtLink class="txt-4001418 txt-sub" to="/download"
                  >下载中心</NuxtLink
                >
              </li>
              <li class="submenu-pop-item" @click="changeMenu()">
                <a class="txt-4001418 txt-sub" href="http://localhost:5173/"
                  >帮助中心</a
                >
              </li>
              <li class="submenu-pop-item" @click="changeMenu()">
                <NuxtLink
                  class="txt-4001418 txt-sub"
                  to="/privacy"
                  target="_blank"
                  >隐私政策</NuxtLink
                >
              </li>
              <li class="submenu-pop-item" @click="changeMenu()">
                <a
                  class="txt-4001418 txt-sub"
                  href="https://www.dootask.com/docs/index.html"
                  target="_blank"
                  >API 文档</a
                >
              </li>
            </ol>
          </li>
          <li class="nav-ul-item">
            <NuxtLink
              class="txt-4001620 txt nav-price"
              to="/price"
              :class="{ active: route.path === '/price' }"
              >服务价格</NuxtLink
            >
          </li>
          <li class="nav-ul-item">
            <NuxtLink
              class="txt-4001620 txt nav-about"
              to="/about"
              :class="{ active: route.path === '/about' }"
              >关于我们</NuxtLink
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
              <li class="lang-pop-item" @click="setLocale('zh')">
                <i class="lang-txt">简体中文</i>
              </li>
              <li class="lang-pop-item" @click="setLocale('en')">
                <i class="lang-txt">English</i>
              </li>
            </ul>
          </div>
          <i class="nav-r-icon theme_dark" @click="setTheme('light')">
            <img src="/img/light.svg" alt="明亮主题" />
          </i>
          <i class="nav-r-icon theme_light" @click="setTheme('dark')">
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
              <button class="btn btn-primary">立即体验</button>
            </a>
          </span>
        </div>
        <div class="menuBtn" @click="openDrawer">
          <img
            id="menuBtn"
            :src="useImage('menu.svg', false, false)"
            alt="菜单"
          />
        </div>
      </div>
    </div>
    <!-- 抽屉导航 -->
    <div class="drawer" :class="{ 'drawer-open': isDrawerVisible }">
      <div class="drawer-t mb-36">
        <a href="/" class="logo">
          <img
            id="logo"
            :src="useImage('logo.svg', true, false)"
            alt="DooTaskLogo"
          />
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
          <div class="drawer-item" @click.stop="expandMenuHandle('support')">
            <i class="txt-4001620 txt">
              支持
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
                target="_blank"
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
              主题
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
              <a class="txt-4001620 txt" @click="setTheme(item.value)">{{item.text}}</a>
            </div>
          </ol>
        </li>
        <li class="drawer-item-c">
          <div class="drawer-item" @click.stop="expandMenuHandle('language')">
            <i class="txt-4001620 txt">
              语言
              <img
                src="/img/vector.svg"
                alt="语言"
                class="nav-vector"
                :style="isLanguageMenuOpen ? 'transform: rotate(180deg)' : ''"
              />
            </i>
          </div>
          <ol class="drawer-active" v-show="isLanguageMenuOpen" id="language">
            <div
              class="drawer-item"
              v-for="(item, index) in languageItems"
              :key="index"
            >
              <a class="txt-4001620 txt" @click="handleSetLocale(item.value)">{{item.text}}</a>
            </div>
          </ol>
        </li>
        <li class="drawer-item">
          <a
            class="txt-4001620 txt"
            href="https://www.dootak.com/manage/dashboard"
            @click="closeDrawer"
            >立即体验</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// 获取当前路由信息
const route = useRoute();
const { setLocale, locale } = useI18n();
const { $setTheme } = useNuxtApp();

// 抽屉相关状态和方法
const isDrawerOpen = ref(false);

//控制菜单三个选项的展开
const isSupportMenuOpen = ref(false);
const isThemeMenuOpen = ref(false);
const isLanguageMenuOpen = ref(false);

// 背景映射
const backgroundMap = {
  '/': 'var(--bg-1-url)',
  '/product': 'var(--bg-3-url)',
  '/download': 'var(--bg-8-url)',
  '/about': 'var(--bg-11-url)',
  '/solutions': 'var(--bg-5-url)',
  '/price': 'var(--bg-10-url)',
};

// 背景显示状态
const showBackground = ref(true);

// 新增状态管理
const isScrolled = ref(false);

// 滚动状态
// 滚动处理逻辑
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  isScrolled.value = scrollPosition > 50; // 滚动超过50px时，变为不透明背景
  updateHeaderStyle();
};

// 更新header和nav的背景色
const updateHeaderStyle = () => {
  const headerElement = document.querySelector('header');
  const navElement = document.querySelector('.nav');

  if (headerElement && navElement) {
    if (isScrolled.value) {
      // 如果是暗黑模式，滚动后背景设置为黑色，否则为白色
      if (isDarkMode.value) {
        headerElement.style.background = 'rgba(32, 33, 36)';
        navElement.style.background = 'rgba(32, 33, 36)';
      } else {
        headerElement.style.background = 'rgba(255, 255, 255)';
        navElement.style.background = 'rgba(255, 255, 255)';
      }
    } else {
      // 页面顶部时透明
      headerElement.style.background = 'transparent';
      navElement.style.background = 'transparent';
    }
  }
};

// 初始化页面时背景透明
const setInitialBackground = () => {
  const headerElement = document.querySelector('header');
  const navElement = document.querySelector('.nav');

  if (headerElement && navElement) {
    headerElement.style.background = 'transparent';
    navElement.style.background = 'transparent';
  }
};

onMounted(() => {
  //初始加载页面背景
  setInitialBackground(); // 页面加载时初始化背景色

  const savedTheme = localStorage.getItem('theme') || 'light'; // 从 localStorage 获取主题
  setTheme(savedTheme as 'light' | 'dark'); // 初始化主题

  const menuBtn = document.getElementById('menuBtn');
  const drawer = document.querySelector('.drawer');

  // 为小屏幕下的抽屉添加显示与关闭逻辑
  menuBtn?.addEventListener('click', () => {
    drawer?.classList.add('open-drawer');
  });

  window.addEventListener('click', (e) => {
    if (!drawer?.contains(e.target as Node) && e.target !== menuBtn) {
      drawer?.classList.remove('open-drawer');
    }
  });

  showBackground.value = true;
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// 语言选择
const isLangPopVisisble = ref(false);

const showLangPopHandle = () => {
  isLangPopVisisble.value = true;
};

// 设置主题
const setTheme = (newTheme: 'light' | 'dark') => {
  try {
    // console.log('当前主题:', newTheme);
    // 使用 Nuxt 提供的 $setTheme 方法
    $setTheme(newTheme);

    // 使用 useState 管理主题
    const theme = useState('theme', () => newTheme);
    // console.log('useState 初始值:', theme.value);

    theme.value = newTheme;
    // console.log('useState 更新后:', theme.value);

    // 更新 localStorage
    localStorage.setItem('theme', newTheme);
    // console.log('localStorage 主题:', localStorage.getItem('theme'));

    // 切换 HTML 根元素的 dark 类
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    // console.log(
    //   '是否添加 dark 类:',
    //   document.documentElement.classList.contains('dark'),
    // );
  } catch (error) {
    console.error('设置主题时出错:', error);
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

//抽屉导航
const isDarkMode = computed(() => {
  return document.documentElement.classList.contains('dark');
});

const useImage = (
  src: string,
  useTheme: boolean = true,
  useLang: boolean = true,
) => {
  const lang = locale.value || 'zh';
  const theme = 'light';

  if (useTheme && useLang) {
    return `/img/${theme}/${lang}_${src}`;
  }
  if (useTheme) {
    return `/img/${theme}/${src}`;
  }
  if (useLang) {
    return `/img/${lang}_${src}`;
  }

  return `/img/${src}`;
};

// 状态管理
const isDrawerVisible = ref(false);
const drawerRef = ref<HTMLElement | null>(null);
const activeSubMenu = ref<string | null>(null);

// 菜单项数据
const mainMenuItems = [
  { text: '产品', link: '/product' },
  { text: '解决方案', link: '/solutions' },
  { text: '服务价格', link: '/price' },
  { text: '关于我们', link: '/about' },
];

const supportItems = [
  { text: '下载中心', link: '/download' },
  { text: '帮助中心', link: '/help' },
  { text: '隐私政策', link: '/privacy', target: '_blank' },
  {
    text: 'API 文档',
    link: 'https://www.dootask.com/docs/index.html',
    target: '_blank',
  },
];

const themeItems = [
  { text: 'Light', value: 'light' },
  { text: 'Dark', value: 'dark' },
];

const languageItems = [
  { text: '简体中文', value: 'zh' },
  { text: 'English', value: 'en' },
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
    isLanguageMenuOpen.value = !isLanguageMenuOpen.value; // 切换语言菜单的显示状态
  } else if (val === 'theme') {
    isThemeMenuOpen.value = !isThemeMenuOpen.value; // 切换主题菜单的显示状态
  }
};

//语言选择
const handleSetLocale = (newLocale: 'zh' | 'en') => {
  setLocale(newLocale);
  isLangPopVisisble.value = false;
};


</script>
