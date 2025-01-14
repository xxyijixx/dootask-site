import { defineNuxtApp } from '#app';

declare module '#app' {
  interface NuxtApp {
    $setTheme: (theme: string) => void;
    $getTheme: () => string;
    $loadTheme: () => void;
  }
}
