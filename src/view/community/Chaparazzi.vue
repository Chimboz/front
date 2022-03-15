<template>
  <GlobalContainer v-if="data">
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <router-view></router-view>
    <GlobalCard color="yellow" v-if="data">
    </GlobalCard>
  </GlobalContainer>
</template>

<script>
import VLazyImage from "v-lazy-image";

// @vuese
// @group View/Community
// Chaparazzi page
export default {
  name: "ChaparazziView",
  components: {
    VLazyImage,
  },
  data() {
    return {
      data: null,
      search: "",
      page: 0,
      isLoading: false,
    };
  },
  methods: {
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      if (scrollTop + clientHeight >= scrollHeight - 60) {
        this.isLoading = true;
        this.api.get(`/api/chaparazzi/${++this.page}.json`).then(
          (res) => {
            this.data = [...new Set([...this.data, ...res.data])];
            this.isLoading = false;
          },
          () => (this.isLoading = false)
        );
      }
    },
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get(`/api/chaparazzi/${vm.page}.json`).then((res) => {
        vm.data = res.data;
        vm.shown = res.data[0];
      })
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get(`/api/chaparazzi/0.json`);
    this.data = req.data;
    this.shown = this.data[0];
    next();
  },
  metaInfo: {
    title: "section.chaparazzi",
    meta: [
      {
        name: "description",
        content:
          "Chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !",
      },
      {
        property: "og:title",
        content: "Chimboz, accueil",
      },
      {
        property: "og:description",
        content: "Chimboz, accueil",
      },
      { property: "og:site_name", content: "Chimboz" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" },
    ],
  },
};
</script>
<style lang="scss" scoped></style>
