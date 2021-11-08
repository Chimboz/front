<template>
  <router-link
    v-for="page of array"
    :key="page + 1"
    class="page"
    :to="callback(page + 1)"
    >{{ page + 1 }}</router-link
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
  },
  computed: {
    array() {
      if (this.total < 4) return [...Array(this.total).keys()];
      else
        return [
          ...new Set([
            ...Array(3).keys(),
            this.current - 2,
            this.current - 1,
            this.current,
            this.total - 3,
            this.total - 2,
            this.total - 1
          ])
        ];
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  font-size: 13px;
  padding: 5px;
}

.page:hover {
  background: #fff8;
}

.page.router-link-active {
  color: #096ea880;
  background: #096ea820;
}

.page:hover {
  text-decoration: none;
}
</style>
