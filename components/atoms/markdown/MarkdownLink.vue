<template>
  <Tooltip
    v-if="ALLOWED_PROTOCOL.includes(link.protocol)"
    class="markdown-link"
  >
    <template #tooltip>{{ link.href }}</template>
    <template v-if="text && text !== link.host + link.pathname"
      >⚠️&nbsp;</template
    >
    <a
      :href="link.href"
      :rel="link.host === HOST.host ? '' : 'noreferrer noopener nofollow'"
      target="_blank"
      ><content
    /></a>
  </Tooltip>

  <template v-else>
    {{ node.raw }}
  </template>
</template>
<script setup lang="ts">
import type { marked } from 'marked';

const ALLOWED_PROTOCOL = ['http:', 'https:', 'mailto:'];
const HOST = useRequestURL();

const props = defineProps<{ node: marked.Tokens.Link }>();

const { $nodeRender } = useNuxtApp();

const link = computed(
  () => new URL(props.node.href, `${HOST.protocol}//${HOST.host}`)
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
<style lang="scss" scoped>
.markdown-link {
  display: unset;
  font-feature-settings: 'ss02';
}
</style>
