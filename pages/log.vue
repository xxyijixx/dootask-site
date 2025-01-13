<template>
  <div>
    <!-- HeaderBar 部分 -->
    <HeaderBar></HeaderBar>
    <!-- 更新日志抽屉 -->
    <div class="logs-drawer">
      <div class="drawer-t mb-36">
        <a href="/zh/index.html" class="logo">
          <img id="logo" src="/img/light/logo.svg" alt="DooTask,Logo" />
          <i class="dootask txt-7002027">DooTask</i>
        </a>
        <i class="close-drawer" @click="closeLogsDrawer">✕</i>
      </div>
      <h5 class="logs-h5 mb-16" style="font-weight: 500">更新日志</h5>
      <ul class="logs-l-ul logs-l-768"></ul>
    </div>
    <main>
      <section>
        <!-- 主内容区 -->
        <article class="logs">
          <div class="logs-con">
            <div class="logs-t-768" id="menuBtn-logs" @click="openLogsDrawer">
              <img class="logs-t-prev" src="/img/prev.svg" alt="更新日志" />
              <i class="logs-t-tit">更新日志</i>
            </div>
            <div class="logs-layout">
              <div class="logs-l logs-sticky">
                <h5 class="logs-h5 mb-16" style="font-weight: 500">更新日志</h5>
                <ul class="logs-l-ul logs-l-1920" id="help-l-ul">
                  <li
                    v-for="(version, index) in versionLogs"
                    :key="index"
                    :class="['l-ul-item', { active: activeTabIndex === index }]"
                    @click="handleNavClick(index)"
                  >
                    <a class="txt-4001620 txt log-a">v{{ version }} 更新</a>
                  </li>
                </ul>
                <ul class="logs-l-ul logs-l-768"></ul>
              </div>
              <div class="logs-r">
                <h1 class="txt-6003645 logs-h1 mb-36">DooTask更新日志</h1>
                <ul class="logs-r-ul">
                  <li
                    v-for="(version, index) in versionLogs"
                    :key="index"
                    :class="['l-ul-item', { active: activeTabIndex === index }]"
                  >
                    <a class="txt-4001620 txt log-a">{{ version }} 更新</a>
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

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import axios from 'axios';
import markdownIt from 'markdown-it';

// 响应式状态
const logsData = ref([]);
const drawerOpen = ref(false);
const activeTabIndex = ref(0); // 当前高亮的导航项索引
const versionLogs = ref([]); // 存储版本号数据

// 打开更新日志抽屉
const openLogsDrawer = () => {
  nextTick(() => {
    const logsDrawer = document.querySelector('.logs-drawer');
    logsDrawer.classList.add('open-logs-drawer');
    drawerOpen.value = true;
  });
};

// 关闭更新日志抽屉
const closeLogsDrawer = () => {
  nextTick(() => {
    const logsDrawer = document.querySelector('.logs-drawer');
    logsDrawer.classList.remove('open-logs-drawer');
    drawerOpen.value = false;
  });
};

// 从 localStorage 获取缓存的数据
const getItem = (key) => {
  const record = JSON.parse(localStorage.getItem(key));
  if (!record) return null;
  if (new Date().getTime() > record.expired) {
    localStorage.removeItem(key);
    return null;
  }
  return record.value;
};

// 将数据存入 localStorage
const setItem = (key, value) => {
  const record = {
    expired: new Date().getTime() + 30 * 60 * 1000, // 30分钟过期
    value,
  };
  localStorage.setItem(key, JSON.stringify(record));
};

// 获取更新内容的方法
const getUpdatesFromHtml = (updatesHtmlText, container) => {
  if (Array.isArray(updatesHtmlText) && updatesHtmlText.length > 0) {
    updatesHtmlText.forEach((update) => {
      const listItem = document.createElement('li');
      listItem.className = 'r-ol-item';
      listItem.innerHTML = `
        <i class="dots"></i> ${update}
      `;
      container.querySelector('ol').appendChild(listItem);
    });
  }
};

