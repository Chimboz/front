// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
    // TODO typeCheck: true
  },
  modules: ['@nuxtjs/i18n-edge', '@pinia/nuxt'],
  css: [
    'modern-normalize/modern-normalize.css',
    '@/assets/css/var.css',
    '@/assets/css/main.scss',
    '@/assets/css/fonts.css',
    '@/assets/css/classes.css',
    '@/assets/css/atomic.css'
  ],
  i18n: {
    vueI18n: {
      legacy: false,
      fallbackLocale: 'en'
    },
    detectBrowserLanguage: {
      useCookie: false
    },
    strategy: 'no_prefix',
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'fr', file: 'fr.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/'
  }
})
