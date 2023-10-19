<template>
  <span class="tooltip" :class="{ top }">
    <slot />
    <span class="tooltiptext"><slot name="tooltip" /></span>
  </span>
</template>
<script setup lang="ts">
defineProps<{ top?: boolean }>();
</script>
<style lang="scss" scoped>
.tooltip {
  position: relative;
  width: 100%;
  display: inline-block;

  .tooltiptext {
    visibility: hidden;
    background-color: var(--pink);
    color: var(--light);
    text-align: center;
    pointer-events: none;
    padding: var(--sm-gap) var(--md-gap);
    border-radius: var(--border-radius);
    box-shadow: inset 1px 1px 1px var(--dark-pink);
    width: max-content;
    opacity: 0;
    transition: calc(var(--duration) / 2);
    display: flex;
    align-items: center;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  &.top .tooltiptext {
    top: -100%;
  }
  &:hover .tooltiptext {
    opacity: 1;
    visibility: visible;
  }
}
</style>
