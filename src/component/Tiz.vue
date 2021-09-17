<template>
  <div class="tiz animated">
    <div class="avatar">
      <img
        v-if="shoe > 0"
        class="item shoe1"
        draggable="false"
        @contextmenu.prevent
        :src="`/avatar/shoe/${this.shoe}.svg`"
      />
      <img
        v-if="shoe > 0"
        class="item shoe2"
        draggable="false"
        @contextmenu.prevent
        :src="`/avatar/shoe/${this.shoe}.svg`"
      />
      <div class="body-parts">
        <img
          v-if="body > 0"
          class="item body"
          draggable="false"
          @contextmenu.prevent
          :src="`/avatar/body/${this.body}.svg`"
        />
        <img
          v-if="emote > 0"
          class="item emote"
          draggable="false"
          @contextmenu.prevent
          :src="`/avatar/emote/${this.emote}.svg`"
        />
        <img
          src="/avatar/hands.svg"
          draggable="false"
          class="item hands"
          @contextmenu.prevent
          alt="Tiz avatar"
        />
        <img
          v-if="item2 > 0"
          class="item item2"
          draggable="false"
          @contextmenu.prevent
          :src="`/avatar/item2/${this.item2}.svg`"
        />
        <img
          v-if="item1 > 0"
          class="item item1"
          draggable="false"
          @contextmenu.prevent
          :src="`/avatar/item1/${this.item1}.svg`"
        />
        <img
          v-if="hat > 0"
          class="item hat"
          draggable="false"
          @contextmenu.prevent
          :src="`/avatar/hat/${this.hat}.svg`"
        />
        <img
          v-if="item0 > 0"
          class="item item0"
          draggable="false"
          @contextmenu.prevent
          :src="`/avatar/item0/${this.item0}.svg`"
        />
      </div>
    </div>
    <div class="shadow"></div>
  </div>
</template>
<script>
export default {
  name: "Tiz",
  props: {
    up: {
      required: false,
      type: Boolean,
      default: false,
    },
    down: {
      required: false,
      type: Boolean,
      default: false,
    },
    left: {
      required: false,
      type: Boolean,
      default: false,
    },
    right: {
      required: false,
      type: Boolean,
      default: false,
    },
    avatar: {
      required: false,
      type: Number,
      default: 0,
    },
    emote: {
      required: false,
      type: Number,
      default: 1,
    },
    hat: {
      required: false,
      type: Number,
      default: 1,
    },
    body: {
      required: false,
      type: Number,
      default: 1,
    },
    shoe: {
      required: false,
      type: Number,
      default: 1,
    },
    item0: {
      required: false,
      type: Number,
      default: 1,
    },
    item1: {
      required: false,
      type: Number,
      default: 1,
    },
    item2: {
      required: false,
      type: Number,
      default: 1,
    },
  },
};
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
  animation: bump 4s infinite;
}

@keyframes bump {
  96% {
    transform: translateY(0);
  }
  98% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
