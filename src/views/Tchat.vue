<template>
  <Container>
    <Card blue>
      <img src="@/assets/img/stores/fdroid-fr.svg" />
      <img src="@/assets/img/stores/google-fr.svg" />
      <img src="@/assets/img/stores/apple-bk-fr.svg" />
    </Card>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Container from "@/views/Container.vue";

export default {
  name: "Tchat",
  components: {
    Card,
    Container,
  },
  beforeRouteEnter(to, from, next) {
    setTimeout(()=>next(),2000)

  },
  async beforeRouteUpdate() {
    setTimeout(()=>console.log("2000ms"),2000)
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-evenly;
}
.card img {
  padding: 0 10px;
  width: 33%;
}
</style>
