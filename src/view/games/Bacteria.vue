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
            width="3"
            height="6"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Les records</router-link
        >
        <router-link to="#best" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            width="3"
            height="6"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Les meilleurs</router-link
        >
        <router-link to="#worst" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            width="3"
            height="6"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Les pires</router-link
        >
        <router-link to="#groups" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            width="3"
            height="6"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Les groupes</router-link
        >
        <router-link to="#tutorial" class="btn-sm pink-bg">
          <img
            draggable="false"
            @contextmenu.prevent
            width="14"
            height="13"
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
        width="200"
        height="191"
        alt="A game of bacteria"
        title="A game of bacteria"
        style="float: left; margin-right: 16px; border: 3px solid #6699cc"
      />
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
      <template #header>Comment jouer&nbsp;?</template>

      <img
        draggable="false"
        @contextmenu.prevent
        src="@/asset/img/game/bacteria/howto.png"
        alt="A game of bacteria"
        width="194"
        height="128"
        title="A game of bacteria"
        style="float: left; margin-right: 16px; border: 3px solid #6699cc"
      />
      Il y a 2 endroits pour jouer: <b>Bacteria débutants</b> et
      <b>Bacteria Pro</b> Si tu ne sais pas comment y aller demande ton chemin
      !<br />
      <br />
      Pour jouer c'est simple, va dans une cabine, elle s'allume si elle
      t'accepte, et quand un membre ou un visiteur va dans l'autre cabine, la
      partie démarre !<br /><b>Attention</b>&nbsp;: Les visiteurs ne peuvent
      jouer qu'en <b>Bacteria débutants</b>, les cabines de
      <b>Bacteria Pro</b> sont réservées aux membres ! </Card
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
            <td><user :user="rank.user" /></td>
            <td
              ><b>{{ rank.score }}</b></td
            >
            <td>
              <Tooltip>
                <template #tooltip
                  ><b
                    >W{{ rank.win }}/D{{ rank.draw }}/L{{ rank.lose }}</b
                  ></template
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
            <td><user :user="rank.user" /></td>
            <td
              ><b>{{ rank.score }}</b></td
            >
            <td>
              <Tooltip>
                <template #tooltip
                  ><b
                    >W{{ rank.win }}/D{{ rank.draw }}/L{{ rank.lose }}</b
                  ></template
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
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
        </colgroup>
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
            <td><group :group="rank.group" /></td>
            <td
              ><b>{{ rank.score }}</b></td
            >
          </tr>
        </tbody>
      </table>
    </Card>
    <template #right-column
      ><Card
        header="ensavoirplus_blue.gif"
        :width="154"
        :height="46"
        top
        v-if="data"
        color="blue"
        justified
      >
        Toutes les infos, les techniques, news.<br />
        <img
          src="@/asset/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;<router-link to="/bbs/5">BBS de Bacteria</router-link><br />
        <br />
        Lis l'histoire sur <b>Bacteria</b> écrite par <b>Kunu</b>.<br />
        <img
          src="@/asset/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;<router-link to="bacteria/story">Bacteria Sanctuary</router-link
        ><br />
        <br />
        <img
          src="@/asset/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;<b>{{ data.stats.player }}</b> membres joueurs de
        <b>Bacteria</b>.<br />
        <br />
        <img
          src="@/asset/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;<b>{{ data.stats.games }}</b> parties ont été jouées.<br />
        <br />
        <img
          src="@/asset/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;<b>{{ data.stats.yesterday }}</b> parties hier.
      </Card></template
    >
  </Container>
</template>

<script>
import Progress from "@/component/core/Progress.vue";
import Tooltip from "@/component/core/Tooltip.vue";

// @vuese
// @group View/Games
// Bacteria page
export default {
  name: "Bacteria",
  components: {
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
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/bacteria.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.bacteria",
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
