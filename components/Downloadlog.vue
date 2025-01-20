<template>
  <article class="update">
    <div class="update-con">
      <div class="update-layout">
        <div class="update-l">
          <h1 class="txt-4003645 update-h1 mb-36">{{ $t('download.log.title') }}</h1>
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
              <a @click="navigateTo('/log')" class="more-item">
                <h5 class="txt-4001624 more">{{ $t('download.log.more') }}</h5>
                <img class="icon" src="/img/dow_arrow.svg" alt="更多日志" />
              </a>
            </li>
          </ul>
        </div>
        <div class="update-r">
          <img
            class="update-r-svg"
            id="dow_pic1"
            :src="`/img/${theme}/${lang}_dow_pic1.png`"
            alt="DooTask,下载中心"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, toRefs } from 'vue';
import axios from 'axios';
import { navigateTo } from '#app';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const themeStore = useThemeStore();

const { theme, lang } = toRefs(themeStore);

const releases = ref([]);

const getLocalStorageItem = (key) => {
  const record = JSON.parse(localStorage.getItem(key));
  if (!record) return null;
  if (new Date().getTime() > record.expired) {
    localStorage.removeItem(key);
    return null;
  }
  return record.value;
};

const handleReleaseClick = (index) => {
  console.log('当前版本：',releases.value[index]?.version);
  const selectedVersion = releases.value[index]?.version;
  if (selectedVersion) {
    navigateTo({
      path: '/log',
      query: { version: selectedVersion },
    });
  }
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
