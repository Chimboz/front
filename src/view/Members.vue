<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <Card header="new.gif" bg="new.png" :height="70" color="blue" v-if="data">
      <div class="flex" style="justify-content: space-evenly">
        <div v-for="user of data.new" :key="user.id" class="flex col"
          ><Tiz
            :avatar="user.look.avatar"
            :emote="user.look.emote"
            :hat="user.look.hat"
            :body="user.look.body"
            :shoe="user.look.shoe"
            :item0="user.look.item0"
            :item1="user.look.item1"
            :item2="user.look.item2"
          />
          <user :user="user" />
          <span
            >Membre n°<b>{{ user.id }}</b></span
          ></div
        >
      </div>
      <br />
      Les derniers membres qui ont rejoint l'archipel !

      <br />
      <router-link to="/book">Voir la liste des nouveaux arrivants</router-link>
    </Card>
    <br />
    <Card
      header="popularity_blue.gif"
      bg="popularity_blue.png"
      :height="75"
      color="blue"
      v-if="data"
    >
      <div class="flex" style="justify-content: space-evenly">
        <div v-for="user of data.popularity" :key="user.id" class="flex col"
          ><Tiz
            :avatar="user.look.avatar"
            :emote="user.look.emote"
            :hat="user.look.hat"
            :body="user.look.body"
            :shoe="user.look.shoe"
            :item0="user.look.item0"
            :item1="user.look.item1"
            :item2="user.look.item2"
          />
          <user :user="user" />
          <span
            >Avec <b>{{ user.score }}</b> points</span
          ></div
        >
      </div>
      <br />
      Les membres les plus populaire de l'archipel !

      <br />
      <router-link to="/popularity">Voir la page popularité</router-link>
    </Card>
    <br />
    <Card
      header="wedding_blue.gif"
      bg="wedding_blue.png"
      color="blue"
      v-if="data"
    >
      <div class="flex" style="justify-content: space-evenly">
        <div
          v-for="couple of data.wedding"
          :key="couple.user1.id"
          class="flex col"
          ><div class="flex" style="justify-content: center"
            ><Tiz
              :avatar="couple.user1.look.avatar"
              :emote="couple.user1.look.emote"
              :hat="couple.user1.look.hat"
              :body="couple.user1.look.body"
              :shoe="couple.user1.look.shoe"
              :item0="couple.user1.look.item0"
              :item1="couple.user1.look.item1"
              :item2="couple.user1.look.item2"/><Tiz
              :avatar="couple.user1.look.avatar"
              :emote="couple.user1.look.emote"
              :hat="couple.user1.look.hat"
              :body="couple.user1.look.body"
              :shoe="couple.user1.look.shoe"
              :item0="couple.user1.look.item0"
              :item1="couple.user1.look.item1"
              :item2="couple.user1.look.item2"
          /></div>
          <span>
            <user :user="couple.user1"/> &amp;
            <user :user="couple.user2"/></span
        ></div>
      </div>
      <br />
      Les derniers mariages célébrés par Guruji
      <br />
      <router-link to="/wedding">Voir la page des mariages</router-link>
    </Card>
    <template #right-column
      ><Card color="blue">
        <template #button>
          <Button icon="register.svg">Chercher</Button>
        </template>
        <form @submit.prevent="search()" class="flex fullwidth"
          ><input
            required
            minlength="3"
            maxlength="15"
            pattern="[\w\.\-_@]{3,15}"
            name="username"
            type="text"
            class="btn-md"
            autocomplete="username"
            :placeholder="$t('placeholder.username')"
          /><button
            type="submit"
            class="btn-md"
            style="font-family: 'Chimboz Heavy'"
            >go</button
          ></form
        ><br /><form @submit.prevent="search()" class="flex fullwidth"
          ><input
            required
            minlength="3"
            maxlength="15"
            name="group"
            type="text"
            class="btn-md"
            autocomplete="group"
            :placeholder="$t('placeholder.group')"
          /><button
            type="submit"
            class="btn-md"
            style="font-family: 'Chimboz Heavy'"
            >go</button
          ></form
        ></Card
      ><br
    /></template>
  </Container>
</template>
<script>
import Tiz from "@/component/Tiz.vue";
import User from "../component/link/User.vue";

export default {
  name: "Members",
  components: {
    Tiz,
    User
  },
  data() {
    return {
      data: null
    };
  },
  methods: {
    search() {
      console.log("Envoyé!");
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/members.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/members.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.members",
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

<style lang="scss" scoped></style>
