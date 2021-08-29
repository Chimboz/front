<template>
  <img
    :class="{ win: this.elapsed > this.duration }"
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
    bezier(time, startValue, change, duration) {
      time /= duration / 2;
      if (time < 1) return (change / 2) * time * time + startValue;
      time--;
      return (-change / 2) * (time * (time - 2) - 1) + startValue;
    },
    tween(timestamp) {
      if (this.start === 0) this.start = timestamp;
      this.elapsed = timestamp - this.start;

      if (this.previousTimeStamp !== timestamp) {
        const random = this.randomInt(this.min, this.max);
        this.displayNumber = random < 10 ? "0" + random : random.toString();
      }

      if (this.elapsed < this.duration) {
        this.previousTimeStamp = timestamp;
        setTimeout(
          () => requestAnimationFrame(this.tween),
          this.bezier(this.elapsed, 0, 10, this.duration) * 50
        );
      } else this.displayNumber = this.value.toString();
    },
  },
};
</script>
<style scoped>
.win {
  animation: glow 1s infinite;
}

@keyframes glow {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
}
</style>
