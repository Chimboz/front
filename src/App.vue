<template>
  <ProgressBar />
  <Navbar />
  <RouterView />
  <Footer />
  <Modal />
  <metainfo>
    <template #title="{ content }"
      >{{
        notifications !== 0
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
import { computed } from "vue";
import { useMeta } from "vue-meta";

const notifications = computed(() => useAuthStore().notifications);

useMeta({
  title: "test",
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
