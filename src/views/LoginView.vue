<template>
  <GlobalContainer>
    <template #left-column>
      <GlobalCard v-if="data" color="blue" top>
        <template #header
          ><router-link to="/online"
            ><h1>{{ data.connected }}</h1>
            {{ $t("online", data.connected) }}</router-link
          ></template
        >
        <div>{{ data.members }} {{ $t("members.text", data.members) }}</div>
        {{ data.last24 }} {{ $t("members.past", data.last24) }} </GlobalCard
      ><br />
      <router-link to="/shop">
        <GlobalCard
          v-if="data"
          color="yellow"
          header="packs.webp"
          :width="154"
          :height="96"
          class="packs"
        >
          <template #button>
            <GlobalButton type="button" color="yellow" icon="register.svg"
              >Pack</GlobalButton
            >
          </template>
          <Pack name="supporter" :looks="data.shop.looks" />
        </GlobalCard>
      </router-link>
      <br />
    </template>
    <Demo />
    <br />
    <GlobalCard v-if="data">
      <template #subtop
        ><router-link to="/chaparazzi" class="chaparazzi-link">{{
          $t("section.chaparazzi")
        }}</router-link></template
      >
      <div class="gallery flex">
        <div
          v-for="photo of data.gallery"
          :key="photo.name"
          class="flex col photo"
          style="margin: auto"
        >
          <router-link :to="'/chaparazzi/' + photo.name">
            <img
              draggable="false"
              :src="`gallery/${photo.name}`"
              :alt="photo.name"
              @contextmenu.prevent /></router-link
          ><b>{{ formatDatePhotos(photo.date) }}</b>
        </div>
      </div>
      <div style="text-align: right">
        <router-link to="/chaparazzi">
          <img
            src="@/assets/img/puce.svg"
            alt="Puce"
            draggable="false"
            height="17"
            width="17"
            @contextmenu.prevent
          />
          {{ $t("chaparazzi.more") }}
        </router-link>
      </div>
    </GlobalCard>
    <template #right-column>
      <GlobalCard v-if="data" color="blue" header="games.gif">
        <div class="fullwidth">
          <img src="@/assets/img/game/bacteria/head.gif" alt="Bacteria" />
          <img src="@/assets/img/game/bacteria/bg.gif" alt="" />
          <GlobalAvatar
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
            <UserLink :user="data.bacteria.user" /><br />{{
              $t("champion.bacteria")
            }}
          </div>
          <img src="@/assets/img/game/patojdur/head.gif" alt="Patojdur" />
          <img src="@/assets/img/game/patojdur/bg.gif" alt="" />
          <GlobalAvatar
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
            <UserLink :user="data.patojdur.user" /><br />{{
              $t("champion.patojdur")
            }}
          </div>
          <img src="@/assets/img/game/mazo/head.gif" alt="Mazo" />
          <img src="@/assets/img/game/mazo/bg.gif" alt="" />
          <GlobalAvatar
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
            <UserLink :user="data.mazo.user" /><br />{{ $t("champion.mazo") }}
          </div>
        </div></GlobalCard
      >
    </template>
  </GlobalContainer>
</template>
<script setup lang="ts">
import Demo from "@/components/DemoComponent.vue";
import Pack from "@/components/PackComponent.vue";
import api from "@/modules/api";
import { fetchData } from "@/utils";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const locales = { fr, enGB };

// @vuese
// @group View
// Login page
const data: any = ref(undefined);

function formatDatePhotos(date: number) {
  return format(new Date(date), "PP", {
    locale: locales[navigator.language.split("-")[0] as keyof typeof locales],
  });
}

fetchData(async () => {
  data.value = (await api.get("right")).data;
  api.get("https://chimboz.fr/sanctum/csrf-cookie");
});

// meta title section.login
</script>
<style lang="scss">
.packs .card-btn {
  background: linear-gradient(
    to bottom,
    var(--dark-card-blue),
    var(--dark-card-blue) 50%,
    var(--main-card-yellow) 50%
  ) !important;
}
</style>
<style lang="scss" scoped>
.login-form {
  justify-content: center;
}

.game-champion {
  background: linear-gradient(to bottom, #58a8db, var(--selected-main-card));
  margin-bottom: var(--md-gap);
}

.chaparazzi-link {
  font-weight: normal;
  fill: var(--light);
}

.chaparazzi-link:hover {
  text-decoration: none;
}

.gallery {
  flex-wrap: wrap;
}

.gallery .photo {
  width: 30%;
}

.gallery .photo img {
  border: 1px solid var(--main-bg);
  width: 100%;
}
</style>
