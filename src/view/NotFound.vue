<template>
  <Container>
    <template #left-column></template>
    <Card red>
      <img draggable="false" oncontextmenu="return false"  alt="Error icon" src="@/asset/img/icon/error.gif"><b>Erreur, la page que vous cherchez n'existe pas.</b>
    </Card>
    <template #right-column></template>
  </Container>
</template>

<script>
import Card from "@/component/Card.vue";
import Container from "@/component/Container.vue";

export default {
  name: "Tchat",
  components: {
    Card,
    Container,
  },
};
</script>