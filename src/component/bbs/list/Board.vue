<template>
  <span class="pink justified">
    <router-link to="/bbs" class="pink">BBS</router-link> »
    <router-link to="/bbs" class="pink">BBS</router-link></span
  >
  <br />
  <table class="bbs board">
    <colgroup>
      <col width="60" />
      <col width="100%" />
      <col width="60" />
      <col width="100" />
      <col width="60" />
      <col width="100" />
    </colgroup>
    <thead>
      <tr>
        <th colspan="2" valign="top" height="25" nowrap="nowrap">Sujets</th>
        <th width="50" valign="top" nowrap="nowrap">Réponses</th>
        <th width="100" valign="top" nowrap="nowrap">Auteur</th>
        <th width="50" valign="top" nowrap="nowrap">Vus</th>
        <th valign="top" nowrap="nowrap">Dernier message</th>
      </tr>
    </thead>

    <Topic
      v-for="(topic, index) in topics"
      :key="topic.id"
      :topic="topic"
      :separator="index != topics.length - 1"
    />
  </table>
</template>

<script>
import Topic from "../row/Topic.vue";

export default {
  name: "Board",
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
