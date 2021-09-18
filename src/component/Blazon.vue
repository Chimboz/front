<template>
  <div class="blazon">
    <object
      v-if="shape > 0"
      class=""
      draggable="false"
      @contextmenu.prevent
      type="image/svg+xml"
      :data="`/blazon/shape/${this.shape}.svg`"
    ></object>
    <img
      v-if="top > 0"
      class="top"
      :class="{ single: !this.bot }"
      draggable="false"
      @contextmenu.prevent
      :src="`/blazon/top/${this.top}.svg`"
    />
    <img
      v-if="bot > 0"
      class="bot"
      draggable="false"
      :class="{ single: !this.top }"
      @contextmenu.prevent
      :src="`/blazon/bot/${this.bot}.svg`"
    />
  </div>
</template>
<script>
export default {
  name: "Blazon",
  props: {
    colora: {
      required: true,
      type: String,
      default: "#fff",
    },
    colorb: {
      required: true,
      type: String,
      default: "#fff",
    },
    shape: {
      required: true,
      type: Number,
      default: 1,
    },
    top: {
      required: true,
      type: Number,
      default: 1,
    },
    bot: {
      required: true,
      type: Number,
      default: 1,
    },
  },
};
</script>
<style lang="scss">
object #color {
  fill: #f0f;
}
</style>
<style lang="scss" scoped>
.blazon {
  position: relative;
  text-align: left;
}
.top {
  position: absolute;
  top: 0px;
  left: 12px;
}
.bot {
  position: absolute;
  top: 28px;
  left: 16.5px;
}
</style>
