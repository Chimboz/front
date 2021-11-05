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
      Envie de former un vrai gang avec tes potes ? Rejoindre une guilde de
      guerriers Bacteria ? Un fan club de ta star préférée avec tes copines ?
      Marre des faux groupes qui sont en réalité de simples messages de forum
      ?<br />
      <br />
      Pour choisir ton clan, c'est ici ! Si tu disposes d'un niveau suffisant,
      tu peux rejoindre un ou des groupes ; et même en créer. Pour certains
      groupes, ton entrée est immédiate, pour d'autres tu devras être approuvé
      par le chef du groupe... A toi de faire tes preuves !
    </Card>
    <br />
    <Card color="blue" justified v-if="data">
      <template #header>Groupes officiels</template>
      <template #subtitle
        >Ce sont les groupes qui participent directement à
        <b>chimboz.fr</b>.</template
      >
      Les membres de ces groupes sont nommés par
      <router-link to="/group/1">les créateurs du site</router-link>, et se
      voient attribuer des rubriques à modérer (<router-link to="photos"
        >albums</router-link
      >, <router-link to="faq">faq</router-link>,
      <router-link to="bbs">BBS</router-link>...)ou même un poste sur le chat
      (<router-link to="/group/3">modos officiels</router-link>,
      <router-link to="/group/9">aideurs officiels</router-link>). <br /><br />
      <table class="groups fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom du groupe</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(group, index) in data.official" :key="index">
            <td
              ><b>{{ group.id }}</b></td
            >
            <td><group :group="group"/></td>
            <td>{{ group.type }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card color="blue" v-if="data">
      <template #header>Groupes de membre</template>
      <template #subtitle
        >Les 20 derniers groupes créés par les membres</template
      >
      Les membres de ces groupes sont designés par
      <b>le créateur du groupe</b>... <br /><br />
      <table class="groups fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom du groupe</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(group, index) in data.new" :key="index">
            <td
              ><b>{{ group.id }}</b></td
            >
            <td><group :group="group"/></td>
            <td>{{ group.type }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card color="blue" v-if="data">
      <template #header>Classement général des groupes, par jeu</template>
      <template #subtitle
        >Les 10 meilleurs groupes, tous les jeux réunis
      </template>
      Le nombre de points correspond au classement général.<br />
      Par exemple, si un groupe est classé
      <b>10ème à Bactéria, 2ème à Patojdur, et 7ème à Popularité</b>, leur
      nombre de points sera <b>10+2+7</b> soit <b>19 points</b>. Cela signifie
      que moins un groupe a des points, plus il est fort !<br /><br />
      <table class="groups fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom du groupe</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(group, index) in data.best" :key="index">
            <td
              ><b>{{ group.id }}</b></td
            >
            <td><group :group="group"/></td>
            <td>{{ group.score }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br />
    <Card v-if="data">
      <template #header>Moi et mes groupes</template>

      <router-link to="/groups/manage">Gérer mes groupes</router-link>
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
      vm.api.get("/api/groups.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/groups.json");
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
