<template>
  <Container>
    <template #left-column>
      <Card blue top>
        <div class="flex col fullwidth">
          <SideNavEntries section="games" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <Card filename="bacteria.gif" justified>
      <div class="centered">
        <a href="#tutorial" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les Records</a
        >
        <a href="#tutorial" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les Meilleurs</a
        >
        <a href="#tutorial" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les Pires</a
        >
        <a href="#tutorial" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les Groupes</a
        >
        <a href="#tutorial" class="btn-sm pink-bg">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Help icon"
            src="@/asset/img/icon/help.png"
          />&nbsp;Comment jouer&nbsp;?
        </a>
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
    <Card>
      <template #header>Records !</template>
      <template #subtitle
        >Dans le bon ou le mauvais, ce sont les meilleurs !</template
      >
      <b>parties jouées</b><br />
      <div class="fullwidth light">Chapaking avec 537 parties jouées !</div>
      <br />
      <b>parties gagnées</b><br />
      <div class="fullwidth light">Meyriu avec 224 parties gagnées !</div>
      <br />
      <b>parties perdues</b><br />
      <div class="fullwidth light">Froidasse avec 302 parties perdues !</div>
      <br />
      <b>match nuls</b><br />
      <div class="fullwidth light">Gucci avec 11 match nuls !</div>
    </Card>
    <br /><Card>
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
            <th>Niveau</th>
            <th>Détail</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="message in messages"
            :key="message.id"
            :message="message"
          ></tr>
        </tbody>
      </table>
    </Card>
    <br /><Card>
      <template #header>Les 20 pires brèles de Bacteria ! </template>
      <template #subtitle>Les meilleurs... en partant du bas !</template>
      (Pour voir la catastrophe, laisse ta souris sans cliquer sur [détail])<br />
      <table class="score fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Membre</th>
            <th>Score</th>
            <th>Niveau</th>
            <th>Détail</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="message in messages"
            :key="message.id"
            :message="message"
          ></tr>
        </tbody>
      </table>
    </Card>
    <br /><Card>
      <template #header>Les 10 meilleurs groupes de Bacteria ! </template>
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
          <tr
            v-for="message in messages"
            :key="message.id"
            :message="message"
          ></tr>
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
import Rules from "@/component/slot/Rules.vue";

export default {
  name: "Games",
  components: {
    Rules
  },
};
</script>

<style lang="scss" scoped>
.fullwidth.light {
  background: #eef5fa;
  padding: 2px 0;
}

tr:nth-child(2n + 1) {
  background: #eef5fa;
}
</style>
