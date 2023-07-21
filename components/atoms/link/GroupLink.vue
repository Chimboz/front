<template>
  <span>
    <NuxtLink
      :to="'/groups/' + group.id"
      :style="{ color: group.color }"
      class="disambiguation"
    >
      {{ group.name }}
    </NuxtLink>
    <span v-if="separator">, </span>
  </span>
</template>
<script setup lang="ts">
defineProps<{
  group: any;
  separator?: boolean;
}>();
</script>
