<template>
  <ProgressBar />
  <Navbar />
  <router-view />
  <Footer />
  <Modal />
  <metainfo>
    <!--<template #title="{ content }"
      >{{
        user && user.notifications !== 0
          ? user.notifications
              .toString()
              .replace(/[0-9]/g, (c) => "⁰¹²³⁴⁵⁶⁷⁸⁹".charAt(c))
          : ""
      }}Chimboz {{ $t(content) }}</template
    >-->
  </metainfo>
</template>

<script setup lang="ts">
import ProgressBar from "@/components/core/ProgressBarComponent.vue";
import Navbar from "@/components/core/NavbarComponent.vue";
import Footer from "@/components/core/FooterComponent.vue";
import Modal from "@/components/core/ModalComponent.vue";

// @vuese
// @group View
// App root component, template for all pages.
// Use Navbar, ProgressBar, Footer and an hidden Modal that can be used to display various messages
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
