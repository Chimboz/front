<template>
  <div>
    <button type="button" class="pink-icon" @click="$emit('emote', 'neutral')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Neutral emote"
        src="@/asset/img/icon/emote/neutral.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'yo')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Yo emote"
        src="@/asset/img/icon/emote/yo.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'lol')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Lol emote"
        src="@/asset/img/icon/emote/lol.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'sad')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Sad emote"
        src="@/asset/img/icon/emote/sad.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'cry')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Cry emote"
        src="@/asset/img/icon/emote/cry.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'angry')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Angry emote"
        src="@/asset/img/icon/emote/angry.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'wink')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Wink emote"
        src="@/asset/img/icon/emote/wink.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'korbak')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Korbak emote"
        src="@/asset/img/icon/emote/korbak.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'tongue')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Tongue emote"
        src="@/asset/img/icon/emote/tongue.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'luv')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Luv emote"
        src="@/asset/img/icon/emote/luv.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'oh')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Oh emote"
        src="@/asset/img/icon/emote/oh.svg"
      />
    </button>
    <button
      type="button"
      class="resize pink-icon"
      @click="$emit('emote', 'zzz')"
    >
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Zzz emote"
        src="@/asset/img/icon/emote/zzz.svg"
      />
    </button>
    <button
      type="button"
      class="resize pink-icon"
      @click="$emit('emote', 'flag')"
    >
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Flag emote"
        src="@/asset/img/icon/emote/flag.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'neko')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Neko emote"
        src="@/asset/img/icon/emote/neko.svg"
      />
    </button>
    <button
      type="button"
      class="pink-icon"
      @click="$emit('emote', 'irritated')"
    >
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Irritated emote"
        src="@/asset/img/icon/emote/irritated.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'left')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Left emote"
        src="@/asset/img/icon/emote/left.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'focused')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Focused emote"
        src="@/asset/img/icon/emote/focused.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'vv')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Vv emote"
        src="@/asset/img/icon/emote/vv.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'shameful')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Shameful emote"
        src="@/asset/img/icon/emote/shameful.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'oops')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Oops emote"
        src="@/asset/img/icon/emote/oops.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'kawai')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Kawai emote"
        src="@/asset/img/icon/emote/kawai.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'parano')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Parano emote"
        src="@/asset/img/icon/emote/parano.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'crazy')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Crazy emote"
        src="@/asset/img/icon/emote/crazy.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'fearful')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Fearful emote"
        src="@/asset/img/icon/emote/fearful.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'smirk')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Smirk emote"
        src="@/asset/img/icon/emote/smirk.svg"
      />
    </button>
    <button type="button" class="pink-icon" @click="$emit('emote', 'croon')">
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Croon emote"
        src="@/asset/img/icon/emote/croon.svg"
      />
    </button>
  </div>
</template>
<script>
export default {
  name: "Emotes"
};
</script>
<style lang="scss" scoped>
.pink-icon {
  display: inline;
}

.resize {
  overflow: visible;
}
</style>
