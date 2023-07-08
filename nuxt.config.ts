// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    // TODO typeCheck: true
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      global: true,
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
    '~/plugins/timeMetrics.ts',
    '~/plugins/eventBus.ts',
    '~/plugins/date.ts',
    '~/plugins/markdown/index.ts',
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
