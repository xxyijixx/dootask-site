<template>
  <article class="update">
    <div class="update-con">
      <div class="update-layout">
        <div class="update-l">
          <h1 class="txt-4003645 update-h1 mb-36">
            {{ $t('download.log.title') }}
          </h1>
          <ul class="update-ul">
            <li id="releases">
              <template v-for="(release, index) in releases" :key="index">
                <li class="update-item" @click="handleReleaseClick(index)">
                  <h5 class="txt-4001624 update-h5">
                    DooTask {{ release.version }} {{ $t('download.log.new') }}
                  </h5>
                </li>
              </template>
            </li>
            <li>
              <a class="more-item" @click="navigateTo('/log')">
                <h5 class="txt-4001624 more">{{ $t('download.log.more') }}</h5>
                <img class="icon" src="/img/dow_arrow.svg" alt="更多日志" />
              </a>
            </li>
          </ul>
        </div>
        <div class="update-r">
          <img
            id="dow_pic1"
            class="update-r-svg"
            :src="`/img/${theme}/${lang}_dow_pic1.png`"
            alt="DooTask,下载中心"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted, toRefs } from 'vue';
import axios from 'axios';
import { navigateTo } from '#app';

const themeStore = useThemeStore();

const { theme, lang } = toRefs(themeStore);

interface ReleaseVersion {
  version: string;
  link: string;
}

const releases = ref<ReleaseVersion[]>([]);

const getLocalStorageItem = (key: string) => {
  const index = localStorage.getItem(key);
  if (!index) return null;
  const record = JSON.parse(index);
  if (!record) return null;
  if (new Date().getTime() > record.expired) {
    localStorage.removeItem(key);
    return null;
  }
  return record.value;
};

const handleReleaseClick = (index: number) => {
  // 直接使用下标跳转到日志页面
  localStorage.setItem('update_log_num', (index + 1).toString());
  navigateTo('/log');
};

const fetchReleases = async () => {
  try {
    const url = 'https://www.dootask.com/api/system/get/updatelog';
    const response = await axios.get(url);
    const changelog = response.data.data.updateLog;
    const regex = /## \[(.*?)\]\n([\s\S]*?)(?=\n\n## \[|$)/g;

    let match;
    const versions = [];
    while ((match = regex.exec(changelog)) !== null) {
      versions.push(match[1]);
    }

    releases.value = versions.slice(0, 5).map((version) => ({
      version,
      link: '../zh/log.html',
    }));

    const record = {
      value: releases.value,
      expired: new Date().getTime() + 30 * 60 * 1000,
    };
    localStorage.setItem('logs_dowmload_zh', JSON.stringify(record));
  } catch (error) {
    console.error('Failed to fetch releases:', error);
  }
};

// 初始化并监听主题变化
onMounted(() => {
  const cachedReleases = getLocalStorageItem('logs_dowmload_zh');

  if (cachedReleases) {
    releases.value = cachedReleases;
  } else {
    fetchReleases();
  }
});
</script>
