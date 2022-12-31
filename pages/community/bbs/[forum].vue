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
    <ForumList v-if="data" :forum="data" />
    <br />
    <button type="button" style="text-align: left" @click="post = true">
      <img
        v-if="!post && data && !data.locked"
        alt="New topic"
        src="@/assets/img/bbs/post.gif"
      />
    </button>
    <MarkdownInput v-if="post && data && !data.locked" is-topic />
    <br />
    <Card>
      <div class="columns">
        <div v-for="(description, i) in iconDescriptions" :key="i">
          <img
            :src="description.src"
            :alt="description.label"
            :title="description.label"
            draggable="false"
            @contextmenu.prevent
          />
          {{ description.label }}
        </div>
      </div>
    </Card>
  </Container>
</template>

<script setup lang="ts">



import { asset, fetchData } from "@/utils";

import { useHead } from "@vueuse/head";

const iconDescriptions = [
  {
    src: asset("img/bbs/folder_new.svg"),
    label: "Nouveaux messages",
  },
  {
    src: asset("img/bbs/folder_new_hot.svg"),
    label: "Nouveaux messages [ Populaire ]",
  },
  {
    src: asset("img/bbs/folder_new_lock.svg"),
    label: "Nouveaux messages [ Verrouillé ]",
  },
  {
    src: asset("img/bbs/folder.svg"),
    label: "Pas de nouveaux messages",
  },
  {
    src: asset("img/bbs/folder_hot.svg"),
    label: "Pas de nouveaux messages [ Populaire ]",
  },
  {
    src: asset("img/bbs/folder_lock.svg"),
    label: "Pas de nouveaux messages [ Verrouillé ]",
  },
  {
    src: asset("img/bbs/folder_announce.svg"),
    label: "Annonce",
  },
  {
    src: asset("img/bbs/folder_sticky.svg"),
    label: "Post-it",
  },
];
const post = ref(false);
const data = ref<any>(undefined);

fetchData(async (params) => {
  data.value = (
    await useFetch(`bbs/forum/${params.id}?page=${params.page}`)
  ).data;
});

// /api/forum/${vm.$route.params.page ? vm.$route.params.page : 1}.json
useHead({ title: "section.forum" });
</script>
<style src="@/assets/css/bbs/bbs.css"></style>
<style lang="scss" scoped>
.columns {
  column-count: 1;
}

@media (min-width: 400px) {
  .columns {
    column-count: 2;
  }
}

@media (min-width: 600px) {
  .columns {
    column-count: 3;
  }
}
</style>
