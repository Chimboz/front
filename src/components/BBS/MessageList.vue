<template>
  <span class="link-pink" style="text-align: left">
    <router-link to="/bbs" class="link-pink">BBS</router-link> »
    <router-link :to="'/bbs/'+$route.params.id" class="link-pink">BBS</router-link></span
  >
  <span style="text-align: left; font-size: 20px" v-if="messages[0]">
    <router-link :to="'/bbs/'+$route.params.id+'/'+$route.params.topic" class="link-pink">{{
      messages[0].title
    }}</router-link></span
  >
  <br />
  <table class="bbs">
    <thead>
      <tr>
        <th valign="top" height="25" nowrap="nowrap">
          « Sujet Précédent Sujet Suivant »
        </th>
      </tr>
    </thead>
    <Message v-for="message in messages" :key="message.id" :message="message" />
  </table>
</template>

<script>
import Message from "./Message.vue";

export default {
  name: "MessageList",
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
