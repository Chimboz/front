<template>
  <img
    :class="{ win: elapsed > duration }"
    draggable="false"
    @contextmenu.prevent
    :alt="digit"
    v-for="digit in displayNumber"
    :key="digit.index"
    width="19"
    height="21"
    :src="require(`@/assets/img/number/${digit}.svg`)"
  />
</template>

<script setup lang="ts">
// @vuese
// @group Core

  

      displayNumber: max.toString(),
      start: 0,
      previousTimeStamp: Date.now(),
      elapsed: 0
    };
  },
  const props = defineProps<{
    min: { default: 0, type: Number, required: false },
    max: { type: Number, required: true },
    value: { type: Number, required: true },
    duration: { default: 2000, type: Number, required: true }
  },

function mounted() {
    requestAnimationFrame(tween);
  },


    randomInt(min, max) {
      return (
        Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
        Math.ceil(min)
      );
    },
    bezier(time, startValue, change, duration) {
      time /= duration / 2;
      if (time < 1) return (change / 2) * time * time + startValue;
      time--;
      return (-change / 2) * (time * (time - 2) - 1) + startValue;
    },
    tween(timestamp) {
      if (start === 0) start = timestamp;
      elapsed = timestamp - start;

      if (previousTimeStamp !== timestamp) {
        const random = randomInt(min, max);
        displayNumber = random < 10 ? "0" + random : random.toString();
      }

      if (elapsed < duration) {
        previousTimeStamp = timestamp;
        setTimeout(
          () => requestAnimationFrame(tween),
          bezier(elapsed, 0, 500, duration)
        );
      } else displayNumber = value.toString();
    }
  }
</script>
<style scoped>
.win {
  animation: glow 1s infinite;
}

@keyframes glow {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
}
</style>
