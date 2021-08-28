<template>
  <ProgressBar />
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

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
