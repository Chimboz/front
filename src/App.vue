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
  data() {
    return {
      userTheme: "dark-theme",
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "Chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !",
      },
      {
        property: "og:title",
        content: "Chimboz, accueil",
      },
      {
        property: "og:description",
        content: "Chimboz, accueil",
      },
      { property: "og:site_name", content: "Chimboz" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/img.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" },
    ],
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
