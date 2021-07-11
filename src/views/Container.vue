<template>
<div class="row">
  <div class="side-column column">
    <slot name="left-column"></slot>
  </div>
  <div class="main-column column">
    <slot></slot>
  </div>
  <div class="side-column column">
    <slot name="right-column"></slot>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
    display: flex;
}

.side-column {
    width: 154px;
}

.main-column {
    margin: 0 12px;
    width: 468px;
}
</style>

