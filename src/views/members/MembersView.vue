<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="Members" />
        </div>
      </GlobalCard>
      <br />
      <GlobalRules bot />
    </template>
    <GlobalCard
      v-if="data"
      header="new.webp"
      bg="new.png"
      :height="70"
      color="blue"
    >
      <div class="flex" style="justify-content: space-evenly">
        <div v-for="user of data.new" :key="user.id" class="flex col">
          <img
            src="@/assets/img/member/spotlight.svg"
            alt="Spotlight"
            draggable="false"
            height="93"
            width="100"
            @contextmenu.prevent
          /><GlobalAvatar
            :avatar="user.look.avatar"
            :emote="user.look.emote"
            :hat="user.look.hat"
            :body="user.look.body"
            :shoe="user.look.shoe"
            :item0="user.look.item0"
            :item1="user.look.item1"
            :item2="user.look.item2"
          />
          <UserLink :user="user" />
          <span
            >Membre n°<b>{{ user.id }}</b></span
          >
        </div>
      </div>
      <br />
      Les derniers membres qui ont rejoint l'archipel !

      <br />
      <router-link to="/book">Voir la liste des nouveaux arrivants</router-link>
    </GlobalCard>
    <br />
    <GlobalCard
      v-if="data"
      header="popularity_blue.webp"
      bg="popularity_blue.png"
      :height="75"
      color="blue"
    >
      <div class="flex" style="justify-content: space-evenly">
        <div v-for="user of data.popularity" :key="user.id" class="flex col">
          <img
            src="@/assets/img/member/spotlight.svg"
            alt="Spotlight"
            draggable="false"
            height="93"
            width="100"
            @contextmenu.prevent
          /><GlobalAvatar
            :avatar="user.look.avatar"
            :emote="user.look.emote"
            :hat="user.look.hat"
            :body="user.look.body"
            :shoe="user.look.shoe"
            :item0="user.look.item0"
            :item1="user.look.item1"
            :item2="user.look.item2"
          />
          <UserLink :user="user" />
          <span
            >Avec <b>{{ user.score }}</b> points</span
          >
        </div>
      </div>
      <br />
      Les membres les plus populaire de l'archipel !

      <br />
      <router-link to="/popularity">Voir la page popularité</router-link>
    </GlobalCard>
    <br />
    <GlobalCard
      v-if="data"
      header="wedding_blue.webp"
      bg="wedding_blue.png"
      color="blue"
    >
      <div class="flex" style="justify-content: space-evenly">
        <div
          v-for="couple of data.wedding"
          :key="couple.user1.id"
          class="flex col"
          style="align-items: center"
        >
          <img
            src="@/assets/img/member/spotlight.svg"
            alt="Spotlight"
            draggable="false"
            height="93"
            width="100"
            @contextmenu.prevent
          />
          <div class="flex" style="justify-content: center">
            <GlobalAvatar
              :avatar="couple.user1.look.avatar"
              emote="luv"
              :hat="couple.user1.look.hat"
              :body="couple.user1.look.body"
              :shoe="couple.user1.look.shoe"
              :item0="couple.user1.look.item0"
              :item1="couple.user1.look.item1"
              :item2="couple.user1.look.item2"
            /><GlobalAvatar
              :avatar="couple.user2.look.avatar"
              emote="luv"
              :hat="couple.user2.look.hat"
              :body="couple.user2.look.body"
              :shoe="couple.user2.look.shoe"
              :item0="couple.user2.look.item0"
              :item1="couple.user2.look.item1"
              :item2="couple.user2.look.item2"
            />
          </div>
          <span>
            <UserLink :user="couple.user1" /> &amp;
            <UserLink :user="couple.user2"
          /></span>
        </div>
      </div>
      <br />
      Les derniers mariages célébrés par Guruji
      <br />
      <router-link to="/weddings">Voir la page des mariages</router-link>
    </GlobalCard>
    <template #right-column
      ><GlobalCard color="blue">
        <template #button>
          <GlobalButton type="button" icon="search.svg">Chercher</GlobalButton>
        </template>
        <form class="flex fullwidth" @submit.prevent="searchUser()">
          <input
            v-model="userSearch"
            required
            minlength="3"
            maxlength="15"
            pattern="[\w\.\-_@]{3,15}"
            name="username"
            type="text"
            class="btn-md"
            autocomplete="username"
            aria-label="Username"
            :placeholder="$t('placeholder.username')"
          /><button type="submit" class="btn-action">go</button>
        </form>
        <br />
        <form class="flex fullwidth" @submit.prevent="searchGroup()">
          <input
            v-model="groupSearch"
            required
            minlength="3"
            maxlength="15"
            name="group"
            type="text"
            class="btn-md"
            autocomplete="group"
            aria-label="Group"
            :placeholder="$t('placeholder.group')"
          /><button type="submit" class="btn-action">go</button>
        </form></GlobalCard
      ></template
    >
  </GlobalContainer>
</template>
<script setup lang="ts">
import api from "@/modules/api";
import { fetchData } from "@/utils";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useMeta } from "vue-meta";

const router = useRouter();
const data = ref<any>(undefined);
const userSearch = ref("");
const groupSearch = ref("");

async function searchUser() {
  router.push(
    `/book/${
      (await api.get(`book/search/${userSearch.value}/search`)).data.mid
    }`
  );
}

async function searchGroup() {
  router.push(
    `/groups/${(await api.get(`groups/search/${groupSearch.value}`)).data.mid}`
  );
}

fetchData(async () => {
  data.value = (await api.get("members")).data;
});

useMeta({ title: "section.members" });
</script>
<style lang="scss" scoped>
img[src*="spotlight"] {
  margin-bottom: -70px;
  pointer-events: none;
}
</style>
