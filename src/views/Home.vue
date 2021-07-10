<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Card />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
};
</script>
