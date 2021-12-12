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
        :src="require(`@/asset/img/icon/emote/${emote}.svg`)"
      />
    </button>
  </div>
</template>
<script>
// @vuese
// @group Core
export default {
  name: "CoreEmotes",
  data() {
    return {
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
        "croon"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.btn-pink {
  display: inline;
}

.resize {
  overflow: visible;
}
</style>
