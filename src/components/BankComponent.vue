<template>
  <GlobalCard v-if="user" color="yellow">
    <template #button>
      <router-link to="/bank"
        ><GlobalButton color="yellow" icon="credits.svg">{{
          $t("credit.title", +user.money)
        }}</GlobalButton></router-link
      >
    </template>
    <div class="bank relative fullwidth">
      <img
        v-for="(_, n) in Math.min(Math.floor(+user.money / 10), 176)"
        v-show="n <= Math.min(Math.floor(coins / 10), 176)"
        :key="n"
        draggable="false"
        class="coin"
        alt="Coin"
        :style="coinsPosition[n]"
        src="@/assets/img/bank/coin.svg"
        @contextmenu.prevent
      />
      <object
        width="154"
        height="124"
        draggable="false"
        aria-label="Bank vault"
        type="image/svg+xml"
        :data="asset('img/bank/door.svg')"
        @contextmenu.prevent
      ></object>
    </div>

    <router-link to="/bank">
      <div>{{ $t("credit.youGot") }}</div>
      <AnimatedNumber :number="+user.money" :delay="delay" />
      <div>{{ $t("credit.text", +user.money) }}</div></router-link
    >
    <!--<router-link to="/reflooz" class="btn-route"
      ><GlobalButton color="orange" icon="reflooz.svg"
        >Reflooz</GlobalButton
      ></router-link
    >--></GlobalCard
  >
</template>
<script setup lang="ts">
import AnimatedNumber from "@/components/core/AnimatedNumberComponent.vue";
import { useAuthStore } from "@/stores/auth";
import { asset, randomInt } from "@/utils";
import { onMounted, ref, computed } from "vue";
const auth = useAuthStore();
const user = computed(() => auth.user);

// @vuese
// @group Default

const props = withDefaults(
  defineProps<{
    delay?: number;
  }>(),
  { delay: 5 }
);

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
  if (!user.value) return;
  for (
    let i = 8;
    i <= Math.min(Math.floor(+user.value!.money / 10), 360);
    i++
  ) {
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

function tween() {
  if (coins.value >= +user.value!.money || coins.value > 1760) return;
  coins.value += Math.max(Math.floor(+user.value!.money / 60 / props.delay), 1);
  if (coins.value < +user.value!.money) requestAnimationFrame(tween);
}
</script>
<style lang="scss" scoped>
.bank {
  background: url(../assets/img/bank/bg.svg);
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
