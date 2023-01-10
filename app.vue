<template>
  <ProgressBar />
  <Navbar />
  <NuxtPage />
  <Footer />
  <Modal />
</template>

<script setup lang="ts">
import useAuthStore from '@/stores/auth';
import favicon from '@/constants/favicon.json';
import faviconNew from '@/constants/favicon_new.json';
import { useI18n } from 'vue-i18n';

const notifications = computed(() => useAuthStore().notifications);
const { t } = useI18n();

useHead({
  titleTemplate: (title) =>
    `${notifications.value ? notifications.value.toString().replace(/[0-9]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.charAt(+c)) : ''}Chimboz ${t(title as string)}`,
  link: notifications.value ? faviconNew : favicon,
  meta: [
    {
      name: 'description',
      content:
        "Chimboz est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !",
    },
    {
      property: 'og:description',
      content:
        "Chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !",
    },
    {
      property: 'og:title',
      content: 'Chimboz',
    },
  ],
  style: [
    {
      children: `body { background-image: url(${asset(`img/navbar/background/${new Date().getHours()}.png`)}) }`,
    },
  ],
});

watchEffect(() => {
  useHead({ link: notifications.value ? faviconNew : favicon });
});

// TODO check forms submit
// TODO better quotes
// TODO verif v-if data
// TODO sitemap and robots.txt generator
// TODO dynamic suggestions
// TODO wedding id view
// TODO search all user messages on bbs
// TODO search messages on bbs
// TODO opengraph https://ogp.me/
// TODO check prototype pollution
// TODO forget password page
// TODO replace marked emoji support by extension + check language class on code blocks + link auto detection + compare highlight.js with prismjs
</script>

<style>
#__nuxt {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
