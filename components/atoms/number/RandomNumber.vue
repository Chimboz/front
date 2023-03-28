<template>
  <i :class="{ win: elapsed > duration }">
    <Number :number="displayNumber" :color="color" />
  </i>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color?: 'yellow' | 'pink';
    min?: number;
    max: number;
    value: number;
    duration?: number;
  }>(),
  { color: 'yellow', min: 0, duration: 3000 }
);

const displayNumber = ref(props.max);
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
  if (time < 1) {
    return (change / 2) * time * time + startValue;
  }
  time--;
  return (-change / 2) * (time * (time - 2) - 1) + startValue;
}

function tween(timestamp: number) {
  if (start.value === 0) {
    start.value = timestamp;
  }
  elapsed.value = timestamp - start.value;

  if (previousTimeStamp.value !== timestamp) {
    displayNumber.value = randomInt(props.min, props.max);
  }

  if (elapsed.value < props.duration) {
    previousTimeStamp.value = timestamp;
    setTimeout(
      () => requestAnimationFrame(tween),
      bezier(elapsed.value, 0, 500, props.duration)
    );
  } else {
    displayNumber.value = props.value;
  }
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
