<template>
  <GlobalContainer>
    <template #left-column
      ><GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Community" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot
    /></template>
    <TopicList v-if="data" :topic="data" />
    <br />
    <MarkdownInput v-if="user && data && !data.locked" />
  </GlobalContainer>
</template>

<script setup lang="ts">
import TopicList from "@/components/bbs/list/TopicComponent.vue";
import MarkdownInput from "@/components/bbs/MarkdownInputComponent.vue";
import api from "@/modules/api";
import { fetchData } from "@/utils";
import useAuthStore from "@/stores/auth";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const auth = useAuthStore();
const user = computed(() => auth.user);
const route = useRoute();

// @vuese
// @group View/Community/BBS
// Topic page

const data: any = ref(undefined);

fetchData(async (params) => {
  data.value = (
    await api.get(
      `bbs/topic/${params.forum}/${params.topic}?page=${params.page}`
    )
  ).data;
  if (route.hash)
    scroll({
      top:
        document.getElementById(route.hash.slice(1))?.getBoundingClientRect()
          .top! + window.scrollY,
      behavior: "smooth",
    });
});
// /api/topic/${vm.$route.params.page ? vm.$route.params.page : 1}.json
// meta title section.topic
</script>
<style src="@/assets/css/bbs/bbs.css"></style>
