// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://yiiii0.github.io',
  base: '/yiqiao.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
