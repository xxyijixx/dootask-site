<template>
  <footer>
    <div class="footer-con">
      <div class="footer-layout">
        <div class="footer-l">
          <NuxtLink to="/" class="logo">
            <img id="logo" src="/img/light/logo.svg" alt="DooTask,Logo" />
            <i class="dootask txt-7002027">DooTask</i>
          </NuxtLink>
          <i class="txt txt-4001624">帮助团队有效地推进项目，使工作更轻松。</i>
        </div>
        <div class="footer-r">
          <ul class="footer-r-ul">
            <li class="footer-r-item">
              <ol class="footer-r-ol">
                <li class="footer-ol-item txt-5001624 mb-24">链接</li>
                <li class="footer-ol-item mb-16">
                  <NuxtLink class="txt-4001624 txt" to="/product"
                    >产品</NuxtLink
                  >
                </li>
                <li class="footer-ol-item mb-16">
                  <NuxtLink class="txt-4001624 txt" to="/solutions"
                    >解决方案</NuxtLink
                  >
                </li>
                <li class="footer-ol-item mb-16">
                  <NuxtLink class="txt-4001624 txt" to="/price"
                    >服务价格</NuxtLink
                  >
                </li>
                <li class="footer-ol-item">
                  <NuxtLink class="txt-4001624 txt" to="/about"
                    >关于我们</NuxtLink
                  >
                </li>
              </ol>
            </li>
            <li class="footer-r-item">
              <ol class="footer-r-ol">
                <li class="footer-ol-item txt-5001624 mb-24">支持</li>
                <li class="footer-ol-item mb-16">
                  <NuxtLink class="txt-4001624 txt" to="/download"
                    >下载中心</NuxtLink
                  >
                </li>
                <li class="footer-ol-item mb-16">
                  <NuxtLink class="txt-4001624 txt" to="/help"
                    >帮助中心</NuxtLink
                  >
                </li>
                <li class="footer-ol-item mb-16">
                  <NuxtLink
                    class="txt-4001624 txt"
                    to="/privacy"
                    target="_blank"
                    >隐私政策</NuxtLink
                  >
                </li>
                <li class="footer-ol-item">
                  <a
                    class="txt-4001624 txt"
                    href="https://www.dootask.com/docs/index.html"
                    target="_blank"
                    >API 文档</a
                  >
                </li>
              </ol>
            </li>
            <li class="footer-r-item">
              <ul class="footer-r-ol">
                <li class="footer-ol-item txt-5001624 mb-24">社区</li>
                <li class="footer-ol-item">
                  <div class="footer-ol-item mb-16">
                    <i
                      class="txt-4001624 txt"
                      onclick="openInNewTab('https://github.com/kuaifan/dootask')"
                      >Github</i
                    >
                  </div>
                  <div class="footer-ol-item mb-16">
                    <i
                      class="txt-4001624 txt"
                      onclick="openInNewTab('https://gitee.com/aipaw/dootask')"
                      >Gitee</i
                    >
                  </div>
                  <div class="footer-ol-item" id="qq_group">
                    <i class="txt-4001624 txt">QQ 群</i>
                    <div class="group_code">
                      <img
                        class="code-svg"
                        id="home_code"
                        src="/img/qq_code.jpg"
                        alt="群号：546574618"
                      />
                      <i class="group_num">群号：546574618</i>
                      <i class="lower_triangle"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="txt-4001624 filings footer_copyright">
        <span> Copyright © 2022-{{year}} DooTask. All rights reserved. </span>
        <div class="footer_beian" style="display: flex">
          <img src="/img/beian.png" alt="" /><span style="padding-left: 3px"
            >桂公网安备 45010802000393号</span
          >
        </div>
        <a class="footer_beian_a" href="http://beian.miit.gov.cn"
          >桂ICP备2021003642号-5</a
        >
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">

const year = new Date().getFullYear();

</script>
