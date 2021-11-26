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
    <Card
      color="yellow"
      header="shop.svg"
      :height="109"
      v-if="data"
      style="position: relative"
    >
      <div class="preview fullwidth flex">
        <img
          draggable="false"
          @contextmenu.prevent
          class=" pack-preview"
          src="@/asset/img/shop/cabin.svg"
        />
        <div class="preview-tiz flex centered">
          <Tiz
            :avatar="shown.looks[0].avatar"
            :emote="shown.looks[0].emote"
            :hat="shown.looks[0].hat"
            :body="shown.looks[0].body"
            :shoe="shown.looks[0].shoe"
            :item0="shown.looks[0].item0"
            :item1="shown.looks[0].item1"
            :item2="shown.looks[0].item2"
          />
          <Tiz
            v-if="shown.looks.length == 2"
            :avatar="shown.looks[1].avatar"
            :emote="shown.looks[1].emote"
            :hat="shown.looks[1].hat"
            :body="shown.looks[1].body"
            :shoe="shown.looks[1].shoe"
            :item0="shown.looks[1].item0"
            :item1="shown.looks[1].item1"
            :item2="shown.looks[1].item2"
          />
        </div>
        <div class="preview-description flex centered">
          <div>
            <div class="preview-price">
              <img src="@/asset/img/shop/circle.svg" style="float: right" />
              {{ shown.cost }}
            </div>
            {{ shown.name }}
          </div>
        </div>
      </div>
      <h3>Les dernières fringues</h3>
      <div class="menu flex">
        <div class="flex hstack">
          <Pack
            @click.prevent="show(pack)"
            v-for="pack of data"
            :key="pack.name"
            :name="pack.name"
            :looks="pack.looks"
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
import Tiz from "@/component/Tiz.vue";

export default {
  name: "Shop",
  components: {
    Bank,
    Pack,
    Tiz
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
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/shop.json").then((res) => {
        vm.data = res.data;
        vm.shown = res.data[0];
      })
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/shop.json");
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
<style lang="scss">
.menu .pack {
  max-width: calc(25% - var(--gap));
}
</style>
<style lang="scss" scoped>
.pack-preview {
  width: 100%;
  margin-top: -40px;
  margin-right: -100%;
  float: right;
}

.pack-preview::after {
  clear: both;
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

.preview {
  width: 100%;
}

.preview-tiz {
  width: 46%;
  justify-content: center;
}

.preview-price {
}

.preview-tiz .tiz {
  transform: scale(1.8);
}

.preview-tiz .tiz:first-child {
  z-index: 1;
}

.preview-tiz .tiz:nth-child(2) {
  transform: scale(1.6);
}
</style>
