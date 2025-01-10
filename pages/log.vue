<template>
  <div>
    <!-- HeaderBar 部分 -->
    <HeaderBar></HeaderBar>
    <main>
      <section>
    <!-- 更新日志抽屉 -->
    <div class="logs-drawer">
      <div class="drawer-t mb-36">
        <a href="../zh/index.html" class="logo">
          <img id="logo" src="../img/light/logo.svg" alt="DooTask,Logo" />
          <i class="dootask txt-7002027">DooTask</i>
        </a>
        <i class="close-drawer" @click="closeLogsDrawer">✕</i>
      </div>
      <h5 class="logs-h5 mb-16" style="font-weight: 500">更新日志</h5>
      <ul class="logs-l-ul logs-l-768"></ul>
    </div>

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
                <ul class="logs-l-ul logs-l-1920" id="help-l-ul"></ul>
                <ul class="logs-l-ul logs-l-768"></ul>
              </div>
              <div class="logs-r">
                <h1 class="txt-6003645 logs-h1 mb-36">DooTask更新日志</h1>
                <ul class="logs-r-ul"></ul>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import axios from 'axios'
import markdownIt from 'markdown-it'

// 响应式状态
const logsData = ref([])
const drawerOpen = ref(false)

// 打开更新日志抽屉
const openLogsDrawer = () => {
  drawerOpen.value = true
}

// 关闭更新日志抽屉
const closeLogsDrawer = () => {
  drawerOpen.value = false
}

// 从 localStorage 获取缓存的数据
const getItem = (key) => {
  const record = JSON.parse(localStorage.getItem(key))
  if (!record) return null
  if (new Date().getTime() > record.expired) {
    localStorage.removeItem(key)
    return null
  }
  // console.log('record.value', record.value)
  return record.value
}

// 将数据存入 localStorage
const setItem = (key, value) => {
  const record = {
    expired: new Date().getTime() + 30 * 60 * 1000, // 30分钟过期
    value,
  }
  localStorage.setItem(key, JSON.stringify(record))
}


// 版本号比较函数，返回版本1是否大于版本2
const compareVersions = (v1, v2) => {
  const v1Parts = v1.split('.').map(num => parseInt(num, 10))
  const v2Parts = v2.split('.').map(num => parseInt(num, 10))

  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const v1Part = v1Parts[i] || 0
    const v2Part = v2Parts[i] || 0
    if (v1Part > v2Part) return 1
    if (v1Part < v2Part) return -1
  }
  return 0
}

const renderLogs = (html) => {
  const logsContainer = document.querySelector('.logs-r-ul') // 右侧日志区域
  const rlog = document.querySelector('.logs-l-1920') // 左侧导航区域

  // 清空之前的内容
  logsContainer.innerHTML = ''
  rlog.innerHTML = ''

  // 解析渲染后的 HTML 结构
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
 
  
   // 提取所有 <h2>, <h3>, <ul> 标签
  const h2Tags = Array.from(doc.querySelectorAll('h2')).slice(0, 15) // 只取前 15 个 <h2>
  const ulTags = Array.from(doc.querySelectorAll('ul')).slice(0, 15) // 只取前 15 个 <ul>

  // 合并并按出现的顺序排列这些标签
  const sections = []
  const maxLength = Math.max(h2Tags.length, ulTags.length)

  for (let i = 0; i < maxLength; i++) {
    if (i < h2Tags.length) sections.push(h2Tags[i])
    if (i < ulTags.length) sections.push(ulTags[i])
  }


  // 提取所有 <h2> 标签中的版本号，并限制最多提取前 15 个版本号
  const versions = html.match(/<h2>(.*?)<\/h2>/g)?.slice(0, 15) || []
  const versionsNumbers = versions.map(str => str.replace(/<\/?h2>/g, '').split('[')[1]?.split(']')[0]) // 提取版本号并清理HTML标签


 // 渲染右侧日志条目
  sections.forEach((section, index) => {
    const sectionId = `section-${index + 1}`

    // 创建右侧日志条目
    const logItem = document.createElement('li')
    logItem.id = sectionId
    logItem.className = 'log-item'
    logItem.innerHTML = section.outerHTML
    logsContainer.appendChild(logItem)

    console.log('（右侧过滤）:', logItem.innerHTML)
  })

  // 使用前 15 个版本号来渲染左侧导航
  versionsNumbers.forEach((version, index) => {
    const section = sections[index] // 找到对应的 section
    const sectionId = `section-${index + 1}`

    // 创建左侧导航条目
    const navItem = document.createElement('li')
    navItem.className = `l-ul-item ${index === 0 ? 'active' : ''}`
    navItem.setAttribute('data-id', sectionId)
    navItem.innerHTML = `<a class="txt-4001620 txt log-a">v${version} 更新</a>`
    navItem.addEventListener('click', () => scrollToVersion(index + 1))
    rlog.appendChild(navItem)
  })
}


// 滚动到指定版本
function scrollToVersion(sectionNumber) {
  console.log('Component mounted 333滚动到指定版本');
  const content = document.getElementById(`section-${sectionNumber}`)

  if (content) {
    const offset = 90
    const targetPosition = content.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth'
    })
  }
}

// 获取更新日志数据
const fetchLogsData = async () => {
  try {
    const cachedLogs = getItem('changelog')
    if (cachedLogs) {
      logsData.value = cachedLogs
      renderLogs(cachedLogs)
    } else {
      const response = await axios.get('https://www.dootask.com/api/system/get/updatelog')
      const markdown = response.data.data.updateLog
      const html = markdownIt().render(markdown)
      setItem('changelog', html)
      renderLogs(html)
    }
    console.log('Component mounted 111 更新日志数据');
  } catch (error) {
    console.error('Error fetching changelog data:', error)
    
    // 提供默认日志
    const defaultLogs = `## [1.0.0]
      - 初始版本发布
      - 基础功能上线`
    const html = markdownIt().render(defaultLogs)
    renderLogs(html)
  }
}

// 监听滚动，更新导航高亮
const scrollHandler = () => {
  console.log('Component mounted 222导航高亮');
    const sections = document.querySelectorAll('.logs-r-ul li')  // 右侧日志区域条目
    const logs_tabItems = document.querySelectorAll('.logs-l-1920 li')  // 左侧导航条目
    
    // 获取当前滚动位置
    const scrollPosition = window.scrollY + window.innerHeight // 当前视口的底部位置

    sections.forEach((item, index) => {
      // 获取每个日志条目的顶部和底部位置
      const sectionTop = item.offsetTop
      const sectionBottom = sectionTop + item.offsetHeight
      
      // 判断日志条目是否在视口范围内
      if (sectionTop <= scrollPosition && sectionBottom >= window.scrollY) {
        // 移除所有导航条目的高亮
        logs_tabItems.forEach(tab => tab.classList.remove('active'))
        
        // 添加当前导航条目的高亮
        const activeMenuItem = logs_tabItems[index]
        if (activeMenuItem) {
          activeMenuItem.classList.add('active')
        }
      }
  })
}


// 监听抽屉状态变化
watch(drawerOpen, (newValue) => {
  const logsDrawer = document.querySelector('.logs-drawer')
  if (newValue) {
    logsDrawer.classList.add('open-logs-drawer')
  } else {
    logsDrawer.classList.remove('open-logs-drawer')
  }
})

// 生命周期钩子
onMounted(() => {
  console.log('Component mounted000');
  fetchLogsData()
  window.addEventListener('scroll', scrollHandler)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
})
</script>

