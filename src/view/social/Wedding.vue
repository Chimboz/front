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
    <Card header="wedding.gif" justified bg="wedding.gif">
      <div class="flex centered hstack">
        <router-link to="#today" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Les mariages du jour</router-link
        >
        <router-link to="#general" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Les divorces</router-link
        >
        <router-link to="#yesterday" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Ceux qui tiennent</router-link
        >
        <router-link to="#groups" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Ceux qui ont tenu</router-link
        >
        <router-link to="#groups" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Archives</router-link
        >
        <router-link to="#tutorial" class="btn-sm pink-bg">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Help icon"
            src="@/asset/img/icon/help.png"
          />&nbsp;Comment ça marche&nbsp;?
        </router-link>
      </div>
    </Card>
    <br /><Card id="today" v-if="data">
      <template #header>Classement du Jour !</template>
      Classement toujours en cours ! <br />Tu peux encore descendre ou remonter
      quelqu'un !<br />
      <br />
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Star"
        src="@/asset/img/social/popularity/star.gif"
      />
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
        </colgroup>
        <thead>
          <tr>
            <th>Pts</th>
            <th>Membre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ rank.points }}</td>
            <td><user :user="rank.user"/></td>
          </tr>
        </tbody>
      </table>
      <br />
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Star"
        src="@/asset/img/social/popularity/poop.gif"
      />
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
        </colgroup>
        <thead>
          <tr>
            <th>Pts</th>
            <th>Membre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ rank.points }}</td>
            <td><user :user="rank.user"/></td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card id="yesterday" v-if="data">
      <template #header>Champions du Jour !</template>
      <template #subtitle>Hier, ils ont été héroïques... ou nazes !!!</template>
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Star"
        src="@/asset/img/social/popularity/star.gif"
      />
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
        </colgroup>
        <thead>
          <tr>
            <th>Pts</th>
            <th>Membre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ rank.points }}</td>
            <td><user :user="rank.user"/></td>
          </tr>
        </tbody>
      </table>
      <br />
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Star"
        src="@/asset/img/social/popularity/poop.gif"
      />
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
        </colgroup>
        <thead>
          <tr>
            <th>Pts</th>
            <th>Membre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ rank.points }}</td>
            <td><user :user="rank.user"/></td>
          </tr>
        </tbody>
      </table> </Card
    ><br />
    <Card id="general" v-if="data">
      <template #header>Classement Général !</template>
      <template #subtitle
        >Les membres qui gagnent à être connus... et ceux à éviter !!!</template
      >
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Star"
        src="@/asset/img/social/popularity/star.gif"
      />
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="30" />
          <col width="100%" />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>Pts</th>
            <th>Membre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ rank.points }}</td>
            <td><user :user="rank.user"/></td>
          </tr>
        </tbody>
      </table>
      <br />
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Star"
        src="@/asset/img/social/popularity/poop.gif"
      />
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="30" />
          <col width="100%" />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>Pts</th>
            <th>Membre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ rank.points }}</td>
            <td><user :user="rank.user"/></td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br /><Card id="groups" v-if="data">
      <template #header>Classement des Groupes ! </template>
      <template #subtitle>Plus on est de fous...</template>
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Star"
        src="@/asset/img/social/popularity/star.gif"
      />
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="30" />
          <col width="100%" />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>Pts</th>
            <th>Membre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ rank.points }}</td>
            <td><user :user="rank.user"/></td>
          </tr>
        </tbody>
      </table>
      <br />
      <img
        draggable="false"
        @contextmenu.prevent
        alt="Star"
        src="@/asset/img/social/popularity/poop.gif"
      />
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="30" />
          <col width="100%" />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>Pts</th>
            <th>Membre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ rank.points }}</td>
            <td><user :user="rank.user"/></td>
          </tr>
        </tbody>
      </table> </Card
    ><br />·
    <Card id="vote"
      ><template #header>Voter Pour/Contre un membre !</template> Un membre
      t'ennuie ? Descends le !<br />
      Tu trouves un membre sympa ? Donne lui ta voix !</Card
    >
    <template #right-column
      ><Card
        header="ensavoirplus.gif"
        :width="154"
        :height="34"
        top
        color="lightblue"
        justified
      >
        Toutes les infos, les techniques, news.<br />
        <img
          src="@/asset/img/icon/caret.gif"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />
        BBS de Bacteria<br />
        <br />
        Lis l'histoire sur Bacteria écrite par Kunu.<br />
        <img
          src="@/asset/img/icon/caret.gif"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />
        Bacteria Sanctuary.<br />
        <br />
        <img
          src="@/asset/img/icon/caret.gif"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />
        424187 membres joueurs de Bacteria.<br />
        <br />
        <img
          src="@/asset/img/icon/caret.gif"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />
        12591547 parties ont été jouées.<br />
        <br />
        <img
          src="@/asset/img/icon/caret.gif"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />
        8684 parties hier.<br />
        <br />
        Niveau des joueurs<br />
        <br />
        # Membres %<br />
        0 180500 42.55%<br />
        1 220717 52.03%<br />
        2 13356 3.15%<br />
        3 5305 1.25%<br />
        4 3067 0.72%<br />
        5 1045 0.25%<br />
        6 197 0.05%<br />
        7 0 0%
      </Card></template
    >
  </Container>
</template>

<script>
import User from "@/component/link/User.vue";

export default {
  name: "Games",
  components: {
    User
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/bacteria.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/bacteria.json");
    this.data = req.data;
  },
  metaInfo: {
    title: "section.wedding",
    meta: [
      {
        name: "description",
        content:
          "ChapatizRetro.com est un site pour s'amuser : tu peux tchater et te faire des amis, créer et faire évoluer ton personnage, jouer seul ou à plusieurs, fonder des groupes et même te marier !"
      },
      {
        property: "og:title",
        content: "Chapatiz Retro, accueil"
      },
      {
        property: "og:description",
        content: "Chapatiz Retro, accueil"
      },
      { property: "og:site_name", content: "Chapatiz Retro" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/announce/summer.png" },
      { property: "og:image:width", content: "192" },
      { property: "og:image:height", content: "192" }
    ]
  }
};
</script>

<style lang="scss" scoped>
.fullwidth.light {
  background: #eef5fa;
  padding: 2px 0;
}

tr td:first-child {
  font-weight: bold;
}

.hstack {
  justify-content: center;
}
</style>
