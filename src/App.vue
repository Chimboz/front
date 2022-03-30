<template>
  <ProgressBar />
  <Navbar />
  <router-view />
  <Footer />
  <Modal />
  <metainfo>
    <template #title="{ content }"
      >{{
        user && user.notifications !== 0
          ? user.notifications
              .toString()
              .replace(/[0-9]/g, (c) => "⁰¹²³⁴⁵⁶⁷⁸⁹".charAt(c))
          : ""
      }}Chimboz {{ $t(content) }}</template
    >
  </metainfo>
</template>

<script>
import ProgressBar from "@/component/core/ProgressBar.vue";
import Navbar from "@/component/core/Navbar.vue";
import Footer from "@/component/core/Footer.vue";
import Modal from "@/component/core/Modal.vue";
import { mapState } from "vuex";

// @vuese
// @group View
// App root component, template for all pages.
// Use Navbar, ProgressBar, Footer and an hidden Modal that can be used to display various messages
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    ProgressBar,
    Modal,
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
