<template>
  <ProgressBar />
  <Navbar />
  <RouterView />
  <Footer />
  <Modal />
</template>

<script setup lang="ts">




import useAuthStore from "@/stores/auth";
import { computed, watchEffect } from "vue";
import { useHead } from "@vueuse/head";
import favicon from "@/constants/favicon.json";
import faviconNew from "@/constants/favicon_new.json";
import { useI18n } from "vue-i18n";

const notifications = computed(() => useAuthStore().notifications);
const { t } = useI18n();

useHead({
  titleTemplate: (title) =>
    `${
      notifications.value
        ? notifications.value
            .toString()
            .replace(/[0-9]/g, (c) => "⁰¹²³⁴⁵⁶⁷⁸⁹".charAt(+c))
        : ""
    }Chimboz ${t(title as string)}`,
  link: notifications.value ? faviconNew : favicon,
  meta: [
    {
      name: "description",
      content:
        "Chimboz est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !",
    },
    {
      property: "og:description",
      content:
        "Chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !",
    },
    {
      property: "og:title",
      content: "Chimboz",
    },
  ],
});

watchEffect(() => {
  useHead({ link: notifications.value ? faviconNew : favicon });
});
</script>

<style>
#__nuxt {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
