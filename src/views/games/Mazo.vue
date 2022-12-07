<template>
  <GlobalContainer>
    <template #left-column
      ><GlobalCard color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="games" />
        </div> </GlobalCard
      ><br />
      <GlobalRules bot />
    </template>
    <GlobalCard header="mazo.webp" justified bg="mazo.gif">
      <div class="flex centered hstack">
        <router-link to="#gameplay" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
          />&nbsp;Le gameplay</router-link
        >
        <router-link to="#best" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
          />&nbsp;Les meilleurs</router-link
        >
        <router-link to="#tutorial" class="btn-sm pink-bg">
          <img
            draggable="false"
            @contextmenu.prevent
            width="14"
            height="13"
            alt="Help icon"
            src="@/assets/img/icon/button/help.svg"
          />&nbsp;Comment jouer&nbsp;?
        </router-link>
      </div>
      <br />
      <img
        draggable="false"
        @contextmenu.prevent
        src="@/assets/img/game/mazo/preview.webp"
        alt="Un coup gagnant"
        width="200"
        height="145"
        title="Un coup gagnant"
        style="float: left; margin-right: 16px"
      />
      <br />
      <b>MaZo</b> est un pur jeu de hasard/chance style roulette-russe !
      <br /><br />
      Le principe est simple: gagner le plus de fois possibles !<br />
      Contrairement à des jeux comme
      <router-link to="bacteria">Bacteria</router-link> ou
      <router-link to="patojdur">Patojdur</router-link> qui demandent des
      semaines d'entrainement pour devenir pro et atteindre le haut du
      classement, <b>MaZo</b> est un jeu ou tu peux devenir 1er du classement en
      quelques minutes... ou passer des premières places à dernier du classement
      en un seul coup !!! <b>>)</b> <br /><br />
      Qui s'arrêtera à temps ? Qui continuera une fois de trop ? @@ A toi de
      bien gérer, et... bonne chance <b>;)</b><br /><br />
      Les 3 premiers du classement gagnent un casque MaZo, les classés de la 4e
      à la 10e place gagnent un item trêfle.

      <br />
    </GlobalCard>
    <br />
    <GlobalCard id="tutorial" justified>
      <template #header>Comment jouer&nbsp;!</template>
      <template #subtitle
        >Attention : les visiteurs ne peuvent pas jouer !</template
      >
      <b>MaZo !</b> se joue où tu veux, quand tu veux...<br />
      <br />
      Tout seul la nuit dans un coin sombre et reculé de la forêt bleue, tôt le
      matin dans l'eau à Kopakabana, après chaque 18/20 en Maths <b>&lt;:D</b>,
      à l'accueil à plusieurs encouragé par des dizaines de tiz en délire, de la
      main gauche, avec une cuillere de nutella dans la bouche...<br />
      <br />
      C'est comme tu le sens, n'oublie jamais: un coup de travers et tu perds
      !!! </GlobalCard
    ><br />
    <GlobalCard id="gameplay" justified>
      <template #header>Gameplay</template>
      <b>MaZo</b> (toujours en version béta - version de test - pour le moment)
      se joue avec une commande de chat: tape <b>!mazo</b> pour jouer un coup,
      c'est tout&nbsp;!<br />
      <br />
      Tu as une chance sur deux de gagner.<br />
      Chaque fois que tu gagnes, ton score <b>MaZo</b> augmente d'un point.<br />
      Chaque fois que tu perds, ton score... reviens à zéro ! <b>:')</b><br />
      <br />
      Alors ? Est ce que tu vas savoir t'arrêter à temps ? <b>&lt;&lt;</b><br />
      <br />
      <b>Notes&nbsp;:</b><br />
      - Tu as toujours une chance sur deux de gagner/perdre quelque soit le
      score, ce n'est pas plus difficile avec un gros score.<br />
      - Chaque coup est du pur hasard, il n'y a pas de moment meilleur, c'est
      quand tu le sens.<br />
      - Le temps que met à s'afficher le résultat n'indique pas un bon/mauvais
      coup.<br />
    </GlobalCard>
    <br /><GlobalCard id="best" v-if="data">
      <template #header>Les 20 plus mazo de l'Archipel</template>
      <template #subtitle>Continuera ? Continuera pas ? &lt;:D</template>
      <table class="fullwidth">
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
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ index + 1 }}</td>
            <td><UserLink :user="rank.user" /></td>
            <td>
              <b>{{ rank.score }}</b>
            </td>
            <td>{{ formatDate(rank.date) }}</td>
          </tr>
        </tbody>
      </table>
    </GlobalCard>

    <template #right-column
      ><GlobalCard
        header="ensavoirplus.webp"
        :width="154"
        :height="34"
        top
        color="blue"
        justified
      >
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        /><b> MaZo</b> est actuellement en version beta (version de test)<br />
        <br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        /><b> MaZo (beta)</b> est accessible uniquement pour les membres de
        <b>niveau 15</b> et plus.<br /><br />
        <img
          src="@/assets/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />
        Le classement est mis à jour toutes les <b>10 minutes.</b
        ><br /> </GlobalCard
    ></template>
  </GlobalContainer>
</template>

<script setup lang="ts">
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group View/Games
// Mazo page

  
  data() {
    return {
      data: null,
    };
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), "PPp", {
        locale: locales[navigator.language.split("-")[0]],
      });
    },
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/mazo.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/mazo.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.mazo",
  },
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
