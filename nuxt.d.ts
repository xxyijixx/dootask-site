import { defineNuxtApp } from '#app';

declare module '#app' {
  interface NuxtApp {
    $setTheme: (theme: string) => void;
    $getTheme: () => string;
    $loadTheme: () => void;
  }
}


declare global {
  interface Window {
    gtag?: (command: string, event: string, params: Record<string, any>) => void;
  }
}