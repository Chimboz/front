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

  
  const props = defineProps<{
    group: {
      required: false,
      type: Object
    },
    separator: {
      required: false,
      default: false,
      type: Boolean
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  display: inline;
}
</style>
