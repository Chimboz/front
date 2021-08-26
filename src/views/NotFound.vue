<template>
  <Container>
    <template #left-column></template>
    <Card red>
      <img draggable="false"  alt="Error icon" src="@/assets/img/icons/error.gif"><b>Erreur, la page que vous cherchez n'existe pas.</b>
    </Card>
    <template #right-column></template>
  </Container>
</template>

<script>
import Card from "@/components/Card.vue";
import Container from "@/components/Container.vue";

export default {
  name: "Tchat",
  components: {
    Card,
    Container,
  },
};
</script>