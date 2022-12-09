<template>
  <div class="progress">
    <div
      class="progress-bar active progress-bar-win"
      role="progressbar"
      aria-label="Win progress bar"
      :style="`width:${(win * 100) / (win + draw + lose)}%`"
    ></div>
    <div
      class="progress-bar progress-bar-light"
      role="progressbar"
      aria-label="Draw progress bar"
      :style="`width:${(draw * 100) / (win + draw + lose)}%`"
    ></div>
    <div
      class="progress-bar active progress-bar-lose"
      role="progressbar"
      aria-label="Lose progress bar"
      :style="`width:${(lose * 100) / (win + draw + lose)}%`"
    ></div>
  </div>
</template>

<script setup lang="ts">
// @vuese
// @group Core

  
  const props = defineProps<{
    win: {
      required: true,
      type: Number,
      default: 33.3
    },
    draw: {
      required: true,
      type: Number,
      default: 33.3
    },
    lose: {
      required: true,
      type: Number,
      default: 33.3
    }
  }
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
  background-color: var(--light);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 0.6s ease;
}

.progress-bar-win {
  background-color: var(--main-button-green);
}

.progress-bar-lose {
  background-color: var(--main-button-red);
  border-radius: 0 9px 9px 0;
}
</style>
