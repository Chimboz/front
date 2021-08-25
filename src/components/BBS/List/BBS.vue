<template>
  <table class="bbs">
    <thead>
      <tr>
        <th colspan="2" valign="top" height="25" nowrap="nowrap">BBS</th>
        <th width="50" valign="top" nowrap="nowrap">Sujets</th>
        <th width="50" valign="top" nowrap="nowrap">Messages</th>
        <th class="thCornerR" valign="top" nowrap="nowrap">Dernier message</th>
      </tr>
    </thead>

    <BBSRow v-for="category in boards" :key="category" :category="category">
    </BBSRow>
  </table>
</template>

<script>
import BBSRow from "../Row/BBS.vue";

export default {
  name: "BBSList",
  components: {
    BBSRow,
  },
  props: {
    boards: {
      required: true,
      type: Array,
    },
  },
};
</script>
