<template>
  <Container>
    <template #left-column
      ><Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Community" />
        </div> </Card
      ><br />
      <Rules bot
    /></template>
    <TopicList v-if="data" :topic="data" />
    <br />
    <MarkdownInput
      v-if="user && data && (!data.locked || +user.user_level > 3)"
    />
  </Container>
</template>

<script setup lang="ts">



import { fetchData } from "@/utils";
import useAuthStore from "@/stores/auth";

import { useHead } from "@vueuse/head";
import messageRender from "@/plugins/messageRender";

const user = computed(() => useAuthStore().user);

const data = ref<any>(undefined);

fetchData(async (params) => {
  data.value = (
    await useFetch(
      `bbs/topic/${params.forum}/${params.topic}?page=${params.page}`
    )
  ).data;
  const DOM = document.createElement("div");
  DOM.innerHTML = messageRender(data.value.messages[0].content);
  useHead({
    title: `Topic "${data.value.messages[0].title}"`,
    meta: [
      {
        name: "description",
        content: DOM.innerText,
      },
      {
        property: "og:description",
        content: DOM.innerText,
      },
      {
        property: "og:title",
        content: `Chimboz Topic "${data.value.messages[0].title}"`,
      },
    ],
  });
});
</script>
<style src="@/assets/css/bbs/bbs.css"></style>
