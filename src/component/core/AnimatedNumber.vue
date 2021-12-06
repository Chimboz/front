<template>
  <img
    draggable="false"
    @contextmenu.prevent
    :alt="digit"
    v-for="digit in displayNumber.toString(10)"
    :key="digit.index"
    width="19"
    height="21"
    :src="require(`@/asset/img/number/${digit}.svg`)"
  />
</template>

<script>
export default {
  name: "AnimatedNumber",
  props: {
    number: { default: 0, type: Number },
    delay: { default: 5, type: Number, required: false }
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
      this.displayNumber += Math.max(
        Math.floor(this.number / 60 / this.delay),
        1
      );
      if (this.number <= this.displayNumber) {
        this.displayNumber = this.number;
        return;
      } else requestAnimationFrame(this.tween);
    }
  }
};
</script>
