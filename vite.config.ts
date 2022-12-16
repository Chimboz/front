import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";
import Vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/locales/*.json"
      ),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
