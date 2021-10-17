<template>
  <Container v-if="data">
    <template #left-column>
      <Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="members" />
        </div>
      </Card>
      <br />
      <Rules bot />
    </template>
    <span class="pink justified">
      <router-link to="/bbs" class="pink"
        >» Retour à l'annuaire</router-link
      > </span
    ><br />
    <Card>
      Mariage
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
  <modal />
</template>

<script>
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Modal from "../../component/Modal.vue";

export default {
  name: "Wedding",
  components: {
    Modal
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/wedding.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/wedding.json");
    this.data = req.data;
  },
  computed: {
    formatDate() {
      return format(new Date(this.data.status.date), "PPP à p", {
        locale: fr,
        addSuffix: true
      });
    }
  },
  metaInfo: {
    title: "section.wedding",
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
<style lang="scss">
.card {
  background-size: cover;
}
.male .card {
  background-image: url(../../asset/img/member/header_mec.gif);
}

.female .card {
  background-image: url(../../asset/img/member/header_fille.gif);
}
</style>
<style lang="scss" scoped>
.member {
  overflow: hidden;
}

.sentence {
  margin-left: 33%;
  text-align: left;
}

.member-body {
  background: #eff5fa;
  clear: both;
}

.member-header {
  font-family: "Chimboz Heavy";
  color: #fff;
  font-size: 20px;
  text-shadow: 2px 1px #0008;
  min-height: 90px;
}

.member-header .tiz {
  float: left;
  margin: 40px auto -100% 12%;
  transform: rotate(-5deg) scale(3);
}

.pseudo {
  margin-left: 33%;
  width: 67%;
  font-size: 35px;
  fill: #fff;
  stroke: #f39;
  stroke-width: 3;
  text-shadow: -1px 3px #f39;
  height: 35px;
  overflow: visible;
}

.portrait {
  justify-content: center;
  align-items: center;
  background: url(../../asset/img/member/portrait.png);
  height: 112px;
  width: 104px;
  overflow: hidden;
}

.member-section,
.member-body {
  text-align: left;
  z-index: 1;
  position: relative;
  border-radius: 8px;
  padding: 8px;
}

.member-portrait {
  float: right;
  background: #fff;
  width: 100px;
}

.member-section {
  background: #a9cbe4;
}

.icon {
  display: inline-flex;
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
  flex-wrap: wrap;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #6090be;
  background: linear-gradient(to bottom, #deeaf5, #a7c6e4);
  border-radius: 4px;
}

.online {
  font-family: "Pixelated Verdana 10";
  font-size: 10px;
  color: #fff;
  justify-content: center;
  width: 100%;
  height: 26px;
  background: linear-gradient(to bottom, #0193ca, #2d4a97);
  border-radius: 10px;
}

.online.tchat {
  background: linear-gradient(to bottom, #81cb00, #40972d);
}

.online img {
  height: 20px;
}
</style>
