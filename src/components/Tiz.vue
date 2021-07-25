<template>
  <div>
    <img class="tiz" src="../assets/img/tiz.svg" />
    <div class="tiz-shadow"></div>
  </div>
</template>
<script>
export default {
  name: "Tiz",
  props: {
    up: {
      required: false,
      type: Boolean,
      default: false,
    },
    down: {
      required: false,
      type: Boolean,
      default: false,
    },
    left: {
      required: false,
      type: Boolean,
      default: false,
    },
    right: {
      required: false,
      type: Boolean,
      default: false,
    },
    avatar: {
      required: true,
      type: Number,
      default: 0,
    },
    hat: {
      required: true,
      type: Number,
      default: 0,
    },
    body: {
      required: true,
      type: Number,
      default: 0,
    },
    shoes: {
      required: true,
      type: Number,
      default: 0,
    },
    item0: {
      required: true,
      type: Number,
      default: 0,
    },
    item1: {
      required: true,
      type: Number,
      default: 0,
    },
    item2: {
      required: true,
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.tiz-shadow {
  margin-top: -10px;
  width: 100%;
  height: 10px;
  border-radius: 100%;
  background: #0005;
}
</style>