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
  height: 12px;
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: #78aadb;
  color: #fff;
  text-align: center;
  padding: 0 5px;
  border-radius: 99px;
  pointer-events: none;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -25%;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
