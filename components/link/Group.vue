<template>
  <div>
    <NuxtLink :to="'/groups/' + group.id" :style="{ color: group.color }">
      {{ group.name }}
    </NuxtLink>
    <div v-if="separator">
      ,&nbsp;
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  group: any;
  separator?: boolean;
}>();
</script>
<style lang="scss" scoped>
div {
  display: inline;
}
</style>
