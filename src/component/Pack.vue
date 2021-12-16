<template>
  <div
    class="pack flex animated pointer"
    @contextmenu.prevent
    @mouseenter="play"
  >
    <audio ref="audio">
      <source src="@/asset/sound/shop/hover.mp3" type="audio/wav" />
    </audio>
    <img src="@/asset/img/pack/sleeve.svg" style="width: 100%" alt="Sleeve" />
    <svg
      viewBox="0 0 155.612 89.887"
      xmlns="http://www.w3.org/2000/svg"
      class="pack-header"
    >
      <path
        d="m63.793 7.664-5.223.008c-4.95.008-12.23 4.93-12.23 10.068v11.758c0 5.114 4.532 12.248 12.387 12.386h38.362c8.909 0 12.204-8.826 12.26-12.261V17.666c0-6.12-8.063-9.924-12.135-9.924l-4.902.088c0-3.975-1.727-6.273-4.191-7.536h60.809c4.388 0 6.682 3.24 6.682 6.682v74.667c0 5.398-3.452 8.162-8.162 8.162-14.054 0-48.13-5.886-72.312-5.82-22.627.064-52.674 6.71-67.63 5.82-4.787 0-7.508-4.64-7.508-7.508V7.547C0 2.256 4.972 0 7.547 0h60.004c-1.992 1.599-3.715 3.36-3.757 7.665Z"
        :fill="`url(#header_${name})`"
      />
      <defs>
        <pattern
          :id="`header_${name}`"
          patternUnits="userSpaceOnUse"
          width="100%"
          height="100%"
          x="0"
          y="0"
        >
          <image
            :href="`/pack/header/${name}.webp`"
            x="0"
            y="0"
            width="155.612"
            height="89.887"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
      </defs>
    </svg>
    <svg
      viewBox="0 0 166 64"
      xmlns="http://www.w3.org/2000/svg"
      class="pack-footer"
    >
      <path
        d="M32 0h102c17.728 0 32 14.272 32 32s-14.272 32-32 32H32C14.272 64 0 49.728 0 32S14.272 0 32 0Z"
        :fill="`url(#footer_${name})`"
      />
      <defs>
        <pattern
          :id="`footer_${name}`"
          patternUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <image
            :href="`/pack/footer/${name}.webp`"
            width="166"
            height="64"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
      </defs>
    </svg>
    <div class="pack-content flex">
      <GlobalAvatar
        class="female"
        :avatar="looks[0].avatar"
        :emote="looks[0].emote"
        :hat="looks[0].hat"
        :body="looks[0].body"
        :shoe="looks[0].shoe"
        :item0="looks[0].item0"
        :item1="looks[0].item1"
        :item2="looks[0].item2"
      /><GlobalAvatar
        v-if="looks[1]"
        class="male"
        :avatar="looks[1].avatar"
        :emote="looks[1].emote"
        :hat="looks[1].hat"
        :body="looks[1].body"
        :shoe="looks[1].shoe"
        :item0="looks[1].item0"
        :item1="looks[1].item1"
        :item2="looks[1].item2"
      />
    </div>
  </div>
</template>
<script>
// @vuese
// @group Default
export default {
  name: "PackBlister",
  props: {
    name: {
      required: true,
      type: String
    },
    looks: {
      required: true,
      type: Array
    }
  },
  methods: {
    play() {
      this.$refs.audio.play();
    }
  }
};
</script>

<style scoped>
.pack-header,
.pack-footer {
  position: absolute;
  width: 100%;
  padding: 6%;
}

.pack-footer {
  bottom: 0;
}
.pack {
  position: relative;
}

.pack-content {
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.male,
.female {
  display: inline-block;
  margin: 10% -10% 0 -10%;
  width: 40%;
}

.female {
  margin-top: 20%;
  z-index: 2;
}
.pack:hover {
  animation: pack-hover 1s forwards;
}

@keyframes pack-hover {
  5% {
    transform: translateY(-10px);
  }
}

.pack-content {
  --rotate: rotate(30deg);
}

.pack-content::before {
  position: absolute;
  z-index: 3;
  content: "";
  opacity: 1;
  width: 100%;
  height: 100%;
  background: url(../asset/img/pack/reflect.svg);
}

.pack-content::after {
  position: absolute;
  z-index: 3;
  content: "";
  opacity: 0;
  width: 50%;
  height: 200%;
  transform: translateX(-300%) var(--rotate);
  background: #fffa;
  animation: shine 5s infinite linear;
}

@keyframes shine {
  10% {
    opacity: 1;
    transform: translateX(300%) var(--rotate);
  }
  100% {
    opacity: 0;
    transform: translateX(300%) var(--rotate);
  }
}
</style>
