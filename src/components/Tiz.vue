<template>
  <div class="tiz">
    <div class="avatar">
      <img
        src="@/assets/img/tiz/tiz.svg"
        draggable="false"
        oncontextmenu="return false"
        alt="Tiz avatar"
      />
      <img
        v-if="shoes > 1"
        class="item shoe1"
        :src="`/avatar/shoe/${this.shoes}.svg`"
      />
      <img
        v-if="shoes > 1"
        class="item shoe2"
        :src="`/avatar/shoe/${this.shoes}.svg`"
      />
      <img
        v-if="body > 1"
        class="item body"
        :src="`/avatar/body/${this.body}.svg`"
      />
      <img
        v-if="hat > 1"
        class="item hat"
        :src="`/avatar/hat/${this.hat}.svg`"
      />
      <img
        v-if="emote > 0"
        class="item emote"
        :src="`/avatar/emote/${this.emote}.svg`"
      />
      <img
        v-if="item2 > 1"
        class="item item2"
        :src="`/avatar/item2/${this.item2}.svg`"
      />
      <img
        v-if="item1 > 1"
        class="item item1"
        :src="`/avatar/item1/${this.item1}.svg`"
      />
      <img
        v-if="item0 > 1"
        class="item item0"
        :src="`/avatar/item0/${this.item0}.svg`"
      />
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
      //required: true,
      type: Number,
      default: 0,
    },
    emote: {
      //required: true,
      type: Number,
      default: 0,
    },
    hat: {
      //required: true,
      type: Number,
      default: 0,
    },
    body: {
      //required: true,
      type: Number,
      default: 0,
    },
    shoes: {
      //required: true,
      type: Number,
      default: 0,
    },
    item0: {
      //required: true,
      type: Number,
      default: 0,
    },
    item1: {
      //required: true,
      type: Number,
      default: 0,
    },
    item2: {
      //required: true,
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.tiz {
  width: min-content;
  margin: auto;
}

.avatar {
  position: relative;
}

.shadow {
  margin-top: -8px;
  height: 10px;
  border-radius: 100%;
  background: #0005;
}

.item {
  position: absolute;
}

.shoe1 {
  top: 25.2px;
  left: -7.7px;
  transform: scale(0.85);
}

.shoe2 {
  top: 25.2px;
  left: 16.3px;
  transform: scale(-0.85, 0.85);
}

.hat {
  top: -46.8px;
  left: -15.7px;
}

.body {
  top: -19.7px;
  left: -19.7px;
}

.item2 {
  top: -44px;
  left: -9.5px;
}

.item1 {
  top: -11px;
  left: -8.7px;
}

.item0 {
  top: -14px;
  left: -2px;
}

.emote {
  top: -56px;
  left: -56px;
}

.hat,
.body,
.item0,
.item1,
.item2,
.emote {
  //animation: bump 1.56s 3s infinite;
}

@keyframes bump {
  90% {
    transform: translateY(0px);
  }
  95% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>