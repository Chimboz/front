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
        v-for="n in Math.min(Math.floor(credits / 5), 180)"
        :style="coinsPosition[n]"
        :class="{ drop: n <= coins }"
        :id="n"
        :key="n"
        :src="require(`@/assets/img/credits/coins/${n % 7}.svg`)"
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

  mounted: function () {
    for (let i = 8; i <= Math.min(Math.floor(this.credits / 5), 180); i++) {
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
    setTimeout(() => requestAnimationFrame(this.tween), 1300);
  },
  data() {
    return {
      coins: 7,
      coinsPosition: [
        {
          left: this.randomInt(24, 40) + "px",
          top: this.randomInt(60, 63) + "px",
          filter: "brightness(.7)",
        },
        {
          left: this.randomInt(48, 78) + "px",
          top: this.randomInt(60, 63) + "px",
          filter: "brightness(.7)",
        },

        {
          left: this.randomInt(86, 102) + "px",
          top: this.randomInt(69, 72) + "px",
          filter: "brightness(.8)",
        },
        {
          left: this.randomInt(24, 40) + "px",
          top: this.randomInt(69, 72) + "px",
          filter: "brightness(.8)",
        },
        {
          left: this.randomInt(48, 78) + "px",
          top: this.randomInt(76, 78) + "px",
          filter: "brightness(.9)",
        },
        {
          left: this.randomInt(24, 40) + "px",
          top: this.randomInt(85, 88) + "px",
          filter: "brightness(1)",
        },
        {
          left: this.randomInt(48, 78) + "px",
          top: this.randomInt(85, 88) + "px",
          filter: "brightness(1)",
        },
        {
          left: this.randomInt(86, 102) + "px",
          top: this.randomInt(85, 88) + "px",
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
      if (this.coins >= Math.floor(this.credits / 5) || this.coins > 180)
        return;
      this.coins++;
      if (this.coins <= Math.floor(this.credits / 5))
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
  top: 5px;
  left: 5px;
}

.drop {
  display: inherit;
}
</style>