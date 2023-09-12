<template>
  <iframe
    v-if="ALLOWED_PROTOCOL.includes(link.protocol) && link.href.match(youtube)"
    width="560"
    height="315"
    :src="link.href.replace(youtube, `https://youtube.com/embed/$5$6`)"
  >
  </iframe>
  <Tooltip
    v-else-if="ALLOWED_PROTOCOL.includes(link.protocol)"
    class="markdown-link disambiguation"
  >
    <template #tooltip>{{ link.href }}</template>
    <template v-if="text && text !== link.host + link.pathname"
      ><img
        src="@/assets/img/icon/warning.svg"
        alt="$t('warning')"
        height="16"
        class="mr-1"
    /></template>
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
import type { Tokens } from 'marked';

const ALLOWED_PROTOCOL = ['http:', 'https:', 'mailto:'];
const HOST = useRequestURL();

const props = defineProps<{ node: Tokens.Link }>();

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

const youtube =
  /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gi;
const content = () => props.node.tokens.map((el) => $nodeRender(el));
</script>
<style lang="scss" scoped>
.markdown-link {
  display: unset;
}
</style>
