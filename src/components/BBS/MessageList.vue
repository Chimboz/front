<template>
  <table>
    <thead>
      <tr>
        <th colspan="2" valign="top" height="25" nowrap="nowrap">Sujets</th>
        <th width="50" valign="top" nowrap="nowrap">Réponses</th>
        <th width="100" valign="top" nowrap="nowrap">Auteur</th>
        <th width="50" valign="top" nowrap="nowrap">Vus</th>
        <th valign="top" nowrap="nowrap">Dernier message</th>
      </tr>
    </thead>

    <Topic v-for="topic in topics" :key="topic.id" :topic="topic" />
  </table>
</template>

<script>
import Topic from "./Topic.vue";

export default {
  name: "TopicList",
  components: {
    Topic,
  },
  props: {
    topics: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss">
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
td:nth-child(3),
td:nth-child(4),
th:nth-child(3),
th:nth-child(4) {
  display: none;
}

@media (min-width: 600px) {
  td:nth-child(3),
  td:nth-child(4),
  th:nth-child(3),
  th:nth-child(4) {
    display: table-cell;
  }
}
</style>
