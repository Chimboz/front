// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* typescript: {
    strict: true,
  },*/
  runtimeConfig: {
    public: {
      baseURL: 'https://chimboz.fr/api/',
    },
  },
  modules: ['@nuxtjs/i18n', '@pinia/nuxt'],
  css: ['@/assets/css/var.css', '@/assets/css/main.scss', '@/assets/css/fonts.css', '@/assets/css/classes.css', '@/assets/css/atomic.css'],
});
