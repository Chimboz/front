<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    style="overflow: visible"
  >
    <text
      stroke-linecap="round"
      :x="left ? '0%' : '50%'"
      y="75%"
      paint-order="stroke"
      :text-anchor="left ? 'left' : 'middle'"
    >
      <slot />
    </text>
  </svg>
</template>
<script setup lang="ts">
defineProps<{
  left?: boolean;
}>();
</script>
