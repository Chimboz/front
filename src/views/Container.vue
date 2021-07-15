<template>
  <div class="row">
    <div v-if="$slots['left-column']" class="side-column left-column column">
      <slot name="left-column"></slot>
    </div>
    <div class="main-column column">
      <slot></slot>
    </div>
    <div
      style=""
      v-if="$slots['right-column']"
      class="side-column right-column column"
    >
      <slot name="right-column"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.column {
  text-align: -webkit-center;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.side-column {
  width: 50%;
  overflow: hidden;
}

.main-column {
  width: 100%;
  order: 1;
}

@media (min-width: 800px) {
  .side-column {
    width: 154px;
  }

  .left-column {
    margin-right: 12px;
  }

  .right-column {
    margin-left: 12px;
  }

  .row {
    flex-direction: row;
  }

  .column {
    padding: 0 !important;
  }

  .main-column {
    width: 468px;
    order: 0;
  }
}
</style>
