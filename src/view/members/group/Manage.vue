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
            <td><group :group="group" /></td>
            <td
              >[<a @click.prevent="leave(group.id)" style="cursor: pointer"
                >Se désinscrire</a
              >]</td
            >
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
            <td><group :group="group" /></td>
            <td
              >[<a @click.prevent="cancel(group.id)" style="cursor: pointer"
                >Annuler</a
              >]</td
            >
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
            <td><group :group="group" /></td>
            <td
              >[<router-link :to="'/groups/edit/' + group.id">Gérer</router-link
              >]</td
            >
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
      ><Card color="blue" header="ensavoirplus_blue.gif" v-if="data">
        <b>{{ data.stats.total }}</b> groupes ont été créés. <br />
        <div style="text-align: left">
          <img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Group : <b>{{ data.stats.type.group }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.group / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Klub : <b>{{ data.stats.type.klub }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.klub / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Clan : <b>{{ data.stats.type.clan }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.clan / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Ekip : <b>{{ data.stats.type.ekip }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.ekip / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Skwat : <b>{{ data.stats.type.skwat }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.skwat / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Guild : <b>{{ data.stats.type.guild }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.guild / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Alliance : <b>{{ data.stats.type.alliance }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.alliance / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Empire : <b>{{ data.stats.type.empire }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.empire / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Sekt : <b>{{ data.stats.type.sekt }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.sekt / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Skool : <b>{{ data.stats.type.skool }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.skool / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Hord : <b>{{ data.stats.type.hord }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.hord / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Meute : <b>{{ data.stats.type.meute }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.meute / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Gang : <b>{{ data.stats.type.gang }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.gang / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Triad : <b>{{ data.stats.type.triad }}</b
          >&nbsp;
          <sub
            >({{
              ((data.stats.type.triad / data.stats.total) * 100).toFixed(2)
            }}%)</sub
          ><br /><br /><img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />
          Pour <b>rejoindre</b> un groupe <b>ou pour en créer un</b>, tu as
          besoin d'avoir un certain
          <router-link to="/levels">niveau</router-link>.<br /><br />
          <img
            src="@/asset/img/puce.svg"
            alt="Caret"
            draggable="false"
            @contextmenu.prevent
            height="17"
            width="17"
          />Le nombre de groupes que tu peux rejoindre tel que décrit dans le
          <router-link to="/levels">tableau des niveaux</router-link>, comprend
          uniquement les <b>groupes des membres</b>, les
          <b>Groupes Officiels</b> ne sont pas comptés.</div
        ><br /><img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17" />
        Projecteur sur : <br /><group :group="data.random" /></Card
    ></template>
  </Container>
</template>
<script>
export default {
  name: "Groups",
  data() {
    return {
      data: null
    };
  },
  methods: {
    cancel(id) {
      console.log("Annulé " + id);
    },
    leave(id) {
      console.log("Quitté " + id);
    }
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
