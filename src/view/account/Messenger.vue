<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="account" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <GlobalCard color="yellow" v-if="data" justified header="mi.svg">
      <div class="flex">
        <input
          required
          minlength="3"
          maxlength="15"
          pattern="[\w\.\-_@]{3,15}"
          name="username"
          type="text"
          class="btn-md"
          autocomplete="username"
          :placeholder="$t('placeholder.username')"
        /><button type="button" class="btn-action">go</button></div
      >
      <router-link
        class="message fullwidth flex"
        v-for="message of data"
        :key="message.user.id"
        :to="'/messenger/' + message.user.id"
      >
        <div
          class="tiz-portrait"
          :style="{ background: hashColor(message.user.name) }"
        >
          <GlobalAvatar
            :avatar="message.user.look.avatar"
            :emote="message.user.look.emote"
            :hat="message.user.look.hat"
            :body="message.user.look.body"
            :shoe="message.user.look.shoe"
            :item0="message.user.look.item0"
            :item1="message.user.look.item1"
            :item2="message.user.look.item2"
          />
        </div>
        <div
          class="flex col"
          style="
            justify-content: space-evenly;
            padding: 6px;
            width: calc(100% - 50px);
          "
        >
          <div>
            <h3
              ><UserLink :user="message.user" /><span
                style="float: right; font-weight: normal; font-size: 12px"
                >{{ formatDate(message.date) }}</span
              ></h3
            ></div
          >
          <span class="content">{{ message.content.slice(0, 64) }}</span>
        </div>
      </router-link>
    </GlobalCard>
    <template #right-column></template>
  </GlobalContainer>
</template>
<script>
import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group View/Account
// Messenger page
export default {
  name: "MessengerView",
  data() {
    return {
      data: null
    };
  },
  methods: {
    formatDate(date) {
      return formatDistanceToNowStrict(new Date(date), {
        locale: locales[navigator.language.split("-")[0]],
        addSuffix: true
      });
    },
    hashColor(str) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      var colour = "#";
      for (i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xff;
        colour += ("00" + value.toString(16)).substr(-2);
      }
      return colour;
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/messenger.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/messenger.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.messenger",
    meta: [
      {
        name: "description",
        content:
          "Chimboz.fr est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
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
<style lang="scss"></style>
<style lang="scss" scoped>
.message {
  text-decoration: none;
  color: #284555;
  font-weight: normal;
  overflow: hidden;
}

.tiz-portrait {
  margin: 6px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  float: left;
  box-shadow: 0 1px 1px 1px #0005;
}

.message::after,
.message .tiz::after {
  content: "";
  clear: both;
  display: table;
}

.message:hover {
  background: #fff6;
}
</style>
