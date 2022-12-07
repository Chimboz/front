<template>
  <router-link
    v-for="page of array"
    :key="page + 1"
    class="btn-action"
    :to="callback(page + 1)"
    >{{ page + 1 }}</router-link
  >
</template>
<script>
// @vuese
// @group BBS
export default {
  name: "CorePagination",
  props: {
    current: { default: 0, type: Number, required: true },
    total: { required: true, type: Number },
    callback: { required: true, type: Function, default: (page) => page }
  },
  computed: {
    array() {
      return [
        ...new Set([
          ...Array(this.total < 3 ? this.total : 3).keys(),
          this.current - 2 > 0 ? this.current - 2 : 0,
          this.current - 1,
          this.current < this.total - 1 ? this.current : 0,
          this.total - 3 > 0 ? this.total - 3 : 0,
          this.total - 2 > 0 ? this.total - 2 : 0,
          this.total - 1
        ])
      ].sort();
    }
  }
};
</script>
<style lang="scss" scoped>
.btn-action:not(.router-link-active) {
  border: unset;
}
</style>
