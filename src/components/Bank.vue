<template>
  <Card yellow>
    <template #button>
      <Button yellow icon="register.svg">{{ $t("credit.title") }}</Button>
    </template>
    <div class="bank fullwidth">
      <object
        draggable="false"
        oncontextmenu="return false"
        type="image/svg+xml"
        :data="require('@/assets/img/credits/door.svg')"
      ></object>
      <img
        draggable="false"
        oncontextmenu="return false"
        class="coin"
        v-for="n in Math.min(Math.floor(credits / 10), 360)"
        :style="coinsPosition[n]"
        :class="{ drop: n <= Math.min(Math.floor(coins / 10), 360) }"
        :key="n"
        :src="require(`@/assets/img/credits/coin.svg`)"
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
  name: "Bank",
  components: {
    Button,
    AnimatedNumber,
    Card,
  },

  mounted: function () {
    for (let i = 8; i <= Math.min(Math.floor(this.credits / 10), 360); i++) {
      const left =
        +this.coinsPosition[i % 8].left.slice(0, -2) + this.randomInt(-2, 2);
      const top = +this.coinsPosition[i - 8].top.slice(0, -2) - 4;
      const filter = this.coinsPosition[i % 8].filter;
      this.coinsPosition.push({
        left: left + "px",
        top: top + "px",
        filter: filter,
      });
    }
    requestAnimationFrame(this.tween)
  },
  data() {
    return {
      coins: 7,
      coinsPosition: [
        {
          left: this.randomInt(33, 52) + "px",
          top: this.randomInt(65, 69) + "px",
          filter: "brightness(.7)",
        },
        {
          left: this.randomInt(74, 96) + "px",
          top: this.randomInt(65, 69) + "px",
          filter: "brightness(.7)",
        },

        {
          left: this.randomInt(22, 32) + "px",
          top: this.randomInt(77, 81) + "px",
          filter: "brightness(.85)",
        },
        {
          left: this.randomInt(56, 68) + "px",
          top: this.randomInt(77, 81) + "px",
          filter: "brightness(.85)",
        },
        {
          left: this.randomInt(92, 102) + "px",
          top: this.randomInt(77, 81) + "px",
          filter: "brightness(.85)",
        },
        {
          left: this.randomInt(22, 32) + "px",
          top: this.randomInt(88, 93) + "px",
          filter: "brightness(1)",
        },
        {
          left: this.randomInt(56, 68) + "px",
          top: this.randomInt(88, 93) + "px",
          filter: "brightness(1)",
        },
        {
          left: this.randomInt(92, 102) + "px",
          top: this.randomInt(88, 93) + "px",
          filter: "brightness(1)",
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
      if (this.coins >= this.credits || this.coins > 1800)
        return;
      this.coins++;
      if (this.coins < this.credits)
        requestAnimationFrame(this.tween);
    },
  },
};
</script>
<style lang="scss" scoped>
.bank {
  background: url(../assets/img/credits/bg.svg);
  position: relative;
  background-size: contain;
  overflow: hidden;
}

.bank object {
  z-index: 1;
  position: inherit;
  width: 100%;
}

.coin {
  position: absolute;
  display: none;
}

.drop {
  display: inherit;
}
</style>