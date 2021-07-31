<template>
  <Container>
    <Card blue>
      404 Not Found
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
  padding: 0 10px;
  width: 33%;
}
</style>
