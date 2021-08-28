<template>
  <Card yellow>
    <template #button>
      <Button yellow icon="register.svg">{{ $t("credit.title") }}</Button>
    </template>
    <object
      type="image/svg+xml"
      :data="require('@/assets/img/credits/bank.svg')"
      class="fullwidth"
    ></object>
    <router-link to="/bank">
      {{ $t("credit.youGot") }}<br />
      <AnimatedNumber :number="credits" /><br />
      {{ $t("credit", credits) }} </router-link
    ><br /><br />
    <router-link to="/reflooz" class="btn-route"
      ><Button orange icon="register.svg">Reflooz</Button></router-link
    ></Card
  >
</template>
<script>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import AnimatedNumber from "@/components/AnimatedNumber.vue";

export default {
  name: "Shop",
  components: {
    Button,
    AnimatedNumber,
    Card,
  },
  props: {
    credits: {
      required: true,
      type: Number,
      default: 0,
    },
  },
};
</script>