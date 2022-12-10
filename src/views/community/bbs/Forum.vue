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
    <ForumList v-if="data" :forum="data" />
    <br />
    <button style="text-align: left">
      <img
        v-if="!post && data && !data.locked"
        @click="post = true"
        src="@/assets/img/bbs/post.gif"
      />
    </button>
    <MarkdownInput isTopic v-if="post && data && !data.locked" />
    <br />
    <GlobalCard>
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
    </GlobalCard>
  </GlobalContainer>
</template>

<script setup lang="ts">
import ForumList from "@/components/bbs/list/Forum.vue";
import MarkdownInput from "@/components/bbs/MarkdownInput.vue";
import { ref } from "vue";

// @vuese
// @group View/Community/BBS
// Forum page

const data: any = ref(null);
const iconDescriptions = [
  {
    src: require("@/assets/img/bbs/folder_new.svg"),
    label: "Nouveaux messages",
  },
  {
    src: require("@/assets/img/bbs/folder_new_hot.svg"),
    label: "Nouveaux messages [ Populaire ]",
  },
  {
    src: require("@/assets/img/bbs/folder_new_lock.svg"),
    label: "Nouveaux messages [ Verrouillé ]",
  },
  {
    src: require("@/assets/img/bbs/folder.svg"),
    label: "Pas de nouveaux messages",
  },
  {
    src: require("@/assets/img/bbs/folder_hot.svg"),
    label: "Pas de nouveaux messages [ Populaire ]",
  },
  {
    src: require("@/assets/img/bbs/folder_lock.svg"),
    label: "Pas de nouveaux messages [ Verrouillé ]",
  },
  {
    src: require("@/assets/img/bbs/folder_announce.svg"),
    label: "Annonce",
  },
  {
    src: require("@/assets/img/bbs/folder_sticky.svg"),
    label: "Post-it",
  },
];
const post = ref(false);
// /api/forum/${vm.$route.params.page ? vm.$route.params.page : 1}.json
// meta title section.forum
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
