<template>
  <div class="tiz animated" @contextmenu.prevent>
    <div v-if="avatar === 0 || avatar === 2 || avatar === 6" class="avatar">
      <img
        v-if="shoe > 0 && (avatar === 0 || avatar === 6)"
        class="item shoe1"
        alt="Shoe"
        draggable="false"
        :src="`/item/shoe/${shoe}.svg`"
        @contextmenu.prevent
        @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
      />
      <img
        v-if="shoe > 0 && (avatar === 0 || avatar === 6)"
        class="item shoe2"
        draggable="false"
        alt="Shoe"
        :src="`/item/shoe/${shoe}.svg`"
        @contextmenu.prevent
        @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
      />
      <img
        v-if="shoe == 0 && avatar === 6"
        class="item shoe1"
        alt="Shoe"
        draggable="false"
        :src="`/avatar/6/shoe.svg`"
        @contextmenu.prevent
        @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
      />
      <img
        v-if="shoe == 0 && avatar === 6"
        class="item shoe2"
        draggable="false"
        alt="Shoe"
        :src="`/avatar/6/shoe.svg`"
        @contextmenu.prevent
        @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
      />
      <div v-if="avatar === 6" class="body-parts">
        <img
          v-if="avatar === 6"
          class="item body"
          draggable="false"
          alt="Body"
          :src="`/avatar/6/body.svg`"
          @contextmenu.prevent
          @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
        />
      </div>
      <div v-else class="body-parts">
        <img
          v-if="avatar === 2"
          class="item body"
          draggable="false"
          alt="Body"
          :src="`/avatar/2/body.svg`"
          @contextmenu.prevent
          @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
        />
        <img
          v-if="body > 0 && avatar === 0"
          class="item body"
          draggable="false"
          alt="Body"
          :src="`/item/body/${body}.svg`"
          @contextmenu.prevent
          @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
        />
        <img
          class="item emote"
          draggable="false"
          alt="Emote"
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
        <img
          v-if="item2 > 0"
          class="item item2"
          draggable="false"
          alt="Item 2"
          :src="`/item/item2/${item2}.svg`"
          @contextmenu.prevent
          @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
        />
        <img
          v-if="item1 > 0"
          class="item item1"
          draggable="false"
          alt="Item 1"
          :src="`/item/item1/${item1}.svg`"
          @contextmenu.prevent
          @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
        />
        <img
          v-if="hat > 0"
          class="item hat"
          draggable="false"
          alt="Hat"
          :src="`/item/hat/${hat}.svg`"
          @contextmenu.prevent
          @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
        />
        <img
          v-if="item0 > 0"
          class="item item0"
          draggable="false"
          alt="Item 0"
          :src="`/item/item0/${item0}.svg`"
          @contextmenu.prevent
          @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
        />
      </div>
    </div>
    <div v-if="avatar === 1 || avatar === 3 || avatar === 4 || avatar === 7">
      <img
        draggable="false"
        alt="Body"
        :src="`/avatar/${avatar}/body.svg`"
        @contextmenu.prevent
        @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
      />
    </div>
    <div v-if="avatar === 5" class="body-parts">
      <img
        draggable="false"
        alt="Body"
        style="margin-bottom: 30px"
        :src="`/avatar/${avatar}/body.svg`"
        @contextmenu.prevent
        @error.prevent="(e) => ((e.target as ImgHTMLAttributes).style! = 'display: none')"
      />
    </div>
    <div class="shadow"></div>
  </div>
</template>
<script setup lang="ts">
// @vuese
// @group Core/Global
// Main component for showing avatars. Handle movements and emotes too.

// TODO refacto

import type { ImgHTMLAttributes } from "vue";

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
    emote: "neutral",
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
