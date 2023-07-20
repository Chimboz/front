<template>
  <span :class="{ ellipsis: ellipsis }" class="user-link">
    <NuxtLink
      v-if="user.id"
      :to="'/book/' + user.id"
      :style="{ color: user.color }"
    >
      {{ user.name }}
    </NuxtLink>
    <span v-else>{{ user.name }}</span>
    <span v-if="separator">, </span>
  </span>
</template>
<script setup lang="ts">
defineProps<{
  user: any;
  separator?: boolean;
  ellipsis?: boolean;
}>();
</script>
<style lang="scss" scoped>
.user-link {
  font-feature-settings: 'ss02';
}

.ellipsis {
  display: block;
}
</style>
