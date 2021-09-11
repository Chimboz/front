<template>
  <Card blue :bot="bot" :top="top"
    >Ne donne jamais ton mot de passe, à personne&nbsp;!<br /><Button
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
  name: "Rules",
  components: {
    Card,
    Button,
  },
  props: {
    bot: {
      required: false,
      type: Boolean,
      default: false,
    },
    top: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped></style>
