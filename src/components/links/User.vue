<template>
  <div>
    <router-link :to="'/member/' + user.id" :style="{ color: user.color }">{{
      user.name
    }}</router-link>
    <div v-if="separator">,&nbsp;</div>
  </div>
</template>
<script>
export default {
  name: "User",
  props: {
    user: {
      required: true,
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