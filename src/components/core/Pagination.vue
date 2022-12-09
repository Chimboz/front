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

  
  const props = defineProps<{
    current: { default: 0, type: Number, required: true },
    total: { required: true, type: Number },
    callback: { required: true, type: Function, default: (page) => page }
  },
  computed: {
function array() {
      return [
        ...new Set([
          ...Array(total < 3 ? total : 3).keys(),
          current - 2 > 0 ? current - 2 : 0,
          current - 1,
          current < total - 1 ? current : 0,
          total - 3 > 0 ? total - 3 : 0,
          total - 2 > 0 ? total - 2 : 0,
          total - 1
        ])
      ].sort();
    }
  }
</script>
<style lang="scss" scoped>
.btn-action:not(.router-link-active) {
  border: unset;
}
</style>
