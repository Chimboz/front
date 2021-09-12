<template>
  <Card blue
    >Choisis un bon mot de passe et ne le donne à personne<br /><Button
      icon="rules.svg"
      class="fullwidth"
      >Règles</Button
    ></Card
  >
</template>
<script>
import Card from "@/component/Card.vue";
import Button from "@/component/Button.vue";

export default {
  name: "Security",
  components: {
    Card,
    Button,
  },
};
</script>
<style lang="scss" scoped></style>
