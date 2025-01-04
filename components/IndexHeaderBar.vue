<!-- 主页头部 -->
<template>
  <header class="head">
    <div class="nav">
      <div class="nav-layout">
        <NuxtLink to="/" class="logo">
          <!-- <a href="../zh/index.html" class="logo"> -->
          <img
            id="logo"
            :src="useImage('logo.svg', true, false)"
            alt="DooTask,Logo"
          />
          <i class="dootask txt-7002027">DooTask</i>
          <!-- </a> -->
        </NuxtLink>
        <ul class="nav-ul">
          <li class="nav-ul-item">
            <NuxtLink class="txt-4001620 txt nav-product" to="/product"
              >产品</NuxtLink
            >
          </li>
          <li class="nav-ul-item">
            <NuxtLink class="txt-4001620 txt nav-solutions" to="/solutions"
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
                <NuxtLink class="txt-4001418 txt-sub" to="/help"
                  >帮助中心</NuxtLink
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
            <NuxtLink class="txt-4001620 txt nav-price" to="/price"
              >服务价格</NuxtLink
            >
          </li>
          <li class="nav-ul-item">
            <NuxtLink class="txt-4001620 txt nav-about" to="/about"
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
              <li class="lang-pop-item" @click="handleSetLocale('zh')">
                <i class="lang-txt">简体中文</i>
              </li>
              <li class="lang-pop-item" @click="handleSetLocale('en')">
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
            <a href="https://www.dootak.com/manage/dashboard">
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
    <div class="topics">
      <div class="topics-con">
        <div class="topics-layout">
          <div class="topics-tit mb-32" style="width: auto !important">
            <span class="txt-6007290 topics-h1-green">
              DooTask
              <svg
                class="arcs"
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
            </span>
            <span class="txt-6007290 topics-h1">,轻量级任务管理工具</span>
          </div>
          <h4 class="txt-4001830 topics-h4 mb-32">
            DooTask是一款轻量级的开源在线项目任务管理工具，提供各类文档协作工具、在线思维导图、在线流程图、项目管理、任务分发、即时IM，文件管理等工具。助力团队高效推进项目，让工作更简单。
          </h4>
          <div class="flex-cc topics-btn">
            <span class="mr-24 get-started">
              <!-- <a href="./price.html"> -->
              <NuxtLink to="/price">
                <button class="btn btn-primary mr-20">开始使用</button>
              </NuxtLink>

              <!-- </a> -->
            </span>
            <a
              href="https://github.com/kuaifan/dootask/tree/pro"
              target="_blank"
            >
              <button class="btn btn-default">私有化部署</button>
            </a>
          </div>
        </div>
        <div class="ten_img">
          <img
            class="home-pic"
            id="home_pic"
            :src="useImage('home_pic1.png')"
            alt="DooTask是一款轻量级的开源在线项目任务管理工具，提供各类文档协作工具、在线思维导图、在线流程图、项目管理、任务分发、即时IM，文件管理等工具。助力团队高效推进项目，让工作更简单。"
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
          <div class="drawer-item" v-for="(item, index) in mainMenuItems.slice(0,2)" :key="index">
              <a class="txt-4001620 txt" :href="item.link" @click="closeDrawer">{{ item.text }}</a>
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
              <div class="drawer-item" v-for="(item, index) in supportItems" :key="index">
                <a class="txt-4001620 txt" :href="item.link" target="_blank" @click="closeDrawer">{{ item.text }}</a>
              </div>
            </ol>
          <div class="drawer-item" v-for="(item, index) in mainMenuItems.slice(2,5)" :key="index">
              <a class="txt-4001620 txt" :href="item.link" @click="closeDrawer">{{ item.text }}</a>
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
              <div class="drawer-item" v-for="(item, index) in themeItems" :key="index">
                <a class="txt-4001620 txt" @click="setTheme(item.value)">{{ item.text }}</a>
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
              <div class="drawer-item" v-for="(item, index) in languageItems" :key="index">
                <a class="txt-4001620 txt" @click="handleSetLocale(item.value)">{{ item.text }}</a>
              </div>
            </ol>
          </li>


        <!-- <li class="drawer-item" v-for="(item, index) in languageItems" :key="index">
          <a class="txt-4001620 txt" @click="handleSetLocale(item.value)">{{ item.text }}</a>
        </li> -->

        <li class="drawer-item">
          <a class="txt-4001620 txt" href="https://www.dootak.com/manage/dashboard" @click="closeDrawer">立即体验</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const { $setTheme } = useNuxtApp();
const { locale, setLocale } = useI18n()

// 语言选择
const isLangPopVisisble = ref(false)

const showLangPopHandle = () => {
  isLangPopVisisble.value = true
}

const handleSetLocale = (newLocale: 'zh' | 'en') => {
  setLocale(newLocale)
  isLangPopVisisble.value = false
}

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
  return document.documentElement.classList.contains('dark')
})

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
const isDrawerVisible = ref(false)
const drawerRef = ref<HTMLElement | null>(null)
const activeSubMenu = ref<string | null>(null)

// 菜单项数据
const mainMenuItems = [
  { text: "产品", link: "/product" },
  { text: "解决方案", link: "/solutions" },
  { text: "服务价格", link: "/price" },
  { text: "关于我们", link: "/about" }
]

const supportItems = [
  { text: "下载中心", link: "/download" },
  { text: "帮助中心", link: "/help" },
  { text: "隐私政策", link: "/privacy", target: "_blank" },
  { text: "API 文档", link: "https://www.dootask.com/docs/index.html", target: "_blank" }
]

const themeItems = [
  { text: "Light", value: "light" },
  { text: "Dark", value: "dark" }
]

const languageItems = [
  { text: "简体中文", value: "zh" },
  { text: "English", value: "en" }
]


// 设置主题
const setTheme = (newTheme: 'light' | 'dark') => {
  try {
    console.log('当前主题:', newTheme)
    
    // 使用 Nuxt 提供的 $setTheme 方法
    $setTheme(newTheme)
    
    // 使用 useState 管理主题
    const theme = useState('theme', () => 'light')
    console.log('useState 初始值:', theme.value)
    
    theme.value = newTheme
    console.log('useState 更新后:', theme.value)

    // 更新 localStorage
    localStorage.setItem('theme', newTheme)
    console.log('localStorage 主题:', localStorage.getItem('theme'))
    
    // 切换 HTML 根元素的 dark 类
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    console.log('是否添加 dark 类:', document.documentElement.classList.contains('dark'))
  } catch (error) {
    console.error('设置主题时出错:', error)
  }
}

//控制菜单三个选项的展开
const isSupportMenuOpen = ref(false);
const isThemeMenuOpen = ref(false);
const isLanguageMenuOpen = ref(false);

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
  }else if (val === 'theme') {
    isThemeMenuOpen.value = !isThemeMenuOpen.value; // 切换主题菜单的显示状态
  }
};




onMounted(() => {
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
});



</script>

