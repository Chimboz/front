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
    ><h1 class="justified ellipsis" v-if="topic.messages[0]">
      {{ topic.messages[0].title }}
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
          <pagination
            :current="this.$route.params.page ? +this.$route.params.page : 1"
            :total="topic.pages"
            :callback="
              (page) =>
                '/topic/' +
                $route.params.id +
                '/' +
                $route.params.topic +
                '/' +
                page
            "
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <Message
        v-for="(message, index) in topic.messages"
        :key="message.id"
        :message="message"
        :separator="index != topic.messages.length - 1"
      />
    </tbody>
    <tr>
      <th valign="bottom" colspan="2" height="25" nowrap="nowrap">
        <pagination
          :current="this.$route.params.page ? +this.$route.params.page : 1"
          :total="topic.pages"
          :callback="
            (page) =>
              '/topic/' +
              $route.params.id +
              '/' +
              $route.params.topic +
              '/' +
              page
          "
        />
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
    topic: {
      required: true,
      type: Object
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