const renderLogs = (html) => {
  nextTick(() => {
    const logsContainer = document.querySelector('.logs-r-ul'); // 右侧日志区域
    const rlog = document.querySelector('.logs-l-1920'); // 左侧导航区域
    const rlog2 = document.querySelector('.logs-l-ul.logs-l-768'); // 另一组左侧导航区域
    const changelog = document.querySelector('.logs-r-ul'); // 右侧日志区域，存储内容

    // 清空之前的内容
    logsContainer.innerHTML = '';
    rlog.innerHTML = '';
    rlog2.innerHTML = '';
    changelog.innerHTML = '';

    // 解析渲染后的 HTML 结构
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // 提取所有 <h2>, <h3>, <ul> 标签
    const h2Tags = Array.from(doc.querySelectorAll('h2')).slice(0, 15); // 只取前 15 个 <h2>
    const ulTags = Array.from(doc.querySelectorAll('ul')).slice(0, 15); // 只取前 15 个 <ul>

    // 合并并按出现的顺序排列这些标签
    const sections = [];
    const maxLength = Math.max(h2Tags.length, ulTags.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < h2Tags.length) sections.push(h2Tags[i]);
      if (i < ulTags.length) sections.push(ulTags[i]);
    }

    // 提取所有 <h2> 标签中的版本号，并限制最多提取前 15 个版本号
    const versions = html.match(/<h2>(.*?)<\/h2>/g)?.slice(0, 15) || [];
    const versionsNumbers = versions.map(
      (str) =>
        str
          .replace(/<\/?h2>/g, '')
          .split('[')[1]
          ?.split(']')[0],
    ); // 提取版本号并清理HTML标签

    // 渲染右侧日志条目
    // 通过版本号获取更新内容并渲染
    for (let i = 0; i < versionsNumbers.length; i++) {
      const updatesHtml = html
        .split(versionsNumbers[i])[1]
        .split('<h2>')[0]
        .match(/<li>(.*?)<\/li>/g);

      const updatesHtmlText = updatesHtml.map(
        (str) => str.split('<li>')[1].split('</li>')[0],
      );

      // 创建右侧日志条目
      const rLi = document.createElement('li');
      rLi.className = `l-ul-item ${i == 0 ? 'active' : ''}`;
      rLi.setAttribute('data-id', `section-${i + 1}`);
      rLi.innerHTML = `<a class="txt-4001620 txt log-a">v${versionsNumbers[i]} 更新</a>`;

      const rLi2 = document.createElement('li');
      rLi2.className = `l-ul-item`;
      rLi2.setAttribute('data-id', `section-${i + 1}`);
      rLi2.addEventListener('click', function () {
        const logsDrawer = document.querySelector('.logs-drawer');
        logsDrawer.classList.remove('open-logs-drawer');
      });
      rLi2.innerHTML = `<a class="txt-4001620 txt">v${versionsNumbers[i]} 更新</a>`;

      rlog.appendChild(rLi);
      rlog2.appendChild(rLi2);

      // 创建右侧版本内容条目
      const li = document.createElement('li');
      li.className = 'r-ul-item mb-36';
      li.innerHTML = `
      <ol class="logs-r-ol">
        <li class="txt-4001624 r-ol-item mb-24" id="section-${i + 1}">
          <h4 class="logs-h4">v${versionsNumbers[i]} 更新</h4>
        </li>
      </ol>
    `;
      changelog.appendChild(li);

      // 获取并显示更新内容
      getUpdatesFromHtml(updatesHtmlText, li);
    }

    // 添加点击事件监听器 - 大屏导航
    const tabItems = document.querySelectorAll('.logs-l-1920 .l-ul-item');
    tabItems.forEach((item, index) => {
      item.addEventListener('click', () => handleNavClick(index));
    });

    // 添加点击事件监听器 - 小屏抽屉导航
    const drawerContainer = document.querySelector('.logs-l-768');
    if (drawerContainer) {
      const drawerTabItems = drawerContainer.querySelectorAll('.l-ul-item');
      drawerTabItems.forEach((item, index) => {
        item.addEventListener('click', () => {
          handleNavClick(index);
          // 关闭抽屉
          const logsDrawer = document.querySelector('.logs-drawer');
          if (logsDrawer) {
            logsDrawer.classList.remove('open-logs-drawer');
            drawerOpen.value = false;
          }
        });
      });
    }
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
const handleNavClick = (index) => {
  const logs_tabs = document.querySelector('.logs-l-1920');
  const logs_tabItems = logs_tabs.querySelectorAll('.l-ul-item');

  // 移除所有激活状态
  logs_tabItems.forEach((item) => item.classList.remove('active'));

  // 给当前点击项添加激活状态
  logs_tabItems[index].classList.add('active');

  // 获取对应的内容元素
  const id = logs_tabItems[index].getAttribute('data-id');
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
    const ulElement = document.getElementById('help-l-ul');
    const liElement = logs_tabItems[index];

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
  const logs_tabs = document.querySelector('.logs-l-1920');
  const logs_tabItems = logs_tabs.querySelectorAll('.l-ul-item');
  const sections = Array.from(document.querySelectorAll('h4'));

  // 获取当前滚动位置
  const currentScrollPosition = window.scrollY;

  // 遍历所有标题元素
  sections.forEach((section, index) => {
    const sectionTop = section.offsetParent.offsetTop;

    if (sectionTop <= currentScrollPosition + 100) {
      // 移除所有激活状态
      logs_tabItems.forEach((item) => item.classList.remove('active'));

      // 给对应的菜单项设置激活状态
      logs_tabItems[index]?.classList.add('active');

      // 处理左侧导航栏滚动
      const ulElement = document.getElementById('help-l-ul');
      const liElement = logs_tabItems[index];

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

// 监听抽屉状态变化
watch(
  drawerOpen,
  (newValue) => {
    nextTick(() => {
      const logsDrawer = document.querySelector('.logs-drawer');
      if (logsDrawer) {
        if (newValue) {
          logsDrawer.classList.add('open-logs-drawer');
        } else {
          logsDrawer.classList.remove('open-logs-drawer');
        }
      }
    });
  },
  { immediate: true },
);

// 生命周期钩子
onMounted(() => {
  fetchLogsData();
  window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
});
</script>
