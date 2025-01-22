export default defineNuxtPlugin(() => {
  // 禁用所有类型的日志
  //   console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  //   console.error = () => {};
});
