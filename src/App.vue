<template>
  <ProgressBar />
  <Navbar />
  <RouterView />
  <Footer />
  <Modal />
  <metainfo>
    <template #title="{ content }"
      >{{
        notifications
          ? notifications
              .toString()
              .replace(/[0-9]/g, (c) => "⁰¹²³⁴⁵⁶⁷⁸⁹".charAt(+c))
          : ""
      }}Chimboz {{ $t(content) }}</template
    >
  </metainfo>
</template>

<script setup lang="ts">
import ProgressBar from "@/components/core/ProgressBarComponent.vue";
import Navbar from "@/components/core/NavbarComponent.vue";
import Footer from "@/components/core/FooterComponent.vue";
import Modal from "@/components/core/ModalComponent.vue";
import useAuthStore from "@/stores/auth";
import { computed, watchEffect } from "vue";
import { useMeta } from "vue-meta";
import favicon from "@/constants/favicon.json";
import faviconNew from "@/constants/favicon_new.json";

const notifications = computed(() => useAuthStore().notifications);

const { meta } = useMeta({
  link: notifications.value ? faviconNew : favicon,
});

watchEffect(() => {
  meta.link = notifications.value ? faviconNew : favicon;
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
