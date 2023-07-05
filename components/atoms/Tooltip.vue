<template>
  <span class="tooltip">
    <slot />
    <span class="tooltiptext"><slot name="tooltip" /></span>
  </span>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.tooltip {
  position: relative;
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: var(--pink);
  color: var(--light);
  text-align: center;
  pointer-events: none;
  padding: var(--sm-gap) var(--md-gap);
  border-radius: var(--border-radius);
  box-shadow: inset 1px 1px 1px var(--dark-pink);
  width: max-content;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  transform: translateX(-50%);
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
