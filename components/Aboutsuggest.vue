<template>
  <article class="footer-t">
    <div class="footer-t-con">
      <div class="footer-t-layout">
        <div class="footer-t-l">
          <h1 class="footer-t-h1 mb-56">我们希望听到您的意见</h1>
          <h6 class="footer-t-h6 mb-56">
            对价格、计划或产品有疑问吗？请填写表格，我们将与您联系。
          </h6>
          <div class="footer-t-contact mb-24">
            <img
              class="footer-t-contact-icon mr-12"
              src="/img/about_icon1.svg"
              alt="联系手机,13471168831"
            />
            <h6 class="footer-t-contact-h6">0771-3164099</h6>
          </div>
          <div class="footer-t-contact">
            <img
              class="footer-t-contact-icon mr-12"
              src="/img/about_icon2.svg"
              alt="邮箱,service@hitosea.com"
            />
            <h6 class="footer-t-contact-h6">service@hitosea.com</h6>
          </div>
        </div>
        <form class="from" @submit.prevent="sendFormRequest">
          <ul class="from-ul">
            <li class="from-ul-item mb-16">
              <i class="from-ul-tags mb-8">昵称</i>
              <input
                id="username"
                v-model="username"
                class="input"
                type="text"
                placeholder="请输入昵称"
                required
              />
            </li>
            <li class="from-ul-item mb-16">
              <i class="from-ul-tags mb-8">邮箱</i>
              <input
                id="email"
                v-model="email"
                class="input"
                type="email"
                placeholder="请输入邮箱"
                required
              />
            </li>
            <li class="from-ul-item mb-16" id="desc_wrap">
              <i class="from-ul-tags mb-8">留言</i>
              <textarea
                id="desc"
                v-model="message"
                class="textarea"
                cols="3"
                rows="8"
                placeholder="选填"
                maxlength="255"
                @input="limitCharacters"
              ></textarea>
              <p id="characterCount">{{ messageLength }}/255</p>
            </li>
            <li>
              <span class="from-submit">
                <button
                  id="loadingWrap"
                  class="btn btn-primary"
                  type="submit"
                  :disabled="isSubmitting"
                >
                  <img
                    v-if="isSubmitting"
                    id="submitLoading"
                    alt="提交中"
                    src="/img/loading.png"
                  />
                  提交
                </button>
              </span>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const username = ref('');
const email = ref('');
const message = ref('');
const isSubmitting = ref(false);

const messageLength = computed(() => message.value.length);

const limitCharacters = () => {
  if (message.value.length > 255) {
    message.value = message.value.slice(0, 255);
  }
};

const sendFormRequest = async () => {
  // 邮箱验证正则
  const emailPattern =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  // 验证邮箱
  if (!emailPattern.test(email.value)) {
    alert('邮箱输入错误!');
    return;
  }

  // 防止重复提交
  if (isSubmitting.value) return;

  isSubmitting.value = true;

  try {
    const url = 'https://t.hitosea.com/api/dialog/msg/sendtext';
    const headers = {
      version: '0.22.0',
      token:
        'YIG8ANC8q2SAXWxKu7L4Nf5VLWDxBixpIl_OSDnaVTug7P_DVHq--HV_7QKl2rNYlmCs-xsQuj0NAfktdsbyxNqCU9efF2ggFOQCYoE7l-np9ltT-LOGj3LGU422lVRC',
      'content-type': 'application/json',
    };

    const data = {
      dialog_id: 10466,
      text: `[昵称]:${username.value}\n[邮箱]:${email.value}\n[留言]:${message.value}`,
      silence: 'no',
    };

    const response = await axios.post(url, data, { headers });

    // 重置表单
    username.value = '';
    email.value = '';
    message.value = '';

    alert('提交成功！');
  } catch (error) {
    alert(error.message || '提交失败，请重试');
  } finally {
    isSubmitting.value = false;
  }
};
</script>
