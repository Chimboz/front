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
    <GlobalCard
      color="yellow"
      header="shop.svg"
      :height="109"
      v-if="data"
      style="position: relative"
    >
      <audio autoplay>
        <source src="@/asset/sound/shop/moving_stars.flac" type="audio/flac" />
      </audio>
      <audio autoplay>
        <source src="@/asset/sound/shop/preview.mp3" type="audio/wav" />
      </audio>
      <audio ref="clickAudio">
        <source src="@/asset/sound/shop/show.wav" type="audio/wav" />
      </audio>
      <audio ref="buyAudio">
        <source src="@/asset/sound/shop/selected.mp3" type="audio/mpeg" />
      </audio>
      <div class="preview fullwidth flex">
        <img
          draggable="false"
          @contextmenu.prevent
          class="pack-preview"
          alt="Pack preview"
          height="196"
          width="468"
          src="@/asset/img/shop/cabin.svg"
        />
        <div class="preview-tiz flex centered">
          <GlobalAvatar
            :avatar="shown.looks[0].avatar"
            :emote="shown.looks[0].emote"
            :hat="shown.looks[0].hat"
            :body="shown.looks[0].body"
            :shoe="shown.looks[0].shoe"
            :item0="shown.looks[0].item0"
            :item1="shown.looks[0].item1"
            :item2="shown.looks[0].item2"
          />
          <GlobalAvatar
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
        <div>
          <div class="preview-infos">
            <br /><br />
            <h3>Pack {{ shown.name }}</h3>
            {{ shown.description }}<br /><br />
            <GlobalButton
              color="yellow"
              icon="credits.svg"
              @click.prevent="buy()"
              v-if="authenticated"
            >
              Acheter</GlobalButton
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
    </GlobalCard>
    <template #right-column><Bank /></template>
  </GlobalContainer>
</template>
<script>
import Bank from "@/components/Bank.vue";
import Pack from "@/components/Pack.vue";
import { mapGetters } from "vuex";

// @vuese
// @group View/Community
// Shop page
export default {
  name: "ShopView",
  components: {
    Bank,
    Pack,
  },
  data() {
    return {
      data: null,
      shown: null,
    };
  },
  computed: {
    ...mapGetters("auth", ["authenticated"]),
  },
  methods: {
    show(pack) {
      this.shown = pack;
      this.$refs.clickAudio.play();
    },
    buy() {
      this.$refs.buyAudio.play();
      console.log("Acheté " + this.shown.name);
      this.eventBus.emit("confirmation", {
        message: "success.buy",
        callback: "/api/success.json",
      });
    },
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
  },
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
  font-size: var(--lg-font-size);
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
  max-height: 450px;
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
  color: var(--light);
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
  color: var(--light);
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
