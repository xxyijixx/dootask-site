<template>
  <div class="error-page">
    <div class="error-content">
      <span class="code">{{ error?.statusCode }}</span>
      <div class="separator"></div>
      <span class="message">{{ message }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { NuxtError } from '#app';
import { defineProps, computed } from 'vue';

const props = defineProps({
  error: Object as () => NuxtError,
});

const message = computed(() => {
  switch (props.error?.statusCode) {
    case 400:
      return 'Bad Request';
    case 401:
      return 'Unauthorized';
    case 403:
      return 'Forbidden';
    case 404:
      return 'Not Found';
    case 405:
      return 'Method Not Allowed';
    case 408:
      return 'Request Timeout';
    case 500:
      return 'Internal Server Error';
    case 501:
      return 'Not Implemented';
    case 502:
      return 'Bad Gateway';
    case 503:
      return 'Service Unavailable';
    case 504:
      return 'Gateway Timeout';
    default:
      return 'An error occurred';
  }
});
</script>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  min-height: 100vh;
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", 微软雅黑, Arial, sans-serif;
}

.error-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.code {
  font-size: 2rem;
  color: #374151;
}

.separator {
  width: 1px;
  height: 2rem;
  background-color: #d1d5db;
}

.message {
  font-size: 1.25rem;
  color: #4b5563;
}
</style>