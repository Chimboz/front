<template>
  <span class="pink justified">
    <router-link to="/bbs" class="pink">BBS</router-link> »
    <router-link :to="'/bbs/' + $route.params.id" class="pink">{{
      forum.name
    }}</router-link></span
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
      v-for="(topic, index) in forum.topics"
      :key="topic.id"
      :topic="topic"
      :separator="index < forum.topics.length - 1"
    />
    <tr>
      <th valign="bottom" colspan="6" height="25" nowrap="nowrap">
        <pagination
          :current="this.$route.params.page ? +this.$route.params.page : 1"
          :total="forum.pages"
          :callback="(page) => '/bbs/' + $route.params.id + '/' + page"
        />
      </th>
    </tr>
  </table>
  <br />
  <div style="text-align: end">
    <button class="btn-action" @click.prevent="quote(message.id)"
      ><img
        src="@/asset/img/bbs/icon/lock.svg"
        width="9"
        height="12"
        draggable="false"
        alt="Lock"
        @contextmenu.prevent
      />&nbsp;Verrouiller</button
    >
  </div>
</template>

<script>
import Topic from "../row/Topic.vue";
import Pagination from "@/component/bbs/Pagination.vue";
import { mapState } from "vuex";

// @vuese
// @group BBS/List
export default {
  name: "Board List",
  components: {
    Topic,
    Pagination
  },
  props: {
    forum: {
      required: true,
      type: Object
    }
  },
  computed: {
    ...mapState("auth", ["user"])
  }
};
</script>
