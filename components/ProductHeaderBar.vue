<!-- 产品头部 -->
<template>
  <header class="head">
    <div class="nav">
      <div class="nav-layout">
        <NuxtLink to="/" class="logo">
          <!-- <a href="../zh/index.html" class="logo"> -->
          <img
            id="logo"
            :src="useImage('logo.svg', (useTheme = true), (useLang = false))"
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
              <li class="submenu-pop-item" onclick="changeMenu()">
                <NuxtLink class="txt-4001418 txt-sub" to="/download"
                  >下载中心</NuxtLink
                >
              </li>
              <li class="submenu-pop-item" onclick="changeMenu()">
                <NuxtLink class="txt-4001418 txt-sub" to="/help"
                  >帮助中心</NuxtLink
                >
              </li>
              <li class="submenu-pop-item" onclick="changeMenu()">
                <NuxtLink
                  class="txt-4001418 txt-sub"
                  to="/privacy"
                  target="_blank"
                  >隐私政策</NuxtLink
                >
              </li>
              <li class="submenu-pop-item" onclick="changeMenu()">
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
            <a href="https://www.dootak.com/manage/dashboard">
              <button class="btn btn-primary">立即体验</button>
            </a>
          </span>
        </div>
        <div class="menuBtn">
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
            <span class="txt-6007290 topics-h1">一个产品，多种强大的工具</span>
          </div>
          <h4 class="txt-4001830 topics-h4 mb-32">
            该产品汇集了各种文档协作、在线思维导图、在线流程图、项目管理、任务分配、即时IM、文档管理等功能。
          </h4>
          <div class="flex-cc topics-btn">
            <span class="mr-24 get-started">
              <!-- <a href="./price.html"> -->
              <NuxtLink to="/price">
                <button class="btn btn-primary mr-20">开始使用</button>
              </NuxtLink>

              <!-- </a> -->
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const { setLocale, locale } = useI18n();
const { $setTheme } = useNuxtApp();

// 语言选择
const isLangPopVisisble = ref(false);

const showLangPopHandle = () => {
  isLangPopVisisble.value = true;
};

// 导航下拉菜单
const isMenuPopVisisble = ref(false);

const toggleMenuPopHandle = () => {
  isMenuPopVisisble.value = !isMenuPopVisisble.value;
};

const changeMenu = (type?: string) => {
  isMenuPopVisisble.value = false;
};

const setTheme = (newTheme: 'dark' | 'light') => {
  $setTheme(newTheme);
};

const useImage = (
  src: string,
  useTheme: boolean = true,
  useLang: boolean = true,
) => {
  const lang = locale.value;
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
</script>
