<template>
  <Card color="yellow">
    <template #subtop>Chaparadio</template>
    <div class="flex">
      <img
        draggable="false"
        alt="Chaparadio"
        height="38"
        width="65"
        src="@/assets/img/radio/logo.svg"
        @contextmenu.prevent
      />
      <img
        v-if="!playing"
        class="btn-radio pointer"
        draggable="false"
        alt="Play button"
        height="18"
        width="18"
        src="@/assets/img/radio/play.svg"
        @contextmenu.prevent
        @click.prevent="play"
        @keyup.prevent="play"
      />
      <img
        v-else
        class="btn-radio pointer"
        draggable="false"
        alt="Pause button"
        height="18"
        width="18"
        src="@/assets/img/radio/pause.svg"
        @contextmenu.prevent
        @click.prevent="pause"
        @keyup.prevent="pause"
      />
      <img
        class="btn-radio pointer"
        draggable="false"
        alt="Stop button"
        height="18"
        width="18"
        src="@/assets/img/radio/stop.svg"
        @contextmenu.prevent
        @click.prevent="stop"
        @keyup.prevent="stop"
      />
      <!--eslint-disable-next-line vuejs-accessibility/click-events-have-key-events-->
      <div ref="progress" class="progress pointer" @click.prevent="skip">
        <div
          ref="progressBar"
          class="progress-bar"
          :class="{ playing: playing }"
        ></div>
      </div>
    </div>
    <audio ref="player" @timeupdate="onProgress">
      <source :src="`/radio/${src}`" />
      <track default kind="captions" :src="`/radio/${src.split('.')[0]}.vtt`" />
    </audio>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";

withDefaults(
  defineProps<{
    src: string;
  }>(),
  { src: "track.mp3" }
);
const playing = ref(false);
const player = ref<null | HTMLAudioElement>(null);
const progress = ref<null | HTMLElement>(null);
const progressBar = ref<null | HTMLElement>(null);

function play() {
  playing.value = true;
  player.value!.play();
}
function pause() {
  playing.value = false;
  player.value!.pause();
}
function stop() {
  pause();
  player.value!.currentTime = 0;
}
function skip(e: MouseEvent) {
  player.value!.currentTime =
    (e.offsetX / progress.value!.offsetWidth) * player.value!.duration;
}
function onProgress() {
  progressBar.value!.style.width = `${
    (player.value!.currentTime / player.value!.duration) * 100
  }%`;
}
</script>

<style lang="scss" scoped>
.flex {
  align-items: center;
}

.btn-radio {
  height: var(--lg-font-size);
  margin-left: var(--md-gap);
}

.btn-radio:hover {
  filter: brightness(1.1);
}

.progress-bar {
  height: var(--lg-font-size);
  border-radius: var(--border-radius);
  background: url("../assets/img/progress.svg");
  background-size: 56.7px;
  animation: colorrush 2s infinite linear;
  animation-play-state: paused;
}

.progress-bar.playing {
  animation-play-state: running;
}

.progress {
  margin-left: var(--md-gap);
  display: flex;
  border-radius: var(--border-radius);
  flex: 1 0 0%;
  overflow: hidden;
  height: var(--lg-font-size);
  background: var(--pink);
}

@keyframes colorrush {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 56.7px 0;
  }
}
</style>
