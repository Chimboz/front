<template>
  <Number :number="displayNumber" :color="color" />
</template>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color?: 'yellow' | 'pink';
    number: number;
    delay?: number;
    duration?: number;
  }>(),
  { color: 'yellow', number: 0, delay: 0, duration: 5 }
);

const displayNumber = ref(0);

function tween () {
  displayNumber.value += Math.max(
    Math.floor(props.number / 60 / props.duration),
    1
  );
  if (props.number <= displayNumber.value) {
    displayNumber.value = props.number;
  } else {
    requestAnimationFrame(tween);
  }
}

onMounted(() => {
  setTimeout(() => requestAnimationFrame(tween), props.delay);
});
</script>
