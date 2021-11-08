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
    <Card header="book.png" justified color="yellow">
      <div style="float: right; margin-top: -80px; width: 50%;">
        Tu cherches à en savoir plus sur un copain ou une nouvelle rencontre
        ?<br />
        <br />
        Ici tu peux chercher des infos sur tous les membres de la communauté.
      </div>
    </Card>
    <br /><Card>
      <img style="float: left" src="@/asset/img/book/srch.gif" />
      <div style="display:inline-block">
        <h1>Rechercher un membre</h1>
        <form @submit.prevent="search()" class="flex"
          ><input
            required
            minlength="3"
            maxlength="15"
            pattern="[\w\.\-_@]{3,15}"
            name="username"
            type="text"
            class="btn-md"
            autocomplete="username"
            :placeholder="$t('placeholder.username')"
          /><button type="submit" class="btn-md go">go</button></form
        ></div
      ></Card
    ><br />
    <Card v-if="data"
      ><template #header>Les 10 derniers membres</template>
      <table class="score fullwidth">
        <colgroup>
          <col width="10%" />
          <col width="45%" />
          <col width="45%" />
        </colgroup>
        <thead>
          <tr>
            <th>N°</th>
            <th>Pseudo</th>
            <th>Inscrit le</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in data.members" :key="index">
            <td>{{ member.id }}</td>
            <td><user :user="member"/></td>
            <td>{{ formatDate(member.date) }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <template #right-column
      ><Card
        header="ensavoirplus.gif"
        :width="154"
        :height="34"
        top
        color="lightblue"
        justified
      >
        348 membres en tout.<br />
        <br />
        Nouveaux<br />
        2 depuis 24h!<br />
        53 depuis 1 mois!<br />
        <br />
        Les Genres<br />
        <br />
        Les Genres :<br />
        Fille(s) : 20<br />
        Garçon(s) : 30<br />
        Inconnu(s) : 287
      </Card></template
    >
  </Container>
</template>

<script>
import User from "@/component/link/User.vue";
import Group from "@/component/link/Group.vue";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";

export default {
  name: "Games",
  components: {
    User,
    Group
  },
  data() {
    return {
      data: null
    };
  },
  methods: {
    search() {
      let id = 1;
      this.$router.push(`/book/${id}`);
    },
    formatDate(date) {
      return format(new Date(date), "Pp", {
        locale: window.__localeId__,
        addSuffix: true
      });
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/book.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate() {
    const req = await this.api.get("/api/book.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.popularity",
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
.fullwidth.light {
  background: #eef5fa;
  padding: 2px 0;
}

tr td:first-child {
  font-weight: bold;
}

.hstack {
  justify-content: center;
}

.go {
  font-family: Chimboz Heavy;
  background: #fff;
}
</style>
