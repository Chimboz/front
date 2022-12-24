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
    <MarkdownInput
      v-if="user && data && (!data.locked || +user.user_level > 3)"
    />
  </GlobalContainer>
</template>

<script setup lang="ts">
import TopicList from "@/components/bbs/list/TopicComponent.vue";
import MarkdownInput from "@/components/bbs/MarkdownInputComponent.vue";
import api from "@/modules/api";
import { fetchData } from "@/utils";
import useAuthStore from "@/stores/auth";
import { ref, computed } from "vue";
import { useMeta } from "vue-meta";

useMeta({ title: "section.topic" });

const user = computed(() => useAuthStore().user);

const data = ref<any>(undefined);

fetchData(async (params) => {
  data.value = (
    await api.get(
      `bbs/topic/${params.forum}/${params.topic}?page=${params.page}`
    )
  ).data;
});
</script>
<style src="@/assets/css/bbs/bbs.css"></style>
