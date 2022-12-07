<template>
  <div class="tiz animated" @contextmenu.prevent>
    <div class="avatar" v-if="avatar === 0 || avatar === 2 || avatar === 6">
      <img
        v-if="shoe > 0 && (avatar === 0 || avatar === 6)"
        class="item shoe1"
        alt="Shoe"
        draggable="false"
        @contextmenu.prevent
        @error.prevent="(e) => (e.target.style.display = 'none')"
        :src="`/item/shoe/${this.shoe}.svg`"
      />
      <img
        v-if="shoe > 0 && (avatar === 0 || avatar === 6)"
        class="item shoe2"
        draggable="false"
        alt="Shoe"
        @contextmenu.prevent
        @error.prevent="(e) => (e.target.style.display = 'none')"
        :src="`/item/shoe/${this.shoe}.svg`"
      />
      <img
        v-if="shoe == 0 && avatar === 6"
        class="item shoe1"
        alt="Shoe"
        draggable="false"
        @contextmenu.prevent
        @error.prevent="(e) => (e.target.style.display = 'none')"
        :src="`/avatar/6/shoe.svg`"
      />
      <img
        v-if="shoe == 0 && avatar === 6"
        class="item shoe2"
        draggable="false"
        alt="Shoe"
        @contextmenu.prevent
        @error.prevent="(e) => (e.target.style.display = 'none')"
        :src="`/avatar/6/shoe.svg`"
      />
      <div class="body-parts" v-if="avatar === 6">
        <img
          v-if="avatar === 6"
          class="item body"
          draggable="false"
          alt="Body"
          @contextmenu.prevent
          @error.prevent="(e) => (e.target.style.display = 'none')"
          :src="`/avatar/6/body.svg`"
        />
      </div>
      <div class="body-parts" v-else>
        <img
          v-if="avatar === 2"
          class="item body"
          draggable="false"
          alt="Body"
          @contextmenu.prevent
          @error.prevent="(e) => (e.target.style.display = 'none')"
          :src="`/avatar/2/body.svg`"
        />
        <img
          v-if="body > 0 && avatar === 0"
          class="item body"
          draggable="false"
          alt="Body"
          @contextmenu.prevent
          @error.prevent="(e) => (e.target.style.display = 'none')"
          :src="`/item/body/${this.body}.svg`"
        />
        <img
          class="item emote"
          draggable="false"
          alt="Emote"
          @contextmenu.prevent
          @error.prevent="(e) => (e.target.style.display = 'none')"
          :src="`/avatar/0/emote/${this.emote}.svg`"
        />
        <img
          src="/avatar/0/hands.svg"
          draggable="false"
          class="item hands"
          @contextmenu.prevent
          @error.prevent="(e) => (e.target.style.display = 'none')"
          alt="Hands"
        />
        <img
          v-if="item2 > 0"
          class="item item2"
          draggable="false"
          alt="Item 2"
          @contextmenu.prevent
          @error.prevent="(e) => (e.target.style.display = 'none')"
          :src="`/item/item2/${this.item2}.svg`"
        />
        <img
          v-if="item1 > 0"
          class="item item1"
          draggable="false"
          alt="Item 1"
          @contextmenu.prevent
          @error.prevent="(e) => (e.target.style.display = 'none')"
          :src="`/item/item1/${this.item1}.svg`"
        />
        <img
          v-if="hat > 0"
          class="item hat"
          draggable="false"
          alt="Hat"
          @contextmenu.prevent
          @error.prevent="(e) => (e.target.style.display = 'none')"
          :src="`/item/hat/${this.hat}.svg`"
        />
        <img
          v-if="item0 > 0"
          class="item item0"
          draggable="false"
          alt="Item 0"
          @contextmenu.prevent
          @error.prevent="(e) => (e.target.style.display = 'none')"
          :src="`/item/item0/${this.item0}.svg`"
        />
      </div>
    </div>
    <div v-if="avatar === 1 || avatar === 3 || avatar === 4 || avatar === 7">
      <img
        draggable="false"
        alt="Body"
        @contextmenu.prevent
        @error.prevent="(e) => (e.target.style.display = 'none')"
        :src="`/avatar/${avatar}/body.svg`"
      />
    </div>
    <div v-if="avatar === 5" class="body-parts">
      <img
        draggable="false"
        alt="Body"
        style="margin-bottom: 30px"
        @contextmenu.prevent
        @error.prevent="(e) => (e.target.style.display = 'none')"
        :src="`/avatar/${avatar}/body.svg`"
      />
    </div>
    <div class="shadow"></div>
  </div>
</template>
<script setup lang="ts">
// @vuese
// @group Core/Global
// Main component for showing avatars. Handle movements and emotes too.

  
  props: {
    // Avatar type
    avatar: {
      required: false,
      type: Number,
      default: 0,
    },
    // Emote
    emote: {
      required: false,
      type: String,
      default: "neutral",
    },
    // Hat item
    hat: {
      required: false,
      type: Number,
      default: 1,
    },
    // Body item
    body: {
      required: false,
      type: Number,
      default: 318,
    },
    // Shoe item
    shoe: {
      required: false,
      type: Number,
      default: 606,
    },
    // Item0 (glasses, masks) item
    item0: {
      required: false,
      type: Number,
      default: 792,
    },
    // Item1 (bags, beards) item
    item1: {
      required: false,
      type: Number,
      default: 868,
    },
    // Item2 (necklaces, badges) item
    item2: {
      required: false,
      type: Number,
      default: 938,
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
