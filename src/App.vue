<template>
  <ProgressBar />
  <Navbar />
  <router-view />
  <Footer />
  <Modal />
  <metainfo>
    <template #title="{ content }"
      >{{
        user.notifications
          .toString()
          .replace(/[0-9]/g, (c) => "⁰¹²³⁴⁵⁶⁷⁸⁹".charAt(c))
      }}Chapatizᵣₑₜᵣₒ {{ $t(content) }}</template
    >
  </metainfo>
</template>

<script>
import ProgressBar from "@/component/ProgressBar.vue";
import Navbar from "@/component/Navbar.vue";
import Footer from "@/component/Footer.vue";
import Modal from "@/component/Modal.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    ProgressBar,
    Modal
  },
  computed: {
    ...mapState("auth", ["user"])
  },
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "ChapatizRetro.com est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
      },
      {
        property: "og:title",
        content: "Chapatiz Retro, accueil"
      },
      {
        property: "og:description",
        content: "Chapatiz Retro, accueil"
      },
      { property: "og:site_name", content: "Chapatiz Retro" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/img.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" }
    ]
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
