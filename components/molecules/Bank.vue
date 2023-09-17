<template>
  <Card v-if="user" color="yellow">
    <template #button>
      <NuxtLink to="/bank">
        <Button color="yellow" icon="credits.svg" type="button">
          {{ $t('credit.title', +user.money) }}
        </Button>
      </NuxtLink>
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
      <img
        class="door"
        width="154"
        height="124"
        draggable="false"
        alt="Bank vault"
        :src="`${asset('img/bank/door.svg')}?${reload}`"
        @contextmenu.prevent
      />
    </div>

    <NuxtLink to="/bank">
      <div>{{ $t('credit.youGot') }}</div>
      <AnimatedNumber
        :number="+user.money"
        :duration="duration"
        :delay="delay"
      />
      <div>{{ $t('credit.text', +user.money) }}</div>
    </NuxtLink>
    <!--<NuxtLink to="/reflooz" class="btn-route"
      ><Button color="orange" icon="reflooz.svg"
        >Reflooz</Button
      ></NuxtLink
    >-->
  </Card>
</template>
<script setup lang="ts">
import useAuthStore from '@/stores/auth';

const auth = useAuthStore();
const user = computed(() => auth.user);
const reload = Math.random();

const props = withDefaults(
  defineProps<{
    delay?: number;
    duration?: number;
  }>(),
  { delay: 1600, duration: 3 }
);

const coins = ref(7);
const coinsPosition = [
  {
    left: `${random(33, 52)}px`,
    top: `${random(65, 69)}px`,
    filter: 'brightness(.7)',
    transform: 'scale(.8)',
  },
  {
    left: `${random(74, 96)}px`,
    top: `${random(65, 69)}px`,
    filter: 'brightness(.7)',
    transform: 'scale(.8)',
  },

  {
    left: `${random(22, 32)}px`,
    top: `${random(77, 81)}px`,
    filter: 'brightness(.85)',
    transform: 'scale(.9)',
  },
  {
    left: `${random(56, 68)}px`,
    top: `${random(77, 81)}px`,
    filter: 'brightness(.85)',
    transform: 'scale(.9)',
  },
  {
    left: `${random(92, 102)}px`,
    top: `${random(77, 81)}px`,
    filter: 'brightness(.85)',
    transform: 'scale(.9)',
  },
  {
    left: `${random(22, 32)}px`,
    top: `${random(88, 93)}px`,
    filter: 'brightness(1)',
    transform: 'scale(1)',
  },
  {
    left: `${random(56, 68)}px`,
    top: `${random(88, 93)}px`,
    filter: 'brightness(1)',
    transform: 'scale(1)',
  },
  {
    left: `${random(92, 102)}px`,
    top: `${random(88, 93)}px`,
    filter: 'brightness(1)',
    transform: 'scale(1)',
  },
];

for (let i = 8; i <= Math.min(Math.floor(+user.value!.money / 10), 360); i++) {
  const left = +coinsPosition[i % 8].left.slice(0, -2) + random(-3, 3);
  const top = +coinsPosition[i - 8].top.slice(0, -2) - 4;
  const { filter } = coinsPosition[i % 8];
  const { transform } = coinsPosition[i % 8];
  coinsPosition.push({
    left: `${left}px`,
    top: `${top}px`,
    filter,
    transform,
  });
}

function tween() {
  if (coins.value >= +user.value!.money || coins.value > 1760) {
    return;
  }
  coins.value += Math.max(
    Math.floor(+user.value!.money / 60 / props.duration),
    1
  );
  if (coins.value < +user.value!.money) {
    requestAnimationFrame(tween);
  }
}

onMounted(() => {
  setTimeout(() => requestAnimationFrame(tween), props.delay);
});
</script>
<style lang="scss" scoped>
.bank {
  background: url(@/assets/img/bank/bg.svg);
  background-size: contain;
  overflow: hidden;
  .door {
    position: inherit;
  }

  .coin {
    position: absolute;
  }
}
</style>
