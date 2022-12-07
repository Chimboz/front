<template>
  <GlobalCard color="yellow">
    <template #subtop>Chaparadio</template>
    <div class="flex">
      <img
        draggable="false"
        alt="Chaparadio"
        @contextmenu.prevent
        height="38"
        width="65"
        src="@/assets/img/radio/logo.svg"
      />
      <img
        class="btn-radio pointer"
        draggable="false"
        alt="Play button"
        @contextmenu.prevent
        v-if="!playing"
        @click.prevent="play"
        height="18"
        width="18"
        src="@/assets/img/radio/play.svg"
      />
      <img
        v-else
        class="btn-radio pointer"
        draggable="false"
        alt="Pause button"
        @contextmenu.prevent
        @click.prevent="pause"
        height="18"
        width="18"
        src="@/assets/img/radio/pause.svg"
      />
      <img
        class="btn-radio pointer"
        draggable="false"
        alt="Stop button"
        @contextmenu.prevent
        @click.prevent="stop"
        height="18"
        width="18"
        src="@/assets/img/radio/stop.svg"
      />
      <div class="progress pointer" @click.prevent="skip" ref="progress">
        <div class="progress-bar" ref="progressBar"></div>
      </div>
    </div>
    <audio @timeupdate="progress" :src="'/radio/' + src" ref="player"></audio>
  </GlobalCard>
</template>

<script setup lang="ts">
// @vuese
// @group Default

  
  props: {
    src: {
      type: String,
      required: true,
      default: "track.mp3",
    },
  },
  data() {
    return {
      playing: false,
    };
  },
  components: {},
  methods: {
    play() {
      this.playing = true;
      this.$refs.player.play();
    },
    pause() {
      this.playing = false;
      this.$refs.player.pause();
    },
    stop() {
      this.pause();
      this.$refs.player.currentTime = 0;
    },
    skip(e) {
      this.$refs.player.currentTime =
        (e.offsetX / this.$refs.progress.offsetWidth) *
        this.$refs.player.duration;
    },
    progress() {
      this.$refs.progressBar.style.width =
        (this.$refs.player.currentTime / this.$refs.player.duration) * 100 +
        "%";
    },
  },
};
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
