<template>
  <span class="pink justified" style="text-align: left">
    <router-link to="/bbs" class="pink">BBS</router-link> »
    <router-link
      v-if="topic"
      :to="'/bbs/' + $route.params.forum"
      class="pink"
      >{{ topic.name }}</router-link
    ></span
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
          <Pagination
            :current="$route.params.page ? +$route.params.page : 1"
            :total="topic.pages"
            :callback="(page: number) => `/topic/${$route.params.forum}/${$route.params.topic}/${page}`"
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
        <Pagination
          :current="$route.params.page ? +$route.params.page : 1"
          :total="topic.pages"
          :callback="(page: number) => `/topic/${$route.params.forum}/${$route.params.topic}/${page}`"
        />
      </th>
    </tr>
  </table>
  <br />
  <div style="text-align: end" v-if="authenticated">
    <button class="btn-action" v-if="user.role > 50" @click.prevent="move">
      <img
        src="@/assets/img/bbs/icon/arrow.svg"
        width="10"
        height="12"
        draggable="false"
        alt="Arrow"
        @contextmenu.prevent
      />&nbsp;Déplacer</button
    >&nbsp;
    <button class="btn-action" v-if="user.role > 50" @click.prevent="lock">
      <img
        src="@/assets/img/bbs/icon/lock.svg"
        width="9"
        height="12"
        draggable="false"
        alt="Lock"
        @contextmenu.prevent
      />&nbsp;Verrouiller</button
    >&nbsp;
    <button
      class="btn-action"
      v-if="user.role > 50"
      @click.prevent="deleteTopic"
    >
      x&nbsp;Supprimer
    </button>
  </div>
</template>

<script setup lang="ts">
import Pagination from "../../core/PaginationComponent.vue";
import Message from "../row/MessageComponent.vue";
import { useAuthStore } from "@/stores/auth";
import { useRoute } from "vue-router";
const auth = useAuthStore();
const user = auth.user!;
const authenticated = true;
const route = useRoute();

// @vuese
// @group BBS/List

defineProps<{
  topic: any;
}>();

function lock() {
  console.log("Lock " + route.params.topic);
}
function deleteTopic() {
  console.log("Delete " + route.params.topic);
}
function move() {
  console.log("Move " + route.params.topic);
}
</script>
<style lang="scss" scoped>
.info {
  display: none !important;
}

@media (min-width: 800px) {
  .info {
    display: table-column !important;
  }
}
</style>
