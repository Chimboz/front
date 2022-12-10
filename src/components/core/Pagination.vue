<template>
  <router-link
    v-for="page of array"
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
    current: number;
    total: number;
    callback: Function;
  }>(),
  { current: 0, total: 0, callback: (page) => page }
);
function array() {
  return [
    ...new Set([
      ...Array(props.total < 3 ? props.total : 3).keys(),
      props.current - 2 > 0 ? props.current - 2 : 0,
      props.current - 1,
      props.current < props.total - 1 ? props.current : 0,
      props.total - 3 > 0 ? props.total - 3 : 0,
      props.total - 2 > 0 ? props.total - 2 : 0,
      props.total - 1,
    ]),
  ].sort();
}
</script>
<style lang="scss" scoped>
.btn-action:not(.router-link-active) {
  border: unset;
}
</style>
