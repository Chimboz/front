<template>
  <div class="markdown-body"><render /></div>
</template>
<script setup lang="ts">
import '@/assets/css/bbs/markdown.css';
import 'highlight.js/styles/github-dark.css';

const props = defineProps<{ src: string }>();
const { $md } = useNuxtApp();
const render = () => $md(props.src);
</script>
