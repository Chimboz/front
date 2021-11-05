<template>
  <span class="pink justified" style="text-align: left">
    <router-link to="/bbs" class="pink">BBS</router-link> »
    <router-link :to="'/forum/' + $route.params.id" class="pink"
      >BBS</router-link
    ></span
  >
  <router-link
    :to="'/topic/' + $route.params.id + '/' + $route.params.topic + '/1'"
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
          <pagination />
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
    <tr>
      <th valign="bottom" colspan="2" height="25" nowrap="nowrap">
        <pagination />
      </th>
    </tr>
  </table>
</template>

<script>
import Pagination from "../Pagination.vue";
import Message from "../row/Message.vue";

export default {
  name: "Topic List",
  components: {
    Message,
    Pagination
  },
  props: {
    messages: {
      required: true,
      type: Array
    }
  }
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
