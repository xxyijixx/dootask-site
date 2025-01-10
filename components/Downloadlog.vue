<template>
    <article class="update">
      <div class="update-con">
        <div class="update-layout">
          <div class="update-l">
            <h1 class="txt-4003645 update-h1 mb-36">
              更新日志
            </h1>
            <ul class="update-ul">
              <li id="releases">
                <template v-for="(release, index) in releases" :key="index">
                  <li 
                    class="update-item" 
                    @click="handleReleaseClick(index)"
                  >
                    <h5 class="txt-4001624 update-h5">
                      DooTask {{ release.version }} 更新
                    </h5>
                  </li>
                </template>
              </li>
              <li>
                <a @click="navigateTo('/download')" class="more-item">
                  <h5 class="txt-4001624 more">
                    更多日志
                  </h5>
                  <img class="icon" src="/img/dow_arrow.svg" alt="更多日志" />
                </a>
              </li>
            </ul>
          </div>
          <div class="update-r">
            <img 
              class="update-r-svg" 
              id="dow_pic1" 
              src="/img/light/zh_dow_pic1.png" 
              alt="DooTask,下载中心" 
            />
          </div>
        </div>
      </div>
    </article>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import { navigateTo } from '#app'
  
  const releases = ref([])

  // 主题状态
const isDarkMode = ref(false)

  
  const getLocalStorageItem = (key) => {
    const record = JSON.parse(localStorage.getItem(key))
    if (!record) return null
    if (new Date().getTime() > record.expired) {
      localStorage.removeItem(key)
      return null
    }
    return record.value
  }
  
  const handleReleaseClick = (index) => {
    localStorage.setItem('update_log_num', index + 1)
    navigateTo('/log')
  }
  
  const fetchReleases = async () => {
    try {
      const url = 'https://www.dootask.com/api/system/get/updatelog'
      const response = await axios.get(url)
      const changelog = response.data.data.updateLog
      const regex = /## \[(.*?)\]\n([\s\S]*?)(?=\n\n## \[|$)/g
      
      let match
      const versions = []
      while ((match = regex.exec(changelog)) !== null) {
        versions.push(match[1])
      }
  
      releases.value = versions.slice(0, 5).map(version => ({
        version,
        link: '../zh/log.html'
      }))
  
      const record = {
        value: releases.value,
        expired: new Date().getTime() + 30 * 60 * 1000
      }
      localStorage.setItem('logs_dowmload_zh', JSON.stringify(record))
    } catch (error) {
      console.error('Failed to fetch releases:', error)
    }
  }

// 切换主题，获取图片路径
const currentPicSrc = computed(() => {
  return isDarkMode.value
    ? '/img/dark/zh_dow_pic1.png'
    : '/img/light/zh_dow_pic1.png'
})

// 监听主题变化
const updateTheme = () => {
  const htmlElement = document.documentElement
  const darkClass = htmlElement.classList.contains('dark')
  isDarkMode.value = darkClass
}

  
// 初始化并监听主题变化
onMounted(() => {
  const cachedReleases = getLocalStorageItem('logs_dowmload_zh')
  
  if (cachedReleases) {
    releases.value = cachedReleases
  } else {
    fetchReleases()
  }

  // 初始化主题
  updateTheme()

  // 监听主题变化
  const observer = new MutationObserver(updateTheme)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })

  // 存储观察器以便后续卸载
  window.themeObserver = observer
})

onUnmounted(() => {
  if (window.themeObserver) {
    window.themeObserver.disconnect()
  }
})
  </script>
  
