// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from './package.json';

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      clientVersion: pkg.version,
    },
  },
  typescript: {
    strict: true,
    // TODO typeCheck: true
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    rootId: 'chimboz',
  },
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/devtools',
  ],
  plugins: [
    { src: '~/plugins/messageRender/index.client.ts', mode: 'client' },
    { src: '~/plugins/messageRender/index.server.ts', mode: 'server' },
  ],
  css: [
    'modern-normalize/modern-normalize.css',
    '@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css',
    '@/assets/css/var.scss',
    '@/assets/css/main.scss',
    '@/assets/css/fonts.css',
    '@/assets/css/classes.css',
    '@/assets/css/atomic.scss',
  ],
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'fr', file: 'fr.json' },
    ],
    precompile: {
      strictMessage: false,
    },
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
  },
  nitro: {
    compressPublicAssets: true,
  },
});
