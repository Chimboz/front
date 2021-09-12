<template>
  <div class="tooltip">
    <slot></slot>
    <span class="tooltiptext btn-md"><slot name="tooltip"></slot></span>
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
  width: 120px;
  background-color: #fff;
  text-align: center;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
