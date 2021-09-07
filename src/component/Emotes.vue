<template>
  <div>
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/default.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/yo.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/lol.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/sad.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/cry.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/angry.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/wink.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/korbak.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/tongue.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/luv.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/oh.svg" />
    <div class="resize">
      <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/zzz.svg" />
    </div>
    <div class="resize">
      <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/flag.svg" />
    </div>
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/neko.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/irritated.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/left.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/focused.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/vv.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/shameful.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/oops.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/kawai.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/parano.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/crazy.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/fearful.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/smirk.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/asset/img/emote/croon.svg" />
  </div>
</template>
<script>
export default {
  name: "Emotes",
};
</script>
<style lang="scss" scoped>
img {
  cursor: pointer;
  margin: 1px;
}

.resize {
  display: inline-block;
  overflow: visible;
  width: 25.5px;
}
</style>