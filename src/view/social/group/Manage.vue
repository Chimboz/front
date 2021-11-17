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
    <Card
      header="group.gif"
      bg="groups.gif"
      :height="70"
      color="blue"
      justified
    >
      <template #header>Gérer mes groupes</template>
      Sur cette page, tu peux tout faire et tout savoir sur tes groupes...<br />
      <br />
      Ils n'étaient en fait qu'une bande de nazes ? Désinscris-toi ! Alors, le
      gang de tes rêves t'as pris ? Découvre-le tout de suite ! Envie de fonder
      ton propre club ? Si tu as un super niveau, go !
    </Card>
    <br />
    <Card color="blue" justified v-if="data">
      <template #header>Mes inscriptions</template>
      <template #subtitle
        >Faire partie de ce groupe c'est ce qu'y a de plus classe...</template
      >
      <table class="groups fullwidth">
        <colgroup>
          <col width="100%" />
          <col width="150" />
        </colgroup>
        <thead>
          <tr>
            <th>Nom du groupe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(group, index) in data.member" :key="index">
            <td><group :group="group"/></td>
            <td>[<a @click.prevent="false">Se désinscrire</a>]</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card color="blue" v-if="data">
      <template #header>Mes demandes en attente </template>
      <template #subtitle>Tout vient à point à qui sait attendre !</template>
      <table class="groups fullwidth">
        <colgroup>
          <col width="100%" />
          <col width="150" />
        </colgroup>
        <thead>
          <tr>
            <th>Nom du groupe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(group, index) in data.pending" :key="index">
            <td><group :group="group"/></td>
            <td>[<a @click.prevent="false">Annuler</a>]</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card color="blue" v-if="data">
      <template #header>Mes groupes </template>
      <template #subtitle
        >Ils étaient bien sûr les meilleurs groupes de la communauté...
      </template>
      <table class="groups fullwidth">
        <colgroup>
          <col width="100%" />
          <col width="150" />
        </colgroup>
        <thead>
          <tr>
            <th>Nom du groupe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(group, index) in data.owner" :key="index">
            <td><group :group="group"/></td>
            <td>[<a @click.prevent="false">Gérer</a>]</td>
          </tr>
        </tbody>
      </table>
      <br />
      <router-link to="/groups/create"
        ><img
          src="@/asset/img/puce.svg"
          alt="Puce"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />&nbsp;Créer un nouveau groupe</router-link
      >
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
import Group from "@/component/link/Group.vue";

export default {
  name: "Groups",
  components: {
    Group
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/manage.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/manage.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.groups",
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
.groups {
  text-align: center;
}
</style>
