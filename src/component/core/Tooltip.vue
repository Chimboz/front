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
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: #ff9;
  color: #900;
  text-align: center;
  pointer-events: none;
  padding: 2px 6px;
  border-radius: 6px;
  box-shadow: inset 1px 1px 1px #5c341f90, inset 1px 1px 1px #5c341f30;

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
