<template>
  <a v-if="ALLOWED_PROTOCOL.includes(link.protocol)" :href="link.href">
    <Tooltip>
      <template #tooltip>{{ link.href }}</template>
      <template v-if="text && text !== link.host + link.pathname">⚠️</template
      ><content />
    </Tooltip>
  </a>
  <template v-else>
    {{ node.raw }}
  </template>
</template>
<script setup lang="ts">
import type { marked } from 'marked';

const ALLOWED_PROTOCOL = ['http:', 'https:', 'mailto:'];

const props = defineProps<{ node: marked.Tokens.Link }>();

const { $HOST, $nodeRender } = useNuxtApp();

const link = computed(
  () =>
    new URL(props.node.href, ($HOST as globalThis.ComputedRef<string>).value)
);
const text = computed(() => {
  try {
    const url = new URL(props.node.text);
    return url.host + url.pathname;
  } catch (e) {
    return '';
  }
});

const content = () => props.node.tokens.map((el) => $nodeRender(el));
</script>
