<template>
  <span class="pink justified" style="text-align: left">
    <router-link to="/bbs" class="pink">BBS</router-link> »
    <router-link :to="'/bbs/' + $route.params.id" class="pink"
      >BBS</router-link
    ></span
  >
  <router-link
    :to="'/bbs/' + $route.params.id + '/' + $route.params.topic"
    class="pink"
    ><h1 class="justified ellipsis" v-if="messages[0]">
      {{ messages[0].title }}
    </h1></router-link
  >
  <br />
  <table class="bbs">
    <colgroup>
      <col class="info" width="100" />
      <col width="100%" />
    </colgroup>
    <thead>
      <tr>
        <th valign="top" colspan="2" height="25" nowrap="nowrap">
          « Sujet Précédent Sujet Suivant »
        </th>
      </tr>
    </thead>
    <tbody>
      <Message
        v-for="(message, index) in messages"
        :key="message.id"
        :message="message"
        :separator="index != messages.length - 1"
      />
    </tbody>
  </table>
</template>

<script>
import Message from "../row/Message.vue";

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
<style lang="scss" scoped>
.ellipsis {
  color: #ff3399;
}

.info {
  display: none !important;
}

@media (min-width: 800px) {
  .info {
    display: table-column !important;
  }
}
</style>
