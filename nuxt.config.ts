// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* typescript: {
    strict: true,
  },  runtimeConfig: {
    public: {
      baseURL: 'https://chimboz.fr/api/',
    },
  },*/

  modules: ['@nuxtjs/i18n', '@pinia/nuxt'],
  css: [
    'modern-normalize/modern-normalize.css',
    '@/assets/css/var.css',
    '@/assets/css/main.scss',
    '@/assets/css/fonts.css',
    '@/assets/css/classes.css',
    '@/assets/css/atomic.css',
  ],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'fr', file: 'fr.json' },
    ],
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'locales/',
  },
});
