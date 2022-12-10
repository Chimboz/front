<template>
  <img
    :class="{ win: elapsed > duration }"
    draggable="false"
    @contextmenu.prevent
    :alt="digit"
    v-for="(digit, index) in displayNumber"
    :key="index"
    width="19"
    height="21"
    :src="require(`@/assets/img/number/${digit}.svg`)"
  />
</template>

<script setup lang="ts">
// @vuese
// @group Core

import { onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    min: number;
    max: number;
    value: number;
    duration: number;
  }>(),
  { min: 0, duration: 2000 }
);

const displayNumber = ref(props.max.toString());
const start = ref(0);
const previousTimeStamp = ref(Date.now());
const elapsed = ref(0);

onMounted(() => {
  requestAnimationFrame(tween);
});

function randomInt(min: number, max: number) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
}
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
    displayNumber.value = random < 10 ? "0" + random : random.toString();
  }

  if (elapsed.value < props.duration) {
    previousTimeStamp.value = timestamp;
    setTimeout(
      () => requestAnimationFrame(tween),
      bezier(elapsed.value, 0, 500, props.duration)
    );
  } else displayNumber.value = props.value.toString();
}
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
