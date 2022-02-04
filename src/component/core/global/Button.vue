<template>
  <button class="btn flex" :style="cssVars">
    <slot name="prepend"></slot>
    <img
      draggable="false"
      @contextmenu.prevent
      v-if="icon"
      class="btn-icon"
      alt="Button icon"
      :src="require(`@/asset/img/icon/button/${icon}`)"
    />
    <div class="btn-text">
      <StrokeText><slot></slot></StrokeText>
    </div>
  </button>
</template>
<script>
import StrokeText from "@/component/core/StrokeText.vue";

// @vuese
// @group Core/Global
// A default button
export default {
  name: "GlobalButton",
  components: {
    StrokeText
  },
  props: {
    icon: {
      required: false,
      type: String
    },
    color: {
      required: false,
      // `"red"`, `"green"`, `"yellow"`, `"orange"`
      type: String,
      validator(value) {
        return ["red", "green", "yellow", "orange"].includes(value);
      }
    }
  },
  computed: {
    cssVars() {
      switch (this.color) {
        case "yellow":
          return {
            "--selected-button-color-1": "var(--light)",
            "--selected-button-color-2": "#ffb907",
            "--selected-button-color-3": "#e58900",
            "--selected-button-color-4": "#ffb700",
            "--selected-button-color-5": "#bb5c1d"
          };
        case "orange":
          return {
            "--selected-button-color-1": "#fec9b4",
            "--selected-button-color-2": "#ff7b00",
            "--selected-button-color-3": "#d15503",
            "--selected-button-color-4": "var(--orange)",
            "--selected-button-color-5": "#9f3400"
          };
        case "red":
          return {
            "--selected-button-color-1": "#ffe6e6",
            "--selected-button-color-2": "#fb0d0d",
            "--selected-button-color-3": "#d10303",
            "--selected-button-color-4": "#ff2d2d",
            "--selected-button-color-5": "#a10000"
          };
        case "green":
          return {
            "--selected-button-color-1": "#efe",
            "--selected-button-color-2": "#5b3",
            "--selected-button-color-3": "#371",
            "--selected-button-color-4": "#3a0",
            "--selected-button-color-5": "#350"
          };
        default:
          return {
            "--selected-button-color-1": "#fe9ae0",
            "--selected-button-color-2": "#ff00a6",
            "--selected-button-color-3": "#c10276",
            "--selected-button-color-4": "var(--pink)",
            "--selected-button-color-5": "#a10069"
          };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.btn {
  cursor: var(--pointer);
  width: 100%;
  height: 25px;
  font-family: "Chimboz Heavy";
  font-weight: normal;
  background-image: linear-gradient(
    to bottom,
    var(--light) 0%,
    var(--selected-button-color-2) 50%,
    var(--selected-button-color-3) 50%,
    var(--selected-button-color-4)
  );
  padding: 0 4%;
  align-items: center;
  line-height: 12px;
  border-style: solid;
  border-color: var(--selected-button-color-4) var(--selected-button-color-4)
    var(--selected-button-color-5) var(--selected-button-color-4);

  box-shadow: 0 2px 1px #0006;
  filter: brightness(1);
  border-radius: 10px;
  border-width: 2px 5px;
}

.btn + .btn {
  margin-left: 6px;
}

.btn-text {
  overflow: hidden;
  font-size: var(--lg-font-size);
  fill: var(--text-button);
  stroke-width: 3;
  stroke: var(--selected-button-color-5);
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
    var(--light) 0%,
    var(--selected-button-color-2) 50%,
    var(--selected-button-color-3) 50%,
    var(--selected-button-color-4)
  );
}
</style>
