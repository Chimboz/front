<template>
  <div class="tooltip">
    <slot></slot>
    <span class="tooltiptext"><slot name="tooltip"></slot></span>
  </div>
</template>
<script>
// @vuese
// @group Core
export default {
  name: "Tooltip"
};
</script>
<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: flex;
  align-items: center;
  height: 12px;
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: #fff4d5;
  color: #726338;
  text-align: center;
  pointer-events: none;
  padding: 2px 6px;
  border-radius: 6px;
  box-shadow: inset 1px 1px 2px #5c341f90;

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
