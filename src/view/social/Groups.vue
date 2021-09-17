<template>
  <Container>
    <template #left-column>
      <Card blue top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <Card filename="group.gif" height="70" blue justified>
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
    <Card blue justified v-if="data">
      <template #header>Les Groupes Officiels</template>
      <template #subtitle
        >Ce sont les groupes qui participent directement à
        <b>chapatizretro.com</b>.</template
      >
      Les membres de ces groupes sont nommés par les créateurs du site, et se
      voient attribuer des rubriques à modérer (fansites, albums, faq, BBS...)ou
      même un poste sur le chat (modos officiels, modo des BBS officiels).

      <table class="groups fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom du Groupe</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(group, index) in data.official" :key="index">
            <td>{{ group.index }}</td>
            <td><group :group="group" /></td>
            <td>{{ group.genre }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <template #right-column
      ><Card blue top>
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
import Card from "@/component/Card.vue";
import Rules from "@/component/slot/Rules.vue";
import Group from "@/component/link/Group.vue";
import Tiz from "@/component/Tiz.vue";
import Container from "@/component/Container.vue";

export default {
  name: "Groups",
  components: {
    Card,
    Container,
    Rules,
    Tiz,
    Group,
  },
  data() {
    return {
      data: null,
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
};
</script>

<style lang="scss" scoped>
.groups {
  text-align: center;
}
</style>
