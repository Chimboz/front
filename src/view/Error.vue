<template>
  <Container>
    <template #left-column></template>
    <Card red>
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Error icon"
        src="@/asset/img/icon/warning.svg"
      /><b>&nbsp;{{ $t(this.$route.params.message) }}</b>
    </Card>
    <template #right-column></template>
  </Container>
</template>

<script>
import Card from "@/component/Card.vue";
import Container from "@/component/Container.vue";

export default {
  name: "Error",
  components: {
    Card,
    Container,
  },
};
</script>
