<template>
  <table class="bbs">
    <colgroup>
      <col width="60" />
      <col width="100%" />
      <col width="60" />
      <col width="60" />
      <col width="100" />
    </colgroup>
    <thead>
      <tr>
        <th colspan="2" valign="top" height="25" nowrap="nowrap">BBS</th>
        <th valign="top" nowrap="nowrap">Sujets</th>
        <th valign="top" nowrap="nowrap">Messages</th>
        <th valign="top" nowrap="nowrap">Dernier message</th>
      </tr>
    </thead>

    <Category v-for="category in boards" :key="category" :category="category">
    </Category>
  </table>
</template>

<script>
import Category from "../row/Category.vue";

export default {
  name: "BBS",
  components: {
    Category,
  },
  props: {
    boards: {
      required: true,
      type: Array,
    },
  },
};
</script>
