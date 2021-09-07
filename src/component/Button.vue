<template>
  <button class="btn flex" :style="cssVars">
    <slot name="prepend"></slot>
    <img
      draggable="false" oncontextmenu="return false"
      v-if="icon"
      class="btn-icon"
      :src="require(`@/asset/img/icon/button/${icon}`)"
    />
    <div class="btn-text">
      <StrokeText><slot></slot></StrokeText>
    </div>
  </button>
</template>
<script>
import StrokeText from "@/component/StrokeText.vue";

export default {
  name: "Button",
  components: {
    StrokeText,
  },
  props: {
    icon: {
      required: false,
      type: String,
    },
    red: {
      required: false,
      type: Boolean,
      default: false,
    },
    green: {
      required: false,
      type: Boolean,
      default: false,
    },
    yellow: {
      required: false,
      type: Boolean,
      default: false,
    },
    orange: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssVars() {
      if (this.yellow)
        return {
          "--button-color-1": "#fff3b5",
          "--button-color-2": "#ffb907",
          "--button-color-3": "#e58900",
          "--button-color-4": "#ffb700",
          "--button-color-5": "#bb5c1d",
        };
      if (this.orange)
        return {
          "--button-color-1": "#fff2ea",
          "--button-color-2": "#ff7214",
          "--button-color-3": "#ce4800",
          "--button-color-4": "#ff6600",
          "--button-color-5": "#973500",
        };
      if (this.red)
        return {
          "--button-color-1": "#ffe0e0",
          "--button-color-2": "#f11818",
          "--button-color-3": "#c90303",
          "--button-color-4": "#ff0000",
          "--button-color-5": "#ac0000",
        };
      if (this.green)
        return {
          "--button-color-1": "#f6fbf5",
          "--button-color-2": "#53af35",
          "--button-color-3": "#206501",
          "--button-color-4": "#279b00",
          "--button-color-5": "#154301",
        };
      return {
        "--button-color-1": "#ffe4f5",
        "--button-color-2": "#ff1fb0",
        "--button-color-3": "#b30048",
        "--button-color-4": "#f0009c",
        "--button-color-5": "#ae0050",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  cursor: pointer;
  width: 100%;
  height: 25px;
  font-family: "Chimboz Heavy";
  font-weight: normal;
  background-image: linear-gradient(
    to bottom,
    var(--button-color-1) 0%,
    var(--button-color-2) 50%,
    var(--button-color-3) 50%,
    var(--button-color-4)
  );
  padding: 0 4%;
  align-items: center;
  line-height: 12px;
  border-style: solid;
  border-color: var(--button-color-4) var(--button-color-4)
    var(--button-color-5) var(--button-color-4);

  box-shadow: 0 2px 2px #0006;
  filter: brightness(1);
  border-radius: 10px;
  border-width: 2px 5px;
}

.btn-text {
  overflow: hidden;
  font-size: 18px;
  fill: #fff;
  stroke-width: 3;
  stroke: var(--button-color-5);
  height: 100%;
  width: 100%;
}

.btn-icon {
  position: absolute;
}

.btn:hover {
  filter: brightness(1.1);
}

.btn:active,
.btn.active {
  background-image: linear-gradient(
    to top,
    var(--button-color-1) 0%,
    var(--button-color-2) 50%,
    var(--button-color-3) 50%,
    var(--button-color-4)
  );
}
</style>