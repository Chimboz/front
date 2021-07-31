<template>
  <Progress :value="this.$store.state.progress"/>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import Progress from '@/components/Progress.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Progress
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
