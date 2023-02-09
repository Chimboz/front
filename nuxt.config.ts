// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
    // TODO typeCheck: true
  },
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/devtools'
  ],
  css: [
    'modern-normalize/modern-normalize.css',
    '@/assets/css/var.scss',
    '@/assets/css/main.scss',
    '@/assets/css/fonts.css',
    '@/assets/css/classes.css',
    '@/assets/css/atomic.scss'
  ],
  i18n: {
    vueI18n: {
      legacy: false,
      fallbackLocale: 'en'
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
