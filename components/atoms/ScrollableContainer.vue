<template>
  <div
    class="scrollable"
    :style="{ maxHeight: maxHeight + 'px' }"
    @scroll.passive="onScroll"
  >
    <slot />
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
const emit = defineEmits<{ (e: 'scrollData', data: any[]): void }>();

const page = ref(0);
const isLoading = ref(false);

const props = defineProps<{
  route: string;
  maxHeight: number;
  reverse?: boolean;
}>();

async function onScroll({ target }: UIEvent) {
  const { scrollTop, clientHeight, scrollHeight } = target as HTMLDivElement;
  if (
    ((!props.reverse && scrollTop + clientHeight >= scrollHeight - 2) ||
      (props.reverse && -scrollTop + clientHeight >= scrollHeight - 2)) &&
    !isLoading.value
  ) {
    isLoading.value = true;
    emit(
      'scrollData',
      (await useFetch<any[]>(`${props.route}?&page=${++page.value}`)).data
        .value!
    );
    isLoading.value = false;
  }
}
</script>
<style style="scss" scoped>
.scrollable {
  overflow-y: auto;
  overflow-x: hidden;
  transition: var(--duration);
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
