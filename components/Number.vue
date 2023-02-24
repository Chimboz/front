<template>
  <img
    v-for="(digit, index) in number.toString(10)"
    :key="index"
    draggable="false"
    :alt="digit"
    width="19"
    height="21"
    :src="asset(`img/number/${color}/${digit}.svg`)"
    @contextmenu.prevent
  />
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
      number: number,
      color?: 'yellow' | 'pink'
    }>(),
  { number: 0, color: 'yellow' }
)
</script>
