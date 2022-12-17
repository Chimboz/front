<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Account" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <GlobalCard v-if="data" color="yellow" justified
      ><template #subtop>Friends</template>
      <ScrollableContainer
        route="friends"
        :max-height="450"
        @scroll-data="(results: any[]) => (data = [...data, ...results])"
      >
        <div v-for="friend of data" :key="friend.user.id" class="friend">
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
            <span
              class="link"
              style="color: red; cursor: var(--pointer)"
              @click.prevent="cancel(friend)"
              ><img
                src="@/assets/img/icon/failure.svg"
                width="11"
                height="11"
                alt="Close"
                draggable="false"
                style="margin: 0 2px"
                @contextmenu.prevent
              />Annuler</span
            >
          </div>
          <div
            v-else-if="
              friend.status.hasOwnProperty('sent') && !friend.status.sent
            "
          >
            <span
              class="link"
              style="color: green; cursor: var(--pointer)"
              @click.prevent="accept(friend)"
              ><img
                src="@/assets/img/icon/success.svg"
                width="11"
                height="11"
                alt="Close"
                draggable="false"
                style="margin: 0 2px"
                @contextmenu.prevent
              />Accepter</span
            ><br /><span
              class="link"
              style="color: red; cursor: var(--pointer)"
              @click.prevent="decline(friend)"
              ><img
                src="@/assets/img/icon/failure.svg"
                width="11"
                height="11"
                alt="Close"
                draggable="false"
                style="margin: 0 2px"
                @contextmenu.prevent
              />Décliner</span
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
                alt="Online"
                height="20"
                width="17"
                src="@/assets/img/tiz/tiz_shape.svg"
                @contextmenu.prevent
              />&nbsp;<b>En ligne</b>
            </div>
            <b>{{ friend.status.room }}</b>
          </div>
        </div>
      </ScrollableContainer>
    </GlobalCard>
    <template #right-column
      ><GlobalCard color="blue" top>
        <form class="flex fullwidth" @submit.prevent="addFriend">
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
<script setup lang="ts">
import { formatDistanceToNowStrict } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { ref } from "vue";
import api from "@/modules/api";
import { fetchData } from "@/utils";
import { RouterLink } from "vue-router";
import ScrollableContainer from "../../components/core/ScrollableContainerComponent.vue";

const locales = { fr, enGB };
// @vuese
// @group View/Account
// Friends page

const data = ref<any>(undefined);

function formatDate(date: number) {
  return formatDistanceToNowStrict(new Date(date), {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
    addSuffix: true,
  });
}
function hashColor(str: string) {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += `00${value.toString(16)}`.substr(-2);
  }
  return colour;
}
function cancel(friend: any) {
  console.log(`Cancel ${friend.user.id}`);
  // API Call returning true if friend removed
  data.value.splice(data.value.indexOf(friend), 1);
}
function accept(friend: any) {
  console.log(`Accept ${friend.user.id}`);
  // API Call returning new friend infos (status)
  data.value.splice(data.value.indexOf(friend), 1, {
    user: {
      name: "Owned",
      id: 2,
      look: {
        avatar: 0,
        emote: "neutral",
        hat: 7,
        body: 334,
        shoe: 612,
        item0: 808,
        item1: 868,
        item2: 938,
      },
    },
    status: {
      connected: true,
      room: "La Colline Sacrée",
      date: 1630075662000,
    },
  });
}
function decline(friend: any) {
  console.log(`Decline ${friend.user.id}`);
  data.value.splice(data.value.indexOf(friend), 1);
}
function addFriend(form: any) {
  for (const element of form.target.elements) {
    if (element.name == "friend") {
      console.log(`Ajouté ${element.value} en ami`);
      data.value.push({
        user: {
          name: "Owned",
          id: 2,
          look: {
            avatar: 0,
            emote: "neutral",
            hat: 7,
            body: 334,
            shoe: 612,
            item0: 808,
            item1: 868,
            item2: 938,
          },
        },
        status: {
          sent: true,
        },
      });
    }
  }
}

fetchData(async () => {
  // data.value = (await api.get("friends")).data;
  // TODO remove
  data.value = (await api.get("http://localhost:5173/api/friends.json")).data;
});

// /api/friends.json
// meta title section.friends
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
  color: var(--light);
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
