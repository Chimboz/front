<template>
  <div>
    <router-link :to="'/group/' + group.id" :style="{ color: group.color }">{{
      group.name
    }}</router-link>
    <div v-if="separator">,&nbsp;</div>
  </div>
</template>
<script>
export default {
  name: "Group",
  props: {
    group: {
      required: false,
      type: Object,
    },
    separator: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  display: inline;
}
</style>
