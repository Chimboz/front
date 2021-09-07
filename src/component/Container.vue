<template>
  <div class="row flex">
    <div
      v-if="$slots['left-column']"
      class="side-column left-column column flex"
    >
      <slot name="left-column"></slot>
    </div>
    <div class="main-column column flex">
      <slot></slot>
    </div>
    <div
      style=""
      v-if="$slots['right-column']"
      class="side-column right-column column flex"
    >
      <slot name="right-column"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.row {
  padding: 0 12px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.column {
  text-align: center;
  flex-direction: column;
  align-items: stretch;
  box-sizing: content-box;
}

.side-column > div {
  width: min-content;
}

.side-column .card {
  width: 154px;
}

.main-column {
  width: 100%;
  padding-bottom: 12px;
}

.left-column {
  order: 1;
  padding-right: 12px;
}

.right-column {
  order: 2;
  padding-left: 12px;
}

.main-column {
  width: 100%;
}

@media (min-width: 508px) {
  .main-column {
    min-width: 468px;
    flex: 1 0 0%;
  }
}

@media (min-width: 674px) {
  .left-column {
    order: 0;
  }
}

@media (min-width: 800px) {
  .side-column {
    width: 154px;
    order: 0;
  }

  .row {
    padding: 0;
    flex-direction: row;
  }
}
</style>
