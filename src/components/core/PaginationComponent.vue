<template>
  <div v-for="page of array()"
    :key="page + 1"></div>
  <router-link
    v-for="page of array()"
    :key="page + 1"
    class="btn-action"
    :to="callback(page + 1)"
    >{{ page + 1 }}</router-link
  >
</template>
<script setup lang="ts">
// @vuese
// @group BBS

const props = withDefaults(
  defineProps<{
    current?: number;
    total: number;
    callback: Function;
  }>(),
  { current: 0, total: 0, callback: (page) => page }
);
function array() {
  return [
    ...new Set([
      ...Array(Math.min(props.total, 3)).keys(),
      props.current - 2,
      props.current - 1,
      props.current,
      props.total - 3,
      props.total - 2,
      props.total - 1,
    ]),
  ].filter((page) => page >= 0 && page < props.total).sort((a, b) => a - b);
}
</script>
<style lang="scss" scoped>
.btn-action:not(.router-link-active) {
  border: unset;
}
</style>
