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
    <GlobalCard header="bacteria.webp" justified bg="bacteria.gif">
      <div class="flex centered hstack">
        <router-link to="#records" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
          />&nbsp;Les records</router-link
        >
        <router-link to="#best" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
          />&nbsp;Les meilleurs</router-link
        >
        <router-link to="#worst" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
            style="image-rendering: pixelated"
          />&nbsp;Les pires</router-link
        >
        <router-link to="#groups" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/assets/img/icon/caret.webp"
            width="3"
            height="6"
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
            src="@/assets/img/icon/button/help.svg"
          />&nbsp;Comment jouer&nbsp;?
        </router-link>
      </div>
      <br />
      <img
        draggable="false"
        @contextmenu.prevent
        src="@/assets/img/game/bacteria/preview.webp"
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
    </GlobalCard>
    <br />
    <GlobalCard id="tutorial" justified>
      <template #header>Comment jouer&nbsp;?</template>

      <img
        draggable="false"
        @contextmenu.prevent
        src="@/assets/img/game/bacteria/howto.png"
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
      <b>Bacteria Pro</b> sont réservées aux membres ! </GlobalCard
    ><br />
    <GlobalCard id="records" v-if="data">
      <template #header>Records !</template>
      <template #subtitle
        >Dans le bon ou le mauvais, ce sont les meilleurs !</template
      >
      <b>parties jouées</b><br />
      <div class="fullwidth light">
        <UserLink :user="data.records.played.user" /> avec
        {{ data.records.played.record }} parties jouées&nbsp;!
      </div>
      <br />
      <b>parties gagnées</b><br />
      <div class="fullwidth light">
        <UserLink :user="data.records.won.user" /> avec
        {{ data.records.won.record }} parties gagnées&nbsp;!
      </div>
      <br />
      <b>parties perdues</b><br />
      <div class="fullwidth light">
        <UserLink :user="data.records.lost.user" /> avec
        {{ data.records.lost.record }} parties perdues&nbsp;!
      </div>
      <br />
      <b>match nuls</b><br />
      <div class="fullwidth light">
        <UserLink :user="data.records.drawn.user" /> avec
        {{ data.records.drawn.record }} match nuls&nbsp;!
      </div>
    </GlobalCard>
    <br /><GlobalCard id="best" v-if="data">
      <template #header>Les 20 plus acharnés de Bacteria !</template>
      <template #subtitle
        >Des heures de phagocytage acharné pour en arriver la...</template
      >
      Les 10 premiers du classement remportent le
      <b>casque Bacteria</b>.<br />
      <br />
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
            <th>Détail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.best" :key="index">
            <td>{{ index + 1 }}</td>
            <td><UserLink :user="rank.user" /></td>
            <td>
              <b>{{ rank.score }}</b>
            </td>
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
    </GlobalCard>
    <br /><GlobalCard id="worst" v-if="data">
      <template #header>Les 20 pires brèles de Bacteria ! </template>
      <template #subtitle>Les meilleurs... en partant du bas !</template>
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
            <th>Détail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.worst" :key="index">
            <td>{{ index + 1 }}</td>
            <td><UserLink :user="rank.user" /></td>
            <td>
              <b>{{ rank.score }}</b>
            </td>
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
    </GlobalCard>
    <br /><GlobalCard id="groups" v-if="data">
      <template #header>Les 10 meilleurs groupes de Bacteria !</template>
      <template #subtitle>Plus on est de fous...</template>
      <table class="fullwidth">
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
            <td><GroupLink :group="rank.group" /></td>
            <td>
              <b>{{ rank.score }}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </GlobalCard>
    <template #right-column
      ><GlobalCard
        header="ensavoirplus.webp"
        :width="154"
        :height="46"
        top
        v-if="data"
        color="blue"
        justified
      >
        Toutes les infos, les techniques, news.<br />
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;<router-link to="/bbs/5">BBS de Bacteria</router-link><br />
        <br />
        Lis l'histoire sur <b>Bacteria</b> écrite par <b>Kunu</b>.<br />
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;<router-link to="bacteria/story">Bacteria Sanctuary</router-link
        ><br />
        <br />
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;<b>{{ data.stats.player }}</b> membres joueurs de
        <b>Bacteria</b>.<br />
        <br />
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;<b>{{ data.stats.games }}</b> parties ont été jouées.<br />
        <br />
        <img
          src="@/assets/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;<b>{{ data.stats.yesterday }}</b> parties hier.
      </GlobalCard></template
    >
  </GlobalContainer>
</template>

<script setup lang="ts">
import Progress from "@/components/core/Progress.vue";
import Tooltip from "@/components/core/Tooltip.vue";

// @vuese
// @group View/Games
// Bacteria page

  
  components: {
    Progress,
    Tooltip,
  },
  data() {
    return {
      data: null,
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
  },
};
</script>

<style lang="scss" scoped>
.fullwidth.light {
  background: var(--light);
  padding: var(--sm-gap) 0;
}

tr td:first-child {
  font-weight: bold;
}

.hstack {
  justify-content: center;
}
</style>
