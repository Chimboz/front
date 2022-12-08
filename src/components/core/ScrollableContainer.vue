<template>
  <div
    class="scrollable"
    @scroll.passive="onScroll"
    :style="{ maxHeight: maxHeight + 'px' }"
  >
    <slot></slot>
    <div v-show="isLoading" class="spinner-loading">
      <img
        src="@/assets/img/loading.svg"
        alt="Loading spinner"
        draggable="false"
        width="200"
        height="200"
        @contextmenu.prevent
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// @vuese
// @group Core
// Generic scrollable container for infinite scroll

import { ref } from "vue";

const page = ref(0);
const isLoading = ref(false);

const props = withDefaults(
  defineProps<{
    route: string;
    maxHeight?: number;
  }>(),
  {
    maxHeight: 200,
  }
);

function onScroll(){}
/*
function     onScroll({ target: { scrollTop, clientHeight, scrollHeight } }: Event) {
      if (scrollTop + clientHeight >= scrollHeight && !this.hasEnded) {
        isLoading.value = true;
        this.api.get(`/api/${props.route}/${++page.value}.json`).then(
          (res: any) => {
            this.$emit("scrollData", res.data);
            isLoading.value = false;
          },
          () => {
            isLoading.value = false;
          }
        );
      }
    },*/
</script>
<style style="scss" scoped>
.scrollable {
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.3s;
}

.spinner-loading {
  background: var(--dark);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  border-radius: var(--border-radius);
}
</style>
