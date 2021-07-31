<template>
  <div>User {{ $route.params.id }}</div>
</template>

<script>

export default {
  name: "TopicList",
  props: {
    category: {
      required: true,
      type: Object,
    },
  },
  methods: {
    formatDate() {
      return true
    },
  },
};
</script>

<style lang="scss" scoped>
</style>