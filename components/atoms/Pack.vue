<template>
  <div
    class="pack flex animated pointer"
    @contextmenu.prevent
    @mouseenter="play"
    @focus="play"
  >
    <audio ref="audio">
      <source src="@/assets/sound/shop/hover.mp3" type="audio/wav" />
    </audio>
    <img src="@/assets/img/pack/sleeve.svg" style="width: 100%" alt="Sleeve" />
    <img class="pack-header" :src="`/pack/header/${props.name}.webp`" />
    <img class="pack-footer" :src="`/pack/footer/${props.name}.webp`" />
    <div class="pack-content flex">
      <Avatar
        class="female"
        :avatar="looks[0].avatar"
        :emote="looks[0].emote"
        :hat="looks[0].hat"
        :body="looks[0].body"
        :shoe="looks[0].shoe"
        :item0="looks[0].item0"
        :item1="looks[0].item1"
        :item2="looks[0].item2"
      /><Avatar
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
<script setup lang="ts">
const props = defineProps<{
  name: string;
  looks: any[];
}>();

const audio = ref<null | HTMLAudioElement>(null);

function play() {
  audio.value!.play();
}
</script>

<style scoped>
.pack-header,
.pack-footer {
  position: absolute;
  mask-origin: padding-box;
  width: 100%;
  padding: 6%;
  background-size: cover;
  mask-origin: content;
  mask-repeat: no-repeat;
  mask-size: cover;
}

.pack-header {
  mask-image: url(/assets/img/pack/header.svg);
}

.pack-footer {
  bottom: 0;
  mask-image: url(/assets/img/pack/footer.svg);
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
  content: '';
  opacity: 1;
  width: 100%;
  height: 100%;
  background: url(@/assets/img/pack/reflect.svg);
}

.pack-content::after {
  position: absolute;
  z-index: 3;
  content: '';
  opacity: 0;
  width: 50%;
  height: 200%;
  transform: translateX(-300%) var(--rotate);
  background: var(--light) a;
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
