<template>
  <img
    draggable="false"
    oncontextmenu="return false"
    :alt="digit"
    v-for="digit in displayNumber"
    :key="digit.index"
    :src="require(`@/assets/img/numbers/${digit}.svg`)"
  />
</template>

<script>
export default {
  name: "RandomNumber",
  data() {
    return {
      displayNumber: this.max.toString(),
      start: 0,
      previousTimeStamp: Date.now(),
      elapsed: 0,
      iteration: 0
    };
  },
  props: {
    min: { default: 0, type: Number, required: false },
    max: { type: Number, required: true },
    value: { type: Number, required: true },
    duration: { default: 2000, type: Number, required: true },
  },

  mounted: function () {
    requestAnimationFrame(this.tween);
  },

  methods: {
    randomInt(min, max) {
      return (
        Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
        Math.ceil(min)
      );
    },
    tween(timestamp) {
      if (this.start === 0) this.start = timestamp;
      this.elapsed = timestamp - this.start;

      if (
        this.previousTimeStamp !== timestamp &&
        Math.floor(this.elapsed / 100) !==
          Math.floor((this.previousTimeStamp - this.start) / 100)
      ) {
        const random = this.randomInt(this.min, this.max);
        this.displayNumber = random < 10 ? "0" + random : random.toString();
      }

      if (this.elapsed < this.duration) {
        this.previousTimeStamp = timestamp;
        setTimeout(requestAnimationFrame(this.tween), this.elapsed * 100);
      } else this.displayNumber = this.value.toString();
    },
  },
};
</script>
