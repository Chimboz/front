<template>
  <div>
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/default.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/yo.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/lol.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/sad.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/cry.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/angry.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/wink.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/korbak.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/tongue.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/luv.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/oh.svg" />
    <div class="resize">
      <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/zzz.svg" />
    </div>
    <div class="resize">
      <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/flag.svg" />
    </div>
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/neko.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/irritated.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/left.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/focused.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/vv.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/shameful.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/oops.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/kawai.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/parano.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/crazy.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/fearful.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/smirk.svg" />
    <img draggable="false" oncontextmenu="return false" src="@/assets/img/emotes/croon.svg" />
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