<template>
  <div>
    <button
      v-for="emote of emotes"
      :key="emote"
      type="button"
      class="btn-pink"
      @click="$emit('emote', emote)"
    >
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Neutral emote"
        height="23"
        :src="require(`@/assets/img/icon/emote/${emote}.svg`)"
      />
    </button>
  </div>
</template>
<script setup lang="ts">
// @vuese
// @group Core

  

      emotes: [
        "neutral",
        "yo",
        "lol",
        "sad",
        "cry",
        "angry",
        "wink",
        "korbak",
        "tongue",
        "luv",
        "oh",
        "zzz",
        "flag",
        "neko",
        "irritated",
        "left",
        "focused",
        "vv",
        "shameful",
        "oops",
        "kawai",
        "parano",
        "crazy",
        "fearful",
        "smirk",
        "croon",
      ],
    };
  },
</script>
<style lang="scss" scoped>
.btn-pink {
  display: inline;
}

.resize {
  overflow: visible;
}
</style>
