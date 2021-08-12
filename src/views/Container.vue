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

<style lang="scss">
.row {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.column {
  text-align: center;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
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

@media (min-width: 800px) {
  .side-column {
    width: 154px;
    order: 0;
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
    flex: 1 0 0%;
    order: 0;
  }
}
</style>
