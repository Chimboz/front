<template>
  <a
    v-if="typeof link !== 'string' && ALLOWED_PROTOCOL.includes(link.protocol)"
    :href="typeof link !== 'string' ? link.href : '#'"
    class="markdown-link"
    :rel="
      typeof link !== 'string' && link.host === $HOST
        ? ''
        : 'noreferrer noopener nofollow'
    "
  >
    <Tooltip>
      <template #tooltip>{{ link.href }}</template>
      <template
        v-if="
          typeof link !== 'string' && text && text !== link.host + link.pathname
        "
        >⚠️</template
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

const link = computed(() => {
  try {
    return new URL(
      props.node.href,
      ($HOST as globalThis.ComputedRef<string>).value
    );
  } catch (e) {
    return props.node.href;
  }
});
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
  display: inline-block;
}
</style>
