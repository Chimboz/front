<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    style="overflow: visible"
  >
    <text
      stroke-linecap="round"
      x="50%"
      y="75%"
      paint-order="stroke"
      text-anchor="middle"
    >
      <slot></slot>
    </text>
  </svg>
</template>
<script>
export default {
  name: "StrokeText",
};
</script>
