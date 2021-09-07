<template>
  <ProgressBar />
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import ProgressBar from "@/component/ProgressBar.vue";
import Navbar from "@/component/Navbar.vue";
import Footer from "@/component/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    ProgressBar,
  },
};
</script>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
