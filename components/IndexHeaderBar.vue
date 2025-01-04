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
    <div 
      v-if="isDrawerVisible" 
      ref="drawerRef"
      class="drawer-container"
      :class="{ 
        'drawer-dark-mode': isDarkMode,
        'drawer-enter': isDrawerVisible,
        'drawer-leave': !isDrawerVisible
        }"
    >
      <div class="drawer-header">
        <NuxtLink to="/" class="drawer-logo-container">
          <img
            id="logo"
            :src="useImage('logo.svg', true, false)"
            alt="DooTaskLogo"
            class="drawer-logo"
          />
          <i class="dootask txt-7002027">DooTask</i>
        </NuxtLink>
        <i  class="close-drawer" @click="closeDrawer">✕</i>
      </div>
      
      <ul class="drawer-ul">
        <li style="border-bottom: 1px solid #eee; padding-bottom: 10px">
          <div 
            v-for="item in mainMenuItems.slice(0,2)" 
            :key="item.text"
            class="drawer-menu-item"
            @click="closeDrawer"
          >
            <NuxtLink 
              :to="item.link" 
              class="txt-4001620 txt"
            >
              {{ item.text }}
            </NuxtLink>
          </div>

          <div 
            class="drawer-menu-item drawer-submenu-toggle" 
            @click="toggleSubMenu('support')"          
            >
            <span class="txt-4001620 txt">支持</span>
            <img 
              src="/img/vector.svg" 
              class="nav-vector" 
              alt="支持" 
              :class="{ 'nav-vector-rotated': activeSubMenu === 'support' }"
            />
          </div>
          <ol 
            v-if="activeSubMenu === 'support'"
            class="drawer-active support-submenu"
          >
            <li 
              v-for="supportItem in supportItems" 
              :key="supportItem.text"
              class="drawer-item support-item"
              @click="closeDrawer"
            >
              <NuxtLink 
                :to="supportItem.link" 
                class="txt-4001620 txt"
                :target="supportItem.target"
              >
                {{ supportItem.text }}
              </NuxtLink>
            </li>
          </ol>
          <div 
            v-for="item in mainMenuItems.slice(2,5)" 
            :key="item.text"
            class="drawer-item" 
            style="
              padding: 15px 20px;
              cursor: pointer;
              text-align: left;
            "
            @click="closeDrawer"
          >
            <NuxtLink 
              :to="item.link" 
              class="txt-4001620 txt"
            >
              {{ item.text }}
            </NuxtLink>
          </div>
          
        </li>

        <li  style="margin-top: 20px;">
          <div 
            class="drawer-item" 
            @click="toggleSubMenu('theme')"
            style="
              padding: 15px 20px;
              cursor: pointer;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <span class="txt-4001620 txt">主题</span>
            <img 
              src="/img/vector.svg" 
              class="nav-vector" 
              alt="主题" 
              :style="{ transform: activeSubMenu === 'theme' ? 'rotate(180deg)' : 'rotate(0)' }"
            />
          </div>
          
          <ol 
            v-if="activeSubMenu === 'theme'"
            class="drawer-active support-submenu"
          >
            <li 
              v-for="themeItem in themeItems" 
              :key="themeItem.value"
              class="drawer-item support-item"
              @click="setTheme(themeItem.value)"
            >
              <span class="txt-4001620 txt">{{ themeItem.text }}</span>
            </li>
          </ol>
        </li>

        <li>
          <div 
            class="drawer-item" 
            @click="toggleSubMenu('language')"
            style="
              padding: 10px 20px;
              cursor: pointer;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <span class="txt-4001620 txt">语言</span>
            <img 
              src="/img/vector.svg" 
              class="nav-vector" 
              alt="语言" 
              :style="{ transform: activeSubMenu === 'language' ? 'rotate(180deg)' : 'rotate(0)' }"
            />
          </div>
          
          <ol 
            v-if="activeSubMenu === 'language'"
            class="drawer-active"
            style="
              list-style: none;
              padding: 0 50px;
              text-align: left;
            "
          >
            <li 
              v-for="langItem in languageItems" 
              :key="langItem.value"
              class="drawer-item"
              style="
                padding: 10px 20px;
                cursor: pointer;
              "
              @click="setLocale(langItem.value)"
            >
              <span class="txt-4001620 txt">{{ langItem.text }}</span>
            </li>
          </ol>
        </li>

        <li>
          <div 
            class="drawer-item"
            style="
              padding: 10px 20px;
              cursor: pointer;
              text-align: left;
            "
          >
            <a 
              href="https://www.dootask.com/manage/dashboard" 
              class="txt-4001620 txt"
            >
              立即体验
            </a>
          </div>
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

// 打开抽屉
const openDrawer = () => {
  isDrawerVisible.value = true
}

// 关闭抽屉
const closeDrawer = () => {
  isDrawerVisible.value = false
  activeSubMenu.value = null
}

// 切换子菜单
const toggleSubMenu = (menu: string) => {
  activeSubMenu.value = activeSubMenu.value === menu ? null : menu
}

// 设置主题
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
    
    closeDrawer()
  } catch (error) {
    console.error('设置主题时出错:', error)
  }
}


// 添加点击外部关闭抽屉的功能
onMounted(() => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      isDrawerVisible.value && 
      drawerRef.value && 
      !drawerRef.value.contains(event.target as Node)
    ) {
      closeDrawer()
    }
  }

  // // 阻止菜单按钮的点击事件冒泡
  const menuBtn = document.querySelector('.menuBtn')
  menuBtn?.addEventListener('click', (e) => e.stopPropagation())

  document.addEventListener('click', handleOutsideClick)

  // 组件卸载时移除事件监听器
  onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
  })
})


</script>


<style scoped>
.drawer-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  z-index: 1000;
  overflow-y: auto;
  background: white;
  color: #202124;
  box-shadow: 5px 0 15px -5px rgba(0, 0, 0, 0.1); /* Add shadow effect */
  transition: 
    transform 0.3s ease-out, 
    box-shadow 0.3s ease,
    opacity 0.3s ease;
  transform: translateX(-100%);
  opacity: 0;
}

.drawer-enter {
  transform: translateX(0);
  opacity: 1;
}

.drawer-leave {
  transform: translateX(-100%);
  opacity: 0;
}

.drawer-dark-mode {
  background: #1e1e1e;
  color: white;
  box-shadow: -10px 0 15px -5px rgba(0, 0, 0, 0.3); /* Slightly darker shadow for dark mode */
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.drawer-logo-container {
  display: flex; 
  align-items: center;
}

.drawer-logo {
  height: 33px; 
  margin-right: 10px;
}

.close-drawer {
  cursor: pointer;
  font-size: 18px;
}

.drawer-ul{
  padding: 10px;
}

.drawer-menu-item {
  padding: 10px 20px;
  cursor: pointer;
  text-align: left;
}

.drawer-submenu-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-vector {
  transition: transform 0.3s ease;
}

.nav-vector-rotated {
  transform: rotate(180deg);
}

.support-submenu {
  text-align: left;
  list-style: none;
  padding: 0 12px;
}

.support-item {
  padding: 10px 58px;
  cursor: pointer;
  text-align: left;
}

.drawer-menu-experience {
  padding: 10px 66px;
  cursor: pointer;
  text-align: left;
}
</style>