<template>
  <button class="btn flex" :style="cssVars">
    <slot name="prepend"></slot>
    <img
      draggable="false"
      @contextmenu.prevent
      v-if="icon"
      class="btn-icon"
      alt="Button icon"
      :src="require(`@/assets/img/icon/button/${icon}`)"
    />
    <div class="btn-text">
      <StrokeText><slot></slot></StrokeText>
    </div>
  </button>
</template>
<script setup lang="ts">
import StrokeText from "@/components/core/StrokeText.vue";

// @vuese
// @group Core/Global
// A default button

  
  components: {
    StrokeText,
  },
  props: {
    icon: {
      required: false,
      type: String,
    },
    color: {
      required: false,
      // `"red"`, `"green"`, `"yellow"`, `"orange"`
      type: String,
      validator(value) {
        return ["red", "green", "yellow", "orange"].includes(value);
      },
    },
  },
  computed: {
    cssVars() {
      switch (this.color) {
        case "yellow":
          return {
            "--selected-main-button": "var(--main-button-yellow)",
            "--selected-dark-button": "var(--dark-button-yellow)",
          };
        case "orange":
          return {
            "--selected-main-button": "var(--main-button-orange)",
            "--selected-dark-button": "var(--dark-button-orange)",
          };
        case "red":
          return {
            "--selected-main-button": "var(--main-button-red)",
            "--selected-dark-button": "var(--dark-button-red)",
          };
        case "green":
          return {
            "--selected-main-button": "var(--main-button-green)",
            "--selected-dark-button": "var(--dark-button-green)",
          };
        default:
          return {
            "--selected-main-button": "var(--main-button)",
            "--selected-dark-button": "var(--dark-button)",
          };
      }
    },
  },
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
    var(--selected-main-button) 50%,
    var(--selected-dark-button) 50%,
    var(--selected-main-button)
  );
  padding: 0 4%;
  align-items: center;
  line-height: var(--gap);
  border-style: solid;
  border-color: var(--selected-main-button) var(--selected-main-button)
    var(--selected-dark-button) var(--selected-main-button);

  box-shadow: 0 2px 1px var(--dark);
  filter: brightness(1);
  border-radius: var(--border-radius);
  border-width: 2px 5px;
}

.btn-text {
  overflow: hidden;
  font-size: var(--lg-font-size);
  fill: var(--text-button);
  stroke-width: 3;
  stroke: var(--selected-dark-button);
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
    var(--selected-main-button) 50%,
    var(--selected-dark-button) 50%,
    var(--selected-main-button)
  );
}
</style>
