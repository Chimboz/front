<template>
  <Card yellow>
    <template #button>
      <Button yellow icon="register.svg">{{ $t("credit.title") }}</Button>
    </template>
    <div class="bank fullwidth">
      <img
        draggable="false"
        @contextmenu.prevent
        class="coin"
        v-for="(_, n) in Math.min(Math.floor(credits / 10), 176)"
        :style="coinsPosition[n]"
        v-show="n <= Math.min(Math.floor(coins / 10), 176)"
        :key="n"
        :src="require(`@/asset/img/bank/coin.svg`)"
      />
      <object
        width="154"
        height="124"
        draggable="false"
        @contextmenu.prevent
        type="image/svg+xml"
        :data="require('@/asset/img/bank/door.svg')"
      ></object>
    </div>

    <router-link to="/bank">
      {{ $t("credit.youGot") }}<br />
      <AnimatedNumber :number="credits" /><br />
      {{ $t("credit.text", credits) }} </router-link
    ><br /><br />
    <router-link to="/reflooz" class="btn-route"
      ><Button orange icon="register.svg">Reflooz</Button></router-link
    ></Card
  >
</template>
<script>
import Card from "@/component/Card.vue";
import Button from "@/component/Button.vue";
import AnimatedNumber from "@/component/AnimatedNumber.vue";

export default {
  name: "Bank",
  components: {
    Button,
    AnimatedNumber,
    Card,
  },

  mounted() {
    for (let i = 8; i <= Math.min(Math.floor(this.credits / 10), 360); i++) {
      const left =
        +this.coinsPosition[i % 8].left.slice(0, -2) + this.randomInt(-3, 3);
      const top = +this.coinsPosition[i - 8].top.slice(0, -2) - 4;
      const filter = this.coinsPosition[i % 8].filter;
      const transform = this.coinsPosition[i % 8].transform;
      this.coinsPosition.push({
        left: left + "px",
        top: top + "px",
        filter: filter,
        transform: transform,
      });
    }
    requestAnimationFrame(this.tween);
  },
  data() {
    return {
      coins: 7,
      coinsPosition: [
        {
          left: this.randomInt(33, 52) + "px",
          top: this.randomInt(65, 69) + "px",
          filter: "brightness(.7)",
          transform: "scale(.8)",
        },
        {
          left: this.randomInt(74, 96) + "px",
          top: this.randomInt(65, 69) + "px",
          filter: "brightness(.7)",
          transform: "scale(.8)",
        },

        {
          left: this.randomInt(22, 32) + "px",
          top: this.randomInt(77, 81) + "px",
          filter: "brightness(.85)",
          transform: "scale(.9)",
        },
        {
          left: this.randomInt(56, 68) + "px",
          top: this.randomInt(77, 81) + "px",
          filter: "brightness(.85)",
          transform: "scale(.9)",
        },
        {
          left: this.randomInt(92, 102) + "px",
          top: this.randomInt(77, 81) + "px",
          filter: "brightness(.85)",
          transform: "scale(.9)",
        },
        {
          left: this.randomInt(22, 32) + "px",
          top: this.randomInt(88, 93) + "px",
          filter: "brightness(1)",
          transform: "scale(1)",
        },
        {
          left: this.randomInt(56, 68) + "px",
          top: this.randomInt(88, 93) + "px",
          filter: "brightness(1)",
          transform: "scale(1)",
        },
        {
          left: this.randomInt(92, 102) + "px",
          top: this.randomInt(88, 93) + "px",
          filter: "brightness(1)",
          transform: "scale(1)",
        },
      ],
    };
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
      return (
        Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
        Math.ceil(min)
      );
    },
    tween() {
      if (this.coins >= this.credits || this.coins > 1760) return;
      this.coins++;
      if (this.coins < this.credits) requestAnimationFrame(this.tween);
    },
  },
};
</script>
<style lang="scss" scoped>
.bank {
  background: url(../asset/img/bank/bg.svg);
  position: relative;
  background-size: contain;
  overflow: hidden;
}

.bank object {
  position: inherit;
  width: 100%;
}

.coin {
  position: absolute;
}
</style>
