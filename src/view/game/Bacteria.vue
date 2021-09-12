<template>
  <Container>
    <template #left-column
      ><Card blue top>
        <div class="flex col fullwidth">
          <SideNavEntries section="games" />
        </div> </Card
      ><br />
      <Rules bot />
    </template>
    <Card filename="bacteria.gif" justified>
      <div class="flex centered hstack">
        <router-link to="#records" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les Records</router-link
        >
        <router-link to="#best" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les Meilleurs</router-link
        >
        <router-link to="#worst" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les Pires</router-link
        >
        <router-link to="#groups" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les Groupes</router-link
        >
        <router-link to="#tutorial" class="btn-sm pink-bg">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Help icon"
            src="@/asset/img/icon/help.png"
          />&nbsp;Comment jouer&nbsp;?
        </router-link>
      </div>
      <br />
      <img
        draggable="false"
        @contextmenu.prevent
        src="@/asset/img/game/bacteria/preview.gif"
        alt="A game of bacteria"
        title="A game of bacteria"
        style="float: left; margin-right: 17px; border: 3px solid #6699cc"
      />
      <br />
      Bacteria est le jeu ancestral de notre île. Depuis des milliers d'années,
      des membres dédient leur vie à s'entraîner à cet art si complexe et
      profond.
      <br />
      Des millions de combats ont déjà eu lieu, et encore plus de parties sont à
      venir.
      <br />
      Retrouve sur cette page le <a href="#top">classement des champions</a> et
      toute les infos dont tu as besoin, pour devenir toi aussi, un
      <b>guerrier Bacteria</b> .<br />
      <br />
    </Card>
    <br />
    <Card id="records">
      <template #header>Records !</template>
      <template #subtitle
        >Dans le bon ou le mauvais, ce sont les meilleurs !</template
      >
      <b>parties jouées</b><br />
      <div class="fullwidth light">
        <user :user="data.records.played.user" /> avec
        {{ data.records.played.record }} parties jouées&nbsp;!
      </div>
      <br />
      <b>parties gagnées</b><br />
      <div class="fullwidth light">
        <user :user="data.records.won.user" /> avec
        {{ data.records.won.record }} parties gagnées&nbsp;!
      </div>
      <br />
      <b>parties perdues</b><br />
      <div class="fullwidth light">
        <user :user="data.records.lost.user" /> avec
        {{ data.records.lost.record }} parties perdues&nbsp;!
      </div>
      <br />
      <b>match nuls</b><br />
      <div class="fullwidth light">
        <user :user="data.records.drawn.user" /> avec
        {{ data.records.drawn.record }} match nuls&nbsp;!
      </div>
    </Card>
    <br /><Card id="best" v-if="data">
      <template #header>Les 20 plus acharnés de Bacteria !</template>
      <template #subtitle
        >Des heures de phagocytage acharné pour en arriver la...</template
      >
      Les 10 premiers du classement remportent le <b>casque Bacteria</b>.<br />
      <br />
      (Pour voir les détails, laisse ta souris sans cliquer sur [détail])<br />
      <table class="score fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Membre</th>
            <th>Score</th>
            <th>Détail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ index }}</td>
            <td><user :user="rank.user" /></td>
            <td>{{ rank.score }}</td>
            <td>{{ rank.win }}/{{ rank.draw }}/{{ rank.lose }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br /><Card id="worst" v-if="data">
      <template #header>Les 20 pires brèles de Bacteria ! </template>
      <template #subtitle>Les meilleurs... en partant du bas !</template>
      (Pour voir la catastrophe, laisse ta souris sans cliquer sur [détail])<br />
      <table class="score fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Membre</th>
            <th>Score</th>
            <th>Détail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.worst" :key="index">
            <td>{{ index }}</td>
            <td><user :user="rank.user" /></td>
            <td>{{ rank.score }}</td>
            <td>{{ rank.win }}/{{ rank.draw }}/{{ rank.lose }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br /><Card id="groups" v-if="data">
      <template #header>Les 10 meilleurs groupes de Bacteria !</template>
      <template #subtitle>Plus on est de fous...</template>
      <table class="score fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Groupe</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.groups" :key="index">
            <td>{{ index }}</td>
            <td><group :group="rank.group" /></td>
            <td>{{ rank.score }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <template #right-column
      ><Card filename="ensavoirplus.gif" top>
        Toutes les infos, les techniques, news.<br />
        BBS de Bacteria<br />
        <br />
        Lis l'histoire sur Bacteria écrite par Kunu.<br />
        Bacteria Sanctuary.<br />
        <br />
        424187 membres joueurs de Bacteria.<br />
        <br />
        12591547 parties ont été jouées.<br />
        <br />
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
import Card from "@/component/Card.vue";
import Rules from "@/component/slot/Rules.vue";
import Container from "@/component/Container.vue";
import User from "../../component/link/User.vue";
import Group from "../../component/link/Group.vue";

export default {
  name: "Games",
  components: {
    Card,
    Container,
    Rules,
    User,
    Group,
  },
  data() {
    return {
      data: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    const url = "/api/bacteria.json";
    next((vm) => {
      vm.axios
        .get(url)
        .then((res) => {
          if (res) {
            vm.data = res.data;
          } else {
            next("/");
          }
        })
        .catch((error) => {
          console.log(error.toString());
        });
    });
  },
  beforeRouteUpdate() {
    this.axios
      .get("/api/bacteria.json")
      .then((res) => {
        this.data = res.data;
      })
      .catch((error) => console.log(error.toString()));
  },
};
</script>

<style lang="scss" scoped>
.fullwidth.light {
  background: #eef5fa;
  padding: 2px 0;
}

tbody tr:nth-child(2n + 1) {
  background: #eef5fa;
}

tr td:first-child {
  font-weight: bold;
}

.hstack {
  justify-content: center;
}
</style>
