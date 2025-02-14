<template>
  <div>
    <!-- 更新日志抽屉 -->
    <div class="logs-drawer" :class="{ 'open-logs-drawer': drawerOpen }">
      <div class="drawer-t mb-36">
        <a :href="`/${locale}`" class="logo">
          <img id="logo" :src="`/img/${theme}/logo.svg`" alt="DooTask,Logo" />
          <i class="dootask txt-7002027">DooTask</i>
        </a>
        <i class="close-drawer" @click="closeLogsDrawer">✕</i>
      </div>
      <h5 class="logs-h5 mb-16" style="font-weight: 500">
        {{ $t('download.log.title') }}
      </h5>
      <ul class="logs-l-ul logs-l-768">
        <li
          v-for="(versionNumber, index) in versionsNumbers"
          :key="index"
          :data-id="`section-${index + 1}`"
          class="l-ul-item"
          @click="
            () => {
              closeLogsDrawer(), handleNavClick(index);
            }
          "
        >
          <a class="txt-4001620 txt"
            >v{{ versionNumber }} {{ t('download.log.new') }}</a
          >
        </li>
      </ul>
    </div>
    <main>
      <section>
        <!-- 主内容区 -->
        <article class="logs">
          <div class="logs-con">
            <div class="logs-t-768" @click="openLogsDrawer">
              <img class="logs-t-prev" src="/img/prev.svg" alt="logs" />
              <i class="logs-t-tit">{{ $t('download.log.title') }}</i>
            </div>
            <div class="logs-layout">
              <div class="logs-l logs-sticky">
                <h5 class="logs-h5 mb-16" style="font-weight: 500">
                  {{ $t('download.log.title') }}
                </h5>
                <ul ref="LogsLULRef" class="logs-l-ul logs-l-1920">
                  <li
                    v-for="(versionNumber, index) in versionsNumbers"
                    :key="index"
                    :data-id="`section-${index + 1}`"
                    class="l-ul-item"
                    :class="{ active: index === activeTabIndex }"
                    @click="handleNavClick(index)"
                  >
                    <a class="txt-4001620 txt log-a"
                      >v{{ versionNumber }} {{ t('download.log.new') }}</a
                    >
                  </li>
                </ul>
                <ul class="logs-l-ul logs-l-768"></ul>
              </div>
              <div id="google_translate_element" class="logs-r">
                <h1 class="txt-6003645 logs-h1 mb-36">
                  {{ $t('download.log.headline') }}
                </h1>
                <ul class="logs-r-ul">
                  <li
                    v-for="(updateLog, index) in updateLogs"
                    :key="index"
                    class="r-ul-item mb-36"
                  >
                    <ol class="logs-r-ol">
                      <li
                        :id="`section-${index + 1}`"
                        class="txt-4001624 r-ol-item mb-24"
                      >
                        <h4 class="logs-h4">
                          v{{ updateLog.versionNumber }}
                          {{ t('download.log.new') }}
                        </h4>
                      </li>
                      <div
                        v-for="(
                          htmlText, itemIndex
                        ) in updateLog.updatesHtmlText"
                        :key="itemIndex"
                        style="display: flex"
                      >
                        <i class="dots"></i>
                        <li class="r-ol-item">{{ htmlText }}</li>
                      </div>
                    </ol>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, toRefs } from 'vue';
import axios from 'axios';
import markdownIt from 'markdown-it';
import '@/assets/scss/log.scss';

import { useI18n } from 'vue-i18n';

definePageMeta({
  layoutClass: 'log-page',
});

const { t, locale } = useI18n();

const themeStore = useThemeStore();

const { theme } = toRefs(themeStore);

// ul列表Ref
const LogsLULRef = ref<HTMLElement | null>(null);

// 响应式状态
const logsData = ref([]);
const drawerOpen = ref(false);
const activeTabIndex = ref(0); // 当前高亮的导航项索引

const versionsNumbers = ref<string[]>([]);
const updateLogs = ref<
  Array<{
    versionNumber: string;
    updateText: string;
    updatesHtmlText: string[];
  }>
>([]);

// 打开更新日志抽屉
const openLogsDrawer = () => {
  drawerOpen.value = true;
};

// 关闭更新日志抽屉
const closeLogsDrawer = () => {
  drawerOpen.value = false;
};

// 从 localStorage 获取缓存的数据
const getItem = (key: string) => {
  const data = localStorage.getItem(key);
  if (!data) return;
  const record = JSON.parse(data);
  if (!record) return null;
  if (new Date().getTime() > record.expired) {
    localStorage.removeItem(key);
    return null;
  }
  return record.value;
};

// 将数据存入 localStorage
const setItem = (key: string, value: string) => {
  const record = {
    expired: new Date().getTime() + 30 * 60 * 1000, // 30分钟过期
    value,
  };
  localStorage.setItem(key, JSON.stringify(record));
};

// 移除 scrollToActiveVersion 中的版本号相关逻辑
const scrollToActiveVersion = () => {
  if (activeTabIndex.value >= 0) {
    setTimeout(() => {
      const targetElement = document.querySelector(
        `.logs-r-ul li:nth-child(${activeTabIndex.value + 1}) h4`,
      );
      if (targetElement) {
        const offset = 90; // 上偏移量，避免标题被遮挡
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetPosition - offset,
          behavior: 'smooth',
        });
      }
    }, 300);
  }
};

