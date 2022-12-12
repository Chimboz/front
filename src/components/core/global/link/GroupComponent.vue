<template>
  <div>
    <router-link :to="'/groups/' + group.id" :style="{ color: group.color }">{{
      group.name
    }}</router-link>
    <div v-if="separator">,&nbsp;</div>
  </div>
</template>
<script setup lang="ts">
// @vuese
// @group Core/Global/Link

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
