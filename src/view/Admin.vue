<template>
  <GlobalContainer>
    <template #left-column
      ><GlobalCard color="blue" justified>
        <template #button>
          <GlobalButton icon="rules.svg">Registre</GlobalButton>
        </template>
        <div class="logs fullwidth">
          <div class="log" v-for="(log, index) in data" :key="index">
            <b>{{ formatDate(log.date) }}</b
            ><br />
            <b>{{ log.type }} de <UserLink :user="log.author" /></b><br />
            {{ log.reason }}<br />
            <div style="text-align: right">
              <em>par <UserLink :user="log.moderator" /></em>
            </div>
          </div></div></GlobalCard
    ></template>
    <router-view></router-view>
    <template #right-column
      ><GlobalCard color="blue">
        <template #button>
          <GlobalButton icon="search.svg">Chercher</GlobalButton>
        </template>
        <form @submit.prevent="search()" class="flex fullwidth">
          <input
            required
            autofocus
            minlength="3"
            maxlength="15"
            pattern="[\w\.\-_@]{3,15}"
            name="username"
            type="text"
            class="btn-md"
            autocomplete="username"
            :placeholder="$t('placeholder.username')"
            v-model="username"
            v-on:keyup="onKeypressValue()"
            v-on:keydown="onKeypressValue()"
          />
          <button type="submit" class="btn-action">go</button>
        </form>
        <div class="suggestions" v-if="suggestionsHere && this.username != ''">
          <ul>
            <li v-for="suggestion in suggestionsHere" :key="suggestion">
              <router-link :to="'/admin/' + suggestion.mid">{{
                suggestion.pseudo
              }}</router-link>
            </li>
          </ul>
        </div></GlobalCard
      ></template
    >
  </GlobalContainer>
</template>
<script>
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group View
// Admin page.
export default {
  name: "AdminView",
  data() {
    return {
      data: null,
      username: "",
      suggestionsHere: null,
    };
  },
  methods: {
    onKeypressValue() {
      if (this.username != undefined && this.username != "") {
        this.api.get("/api/test.json").then((res) => {
          if (res.data && res.data.length > 0) {
            this.suggestionsHere = res.data;
          }
        });
      }
    },
    formatDate(date) {
      return format(new Date(date), "PPp", {
        locale: locales[navigator.language.split("-")[0]],
      });
    },
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/admin.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/admin.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.admin",
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
.logs {
  max-height: 200px;
  overflow-y: auto;
}
.log {
  padding: var(--md-gap);
}

.log:nth-child(2n + 1) {
  background: #fff3;
}
</style>
