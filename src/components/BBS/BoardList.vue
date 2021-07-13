<template>
  <table>
    <tbody>
      <tr>
        <th colspan="2" valign="top" height="25" nowrap="nowrap">BBS</th>
        <th width="50" valign="top" nowrap="nowrap">Sujets</th>
        <th width="50" valign="top" nowrap="nowrap">Messages</th>
        <th class="thCornerR" valign="top" nowrap="nowrap">Dernier message</th>
      </tr>
      <tr class="category">
        <th valign="middle" colspan="5" height="28"><a>▼ Chapatiz Retro</a></th>
      </tr>

      <tr>
        <Board></Board>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Board from "./Board.vue";

export default {
  name: "BoardList",
  components: {
    Board,
  },
};
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  border-spacing: 0;
  box-shadow: 0 0 3px#000;
  border-radius: 4px;
  background: #c9dfef;
  padding: 6px 0;
}
th {
  height: 24px;
  background-image: linear-gradient(
    to bottom,
    #c9dfef 0px,
    #c9dfef 50%,
    #d6e7f3 100%
  );
  border-bottom: 1px solid #a2bdd1;
}

.category th {
  padding: 0 5px;
  color: #6090be;
}
.category {
  text-align: left;
}
</style>
