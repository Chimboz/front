<template>
  <button class="btn" :style="cssVars">
    <!-- <img class="btn-icon" src="@/assets/img/navbar/games.svg" /> -->
    <div class="btn-text">
      &nbsp;
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
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
  display: flex;
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
  font-size: 18px;
  color: #fff;
  align-items: center;
  line-height: 12px;
  border-style: solid;
  border-color: var(--button-color-4) var(--button-color-4)
    var(--button-color-5) var(--button-color-4);
  text-shadow: 2px 0 0 var(--button-color-5), -2px 0 0 var(--button-color-5),
    0 2px 0 var(--button-color-5), 0 -2px 0 var(--button-color-5),
    1px 1px var(--button-color-5), -1px -1px 0 var(--button-color-5),
    1px -1px 0 var(--button-color-5), -1px 1px 0 var(--button-color-5);
  box-shadow: 0 2px 2px #0006;
  border-radius: 10px;
  border-width: 2px 5px;
  overflow: overlay;
}

.btn:hover {
  filter: brightness(1.2);
}
</style>