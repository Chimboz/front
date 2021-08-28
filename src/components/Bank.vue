<template>
  <Card yellow>
    <template #button>
      <Button yellow icon="register.svg">{{ $t("credit.title") }}</Button>
    </template>
    <div class="bank">
      <object
        type="image/svg+xml"
        :data="require('@/assets/img/credits/bank.svg')"
        class="fullwidth"
      ></object>
      <img
        class="coin"
        v-for="n in Math.floor(credits / 5)"
        :style="{ left: randomInt(0, 90)+ 'px', top: randomInt(16, 88) + 'px' }"
        :key="n"
        :src="require(`@/assets/img/credits/coins/${randomInt(0,6)}.svg`)"
      />
    </div>

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
  methods: {
    randomInt(min, max) {
      return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    },
  },
};
</script>
<style lang="scss" scoped>
.bank {
  position: relative;
}
.coin {
  position: absolute;
}
</style>