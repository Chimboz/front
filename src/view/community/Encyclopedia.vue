<template>
  <Container v-if="data">
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div> </Card
      ><br />
      <Rules bot />
    </template>
    <router-view></router-view>
    <Card color="yellow" v-if="data">
      <router-link
        v-for="item of data"
        :key="item.id"
        :to="'/encyclopedia/' + item.id"
      >
        <button
          type="button"
          class="item"
          :class="{
            active: $route.params.id == item.id
          }"
        >
          <VLazyImage
            draggable="false"
            @contextmenu.prevent
            :src="`/avatar/${item.type}/${item.id}.svg`"
            :src-placeholder="require('@/asset/img/loading.svg')"
          /> </button
      ></router-link>
    </Card>
    <template #right-column></template>
  </Container>
</template>
<script>
import VLazyImage from "v-lazy-image";

// @vuese
// @group View/Community
// Encyclopedia page
export default {
  name: "Encyclopedia",
  components: {
    VLazyImage
  },
  data() {
    return {
      data: null,
      shown: null
    };
  },
  methods: {
    show(pack) {
      this.shown = pack;
    },
    buy() {
      console.log("Acheté " + this.shown.name);
      this.eventBus.emit("success", { message: "success.buy" });
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/encyclopedia.json").then((res) => {
        vm.data = res.data;
        vm.shown = res.data[0];
      })
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/encyclopedia.json");
    this.data = req.data;
    this.shown = this.data[0];
    next();
  },
  metaInfo: {
    title: "section.shop",
    meta: [
      {
        name: "description",
        content:
          "chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
      },
      {
        property: "og:title",
        content: "Chimboz, accueil"
      },
      {
        property: "og:description",
        content: "Chimboz, accueil"
      },
      { property: "og:site_name", content: "Chimboz" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" }
    ]
  }
};
</script>
<style lang="scss" scoped>
.item {
  margin: 1px;
  display: inline-block;
  background: linear-gradient(to bottom, #85d1f1, #a7dbfc);
  height: 60px;
  width: 60px;
  border-radius: 12px;
  overflow: hidden;
  vertical-align: middle;
}

.item.active {
  border: 2px solid #fff;
}

.item.active img {
  margin: -2px;
}

.hat img {
  transform: translate(-18.5px, -35px);
}

.body img {
  transform: translate(-22px, -24px);
}

.shoe img {
  transform: translate(-2px, 0px);
}

.item0 img {
  transform: translate(-4px, -11px);
}

.item1 img {
  transform: translate(-11px, -20px);
}

.item2 img {
  transform: translate(-11px, -58px);
}
</style>
