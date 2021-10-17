<template>
  <Container v-if="data">
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="community" />
        </div>
      </Card>
    </template>
    <Card color="yellow" header="shop.svg" :height="109">
      <template #header></template>
      <img
        draggable="false"
        @contextmenu.prevent
        class="fullwidth pack-preview"
        src="@/asset/img/shop/cabin.svg"
      />
      <h3>Les dernières fringues</h3>
      <div class="menu flex">
        <div class="flex hstack">
          <Pack header="summer.png" footer="summer.png" /><Pack
            header="summer.png"
            footer="summer.png"
          /><Pack header="summer.png" footer="summer.png" /><Pack
            header="summer.png"
            footer="summer.png"
          /><Pack header="summer.png" footer="summer.png" /><Pack
            header="summer.png"
            footer="summer.png"
          /><Pack header="summer.png" footer="summer.png" /><Pack
            header="summer.png"
            footer="summer.png"
          /><Pack header="summer.png" footer="summer.png" /><Pack
            header="summer.png"
            footer="summer.png"
          />
        </div>
      </div>
    </Card>
    <template #right-column><Bank /></template>
  </Container>
</template>
<script>
import Bank from "@/component/Bank.vue";
import Pack from "@/component/Pack.vue";

export default {
  name: "Shop",
  components: {
    Bank,
    Pack
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/shop.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/shop.json");
    this.data = req.data;
  },
  metaInfo: {
    title: "title.shop",
    meta: [
      {
        name: "description",
        content:
          "ChapatizRetro.com est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
      },
      {
        property: "og:title",
        content: "Chapatiz Retro, accueil"
      },
      {
        property: "og:description",
        content: "Chapatiz Retro, accueil"
      },
      { property: "og:site_name", content: "Chapatiz Retro" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" }
    ]
  }
};
</script>
<style lang="scss">
.menu .pack {
  max-width: calc(25% - var(--gap));
}
</style>
<style lang="scss" scoped>
.pack-preview {
  margin-top: -50px;
}

h3 {
  border-bottom: 2px solid;
  font-family: "Chimboz Heavy";
  font-weight: normal;
  color: #ff2fac;
  font-size: 18px;
  line-height: 14px;
  text-align: left;
  margin-bottom: 6px;
}

.menu {
  position: relative;
}

.menu > div {
  position: relative;
  flex-wrap: wrap;
  max-height: 404px;
  overflow-y: auto;
  padding: 6px 0;
}

.menu:before {
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    #fff4d5,
    transparent 12px,
    transparent calc(100% - 12px),
    #fff4d5
  );
  position: absolute;
  z-index: 1;
  content: "";
  width: 100%;
  height: 404px;
}
</style>
