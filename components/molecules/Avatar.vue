<template>
  <div class="tiz animated" @contextmenu.prevent>
    <div v-if="avatar === 0 || avatar === 2 || avatar === 6" class="avatar">
      <Item :id="shoe" type="shoe" class="shoe1" />
      <Item :id="shoe" type="shoe" class="shoe2" />
      <div class="body-parts">
        <Item :id="body" type="body" />
        <img
          class="item emote"
          draggable="false"
          alt="Emote"
          :src="`/avatar/0/emote/${emote}.svg`"
          @contextmenu.prevent
          @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
        >
        <img
          src="/avatar/0/hands.svg"
          draggable="false"
          class="item hands"
          alt="Hands"
          @contextmenu.prevent
          @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
        >
        <Item :id="item2" type="item2" />
        <Item :id="item1" type="item1" />
        <Item :id="hat" type="hat" />
        <Item :id="item0" type="item0" />
      </div>
    </div>
    <div class="shadow" />
  </div>
</template>
<script setup lang="ts">
import { ImgHTMLAttributes } from 'vue';
// TODO refacto
withDefaults(
  defineProps<{
    avatar: number;
    emote: string;
    hat: number;
    body: number;
    shoe: number;
    item0: number;
    item1: number;
    item2: number;
  }>(),
  {
    avatar: 0,
    emote: 'neutral',
    hat: 1,
    body: 318,
    shoe: 606,
    item0: 792,
    item1: 868,
    item2: 938,
  }
);
</script>
<style lang="scss" scoped>
.tiz {
  position: relative;
}

.avatar {
  margin: auto;
  width: 43.45px;
  height: 56px;
}

.avatar {
  position: relative;
  z-index: 1;
}

.shadow {
  margin: -13px auto auto auto;
  width: 37.45px;
  height: 10px;
  border-radius: 100%;
  background: #0005;
}

.item {
  position: absolute;
  pointer-events: none;
}

.hands {
  left: 0;
  top: 0;
}

.shoe1 {
  top: 25.3px;
  left: -7px;
  transform: scale(0.75);
}

.shoe2 {
  top: 24.9px;
  left: 14.7px;
  transform: scale(-0.75, 0.75);
}

.hat {
  top: -44px;
  left: -18.6px;
  transform: scale(0.85);
}

.body {
  top: -21.3px;
  left: -20px;
  transform: scale(0.91);
}

.item2 {
  top: -42px;
  left: -10px;
  transform: scale(0.91);
}

.item1 {
  top: -10.65px;
  left: -10.65px;
  transform: scale(0.91);
}

.item0 {
  top: -13.9px;
  left: -2.4px;
  transform: scale(0.91);
}

.emote {
  top: -53.7px;
  left: -55.2px;
  transform: scale(0.91);
}

.body-parts {
  position: relative;
  animation: bump 2.2s infinite;
}

@keyframes bump {
  92% {
    transform: translateY(0);
  }
  96% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
