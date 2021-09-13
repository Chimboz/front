<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div> </Card
    ></template>
    <Board v-if="data" :topics="data"> </Board>
    <br />
    <button style="text-align: left">
      <img v-if="!post" @click="post = true" src="@/asset/img/bbs/post.gif" />
    </button>
    <markdown-input isTopic v-if="post" />
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

<script>
import Card from "@/component/Card.vue";
import Board from "@/component/bbs/list/Board.vue";
import Container from "@/component/Container.vue";
import MarkdownInput from "../../component/MarkdownInput.vue";

const iconDescriptions = [
  {
    src: require("@/asset/img/bbs/folder_new.svg"),
    label: "Nouveaux messages",
  },
  {
    src: require("@/asset/img/bbs/folder_new_hot.svg"),
    label: "Nouveaux messages [ Populaire ]",
  },
  {
    src: require("@/asset/img/bbs/folder_new_lock.svg"),
    label: "Nouveaux messages [ Verrouillé ]",
  },
  {
    src: require("@/asset/img/bbs/folder.svg"),
    label: "Pas de nouveaux messages",
  },
  {
    src: require("@/asset/img/bbs/folder_hot.svg"),
    label: "Pas de nouveaux messages [ Populaire ]",
  },
  {
    src: require("@/asset/img/bbs/folder_lock.svg"),
    label: "Pas de nouveaux messages [ Verrouillé ]",
  },
  {
    src: require("@/asset/img/bbs/folder_announce.svg"),
    label: "Annonce",
  },
  {
    src: require("@/asset/img/bbs/folder_sticky.svg"),
    label: "Post-it",
  },
];

export default {
  name: "BBS",
  components: {
    Board,
    Container,
    Card,
    MarkdownInput,
  },
  data() {
    return {
      data: null,
      iconDescriptions,
      post: false,
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/forum.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.$api.get("/api/forum.json");
    this.data = req.data;
  },
};
</script>
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
