<template>
  <img
    v-for="(digit, index) in displayNumber.toString(10)"
    :key="index"
    draggable="false"
    :alt="digit"
    width="19"
    height="21"
    :src="asset(`img/number/${digit}.svg`)"
    @contextmenu.prevent
  >
</template>
<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    number: number;
    delay?: number;
  }>(),
  { number: 0, delay: 5 }
)

const displayNumber = ref(0)

function tween () {
  displayNumber.value += Math.max(
    Math.floor(props.number / 60 / props.delay),
    1
  )
  if (props.number <= displayNumber.value) {
    displayNumber.value = props.number
  } else { requestAnimationFrame(tween) }
}

onMounted(() => {
  requestAnimationFrame(tween)
})
</script>
