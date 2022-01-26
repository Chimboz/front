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
      <div class="friend" v-for="friend of data" :key="friend.user.id">
        <router-link
          :to="'/book/' + friend.user.id"
          :class="{ pending: friend.status.hasOwnProperty('sent') }"
        >
          <UserLink :user="friend.user" class="ellipsis" />
          <div
            class="tiz-portrait"
            :style="{ background: hashColor(friend.user.name) }"
          >
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
        </router-link>
        <div v-if="friend.status.sent">
          <a @click.prevent="cancel(friend)" style="color: red; cursor: pointer"
            ><img
              src="@/asset/img/icon/failure.svg"
              width="11"
              height="11"
              alt="Close"
              draggable="false"
              style="margin: 0 2px"
              @contextmenu.prevent
            />Annuler</a
          >
        </div>
        <div
          v-else-if="
            friend.status.hasOwnProperty('sent') && !friend.status.sent
          "
        >
          <a
            @click.prevent="accept(friend)"
            style="color: green; cursor: pointer"
            ><img
              src="@/asset/img/icon/success.svg"
              width="11"
              height="11"
              alt="Close"
              draggable="false"
              style="margin: 0 2px"
              @contextmenu.prevent
            />Accepter</a
          ><br /><a
            @click.prevent="decline(friend)"
            style="color: red; cursor: pointer"
            ><img
              src="@/asset/img/icon/failure.svg"
              width="11"
              height="11"
              alt="Close"
              draggable="false"
              style="margin: 0 2px"
              @contextmenu.prevent
            />Décliner</a
          >
        </div>
        <div v-else-if="!friend.status.connected">
          Dernière visite le <b>{{ formatDate(friend.status.date) }}</b>
        </div>
        <div v-else>
          <div
            class="online flex centered"
            :class="{ tchat: friend.status.room }"
          >
            <img
              draggable="false"
              @contextmenu.prevent
              alt="Online"
              src="@/asset/img/tiz/tiz_shape.svg"
            />&nbsp;<b>En ligne</b>
          </div>
          <b>{{ friend.status.room }}</b>
        </div>
      </div>
    </GlobalCard>
    <template #right-column
      ><GlobalCard color="blue" top>
        <form @submit.prevent="addFriend" class="flex fullwidth">
          <input
            required
            minlength="3"
            maxlength="15"
            name="friend"
            type="text"
            class="btn-md"
            autocomplete="username"
            :placeholder="$t('placeholder.username')"
          /><button type="submit" class="btn-action">&nbsp;+&nbsp;</button>
        </form>
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
        addSuffix: true,
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
    cancel(friend) {
      console.log("Cancel " + friend.user.id);
      // API Call returning true if friend removed
      this.data.splice(this.data.indexOf(friend), 1);
    },
    accept(friend) {
      console.log("Accept " + friend.user.id);
      // API Call returning new friend infos (status)
      this.data.splice(this.data.indexOf(friend), 1, {
        user: {
          name: "Owned",
          id: 2,
          look: {
            avatar: 0,
            emote: "neutral",
            hat: 7,
            body: 12,
            shoe: 7,
            item0: 17,
            item1: 1,
            item2: 1,
          },
        },
        status: {
          connected: true,
          room: "La Colline Sacrée",
          date: 1630075662000,
        },
      });
    },
    decline(friend) {
      console.log("Decline " + friend.user.id);
      this.data.splice(this.data.indexOf(friend), 1);
    },
    addFriend(form) {
      for (let element of form.target.elements) {
        if (element.name == "friend") {
          console.log(`Ajouté ${element.value} en ami`);
          this.data.push({
            user: {
              name: "Owned",
              id: 2,
              look: {
                avatar: 0,
                emote: "neutral",
                hat: 7,
                body: 12,
                shoe: 7,
                item0: 17,
                item1: 1,
                item2: 1,
              },
            },
            status: {
              sent: true,
            },
          });
        }
      }
    },
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

<style lang="scss" scoped>
.friend {
  display: inline-flex;
  flex-direction: column;
  width: 70px;
  text-align: center;
  margin: 4px;
}

.pending {
  opacity: 0.5;
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

.online {
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
  color: #fff;
  justify-content: center;
  width: 100%;
  height: 26px;
  background: linear-gradient(to bottom, #0193ca, #2d4a97);
  border-radius: 10px;
}

.online.tchat {
  background: linear-gradient(to bottom, #81cb00, #40972d);
}

.online img {
  height: 20px;
}
</style>
