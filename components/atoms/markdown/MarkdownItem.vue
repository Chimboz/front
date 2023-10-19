<template>
  <Tooltip v-if="item" style="width: 60px">
    <template #tooltip>
      <b>#{{ item.id }} {{ item.name }}</b>
      <img
        class="ml-1"
        :src="asset(`img/icon/rarity/${item.rarity}.png`)"
        :title="item.rarity"
        :alt="item.rarity"
        draggable="false"
        height="24"
        @contextmenu.prevent
      />&nbsp;<img
        class="ml-1"
        style="filter: brightness(9)"
        :src="asset(`img/icon/item_category/${item.type}.svg`)"
        :title="item.type"
        :alt="item.type"
        draggable="false"
        height="24"
        @contextmenu.prevent
      />
    </template>
    <NuxtLink :to="'/encyclopedia/' + item.id" target="_blank">
      <button
        type="button"
        class="item"
        :class="[
          item.type,
          item.rarity,
          $route.params.id === item.id ? 'active' : false,
        ]"
        :aria-label="item.name"
      >
        <VLazyImage
          draggable="false"
          :alt="item.name"
          :src="`/item/${item.type}/${item.id}.svg`"
          :src-placeholder="asset('img/loading.svg')"
          @contextmenu.prevent
        />
      </button>
    </NuxtLink>
  </Tooltip>
  <template v-else>{{ node.raw }}</template>
</template>
<script setup lang="ts">
import VLazyImage from 'v-lazy-image';
import type { Tokens } from 'marked';

const props = defineProps<{ node: Tokens.Generic }>();

const item = ref<null | Record<string, any>>(null);

watch(
  () => props.node.item,
  async (value) => {
    item.value = (
      await useFetch<Record<string, any>>(
        `https://chimboz.fr/api/item/${value}`
      )
    ).data.value;
  },
  { immediate: true }
);
</script>
<style lang="scss" scoped>
.spinner-loading {
  background: var(--dark);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  border-radius: var(--border-radius);
}

// Loading circle
.item img[src*='loading'] {
  transform: unset;
  width: 100%;
}

.item-wrapper {
  display: inline-block;
}

// Items
.item {
  margin: var(--sm-gap);
  background: linear-gradient(
    to bottom,
    var(--main-card-blue),
    var(--main-card)
  );
  height: 60px;
  width: 60px;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.item img {
  max-width: unset;
}

.hat img {
  transform: translate(-3px, -31px) scale(1.5);
}

.body img {
  transform: translate(-11px, -15px) scale(1.5);
}

.shoe img {
  transform: translate(-4px, 0px) scale(1.5);
}

.item0 img {
  transform: translate(1px, -4px) scale(1.5);
}

.item1 img {
  transform: translate(2px, -17px) scale(1.5);
}

.item2 img {
  transform: translate(4px, -64px) scale(1.5);
}
</style>
