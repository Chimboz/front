<template>
  <GlobalCard color="yellow" v-if="authenticated">
    <template #button>
      <router-link to="/bank"
        ><GlobalButton color="yellow" icon="credits.svg">{{
          $t("credit.title", user.credits)
        }}</GlobalButton></router-link
      >
    </template>
    <div class="bank relative fullwidth">
      <img
        draggable="false"
        @contextmenu.prevent
        class="coin"
        alt="Coin"
        v-for="(_, n) in Math.min(Math.floor(user.credits / 10), 176)"
        :style="coinsPosition[n]"
        v-show="n <= Math.min(Math.floor(coins / 10), 176)"
        :key="n"
        :src="require(`@/asset/img/bank/coin.svg`)"
      />
      <object
        width="154"
        height="124"
        draggable="false"
        aria-label="Bank vault"
        @contextmenu.prevent
        type="image/svg+xml"
        :data="require('@/asset/img/bank/door.svg')"
      ></object>
    </div>

    <router-link to="/bank">
      <div>{{ $t("credit.youGot") }}</div>
      <AnimatedNumber :number="user.credits" :delay="delay" />
      <div>{{ $t("credit.text", user.credits) }}</div></router-link
    >
    <!--<router-link to="/reflooz" class="btn-route"
      ><GlobalButton color="orange" icon="reflooz.svg"
        >Reflooz</GlobalButton
      ></router-link
    >--></GlobalCard
  >
</template>
<script>
import AnimatedNumber from "@/component/core/AnimatedNumber.vue";
import { mapGetters, mapState } from "vuex";

// @vuese
// @group Default
export default {
  name: "BankComponent",
  components: {
    AnimatedNumber,
  },
  props: {
    delay: { default: 5, type: Number, required: false },
  },

  mounted() {
    if (!this.authenticated) return;
    for (
      let i = 8;
      i <= Math.min(Math.floor(this.user.credits / 10), 360);
      i++
    ) {
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
  methods: {
    randomInt(min, max) {
      return (
        Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
        Math.ceil(min)
      );
    },
    tween() {
      if (this.coins >= this.user.credits || this.coins > 1760) return;
      this.coins += Math.max(
        Math.floor(this.user.credits / 60 / this.delay),
        1
      );
      if (this.coins < this.user.credits) requestAnimationFrame(this.tween);
    },
  },
  computed: {
    ...mapGetters("auth", ["authenticated"]),
    ...mapState("auth", ["user"]),
  },
};
</script>
<style lang="scss" scoped>
.bank {
  background: url(../asset/img/bank/bg.svg);
  background-size: contain;
}

.bank object {
  position: inherit;
  width: 100%;
}

.coin {
  position: absolute;
}

.card .router-link-active {
  color: var(--blue);
}
</style>
