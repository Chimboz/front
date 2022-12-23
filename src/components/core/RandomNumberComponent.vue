<template>
  <img
    v-for="(digit, index) in displayNumber"
    :key="index"
    :class="{ win: elapsed > duration }"
    draggable="false"
    :alt="digit"
    width="19"
    height="21"
    :src="asset(`img/number/${digit}.svg`)"
    @contextmenu.prevent
  />
</template>

<script setup lang="ts">
import { asset, randomInt } from "@/utils";
import { onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    min?: number;
    max: number;
    value: number;
    duration?: number;
  }>(),
  { min: 0, duration: 5000 }
);

const displayNumber = ref(props.max.toString());
const start = ref(0);
const previousTimeStamp = ref(Date.now());
const elapsed = ref(0);

function bezier(
  time: number,
  startValue: number,
  change: number,
  duration: number
) {
  time /= duration / 2;
  if (time < 1) return (change / 2) * time * time + startValue;
  time--;
  return (-change / 2) * (time * (time - 2) - 1) + startValue;
}

function tween(timestamp: number) {
  if (start.value === 0) start.value = timestamp;
  elapsed.value = timestamp - start.value;

  if (previousTimeStamp.value !== timestamp) {
    const random = randomInt(props.min, props.max);
    displayNumber.value = random < 10 ? `0${random}` : random.toString();
  }

  if (elapsed.value < props.duration) {
    previousTimeStamp.value = timestamp;
    setTimeout(
      () => requestAnimationFrame(tween),
      bezier(elapsed.value, 0, 500, props.duration)
    );
  } else displayNumber.value = props.value.toString();
}

onMounted(() => {
  requestAnimationFrame(tween);
});
</script>
<style scoped>
.win {
  animation: glow 1s infinite;
}

@keyframes glow {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
}
</style>
