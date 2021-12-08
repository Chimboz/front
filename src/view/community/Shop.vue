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
          class="pack-preview"
          src="@/asset/img/shop/cabin.svg"
        />
        <div class="preview-tiz flex centered">
          <Avatar
            :avatar="shown.looks[0].avatar"
            :emote="shown.looks[0].emote"
            :hat="shown.looks[0].hat"
            :body="shown.looks[0].body"
            :shoe="shown.looks[0].shoe"
            :item0="shown.looks[0].item0"
            :item1="shown.looks[0].item1"
            :item2="shown.looks[0].item2"
          />
          <Avatar
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
          <div class="preview-price">
            <img
              src="@/asset/img/shop/circle.svg"
              width="58"
              height="57"
              draggable="false"
              @contextmenu.prevent
              alt="Shop price"
            />
            <span>{{ shown.cost }}p.</span>
          </div>
        </div>
        <div class="preview-description">
          <div class="preview-infos">
            <br /><br />
            <h3> Pack {{ shown.name }} </h3>
            {{ shown.description }}<br /><br />
            <button class="btn-shop" @click.prevent="buy()"
              ><img src="@/asset/img/shop/dollar.png" /> Acheter</button
            >
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

// @vuese
// @group View/Community
// Shop page
export default {
  name: "Shop",
  components: {
    Bank,
    Pack
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
      this.eventBus.emit("confirmation", {
        message: "success.buy",
        callback: "/api/success.json"
      });
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
  margin-top: -30px;
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
  position: relative;
}

.preview-price {
  position: absolute;
  right: 0;
  top: 0;
  width: 58px;
  height: 57px;
}

.preview-price img {
  animation: spin linear 0.5s infinite;
}

@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(-20deg);
  }
}

.preview-price span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(-20deg);
  color: #fff;
  font-size: 20px;
  font-family: "Impact";
}

.preview-infos {
  width: 52%;
  position: absolute;
  text-align: left;
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

.btn-shop {
  text-transform: uppercase;
  border-radius: 4px;
  font-family: "Pixelated Verdana 10";
  border: 1px solid;
  border-color: #f0e0b8 #f0e0b8 #b4aa6e #f0e0b8;
  color: #fff;
  font-size: 11px;
  background: linear-gradient(
    to bottom,
    #dfbe20,
    #ceaf1e 49%,
    #b59c2a 51%,
    #e8d8a0
  );
  padding: 4px;
}
</style>
