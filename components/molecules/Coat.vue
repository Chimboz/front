<template>
  <div
    class="blazon"
    :style="{ '--blazon-primary': primary, '--blazon-secondary': secondary }"
  >
    <img src="@/assets/img/group/ribbons.svg" class="ribbons" alt="">
    <div class="blazon-body">
      <CoatBackground :id="shape" :primary="primary" :secondary="secondary" />
      <div v-if="top != -1" class="top">
        <svg width="44.6" height="35.1" @contextmenu.prevent>
          <use
            :href="`/item/blazon/top/${top}.svg#root`"
            fill="var(--blazon-primary)"
          />
        </svg>
      </div>
      <div class="bot" :class="{ lone: top === -1 }">
        <svg width="44.45" height="27.6" @contextmenu.prevent>
          <use
            :href="`/item/blazon/bot/${bot}.svg#root`"
            fill="var(--blazon-primary)"
          />
        </svg>
      </div>
      <div class="reflection">
        <CoatReflection :id="shape" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    primary: string;
    secondary: string;
    shape: number;
    top: number;
    bot: number;
  }>(),
  {
    primary: 'var(--light)',
    secondary: 'var(--light)',
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
