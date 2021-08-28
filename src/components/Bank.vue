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
        v-for="n in Math.floor(credits / 5)"
        :style="coinsPosition[n]"
        :class="{ drop: n <= Math.floor(coins / 5) }"
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
    requestAnimationFrame(this.tween);
  },
  data() {
    return {
      coins: 0,
      coinsPosition: [],
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
      if (this.credits == this.coins) return;
      this.coins++;
      this.coinsPosition.push({
        left: this.randomInt(24, 102) + "px",
        top: this.randomInt(16, 88) + "px",
      });
      if (this.coins < this.credits) requestAnimationFrame(this.tween);
    },
  },
};
</script>
<style lang="scss" scoped>
.bank {
  position: relative;
}
.bank {
  background: url(../assets/img/credits/bg.svg);
  background-size: contain;
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