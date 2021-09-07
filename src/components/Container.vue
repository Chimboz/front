<template>
  <div class="row flex">
    <div v-if="$slots['left-column']" class="side-column left-column column flex">
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
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.column {
  text-align: center;
  flex-direction: column;
  align-items: stretch;
  padding: 12px;
}

.side-column > div {
  width: min-content;
}

.side-column .card {
  width: 154px;
}

.main-column {
  width: 100%;
}

.left-column {
  order: 1;
}

.right-column {
  order: 2;
}

@media (min-width: 636px) {
  .side-column {
    padding: 0
  }
  
  .main-column {
    flex: 1 0 0%;
    order: 0;
    padding: 0 12px;
    min-width: 468px
  }

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
    flex-direction: row;
  }
}
</style>
