<template>
  <span
    v-for="page of [...Array(total).keys()]"
    :key="page + 1"
    class="pink"
    :class="{ active: page + 1 == current }"
    @click.prevent="$router.push(callback(page + 1))"
    >{{ page + 1 }}&nbsp;</span
  >
</template>
<script>
export default {
  name: "Pagination",
  props: {
    current: { default: 0, type: Number, required: true },
    total: { required: true, type: Number },
    callback: { required: true, type: Function, default: (page) => page }
  },

  data() {
    return {
      displayNumber: 0
    };
  },

  mounted() {
    requestAnimationFrame(this.tween);
  },

  methods: {
    tween() {
      if (this.number == this.displayNumber) return;
      this.displayNumber++;
      if (this.displayNumber < this.number) requestAnimationFrame(this.tween);
    }
  }
};
</script>
<style lang="scss" scoped>
span {
  cursor: pointer;
}
</style>
