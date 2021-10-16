<template>
  <Container>
    <template #left-column
      ><Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="games" />
        </div> </Card
      ><br />
      <Rules bot />
    </template>
    <Card header="bacteria.gif" justified bg="bacteria.gif">
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
      Retrouve sur cette page le
      <a href="#top">classement des champions</a> et toute les infos dont tu as
      besoin, pour devenir toi aussi, un <b>guerrier Bacteria</b> .<br />
      <br />
    </Card>
    <br />
    <Card id="tutorial" justified>
      <template #header>Comment jouer&nbsp;!</template>

      <img
        draggable="false"
        @contextmenu.prevent
        src="@/asset/img/game/bacteria/preview.gif"
        alt="A game of bacteria"
        title="A game of bacteria"
        style="float: left; margin-right: 17px; border: 3px solid #6699cc"
      />
      Il y a 2 endroits pour jouer: Bacteria débutants et Bacteria Pro Si tu ne
      sais pas comment y aller demande ton chemin !<br />
      <br />
      Pour jouer c'est simple, va dans une cabine, elle s'allume si elle
      t'accepte, et quand un membre ou un visiteur va dans l'autre cabine, la
      partie démarre ! Attention: Les visiteurs ne peuvent jouer qu'en Bacteria
      débutants, les cabines de Bacteria Pro sont réservées aux membres ! </Card
    ><br />
    <Card id="records" v-if="data">
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
      Les 10 premiers du classement remportent le
      <b>casque Bacteria</b>.<br />
      <br />
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
          <col width="100%" />
        </colgroup>
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
            <td>{{ index + 1 }}</td>
            <td><user :user="rank.user"/></td>
            <td>{{ rank.score }}</td>
            <td>
              <Tooltip>
                <template #tooltip
                  >W{{ rank.win }}/D{{ rank.draw }}/L{{ rank.lose }}</template
                >
                <Progress :win="rank.win" :draw="rank.draw" :lose="rank.lose" />
              </Tooltip>
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br /><Card id="worst" v-if="data">
      <template #header>Les 20 pires brèles de Bacteria ! </template>
      <template #subtitle>Les meilleurs... en partant du bas !</template>
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
          <col width="100%" />
        </colgroup>
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
            <td>{{ index + 1 }}</td>
            <td><user :user="rank.user"/></td>
            <td>{{ rank.score }}</td>
            <td>
              <Tooltip>
                <template #tooltip
                  >W{{ rank.win }}/D{{ rank.draw }}/L{{ rank.lose }}</template
                >
                <Progress :win="rank.win" :draw="rank.draw" :lose="rank.lose" />
              </Tooltip>
            </td>
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
            <td>{{ index + 1 }}</td>
            <td><group :group="rank.group"/></td>
            <td>{{ rank.score }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
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
          src="@/asset/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
        />
        BBS de Bacteria<br />
        <br />
        Lis l'histoire sur Bacteria écrite par Kunu.<br />
        <img
          src="@/asset/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
        />
        Bacteria Sanctuary.<br />
        <br />
        <img
          src="@/asset/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
        />
        424187 membres joueurs de Bacteria.<br />
        <br />
        <img
          src="@/asset/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
        />
        12591547 parties ont été jouées.<br />
        <br />
        <img
          src="@/asset/img/puce.svg"
          alt="Puce"
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
import Group from "@/component/link/Group.vue";
import Progress from "@/component/Progress.vue";
import Tooltip from "@/component/Tooltip.vue";

export default {
  name: "Games",
  components: {
    User,
    Group,
    Progress,
    Tooltip
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
