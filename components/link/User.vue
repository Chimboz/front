<template>
  <div :class="{ ellipsis: ellipsis }">
    <NuxtLink
      v-if="user.id"
      :to="'/book/' + user.id"
      :style="{ color: user.color }"
      >{{ user.name }}</NuxtLink
    >
    <div v-else>{{ user.name }}</div>
    <div v-if="separator">,&nbsp;</div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  user: any;
  separator?: boolean;
  ellipsis?: boolean;
}>();
</script>
<style lang="scss" scoped>
div {
  display: inline-block;
}

.ellipsis {
  display: block;
}
</style>
