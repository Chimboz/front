<template>
  <div class="tooltip">
    <slot></slot>
    <span class="tooltiptext"><slot name="tooltip"></slot></span>
  </div>
</template>
<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: flex;
  align-items: center;
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

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -50px;
  width: 100px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
