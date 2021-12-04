<template>
  <span class="pink justified" style="text-align: left">
    <router-link to="/bbs" class="pink">BBS</router-link> »
    <router-link v-if="topic" :to="'/bbs/' + topic.forum.id" class="pink">{{
      topic.forum.name
    }}</router-link></span
  >
  <router-link :to="'/topic/' + $route.params.topic" class="pink"
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
            :callback="(page) => '/topic/' + $route.params.topic + '/' + page"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <Message
        v-for="(message, index) in topic.messages"
        :key="message.id"
        :message="message"
        :separator="index < topic.messages.length - 1"
      />
    </tbody>
    <tr>
      <th valign="bottom" colspan="2" height="25" nowrap="nowrap">
        <pagination
          :current="this.$route.params.page ? +this.$route.params.page : 1"
          :total="topic.pages"
          :callback="(page) => '/topic/' + $route.params.topic + '/' + page"
        />
      </th>
    </tr> </table
  ><br />
  <div>
    <button class="btn-md font-ch" v-if="user.role > 50" @click.prevent="move"
      >Déplacer</button
    >&nbsp;
    <button
      class="btn-md danger font-ch"
      v-if="user.role > 50"
      @click.prevent="lock"
      >Verrouiller</button
    >
  </div>
</template>

<script>
import Pagination from "../Pagination.vue";
import Message from "../row/Message.vue";
import { mapState } from "vuex";

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
  },
  computed: {
    ...mapState("auth", ["user"])
  },
  methods: {
    lock() {
      console.log("Lock " + this.$route.params.topic);
    },
    move() {
      console.log("Move " + this.$route.params.topic);
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
