<template>
  <Container>
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="games" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <Card
      header="bacteria_blue.jpg"
      :height="74"
      color="blue"
      justified
      bg="bacteria_blue.gif"
    >
      <img
        draggable="false"
        @contextmenu.prevent
        src="@/asset/img/game/bacteria/visuel.jpg"
        width="150"
        height="150"
        alt="Bacteria preview"
        style="float: left; margin-right: 16px"
      />
      <h4>Le jeu culte de l'archipel</h4>
      <br />
      Des millions des parties jouées, des centaines de milliers de joueurs !
      Depuis des millénaires, les Watas, bactéries rouges enflammée, affrontent
      les Kamais, fameuse bactéries vertes mentholée ! <b>LE</b> jeu de
      Stratégie incontournable sur l'archipel !<br />
      <br />
      <router-link class="btn-sm pink-bg" to="/games/bacteria">
        <img
          draggable="false"
          @contextmenu.prevent
          width="14"
          height="13"
          src="@/asset/img/icon/help.png"
          alt="Help icon"
        />&nbsp;Comment jouer&nbsp;?
      </router-link>
    </Card>
    <br />
    <Card
      header="patojdur_blue.gif"
      :height="56"
      color="blue"
      justified
      bg="patojdur_blue.gif"
    >
      <img
        draggable="false"
        @contextmenu.prevent
        src="@/asset/img/game/patojdur/visuel.jpg"
        alt="Patojdur preview"
        width="150"
        height="150"
        style="float: left; margin-right: 16px"
      />
      <h4>La course la plus humide du web !</h4>
      <br />

      Viens affronter les plus rapides patojeurs dans une course d'obstacles
      haute en couleur ! Seul les plus rapides entreront dans la légende !
      <br />
      <br />
      <router-link class="btn-sm pink-bg" to="/games/patojdur">
        <img
          draggable="false"
          @contextmenu.prevent
          width="14"
          height="13"
          alt="Help icon"
          src="@/asset/img/icon/help.png"
        />&nbsp;Comment jouer&nbsp;?
      </router-link>
    </Card>
    <br />
    <Card
      header="mazo_blue.gif"
      :height="52"
      color="blue"
      justified
      bg="mazo_blue.gif"
    >
      <img
        draggable="false"
        @contextmenu.prevent
        src="@/asset/img/game/mazo/visuel.jpg"
        width="150"
        height="150"
        alt="Mazo preview"
        style="float: left; margin-right: 16px"
      />
      <h4>Fais bosser ta bonne étoile !</h4>
      <br />

      Le premier jeu de hasard sur Chimboz ! Des millions de parties jouées, un
      suspens insoutenable ! Il va falloir garder son sang froid et s'armer de
      patience, pour rivaliser avec les meilleurs !<br />
      <br />
      <router-link class="btn-sm pink-bg" to="/games/mazo">
        <img
          draggable="false"
          @contextmenu.prevent
          width="14"
          height="13"
          src="@/asset/img/icon/help.png"
          alt="Help icon"
        />&nbsp;Comment jouer&nbsp;?
      </router-link>
    </Card>
    <template #right-column
      ><Card
        color="blue"
        header="games.gif"
        v-if="data"
        :width="154"
        :height="49"
      >
        <div class="fullwidth">
          <img
            src="@/asset/img/game/bacteria/head.gif"
            alt="Bacteria header"
            width="154"
            height="50"
            draggable="false"
            @contextmenu.prevent
          />
          <img
            src="@/asset/img/game/bacteria/bg.gif"
            alt="Bacteria background"
            width="154"
            height="84"
            draggable="false"
            @contextmenu.prevent
          />
          <Avatar
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
            <user :user="data.bacteria.user" /><br />est champion Bacteria
            !</div
          >
          <img
            src="@/asset/img/game/patojdur/head.gif"
            alt="Patojdur header"
            width="154"
            height="50"
            draggable="false"
            @contextmenu.prevent
          />
          <img
            src="@/asset/img/game/patojdur/bg.gif"
            alt="Patojdur background"
            width="154"
            height="84"
            draggable="false"
            @contextmenu.prevent
          />
          <Avatar
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
            <user :user="data.patojdur.user" /><br />est champion Patojdur
            !</div
          >
          <img
            src="@/asset/img/game/mazo/head.gif"
            alt="Mazo header"
            width="154"
            height="50"
            draggable="false"
            @contextmenu.prevent
          />
          <img
            src="@/asset/img/game/mazo/bg.gif"
            alt="Mazo background"
            width="154"
            height="84"
            draggable="false"
            @contextmenu.prevent
          />
          <Avatar
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
            <user :user="data.mazo.user" /><br />est un des meilleurs Mazoteurs
            du moment !</div
          >
        </div></Card
      ></template
    >
  </Container>
</template>

<script>
// @vuese
// @group View/Games
// Games page
export default {
  name: "Games",
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/games.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/games.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.games",
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
.game-champion {
  background: linear-gradient(to bottom, #58a8db, #6ebef0);
  margin-bottom: 6px;
}
</style>
