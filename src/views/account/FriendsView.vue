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
            ·
            <span
              class="link"
              style="color: red; cursor: var(--pointer)"
              @click.prevent="cancel(friend)"
              @keyup.prevent="cancel(friend)"
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
              @keyup.prevent="accept(friend)"
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
              @keyup.prevent="decline(friend)"
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
            Dernière visite <b>{{ distanceToNow(friend.status.date) }}</b>
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
            v-model="pseudo"
            required
            minlength="3"
            maxlength="15"
            name="friend"
            type="text"
            class="btn-md"
            autocomplete="username"
            aria-label="Username"
            :placeholder="$t('placeholder.username')"
          /><button type="submit" class="btn-action">&nbsp;+&nbsp;</button>
        </form>
      </GlobalCard>
    </template>
  </GlobalContainer>
</template>
<script setup lang="ts">
import { ref } from "vue";
import api from "@/modules/api";
import { fetchData, hashColor } from "@/utils";
import { distanceToNow } from "@/utils/date";
import { RouterLink } from "vue-router";
import { useMeta } from "vue-meta";
import ScrollableContainer from "../../components/core/ScrollableContainerComponent.vue";

const data = ref<any>(undefined);
const pseudo = ref("");

async function cancel(friend: any) {
  if (
    (await api.get(`friends/cancel/${friend.user.id}`)).data.result ===
    "success"
  )
    data.value.splice(data.value.indexOf(friend), 1);
}

async function accept(friend: any) {
  const res = (await api.get(`friends/accept/${friend.user.id}`)).data;
  data.value.splice(data.value.indexOf(friend), 1, res.add);
}

async function decline(friend: any) {
  if (
    (await api.get(`friends/decline/${friend.user.id}`)).data.result ===
    "success"
  )
    data.value.splice(data.value.indexOf(friend), 1);
}

async function addFriend() {
  const res = (await api.get(`friends/add/${pseudo.value}`)).data;
  if (res.result === "success") data.value.push(res.data);
}

fetchData(async () => {
  // data.value = (await api.get("friends")).data;
  // TODO remove
  data.value = (await api.get("http://localhost:5173/api/friends.json")).data;
});

// /api/friends.json
useMeta({ title: "section.friends" });
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
