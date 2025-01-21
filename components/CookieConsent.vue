<template>
  <div id="cookieConsent" v-if="displayCookieConsent">
    <div>
      我们使用第一方 cookie
      来改善您在我们网站上的浏览体验、分析我们的网站流量并了解我们的访问者来自哪里。如果您选择退出，则只会使用绝对必要的
      cookie。<a :href="`/${locale}/cookie`" id="cookie_a" target="_blank"
        >我们的 cookie 政策</a
      >
    </div>
    <div id="buttonBox">
      <button id="rejectButton" class="btn btn-primary" @click="handleRejectButtonClick">我拒绝</button>
      <button id="agreeButton" class="btn btn-primary" @click="handleAgreeButtonClick">允许cookies</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const displayCookieConsent = ref(false);

onMounted(() => {
  const hasConsented = sessionStorage.getItem('cookieConsent');
  if (!hasConsented) {
    displayCookieConsent.value = true;
  }
});

const hideCookieConsent = () => {
  displayCookieConsent.value = false;
};
const handleAgreeButtonClick = () => {
  sessionStorage.setItem('cookieConsent', 'true');
  hideCookieConsent();
};
const handleRejectButtonClick = () => {
  sessionStorage.setItem('cookieConsent', 'false');
  hideCookieConsent();
};
</script>

<style scoped>
#cookieConsent {
  max-width: 24em;
  display: block;
  height: auto;
  flex-direction: column;
  background-color: rgb(249, 250, 251);
  color: rgb(30, 30, 30);
  padding: 1.2em;
  border-radius: 5px;
  bottom: 1em;
  right: 1em;
  position: fixed;
  overflow: hidden;
  box-sizing: border-box;
  font-family: Helvetica, Calibri, Arial, sans-serif;
  z-index: 9999;
  text-align: left;
  font-size: 16px;
  line-height: 1.5em;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
#cookieConsent a {
  padding: 0.2em;
  display: inline-block;
  color: rgb(30, 30, 30);
  text-decoration: underline;
}

#cookieConsent #buttonBox {
  text-align: right;
  flex: 1 0 auto;
  align-items: center;
  align-content: space-between;
  flex-direction: row;
  display: flex;
  font-size: 16px;
  margin: 1em 0 0;
}

#cookieConsent #buttonBox #agreeButton {
  position: static;
  display: block;
  padding: 0.7em 0.4em;
  font-size: 0.9em;
  font-weight: 700;
  text-align: center;
  width: 100%;
  border-radius: 5px;
  margin-left: 0.5em;
}

#cookieConsent #buttonBox #rejectButton {
  background-color: transparent;
  border-color: transparent;
  color: rgb(30, 30, 30);
  display: block;
  padding: 0.7em 0.4em;
  font-size: 0.9em;
  font-weight: 700;
}
</style>
