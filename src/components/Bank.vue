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
        :src="require(`@/assets/img/bank/coin.svg`)"
      />
      <object
        width="154"
        height="124"
        draggable="false"
        aria-label="Bank vault"
        @contextmenu.prevent
        type="image/svg+xml"
        :data="require('@/assets/img/bank/door.svg')"
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
<script setup lang="ts">
import AnimatedNumber from "@/components/core/AnimatedNumber.vue";
import { useAuthStore } from "@/stores/auth";
import { onMounted, ref } from "vue";
const auth = useAuthStore();
const user = auth.user!;

// @vuese
// @group Default

const props = withDefaults(
  defineProps<{
    delay: number;
  }>(),
  { delay: 5 }
);

const authenticated = true;

const coins = ref(7);
const coinsPosition = [
  {
    left: randomInt(33, 52) + "px",
    top: randomInt(65, 69) + "px",
    filter: "brightness(.7)",
    transform: "scale(.8)",
  },
  {
    left: randomInt(74, 96) + "px",
    top: randomInt(65, 69) + "px",
    filter: "brightness(.7)",
    transform: "scale(.8)",
  },

  {
    left: randomInt(22, 32) + "px",
    top: randomInt(77, 81) + "px",
    filter: "brightness(.85)",
    transform: "scale(.9)",
  },
  {
    left: randomInt(56, 68) + "px",
    top: randomInt(77, 81) + "px",
    filter: "brightness(.85)",
    transform: "scale(.9)",
  },
  {
    left: randomInt(92, 102) + "px",
    top: randomInt(77, 81) + "px",
    filter: "brightness(.85)",
    transform: "scale(.9)",
  },
  {
    left: randomInt(22, 32) + "px",
    top: randomInt(88, 93) + "px",
    filter: "brightness(1)",
    transform: "scale(1)",
  },
  {
    left: randomInt(56, 68) + "px",
    top: randomInt(88, 93) + "px",
    filter: "brightness(1)",
    transform: "scale(1)",
  },
  {
    left: randomInt(92, 102) + "px",
    top: randomInt(88, 93) + "px",
    filter: "brightness(1)",
    transform: "scale(1)",
  },
];

onMounted(() => {
  if (!authenticated) return;
  for (let i = 8; i <= Math.min(Math.floor(user.credits / 10), 360); i++) {
    const left = +coinsPosition[i % 8].left.slice(0, -2) + randomInt(-3, 3);
    const top = +coinsPosition[i - 8].top.slice(0, -2) - 4;
    const filter = coinsPosition[i % 8].filter;
    const transform = coinsPosition[i % 8].transform;
    coinsPosition.push({
      left: left + "px",
      top: top + "px",
      filter: filter,
      transform: transform,
    });
  }
  requestAnimationFrame(tween);
});

function randomInt(min: number, max: number) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}
function tween() {
  if (coins.value >= user.credits || coins.value > 1760) return;
  coins.value += Math.max(Math.floor(user.credits / 60 / props.delay), 1);
  if (coins.value < user.credits) requestAnimationFrame(tween);
}
</script>
<style lang="scss" scoped>
.bank {
  background: url(../assets/img/bank/bg.svg);
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
