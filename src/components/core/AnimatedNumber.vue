<template>
  <img
    draggable="false"
    @contextmenu.prevent
    :alt="digit"
    v-for="digit in displayNumber.toString(10)"
    :key="digit.index"
    width="19"
    height="21"
    :src="require(`@/assets/img/number/${digit}.svg`)"
  />
</template>

<script setup lang="ts">
// @vuese
// @group Core

  
  const props = defineProps<{
    number: { default: 0, type: Number },
    delay: { default: 5, type: Number, required: false }
  },


      displayNumber: 0
    };
  },

function mounted() {
    requestAnimationFrame(tween);
  },


function tween() {
      displayNumber += Math.max(
        Math.floor(number / 60 / delay),
        1
      );
      if (number <= displayNumber) {
        displayNumber = number;
        return;
      } else requestAnimationFrame(tween);
    }
  }
</script>
