<template>
  <main>
    <section>
      <SoluApply />
      <SoluSence />
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import '@/assets/scss/solution.scss'

definePageMeta({
    layoutClass: 'solution-page',
})

const { t, locale } = useI18n();
// const themeStore = useThemeStore();
// const { lang } = toRefs(themeStore);

// 监听语言变化并动态更新 head
// watch(
//   lang,
//   () => {
//     useHead({
//       title: t('solution.headtitle'),
//       htmlAttrs: {
//         lang: locale.value,
//       },
//       meta: [
//         {
//           name: 'description',
//           content: t('solution.desc'),
//         },
//       ],
//     });
//   },
//   { immediate: true },
// );
useHead({
  title: t('solution.headtitle'),
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: 'description',
      content: t('solution.desc'),
    },
  ],
});
// useSeoMeta({
//   title: t('solution.headtitle'),
//   htmlAttrs: {
//     lang: locale.value,
//   },
//   meta: [
//     {
//       name: 'description',
//       content: t('solution.desc'),
//     },
//   ],
// });
</script>
