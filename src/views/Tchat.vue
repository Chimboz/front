<template>
  <Container>
    <Card blue>
      <img src="@/assets/img/stores/fdroid-fr.svg" />
      <img src="@/assets/img/stores/google-fr.png" />
      <img style="padding: 20px" src="@/assets/img/stores/apple-fr.svg" />
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
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-evenly;
}
.card img {
  width: 33%;
}
</style>
