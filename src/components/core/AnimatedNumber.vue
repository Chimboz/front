<template>
  <img
    draggable="false"
    @contextmenu.prevent
    :alt="digit"
    v-for="(digit, index) in displayNumber.toString(10)"
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
    number: number;
    delay?: number;
  }>(),
  { number: 0, delay: 5 }
);

const displayNumber = ref(0);

onMounted(() => {
  requestAnimationFrame(tween);
});

function tween() {
  displayNumber.value += Math.max(
    Math.floor(props.number / 60 / props.delay),
    1
  );
  if (props.number <= displayNumber.value) {
    displayNumber.value = props.number;
    return;
  } else requestAnimationFrame(tween);
}
</script>