const renderLogs = (html: string) => {
  nextTick(() => {
    // 解析渲染后的 HTML 结构
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // 提取所有 <h2>, <h3>, <ul> 标签
    const h2Tags = Array.from(doc.querySelectorAll('h2')).slice(0, 15); // 只取前 15 个 <h2>
    const ulTags = Array.from(doc.querySelectorAll('ul')).slice(0, 15); // 只取前 15 个 <ul>

    // 合并并按出现的顺序排列这些标签
    const sections: HTMLElement[] = [];
    const maxLength = Math.max(h2Tags.length, ulTags.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < h2Tags.length) sections.push(h2Tags[i]);
      if (i < ulTags.length) sections.push(ulTags[i]);
    }

    // 提取所有 <h2> 标签中的版本号，并限制最多提取前 15 个版本号
    const versions: string[] =
      html.match(/<h2>(.*?)<\/h2>/g)?.slice(0, 15) || [];
    versionsNumbers.value = versions.map(
      (str) =>
        str
          .replace(/<\/?h2>/g, '')
          .split('[')[1]
          ?.split(']')[0],
    ); // 提取版本号并清理HTML标签

    // 渲染右侧日志条目
    // 通过版本号获取更新内容并渲染
    updateLogs.value = versionsNumbers.value.map((versionNumber) => {
      const updateText = t('download.log.new'); // 这里直接使用翻译字符串
      const updatesHtmlText =
        html
          .split(versionNumber)[1]
          .split('<h2>')[0]
          .match(/<li>(.*?)<\/li>/g)
          ?.map((str) => str.split('<li>')[1].split('</li>')[0]) || [];

      return {
        versionNumber,
        updateText,
        updatesHtmlText,
      };
    });

    scrollToActiveVersion(); // 滚动到目标版本
  });
};

// 获取更新日志数据
const fetchLogsData = async () => {
  try {
    const cachedLogs = getItem('changelog');
    if (cachedLogs) {
      logsData.value = cachedLogs;
      renderLogs(cachedLogs);
    } else {
      const response = await axios.get(
        'https://www.dootask.com/api/system/get/updatelog',
      );
      const markdown = response.data.data.updateLog;
      const html = markdownIt().render(markdown);
      setItem('changelog', html);
      renderLogs(html);
    }
  } catch (error) {
    console.error('Error fetching changelog data:', error);

    // 提供默认日志
    const defaultLogs = `## [1.0.0]
           - 初始版本发布
           - 基础功能上线`;
    const html = markdownIt().render(defaultLogs);
    renderLogs(html);
  }
};

// 点击左侧导航项时触发
const handleNavClick = (index: number) => {
  activeTabIndex.value = index;

  // 获取对应的内容元素
  const id = 'section-' + (activeTabIndex.value + 1).toString();
  const content = document.getElementById(id);

  if (content) {
    const offset = 90; // 上偏移量
    const targetPosition = content.getBoundingClientRect().top + window.scrollY;

    // 滚动到目标位置，并考虑上偏移量
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth',
    });
    // 处理左侧导航栏滚动
    const ulElement = LogsLULRef.value;
    const liElement = content;

    if (ulElement && liElement) {
      const liHeight = liElement.offsetHeight;
      const liTop = liElement.offsetTop;
      const ulScrollTop = ulElement.scrollTop;
      const ulHeight = ulElement.offsetHeight;

      // 如果当前激活项在可视区域之外，调整滚动位置
      if (liTop > ulScrollTop + ulHeight) {
        ulElement.scrollTop += liHeight;
      }

      if (liTop - ulScrollTop <= 40) {
        ulElement.scrollTop -= liHeight;
      }
    }
  }
};

// 监听滚动，更新导航高亮
const scrollHandler = () => {
  const sections: HTMLHeadingElement[] = Array.from(
    document.querySelectorAll('h4'),
  );

  // 获取当前滚动位置
  const currentScrollPosition = window.scrollY;

  // 遍历所有标题元素
  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= currentScrollPosition + 100) {
      const id = 'section-' + (index + 1).toString();

      // 处理左侧导航栏滚动
      const ulElement = LogsLULRef.value;
      const liElement = document.getElementById(id);

      if (ulElement && liElement) {
        const liHeight = liElement.offsetHeight;
        const liTop = liElement.offsetTop;
        const ulScrollTop = ulElement.scrollTop;
        const ulHeight = ulElement.offsetHeight;

        // 如果当前激活项在可视区域之外，调整滚动位置
        if (liTop > ulScrollTop + ulHeight) {
          ulElement.scrollTop += liHeight;
        }

        if (liTop - ulScrollTop <= 40) {
          ulElement.scrollTop -= liHeight;
        }
      }
    }
  });
};

// 在组件挂载时设置头部标题
useHead({
  title: t('log.headtitle'),
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: 'description',
      content: t('log.description') || 'DooTask 更新日志',
    },
    {
      name: 'keywords',
      content: t('seo.keywords'),
    },
  ],
});

// 生命周期钩子
onMounted(() => {
  const storedLogIndex = localStorage.getItem('update_log_num');
  if (storedLogIndex) {
    // 转换为数字并减1（因为数组索引从0开始）
    activeTabIndex.value = parseInt(storedLogIndex, 10) - 1;

    // 清除 localStorage 中的记录，防止重复使用
    localStorage.removeItem('update_log_num');
  }

  fetchLogsData();
  window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
});

</script>

<style>
.logs-l-ul {
  height: calc(100% - 36px);
}
</style>
