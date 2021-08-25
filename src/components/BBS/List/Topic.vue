<template>
  <span class="pink justified" style="text-align: left">
    <router-link to="/bbs" class="pink">BBS</router-link> »
    <router-link :to="'/bbs/'+$route.params.id" class="pink">BBS</router-link></span
  >
  <h1 class="justified" v-if="messages[0]">
    <router-link :to="'/bbs/'+$route.params.id+'/'+$route.params.topic" class="pink">{{
      messages[0].title
    }}</router-link></h1
  >
  <br />
  <table class="bbs">
    <thead>
      <tr>
        <th valign="top" colspan=2 height="25" nowrap="nowrap">
          « Sujet Précédent Sujet Suivant »
        </th>
      </tr>
    </thead>
    <Message v-for="(message, index) in messages" :key="message.id" :message="message" :separator="index != messages.length-1"/>
  </table>
</template>

<script>
import Message from "../Row/Message.vue";

export default {
  name: "Topic",
  components: {
    Message,
  },
  props: {
    messages: {
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
