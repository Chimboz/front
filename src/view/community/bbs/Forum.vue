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
        src="@/asset/img/bbs/post.gif"
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

<script>
import ForumList from "@/component/bbs/list/Forum.vue";
import MarkdownInput from "@/component/bbs/MarkdownInput.vue";

// @vuese
// @group View/Community/BBS
// Forum page
export default {
  name: "ForumView",
  components: {
    ForumList,
    MarkdownInput
  },
  data() {
    return {
      data: null,
      iconDescriptions: [
        {
          src: require("@/asset/img/bbs/folder_new.svg"),
          label: "Nouveaux messages"
        },
        {
          src: require("@/asset/img/bbs/folder_new_hot.svg"),
          label: "Nouveaux messages [ Populaire ]"
        },
        {
          src: require("@/asset/img/bbs/folder_new_lock.svg"),
          label: "Nouveaux messages [ Verrouillé ]"
        },
        {
          src: require("@/asset/img/bbs/folder.svg"),
          label: "Pas de nouveaux messages"
        },
        {
          src: require("@/asset/img/bbs/folder_hot.svg"),
          label: "Pas de nouveaux messages [ Populaire ]"
        },
        {
          src: require("@/asset/img/bbs/folder_lock.svg"),
          label: "Pas de nouveaux messages [ Verrouillé ]"
        },
        {
          src: require("@/asset/img/bbs/folder_announce.svg"),
          label: "Annonce"
        },
        {
          src: require("@/asset/img/bbs/folder_sticky.svg"),
          label: "Post-it"
        }
      ],
      post: false
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api
        .get(
          `/api/forum/${vm.$route.params.page ? vm.$route.params.page : 1}.json`
        )
        .then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get(
      `/api/forum/${to.params.page ? to.params.page : 1}.json`
    );
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.forum",

  }
};
</script>
<style src="@/asset/css/bbs/bbs.css"></style>
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
