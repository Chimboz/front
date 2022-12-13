<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </GlobalCard>
      <br />
      <GlobalRules bot />
    </template>
    <GlobalCard
      header="new.webp"
      bg="new.png"
      :height="70"
      color="blue"
      v-if="data"
    >
      <div class="flex" style="justify-content: space-evenly">
        <div v-for="user of data.new" :key="user.id" class="flex col">
          <img
            src="@/assets/img/member/spotlight.svg"
            alt="Spotlight"
            draggable="false"
            @contextmenu.prevent
            height="93"
            width="100"
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
      header="popularity_blue.webp"
      bg="popularity_blue.png"
      :height="75"
      color="blue"
      v-if="data"
    >
      <div class="flex" style="justify-content: space-evenly">
        <div v-for="user of data.popularity" :key="user.id" class="flex col">
          <img
            src="@/assets/img/member/spotlight.svg"
            alt="Spotlight"
            draggable="false"
            @contextmenu.prevent
            height="93"
            width="100"
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
      header="wedding_blue.webp"
      bg="wedding_blue.png"
      color="blue"
      v-if="data"
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
            @contextmenu.prevent
            height="93"
            width="100"
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
          <GlobalButton icon="search.svg">Chercher</GlobalButton>
        </template>
        <form @submit.prevent="search()" class="flex fullwidth">
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
          /><button type="submit" class="btn-action">go</button>
        </form>
        <br />
        <form @submit.prevent="search()" class="flex fullwidth">
          <input
            required
            minlength="3"
            maxlength="15"
            name="group"
            type="text"
            class="btn-md"
            autocomplete="group"
            :placeholder="$t('placeholder.group')"
          /><button type="submit" class="btn-action">go</button>
        </form></GlobalCard
      ></template
    >
  </GlobalContainer>
</template>
<script setup lang="ts">
import api from '@/modules/api';
import { fetchData } from '@/utils';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// @vuese
// @group View/Members
// Members page
const data: any = ref(undefined);

function search() {
  console.log("Envoyé!");
}

fetchData(async () => {
  data.value = (await api.get("members")).data;
})

// meta title section.members
</script>
<style lang="scss" scoped>
img[src*="spotlight"] {
  margin-bottom: -70px;
  pointer-events: none;
}
</style>
