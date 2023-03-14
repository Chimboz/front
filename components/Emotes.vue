<template>
  <div>
    <button
      v-for="emote of emotes"
      :key="emote"
      type="button"
      class="btn-pink"
      @click="emit('emote', emote)"
    >
      <img
        draggable="false"
        alt="Neutral emote"
        height="23"
        :src="asset(`img/icon/emote/${emote}.svg`)"
        @contextmenu.prevent
      >
    </button>
  </div>
</template>
<script setup lang="ts">
import type Emote from '@/types/Emotes';

const emit = defineEmits<{ (e: 'emote', emote: Emote): void }>();

const emotes: Emote[] = [
  'neutral',
  'yo',
  'lol',
  'sad',
  'cry',
  'angry',
  'wink',
  'korbak',
  'tongue',
  'luv',
  'oh',
  'zzz',
  'flag',
  'neko',
  'irritated',
  'left',
  'focused',
  'vv',
  'shameful',
  'oops',
  'kawai',
  'parano',
  'crazy',
  'fearful',
  'smirk',
  'croon',
];
</script>
<style lang="scss" scoped>
.btn-pink {
  display: inline;
}

.resize {
  overflow: visible;
}
</style>
