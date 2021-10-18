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
    <Card header="new.gif" bg="new.png" :height="70" color="blue">
      <div class="flex" style="justify-content: space-evenly">
        <Tiz /><Tiz /><Tiz />
      </div>
      <br />
      Les derniers membres qui ont rejoint l'archipel !

      <br />
      <router-link to="/annuaire"
        >Voir la liste des nouveaux arrivants</router-link
      >
    </Card>
    <br />
    <Card
      header="popularity_blue.gif"
      bg="popularity_blue.png"
      :height="75"
      color="blue"
    >
      <div class="flex" style="justify-content: space-evenly">
        <Tiz /><Tiz /><Tiz />
      </div>
      <br />
      Les membres les plus populaire de l'archipel !

      <br />
      <router-link to="/popu">Voir la page popularité</router-link>
    </Card>
    <br />
    <Card header="wedding_blue.gif" bg="wedding_blue.png" color="blue">
      <div class="flex" style="justify-content: space-evenly">
        <Tiz /><Tiz /><Tiz />
      </div>
      <br />
      Les derniers mariages célébrés par Guruji
      <br />
      <router-link to="/wedding">Voir la page des mariages</router-link>
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
import Tiz from "@/component/Tiz.vue";

export default {
  name: "Members",
  components: {
    Tiz
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/members.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/members.json");
    this.data = req.data;
  },
  metaInfo: {
    title: "section.members",
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

<style lang="scss" scoped></style>
