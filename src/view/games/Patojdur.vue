<template>
  <Container>
    <template #left-column
      ><Card color="blue" top>
        <div class="flex col fullwidth">
          <SideNavEntries section="games" />
        </div> </Card
      ><br />
      <Rules bot />
    </template>
    <Card header="patojdur.gif" justified bg="patojdur.gif" :height="77">
      <div class="flex centered hstack">
        <router-link to="#gameplay" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Le gameplay</router-link
        >
        <router-link to="#modes" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les modes</router-link
        >
        <router-link to="#races" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les courses</router-link
        >
        <router-link to="#yesterday" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Champion du jour</router-link
        >
        <router-link to="#today" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Classement du jour</router-link
        >
        <router-link to="#general" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Classement général</router-link
        >
        <router-link to="#records" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les records</router-link
        >
        <router-link to="#groups" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
          />&nbsp;Les groupes</router-link
        >
        <router-link to="#tutorial" class="btn-sm pink-bg">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Help icon"
            src="@/asset/img/icon/help.png"
          />&nbsp;Comment jouer&nbsp;?
        </router-link>
      </div>
      <br />
      <img
        draggable="false"
        @contextmenu.prevent
        src="@/asset/img/game/patojdur/preview.jpg"
        alt="A game of bacteria"
        title="A game of bacteria"
        style="float: left; margin-right: 16px; border: 3px solid #6699cc"
      />
      Patojdur est un jeu de style course-labyrinthe qui consiste à traverser à
      la nage les marécages le plus vite possible. A toi d’éviter les roseaux,
      les nénuphars et les plantes aquatiques, trouver les bons courants afin de
      faire le meilleur chrono du jour ou de battre le record de la course !
      <br />
      <br />
      Les grenouilles seront là pour t’encourager ou se moquer de toi, mais seul
      ton courage et ta persévérance te permettront de devenir le meilleur
      patojeur !
    </Card>
    <br />
    <Card id="tutorial" justified>
      <template #header>Comment jouer&nbsp;?</template>
      <b>Attention : les visiteurs ne peuvent pas jouer !</b><br />
      Il faut te rendre dans les marécages, demande ton chemin si tu ne sais pas
      comment y aller.<br />
      Va ensuite te placer sur un des emplacements tout à gauche de la mare, et
      attends ton tour ! (Les grenouilles n'autorisent que 5 <b>Patojeurs</b> en
      même temps, sécurité oblige).<br />
      Quand ton tour arrive, tu te retrouves dans l'eau, court chargement,
      compte à rebours (3, 2, 1, GO !) et voilà, à toi de traverser la mare en
      nageant le plus vite possible !<br />
      <br />
      Bonne Chance ! tu en auras besoin, la concurrence sera rude ! La victoire
      au millième près !</Card
    ><br />
    <Card id="gameplay" justified>
      <template #header>Gameplay</template>
      <b>Patojdur</b> se joue aux touches directionnelles (les flèches).<br />
      Avance dans la direction de ton choix (haut, bas, droite ou gauche), quand
      tu fais du sur-place, c'est que tu es bloqué, essaye une autre direction !
      Les obstacles ne sont pas forcément visibles !<br />
      Les bulles te téléportent dans des endroits plus ou moins avantageux, à
      toi de trouver les bonnes !<br />
      Pas de note esthétique ! Le gagnant du jour est celui qui aura traversé le
      marécage le plus rapidement !<br />
      <br />
      <br />
      <b>Départ Boost</b> : Pour obtenir un départ <b>boost</b>, tu dois
      effectuer la bonne combinaison de touches durant le compte à rebours.<br />
      <br />
      Un bonne combinaison est constituée de <b>5 touches</b>, seules les
      touches directionnelles (les flèches) sont utilisées.<br />
      <br />
      Exemple d'une combinaison (fausse) : Flèche Gauche, Flèche Gauche, Flèche
      Droite, Flèche Haut, Flèche Droite. (GGDHD)<br />
      <br />
      <b>Indice</b> : pour <b>Burnin'Flak</b>, la bonne combinaison commence par
      Flèche Gauche, Flèche Haut... (GH...)</Card
    ><br />
    <Card id="modes" justified>
      <template #header>Les modes</template>
      Pour le moment, seul le mode <b>single</b> est accessible.</Card
    ><br />
    <Card id="races" justified>
      <template #header>Les courses</template>
      <b>10 courses différentes</b>, plus ou moins difficiles. Chaque jour une
      course différente, un classement différent !<br />
      <br />
      Durant la phase de test de <b>Patojdur</b>, seule la course n°1
      (<b>Burnin'Flak</b>) est accessible.</Card
    ><br />
    <Card id="records" v-if="data">
      <template #header>Records !</template>
      <template #subtitle>Ce jour là, il a comme volé sur l'eau...</template>
      <table class="score fullwidth">
        <colgroup>
          <col width="20%" />
          <col width="20%" />
          <col width="30%" />
          <col width="30%" />
        </colgroup>
        <thead>
          <tr>
            <th>Course</th>
            <th>Record</th>
            <th>Membre</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.record" :key="index">
            <td>{{ rank.race }}</td>
            <td
              ><b>{{ rank.score }}</b></td
            >
            <td><user :user="rank.user" /></td>
            <td style="text-align: right"
              ><b>{{ formatDate(rank.date) }}</b
              ><br /><i>{{ rank.day }}e journée</i></td
            >
          </tr>
        </tbody>
      </table>
    </Card>
    <br /><Card id="yesterday" v-if="data">
      <template #header>Les champions du jour !</template>
      <template #subtitle
        >Hier, ils ont cloué le bec des grenouilles... et des autres membres
        !</template
      >
      Les 10 premiers du classement remportent le
      <b>casque Patojdur</b> pour la journée.<br />
      <br />
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="60" />
          <col width="60" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Membre</th>
            <th>Temps</th>
            <th>Heure</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.yesterday" :key="index">
            <td>{{ index + 1 }}</td>
            <td><user :user="rank.user" /></td>
            <td
              ><b>{{ rank.score }}</b></td
            >
            <td>{{ formatHour(rank.date) }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br /><Card id="general" v-if="data">
      <template #header
        >Classement général single {{ data.day - 1 }}e journée</template
      >
      <template #subtitle>2 heures par jour minimum dans la mare...</template>
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
          <col width="40" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Membre</th>
            <th>Points</th>
            <th>Classé</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.general" :key="index">
            <td>{{ index + 1 }}</td>
            <td><user :user="rank.user" /></td>
            <td
              ><b>{{ rank.score }}</b></td
            >
            <td>{{ rank.races }}</td>
          </tr>
        </tbody>
      </table> </Card
    ><br /><Card id="today" v-if="data">
      <template #header
        >{{ data.day }}e journée ! {{ data.stats.today }} patojeurs !</template
      >
      La {{ data.day }}e journée de course est en cours !
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="60" />
          <col width="60" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Membre</th>
            <th>Temps</th>
            <th>Heure</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.today" :key="index">
            <td>{{ index + 1 }}</td>
            <td><user :user="rank.user" /></td>
            <td
              ><b>{{ rank.score }}</b></td
            >
            <td>{{ formatHour(rank.date) }}</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <br /><Card id="groups" v-if="data">
      <template #header>Classement des groupes !</template>
      <template #subtitle>Plus on est de fous...</template>
      <table class="score fullwidth">
        <colgroup>
          <col width="30" />
          <col width="100%" />
          <col width="40" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Groupe</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rank, index) in data.groups" :key="index">
            <td>{{ index + 1 }}</td>
            <td><group :group="rank.group" /></td>
            <td
              ><b>{{ rank.score }}</b></td
            >
          </tr>
        </tbody>
      </table>
    </Card>
    <template #right-column
      ><Card
        header="ensavoirplus_blue.gif"
        :width="154"
        :height="46"
        top
        color="blue"
        justified
        v-if="data"
      >
        <img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />&nbsp;<router-link to="bbs/6">BBS de Patojdur</router-link><br />
        <br />
        <img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />
        Hier, il y a eu {{ data.stats.yesterday }} Patojeurs.<br /><br />
        <img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
        />&nbsp;Aujourd'hui, il y a
        {{ data.stats.today }} Patojeurs.<br /> </Card
    ></template>
  </Container>
</template>

<script>
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";
const locales = { fr, enGB };

// @vuese
// @group View/Games
// Patojdur (Wide Wade) page
export default {
  name: "Patojdur",
  data() {
    return {
      data: null
    };
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), "PPp", {
        locale: locales[navigator.language.split("-")[0]]
      });
    },
    formatHour(date) {
      return format(new Date(date), "p", {
        locale: locales[navigator.language.split("-")[0]]
      });
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/patojdur.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/patojdur.json");
    this.data = req.data;
    next();
  },
  metaInfo: {
    title: "section.patojdur",
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
</style>
