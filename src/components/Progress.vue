<template>
  <div class="progressbar">
    <div :class="barClass" :style="barStyle" class="progressbar-bar">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "ProgressBar",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    barClass: {
      type: String,
      default: "",
    },
    origin: {
      type: String,
      default: "left",
    },
    scale: {
      type: String,
      default: "X",
      validator: (v) => ["X", "Y"].includes(v),
    },
  },
  data() {
    return {
      ready: false,
    };
  },
  computed: {
    barStyle() {
      if (!this.ready) {
        return {
          transform: `scale${this.scale}(0)`,
        };
      }

      return {
        transform: `scale${this.scale}(${this.value * 0.01})`,
        transformOrigin: `${this.origin}`,
      };
    },
  },
  mounted() {
    this.ready = true;
  },
};
</script>
<style lang="scss" scoped>
$progressbar-height: 1.25rem !default;
$progressbar-background: transparent !default;
$progressbar-bar-height: 100% !default;
$progressbar-bar-background: #3e404199 !default;
$progressbar-bar-transition: transform 2s ease !default;

.progressbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $progressbar-height;
  background: $progressbar-background;

  &-bar {
    height: $progressbar-bar-height;
    background: $progressbar-bar-background;
    transition: $progressbar-bar-transition;
  }
}

.bg-info {
  background-color: red;
}
</style>