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
    <Card header="group.gif" :height="70" color="blue" v-if="data" justified>
      <div class="group-header">
        <blazon
          :shape="data.blazon.shape"
          :top="data.blazon.top"
          :bot="data.blazon.bot"
          :primary="data.blazon.primary"
          :secondary="data.blazon.secondary"
        />
        <div class="flex col">
          <StrokeText class="group-name">{{ this.data.name }}</StrokeText>
          <div class="motto">"{{ this.data.motto }}"</div> </div
        ><img
          v-if="this.data.official"
          src="@/asset/img/group/official.svg"
          style="float: right"
        />
      </div>
      <div class="markdown-body description" v-html="formatDescription"></div
      ><br />
      <Card v-if="data" class="justified">
        {{ $t(`group.leader.${data.type}`) }}:
        <User :user="data.leader" />
        <br /><br />
        Occupation du groupe:
        <b>{{ (((data.members.length + 1) / data.size) * 100).toFixed(0) }}%</b>
        (<b>{{ data.members.length + 1 }}</b
        >/<b>{{ data.size }}</b
        >)<br /><br />
        Membres du groupe:
        <User
          v-for="(user, index) of this.data.members"
          :user="user"
          :key="user.id"
          :separator="index < this.data.members.length - 1"
        /><br /><br />
        Localisation : <b>{{ data.localisation }}</b
        ><br /><br />
        <div class="icon flex col centered">
          <div style="line-height: 10px">Niveau moyen</div>
          <div
            ><img
              draggable="false"
              @contextmenu.prevent
              width="19"
              height="21"
              src="@/asset/img/number/2.svg" /><img
              draggable="false"
              @contextmenu.prevent
              width="19"
              height="21"
              src="@/asset/img/number/5.svg"
          /></div>
        </div>
        &nbsp;<img
          :src="require(`@/asset/img/group/${this.data.status}.png`)"
        />
      </Card>
      <br />
      Groupe no. <b>{{ this.$route.params.id }}</b> créé le
      <b>{{ formatDate }} ({{ formatDistance }} jours)</b><br />
      <br />
      <Card v-if="data" class="justified"
        ><img src="@/asset/img/group/bacteria.gif" style="float: left" /><b
          >Bacteria</b
        ><br /><br />
        Classé : <b>{{ this.data.bacteria.rank }}</b
        >/<b>{{ this.data.bacteria.total }}</b> avec
        <b>{{ this.data.bacteria.points }}</b> points.</Card
      ><br />
      <Card v-if="data" class="justified"
        ><img src="@/asset/img/group/patojdur.gif" style="float: left" /><b
          >Patojdur</b
        ><br /><br />
        Classé : <b>{{ this.data.patojdur.rank }}</b
        >/<b>{{ this.data.patojdur.total }}</b> avec
        <b>{{ this.data.patojdur.points }}</b> points.</Card
      ><br />
      <Card v-if="data" class="justified"
        ><img src="@/asset/img/group/popularity.gif" style="float: left" /><b
          >Popularity</b
        ><br /><br />
        Classé : <b>{{ this.data.popularity.rank }}</b
        >/<b>{{ this.data.popularity.total }}</b> avec
        <b>{{ this.data.popularity.points }}</b> points.</Card
      ><br />
      <Card v-if="data" class="justified">
        Classement général : <b>{{ this.data.global.rank }}</b
        >/<b>{{ this.data.global.total }}</b> avec
        <b>{{ this.data.global.points }}</b> points.</Card
      >
    </Card>
    <template #right-column
      ><Card color="blue" v-if="data">
        <template #header> Inscription pour rejoindre ce groupe </template>
        <div class="justified">
          <img
            :src="require(`@/asset/img/group/${this.data.status}.png`)"
            style="float: left"
          />
          {{ $t(`group.${this.data.status}`) }}
          <br />
          <br />
          Seulement <b>les membres</b> peuvent joindre un groupe. <br />Si tu es
          déjà un membre,
          <router-link to="login">connecte toi</router-link> pour accéder aux
          inscriptions des groupes.</div
        >
      </Card></template
    >
  </Container>
</template>
<script>
import Blazon from "@/component/blazon/Blazon.vue";
import StrokeText from "@/component/core/StrokeText.vue";
import messageRender from "@/module/messageRender.js";
import { format, differenceInCalendarDays } from "date-fns";
import { fr, enGB } from "date-fns/locale";

export default {
  name: "Group",
  components: {
    Blazon,
    StrokeText
  },
  data() {
    return {
      data: null
    };
  },
  computed: {
    formatDescription() {
      return messageRender(this.data.description);
    },
    formatDate() {
      return format(new Date(this.data.date), "PPp", {
        locale: window.__localeId__
      });
    },
    formatDistance() {
      return differenceInCalendarDays(new Date(), new Date(this.data.date), {
        locale: window.__localeId__
      });
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/group.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/group.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.group",
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
.blazon {
  float: left;
}
.motto {
  text-align: left;
  padding: 0 6px;
}

.group-name {
  height: 28px;
  font-size: 28px;
  fill: #fff;
  stroke: #f39;
  stroke-width: 4;
}

.description {
  text-align: left;
}

.group-header {
  font-family: "Chimboz Heavy";
  color: #3c556f;
  font-size: 16px;
  min-height: 90px;
}

.icon {
  display: inline-flex;
  font-family: "Pixelade";
  font-size: 13px;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #6090be;
  background: linear-gradient(to bottom, #deeaf5, #a7c6e4);
  border-radius: 4px;
  vertical-align: middle;
}
</style>
