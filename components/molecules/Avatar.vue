<template>
  <div :class="[config.animation]" class="tiz animated" @contextmenu.prevent>
    <div class="avatar">
      <Item
        :id="shoe"
        type="shoe"
        class="shoe1"
        :style="{
          top: `${config.shoe.top}px`,
          left: `${config.shoe.y}px`,
          transform: `scale(${config.shoe.scale})`,
        }"
      />
      <Item
        :id="shoe"
        type="shoe"
        class="shoe2"
        :style="{
          top: `${config.shoe.top}px`,
          right: `${config.shoe.y}px`,
          transform: `scale(-${config.shoe.scale},${config.shoe.scale})`,
        }"
      />
      <div class="body-parts">
        <Item
          :id="body"
          type="body"
          :style="{
            top: `${config.body.top}px`,
            left: `${config.body.left}px`,
            transform: `scale(${config.body.scale})`,
          }"
        />
        <img
          class="item emote"
          draggable="false"
          alt="Emote"
          :style="{
            top: `${config.emote.top}px`,
            left: `${config.emote.left}px`,
            transform: `scale(${config.emote.scale})`,
          }"
          :src="`/avatar/0/emote/${emote}.svg`"
          @contextmenu.prevent
          @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
        />
        <img
          src="/avatar/0/hands.svg"
          draggable="false"
          class="item hands"
          alt="Hands"
          @contextmenu.prevent
          @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
        />
        <Item
          :id="item2"
          type="item2"
          :style="{
            top: `${config.item2.top}px`,
            left: `${config.item2.left}px`,
            transform: `scale(${config.item2.scale})`,
          }"
        />
        <Item
          :id="item1"
          type="item1"
          :style="{
            top: `${config.item1.top}px`,
            left: `${config.item1.left}px`,
            transform: `scale(${config.item1.scale})`,
          }"
        />
        <Item
          :id="hat"
          type="hat"
          :style="{
            top: `${config.hat.top}px`,
            left: `${config.hat.left}px`,
            transform: `scale(${config.hat.scale})`,
          }"
        />
        <Item
          :id="item0"
          type="item0"
          :style="{
            top: `${config.item0.top}px`,
            left: `${config.item0.left}px`,
            transform: `scale(${config.item0.scale})`,
          }"
        />
      </div>
    </div>
    <div class="shadow" />
  </div>
</template>
<script setup lang="ts">
import { ImgHTMLAttributes } from 'vue';
import { AvatarConfig } from '@/types/Avatar';

const props = withDefaults(
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

const config: AvatarConfig = await import(
  `../../assets/avatar/${props.avatar}.json`
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

.body-parts {
  position: relative;
}

.bump .body-parts {
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
