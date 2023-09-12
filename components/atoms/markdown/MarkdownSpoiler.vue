<template>
  <div
    class="markdown-spoiler"
    :class="{ hidden }"
    :aria-hidden="hidden"
    @click="hidden = !hidden"
  >
    <div class="markdown-spoiler-content">
      <content />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Tokens } from 'marked';

const props = defineProps<{ node: Tokens.Generic }>();

const { $nodeRender } = useNuxtApp();

const content = () => props.node.tokens?.map((el) => $nodeRender(el));

const hidden = ref(true);
</script>
<style lang="scss">
.markdown-spoiler {
  display: inline-block;
  position: relative;
  cursor: help;
  padding: var(--unit);
  border-radius: calc(var(--border-radius) / 3);
  background-color: var(--main-card);
  border: 1px solid var(--dark-card);
  overflow: clip;

  &-content {
    filter: unset;
    transition: var(--duration);
  }

  &.hidden {
    .markdown-spoiler-content {
      filter: blur(calc(var(--unit) * 3));
    }
  }
}
</style>
