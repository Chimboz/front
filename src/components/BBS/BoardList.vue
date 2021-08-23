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

    <Board v-for="category in boards" :key="category" :category="category">
    </Board>
  </table>
</template>

<script>
import Board from "./Board.vue";

export default {
  name: "BoardList",
  components: {
    Board,
  },
  props: {
    boards: {
      required: true,
      type: Array,
    },
  },
};
</script>
<style lang="scss">
table.bbs {
  width: 100%;
  border-spacing: 0;
  box-shadow: 0 0 3px#000;
  border-radius: 4px;
  background: #c9dfef;
  padding: 6px 0;
}
.bbs th {
  height: 24px;
  background-image: linear-gradient(
    to bottom,
    #c9dfef 0px,
    #c9dfef 50%,
    #d6e7f3 100%
  );
  border-bottom: 1px solid #a2bdd1;
}
.bbs td:nth-child(3),
.bbs td:nth-child(4),
.bbs th:nth-child(3),
.bbs th:nth-child(4) {
  display: none;
}

@media (min-width: 600px) {
  .bbs td:nth-child(3),
  .bbs td:nth-child(4),
  .bbs th:nth-child(3),
  .bbs th:nth-child(4) {
    display: table-cell;
  }
}
</style>
