<template>
  <div class="progress">
    <div
      class="progress-bar active progress-bar-win"
      role="progressbar"
      :style="`width:${(win * 100) / (win + draw + lose)}%`"
    ></div>
    <div
      class="progress-bar progress-bar-light"
      role="progressbar"
      :style="`width:${(draw * 100) / (win + draw + lose)}%`"
    ></div>
    <div
      class="progress-bar active progress-bar-lose"
      role="progressbar"
      :style="`width:${(lose * 100) / (win + draw + lose)}%`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    win: {
      required: true,
      type: Number,
      default: 33.3,
    },
    draw: {
      required: true,
      type: Number,
      default: 33.3,
    },
    lose: {
      required: true,
      type: Number,
      default: 33.3,
    },
  },
};
</script>

<style lang="scss" scoped>
.progress {
  height: 6px;
  width: 100%;
  overflow: hidden;
  border-radius: 9px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  background-color: #fff;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 0.6s ease;
}

.progress-bar-win {
  background-color: #5b3;
}

.progress-bar-lose {
  background-color: #fb0d0d;
}

</style>
