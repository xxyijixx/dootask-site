<template>
  <article class="scenario-app">
    <div class="scenario-app-con">
      <div class="scenario-app-layout">
        <h1 class="txt-5004455 scenario-app-h1 mb-16">情景应用</h1>
        <h6
          class="txt-4001824 scenario-app-h6 mb-80"
          style="text-align: center"
        >
          该产品支持各种应用场景，帮助团队协作
        </h6>
        <ul class="scenario-app-ul">
          <li
            v-for="(scenario, index) in scenarios"
            :key="index"
            class="scenario-app-ul-item mb-32"
            :style="`--delay: ${index * 0.1}s`"
          >
            <i class="scenario-app-icon-bg mb-24">
              <img
                :src="scenario.icon"
                :alt="scenario.title"
                class="scenario-app-icon"
              />
            </i>
            <h5 class="txt-5002025 scenario-app-h5 mb-16">
              {{ scenario.title }}
            </h5>
            <h6 class="txt-4001624 scenario-app-h6">
              {{ scenario.description }}
            </h6>
            <img
              :src="scenario.svg"
              :alt="scenario.description"
              class="scenario-app-ul-item-svg"
            />
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script setup>
const scenarios = [
  {
    title: '边缘安全',
    icon: '/img/about_icon7.svg',
    description:
      'HITOSEA下一代防火墙、入侵防御/入侵检测系统、云沙箱等产品为用户提供网络边界访问控制、深度攻击检测和APT攻击检测等全面的智能安全保护。',
    svg: '/img/01.svg',
  },
  {
    title: '云安全',
    icon: '/img/about_icon8.svg',
    description:
      '我们提供安全可靠的高防云服务器，解决了服务器面临的主要网络安全风险，缓解了因洪水攻击而导致的业务中断风险，满足了常规安全操作的需要。',
    svg: '/img/02.svg',
  },
  {
    title: '数据安全',
    icon: '/img/about_icon9.svg',
    description:
      '数据库审计和数据泄漏保护系统可以保护敏感数据和文件，识别数据和监控操作，阻止内部和外部人员通过网络、电子邮件和其他渠道进行数据盗窃。',
    svg: '/img/03.svg',
  },
  {
    title: '内联网安全',
    icon: '/img/about_icon10.svg',
    description:
      '网络应用防火墙和网络防篡改系统为应用系统提供了全面的安全保护，有效阻止了网络篡改和攻击等恶意行为的发生。',
    svg: '/img/04.svg',
  },
];
</script>
