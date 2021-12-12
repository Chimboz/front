<template>
  <div class="blazon">
    <img src="@/asset/img/group/ribbons.svg" class="ribbons" />
    <div class="blazon-body">
      <background :primary="primary" :secondary="secondary" :id="shape" />
      <div class="top" v-if="top != -1"><top :color="primary" :id="top" /></div>
      <div class="bot" :class="{ lone: top == -1 }"
        ><bot :color="primary" :id="bot"
      /></div>
      <div class="reflection"><reflection :id="shape" /></div>
    </div>
  </div>
</template>
<script>
import Background from "./Background.vue";
import Reflection from "./Reflection.vue";
import Top from "./Top.vue";
import Bot from "./Bot.vue";

// @vuese
// @group Blazon
export default {
  name: "CoreBlazon",
  components: {
    Background,
    Reflection,
    Top,
    Bot
  },
  props: {
    primary: {
      required: true,
      type: String,
      default: "#fff"
    },
    secondary: {
      required: true,
      type: String,
      default: "#fff"
    },
    shape: {
      required: true,
      type: Number,
      default: 1
    },
    top: {
      required: true,
      type: Number,
      default: 1
    },
    bot: {
      required: true,
      type: Number,
      default: 1
    }
  }
};
</script>
<style lang="scss" scoped>
.blazon,
.blazon-body {
  position: relative;
}

.ribbons {
  position: absolute;
  left: -7px;
  top: -4px;
}

.reflection,
.top,
.bot {
  position: absolute;
  top: 0;
  left: 0;
}

.top {
  top: 2.8px;
  left: 12.8px;
}

.bot {
  top: 31.6px;
  left: 16.6px;
}

.bot.lone {
  transform: scale(1.2);
  top: 18.4px;
  left: 17.4px;
}
</style>
