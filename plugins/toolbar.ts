import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // 只在客户端运行
    document.addEventListener('click', handleDocumentClick);
  }
});

function handleDocumentClick(event: MouseEvent): void {      //侧边小小内容提示栏
  const toolbarPhone = document.getElementById(
    'side_toolbar_item_phone',
  ) as HTMLElement;
  const tooltipPhone = document.getElementById(
    'toolbar_tooltip_phone',
  ) as HTMLElement;
  const toolbarWhtasapp = document.getElementById(
    'side_toolbar_item_whtasapp',
  ) as HTMLElement;
  const tooltipWhtasapp = document.getElementById(
    'toolbar_tooltip_whtasapp',
  ) as HTMLElement;
  const toolbarQrcode = document.getElementById(
    'side_toolbar_item_qrcode',
  ) as HTMLElement;
  const tooltipQrcode = document.getElementById(
    'toolbar_tooltip_qrcode',
  ) as HTMLElement;

  if (
    toolbarPhone &&
    tooltipPhone &&
    !toolbarPhone.contains(event.target as Node)
  ) {
    tooltipPhone.style.display = 'none';
  }

  if (
    toolbarWhtasapp &&
    tooltipWhtasapp &&
    !toolbarWhtasapp.contains(event.target as Node)
  ) {
    tooltipWhtasapp.style.display = 'none';
  }

  if (
    toolbarQrcode &&
    tooltipQrcode &&
    !toolbarQrcode.contains(event.target as Node)
  ) {
    tooltipQrcode.style.display = 'none';
  }
}
