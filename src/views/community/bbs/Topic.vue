<template>
  <GlobalContainer>
    <template #left-column
      ><GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot
    /></template>
    <TopicList v-if="data" :topic="data" />
    <br />
    <MarkdownInput v-if="authenticated && data && !data.locked" />
  </GlobalContainer>
</template>

<script setup lang="ts">
import TopicList from "@/components/bbs/list/Topic.vue";
import MarkdownInput from "@/components/bbs/MarkdownInput.vue";
import api from "@/modules/api";
import { useAuthStore } from "@/stores/auth";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
const auth = useAuthStore();
const user = auth.user;
const route = useRoute()

// @vuese
// @group View/Community/BBS
// Topic page

const data: any = ref(undefined);
const authenticated = true;

onBeforeMount(async () => {
  data.value = (
    await api.get(`bbs/topic/${route.params.forum}/${route.params.topic}?page=${route.params.page}`)
  ).data;
});
// /api/topic/${vm.$route.params.page ? vm.$route.params.page : 1}.json
// meta title section.topic
</script>
<style src="@/assets/css/bbs/bbs.css"></style>
