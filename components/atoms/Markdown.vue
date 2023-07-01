<template>
  <div class="markdown-body"><render /></div>
</template>
<script setup lang="ts">
const props = defineProps<{ src: string }>();
const { $md } = useNuxtApp();
const render = () => $md(props.src);
</script>
