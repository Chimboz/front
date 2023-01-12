<template>
  <span class="pink justified" style="text-align: left">
    <NuxtLink to="/bbs" class="pink">BBS</NuxtLink> »
    <NuxtLink
      v-if="topic"
      :to="`/bbs/${$route.params.forum}-1`"
      class="pink"
    >{{ topic.name }}</NuxtLink></span>
  <NuxtLink
    :to="`/bbs/${$route.params.forum}-${$route.params.topic}-1`"
    class="pink"
  >
    <h1 v-if="topic.messages[0]" class="justified ellipsis">
      {{ topic.messages[0].title }}
    </h1>
  </NuxtLink>
  <br>
  <table class="bbs">
    <colgroup>
      <col class="info" width="100">
      <col width="100%">
    </colgroup>
    <thead>
      <tr>
        <th valign="top" colspan="2" height="25" nowrap="nowrap">
          <Pagination
            :current="$route.params.page ? +$route.params.page : 1"
            :total="topic.pages"
            :callback="(page: number) => `/bbs/${$route.params.forum}-${$route.params.topic}-${page}`"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <BbsRowMessage
        v-for="(message, index) in topic.messages"
        :key="message.id"
        :message="message"
        :separator="index < topic.messages.length - 1"
      />

      <tr style="background: var(--dark-bbs)">
        <th valign="bottom" colspan="2" height="25" nowrap="nowrap">
          <Pagination
            :current="$route.params.page ? +$route.params.page : 1"
            :total="topic.pages"
            :callback="(page: number) => `/bbs/${$route.params.forum}-${$route.params.topic}-${page}`"
          />
        </th>
      </tr>
    </tbody>
  </table>
  <br v-if="movePanel">
  <Card v-if="movePanel">
    <template #header>
      Déplacer le sujet
    </template>
    <form @submit.prevent="move">
      <select v-model="targetMove" aria-label="Forum" class="btn-md">
        <optgroup
          v-for="category of categories"
          :key="category"
          :label="category.category"
        >
          <option
            v-for="forum of category.bbs"
            :key="forum.id"
            :value="forum.id"
          >
            {{ forum.name }}
          </option>
        </optgroup>
      </select>&nbsp;
      <button type="submit" class="btn-action">
        go
      </button>
    </form>
  </Card>
  <br>
  <div v-if="user" style="text-align: end">
    <button
      v-if="+user.user_level > 3"
      class="btn-action"
      type="button"
      @click.prevent="openMovePanel"
    >
      <img
        src="@/assets/img/bbs/icon/arrow.svg"
        width="10"
        height="12"
        draggable="false"
        alt="Arrow"
        @contextmenu.prevent
      >&nbsp;Déplacer
    </button>&nbsp;
    <button
      v-if="+user.user_level > 3"
      class="btn-action"
      type="button"
      @click.prevent="lock"
    >
      <img
        src="@/assets/img/bbs/icon/lock.svg"
        width="9"
        height="12"
        draggable="false"
        alt="Lock"
        @contextmenu.prevent
      >&nbsp;Verrouiller
    </button>&nbsp;
    <button
      v-if="+user.user_level > 3"
      class="btn-action"
      type="button"
      @click.prevent="deleteTopic"
    >
      x&nbsp;Supprimer
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useAuthStore from '@/stores/auth'

const auth = useAuthStore()
const user = computed(() => auth.user)
const route = useRoute()
const categories = ref<any[]>([])
const movePanel = ref(false)
const targetMove = ref(1)

defineProps<{
  topic: any;
}>()

function lock () {
  useFetch(`bbs/powers/lock/${route.params.topic}`)
}
function deleteTopic () {
  useFetch('bbs/deletetopic', { body: { topic: route.params.topic } })
}
async function openMovePanel () {
  movePanel.value = true
  categories.value = (await useFetch('bbs')).data
}

function move () {
  useFetch('bbs/powers/move', {
    body: {
      forum: route.params.forum,
      go: targetMove.value,
      topic: route.params.topic
    }
  })
  movePanel.value = false
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
