<template>
  <Container>
    <template #left-column>
      <Card color="blue" top v-if="data">
        <template #header
          ><router-link to="/online"
            ><h1>{{ data.connected }}</h1>
            {{ $t("connecteds", data.connected) }}</router-link
          ></template
        >
        {{ data.members }} {{ $t("members.text", data.members) }} <br />
        {{ data.last24 }} {{ $t("members.past", data.last24) }} </Card
      ><br />
      <router-link to="/shop">
        <Card
          color="yellow"
          header="packs.png"
          :width="154"
          :height="96"
          class="packs"
          v-if="data"
        >
          <template #button>
            <Button color="yellow" icon="register.svg">Pack</Button>
          </template>
          <Pack name="supporter" :looks="data.shop.looks" />
        </Card>
      </router-link>
      <br />
    </template>
    <Demo />
    <br />
    <Card v-if="data">
      <template #subtop>Chaparazzi</template>
      <div class="gallery flex">
        <div
          class="flex col photo"
          v-for="photo of data.gallery"
          :key="photo.name"
          style="margin: auto"
        >
          <img
            draggable="false"
            @contextmenu.prevent
            :src="`gallery/${photo.name}`"
            :alt="photo.name"
          /><b>{{ formatDatePhotos(photo.date) }}</b></div
        >
      </div>
    </Card>
    <template #right-column>
      <Card color="blue" header="games.gif" v-if="data">
        <div class="fullwidth">
          <img src="@/asset/img/game/bacteria/head.gif" />
          <img src="@/asset/img/game/bacteria/bg.gif" />
          <Avatar
            style="margin-top: -66px; margin-bottom: 13px"
            :avatar="data.bacteria.user.look.avatar"
            :emote="data.bacteria.user.look.emote"
            :hat="data.bacteria.user.look.hat"
            :body="data.bacteria.user.look.body"
            :shoe="data.bacteria.user.look.shoe"
            :item0="data.bacteria.user.look.item0"
            :item1="data.bacteria.user.look.item1"
            :item2="data.bacteria.user.look.item2"
          />
          <div class="game-champion">
            <user :user="data.bacteria.user" /><br />est champion Bacteria
            !</div
          >
          <img src="@/asset/img/game/patojdur/head.gif" />
          <img src="@/asset/img/game/patojdur/bg.gif" />
          <Avatar
            style="margin-top: -66px; margin-bottom: 13px"
            :avatar="data.patojdur.user.look.avatar"
            :emote="data.patojdur.user.look.emote"
            :hat="data.patojdur.user.look.hat"
            :body="data.patojdur.user.look.body"
            :shoe="data.patojdur.user.look.shoe"
            :item0="data.patojdur.user.look.item0"
            :item1="data.patojdur.user.look.item1"
            :item2="data.patojdur.user.look.item2"
          />
          <div class="game-champion">
            <user :user="data.patojdur.user" /><br />est champion Patojdur
            !</div
          >
          <img src="@/asset/img/game/mazo/head.gif" />
          <img src="@/asset/img/game/mazo/bg.gif" />
          <Avatar
            style="margin-top: -66px; margin-bottom: 13px"
            :avatar="data.mazo.user.look.avatar"
            :emote="data.mazo.user.look.emote"
            :hat="data.mazo.user.look.hat"
            :body="data.mazo.user.look.body"
            :shoe="data.mazo.user.look.shoe"
            :item0="data.mazo.user.look.item0"
            :item1="data.mazo.user.look.item1"
            :item2="data.mazo.user.look.item2"
          />
          <div class="game-champion">
            <user :user="data.mazo.user" /><br />est un des meilleurs Mazoteurs
            du moment !</div
          >
        </div></Card
      >
    </template>
  </Container>
</template>
<script>
import Demo from "@/component/Demo.vue";
import Pack from "@/component/Pack.vue";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group View
// Login page
export default {
  name: "LoginView",
  components: {
    Pack,
    Demo
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/login.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/login.json");
    this.data = req.data;
    next();
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login");
    },
    formatDatePhotos(date) {
      return format(new Date(date), "PP", {
        locale: locales[navigator.language.split("-")[0]]
      });
    }
  },
  metaInfo: {
    title: "section.login",
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
.packs .card-btn {
  background: linear-gradient(
    to bottom,
    #7aaaf0,
    #7aaaf0 50%,
    var(--main-card-color) 50%
  ) !important;
}
</style>
<style lang="scss" scoped>
.login-form {
  justify-content: center;
}

.game-champion {
  background: linear-gradient(to bottom, #58a8db, #6ebef0);
  margin-bottom: 6px;
}

.gallery {
  flex-wrap: wrap;
}

.gallery .photo {
  width: 30%;
}

.gallery .photo img {
  border: 1px solid #6090be;
}
</style>
