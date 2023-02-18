<template>
  <span class="pink mb-3">
    <NuxtLink to="/bbs" class="pink">BBS</NuxtLink> »
    <NuxtLink :to="`/bbs/${$route.params.forum}-1`" class="pink">{{
      forum.name
    }}</NuxtLink></span>
  <table class="bbs board mb-3">
    <colgroup>
      <col width="60">
      <col width="100%">
      <col width="60">
      <col width="100">
      <col width="60">
      <col width="100">
    </colgroup>
    <thead>
      <tr>
        <th colspan="2" valign="top" height="25" nowrap="nowrap">
          Sujets
        </th>
        <th width="50" valign="top" nowrap="nowrap">
          Réponses
        </th>
        <th width="100" valign="top" nowrap="nowrap">
          Auteur
        </th>
        <th width="50" valign="top" nowrap="nowrap">
          Vus
        </th>
        <th valign="top" nowrap="nowrap">
          Dernier message
        </th>
      </tr>
    </thead>
    <tbody>
      <BbsRowTopic
        v-for="(topic, index) in forum.subject"
        :key="topic.id"
        :topic="topic"
        :separator="index < forum.subject.length - 1"
      />

      <tr style="background: var(--dark-bbs)">
        <th valign="bottom" colspan="6" height="25" nowrap="nowrap">
          <Pagination
            :current="$route.params.page ? +$route.params.page : 1"
            :total="forum.pages"
            :callback="(page: number) => `/bbs/${$route.params.forum}-${page}`"
          />
        </th>
      </tr>
    </tbody>
  </table>
  <div v-if="user && +user.user_level > 3" style="text-align: end">
    <button
      class="btn-action"
      type="button"
      @click.prevent="lock($route.params.forum as string)"
    >
      <img
        src="@/assets/img/bbs/icon/lock.svg"
        width="9"
        height="12"
        draggable="false"
        alt="Lock"
        @contextmenu.prevent
      >&nbsp;Verrouiller
    </button>
  </div>
</template>

<script setup lang="ts">
import useAuthStore from '@/stores/auth'

const auth = useAuthStore()
const user = computed(() => auth.user)

defineProps<{
  forum: any;
}>()

function lock (id: string) {
  // TODO api forum lock
  useFetch(`/lock/${id}`)
}
</script>
