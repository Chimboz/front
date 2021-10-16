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
        alt="Bacteria"
        style="float: left; margin-right: 17px"
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
          src="@/asset/img/icon/help.png"
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
        alt="Patojdur"
        style="float: left; margin-right: 17px"
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
        alt="Mazo"
        style="float: left; margin-right: 17px"
      />
      <h4>Fais bosser ta bonne étoile !</h4>
      <br />

      Le premier jeu de hasard sur Chapatiz ! Des millions de parties jouées, un
      suspens insoutenable ! Il va falloir garder son sang froid et s'armer de
      patience, pour rivaliser avec les meilleurs !<br />
      <br />
      <router-link class="btn-sm pink-bg" to="/games/mazo">
        <img
          draggable="false"
          @contextmenu.prevent
          src="@/asset/img/icon/help.png"
        />&nbsp;Comment jouer&nbsp;?
      </router-link>
    </Card>
    <template #right-column
      ><Card color="blue" top>
        <template #header> Records ! </template>
        <template #subtitle
          >Dans le bon ou le mauvais, ce sont les meilleurs !</template
        >
        parties jouées:
        <br />
        fredazur avec 22665 parties jouées ! <br />
        <br />
        parties gagnées: <br />
        AleXxX_DeViLMaN avec 15171 parties gagnées ! <br />
        <br />
        parties perdues: <br />
        fredazur avec 20763 parties perdues ! <br />
        <br />
        match nuls: <br />
        20CeNt avec 1077 match nuls ! <br /> </Card
    ></template>
  </Container>
</template>

<script>
export default {
  name: "Games",
  metaInfo: {
    title: "title.games",
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
