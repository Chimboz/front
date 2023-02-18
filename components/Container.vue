<template>
  <div class="row flex">
    <div
      v-if="$slots['left-column']"
      class="side-column left-column column flex"
    >
      <slot name="left-column" />
    </div>
    <div class="main-column column flex">
      <slot />
    </div>
    <div
      v-if="$slots['right-column']"
      style=""
      class="side-column right-column column flex"
    >
      <slot name="right-column" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.row {
  padding: 0 var(--gap);
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.column {
  flex-direction: column;
  align-items: stretch;
  box-sizing: content-box;
}

.side-column {
  width: 154px;
}

.main-column {
  width: 100%;
  margin-bottom: var(--gap);
}

.left-column {
  order: 1;
  margin-right: var(--gap);
}

.right-column {
  order: 2;
  margin-left: var(--gap);
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
    order: 0;
  }

  .row {
    padding: 0;
    flex-direction: row;
  }
}
</style>
