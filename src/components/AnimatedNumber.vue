<template>
  {{ displayNumber }}
</template>

<script>
export default {
  name: "AnimatedNumber",
  props: { number: { default: 0, type: Number } },

  data() {
    return {
      displayNumber: 0,
    };
  },

  mounted: function () {
    requestAnimationFrame(this.tween);
  },

  methods: {
    tween() {
      if (this.number == this.displayNumber) {
        return;
      }

      this.displayNumber++;
      if (this.displayNumber < this.number) requestAnimationFrame(this.tween);
    },
  },
};
</script>
