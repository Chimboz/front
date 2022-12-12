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
      v-for="(topic, index) in forum.subject"
      :key="topic.id"
      :topic="topic"
      :separator="index < forum.subject.length - 1"
    />
    <tr>
      <th valign="bottom" colspan="6" height="25" nowrap="nowrap">
        <Pagination
          :current="$route.params.page ? +$route.params.page : 1"
          :total="forum.pages"
          :callback="(page: number) => `/bbs/${$route.params.id}/${page}`"
        />
      </th>
    </tr>
  </table>
  <br />
  <div style="text-align: end">
    <button
      class="btn-action"
      @click.prevent="lock($route.params.id as string)"
    >
      <img
        src="@/assets/img/bbs/icon/lock.svg"
        width="9"
        height="12"
        draggable="false"
        alt="Lock"
        @contextmenu.prevent
      />&nbsp;Verrouiller
    </button>
  </div>
</template>

<script setup lang="ts">
import Topic from "../row/TopicComponent.vue";
import Pagination from "../../core/PaginationComponent.vue";
// import { useAuthStore } from "@/stores/auth";
// const auth = useAuthStore();
// const user = auth.user;

// @vuese
// @group BBS/List

defineProps<{
  forum: any;
}>();

function lock(id: string) {
  console.log("verrouille" + id);
}
</script>
