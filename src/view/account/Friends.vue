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
    <GlobalCard color="yellow" v-if="data" justified
      ><template #subtop>Friends</template>
      <router-link
        class="friend"
        v-for="friend of data"
        :key="friend.user.id"
        :to="'/book/' + friend.user.id"
      >
        <div class="tiz-portrait" :style="{ background: hashColor(friend.user.name) }">
          <GlobalAvatar
            :avatar="friend.user.look.avatar"
            :emote="friend.user.look.emote"
            :hat="friend.user.look.hat"
            :body="friend.user.look.body"
            :shoe="friend.user.look.shoe"
            :item0="friend.user.look.item0"
            :item1="friend.user.look.item1"
            :item2="friend.user.look.item2"
          />
        </div>
        <UserLink :user="friend.user" class="ellipsis centered" />
      </router-link>
    </GlobalCard>
    <template #right-column
      ><GlobalCard color="blue" top>
        <form @submit.prevent="addFriend()" class="flex fullwidth"
          ><input
            required
            minlength="3"
            maxlength="15"
            name="user"
            type="text"
            class="btn-md"
            autocomplete="user"
            :placeholder="$t('placeholder.username')"
          /><button type="submit" class="btn-action">&nbsp;+&nbsp;</button></form
        >
      </GlobalCard>
    </template>
  </GlobalContainer>
</template>
<script>
import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };
// @vuese
// @group View/Account
// Friends page
export default {
  name: "FriendsView",
  data() {
    return {
      data: null,
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
    },
    send() {
      console.log("Envoyé " + this.message);
      this.data.messages.push({
        you: true,
        content: this.message,
        date: Date.now()
      });
      this.message = "";
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/friends.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/friends.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.friends",
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

<style lang="scss" scoped>
.friend {
  display: inline-flex;
  flex-direction: column-reverse;
  width: 62px;
}
.tiz-portrait {
  display: inline-block;
  margin: 6px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0 1px 1px 1px #0005;
}

.content {
  padding: 12px 12px 6px 12px;
  background: #fff;
  color: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 1px 1px #0005;
}

.message .message-content {
  align-items: flex-start;
}

.message.you .message-content {
  align-items: flex-end;
  width: 100% !important;
  text-align: right;
}

.message.you .content {
  background: #fff !important;
  mix-blend-mode: unset;
  color: #284555;
}
</style>
