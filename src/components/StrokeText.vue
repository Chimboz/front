<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="200%" height="100%">
    <text stroke-linecap="round" x="3px" y="70%" paint-order="stroke">
      <slot></slot>
    </text>
  </svg>
</template>
<script>
export default {
  name: "StrokeText",
  props: {
    stroke: {
      required: true,
      type: String,
    },
  },
};
</script>
