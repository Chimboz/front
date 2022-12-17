<template>
  <div class="blazon">
    <img src="@/assets/img/group/ribbons.svg" class="ribbons" />
    <div class="blazon-body">
      <background :id="shape" :primary="primary" :secondary="secondary" />
      <div v-if="top != -1" class="top"><top :id="top" :color="primary" /></div>
      <div class="bot" :class="{ lone: top == -1 }">
        <bot :id="bot" :color="primary" />
      </div>
      <div class="reflection"><reflection :id="shape" /></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Background from "./BackgroundComponent.vue";
import Reflection from "./ReflectionComponent.vue";
import Top from "./TopComponent.vue";
import Bot from "./BotComponent.vue";

// @vuese
// @group Blazon

withDefaults(
  defineProps<{
    primary: string;
    secondary: string;
    shape: number;
    top: number;
    bot: number;
  }>(),
  {
    primary: "var(--light)",
    secondary: "var(--light)",
    shape: 1,
    top: 1,
    bot: 1,
  }
);
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
