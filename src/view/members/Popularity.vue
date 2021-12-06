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
    <Card header="popularity.gif" justified bg="popularity.gif">
      <div class="flex centered hstack">
        <router-link to="#today" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Classement du jour</router-link
        >
        <router-link to="#general" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Classement général</router-link
        >
        <router-link to="#yesterday" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Champions du jour</router-link
        >
        <router-link to="#groups" class="btn-sm blue-bg"
          ><img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Classement des groupes</router-link
        >
        <router-link to="#vote" class="btn-sm blue-bg">
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Caret"
            src="@/asset/img/icon/caret.png"
            style="image-rendering: pixelated"
          />&nbsp;Voter</router-link
        >
      </div>
      <br />

      Il te prend la tête et tu as envie de lui faire sentir&nbsp;? <br />
      Tu ne peux plus la voir et tu veux que tout le monde le sache&nbsp;?
      <br />
      Cette fille est trop cool et ceux qui ne l'aiment pas ne la connaissent
      pas&nbsp;! <br />
      Ce mec et son groupe assurent grave et tu as envie de le lui
      prouver&nbsp;?
      <br />
      <br />
      Viens tous les jours régler tes comptes ou soutenir tes amis avec la
      popularité&nbsp;! <br />
      Vote POUR elle et sa cote remonte, vote CONTRE lui et il descend en flêche
      ! <br />
      <br />
      Le + populaire du jour gagne les lunettes pour la journée, les 3 +
      populaires du jour gagnent une auréole pour la journée, le - aimé gagne
      une crotte pour la journée !
    </Card>
    <br /><Card id="today" v-if="data">
      <template #header>Classement du jour !</template>
      Classement toujours en cours ! <br />Tu peux encore descendre ou remonter
      quelqu'un !<br />
      <br />
      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/asset/img/social/popularity/star.gif"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.today.best" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><user :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/asset/img/social/popularity/poop.gif"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.today.worst" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><user :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
    <br />
    <Card id="yesterday" v-if="data">
      <template #header>Champions du jour !</template>
      <template #subtitle>Hier, ils ont été héroïques... ou nazes !!!</template>

      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/asset/img/social/popularity/star.gif"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.yesterday.best" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><user :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/asset/img/social/popularity/poop.gif"
          />
          <table class="score">
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.yesterday.worst" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><user :user="rank.user" /></td>
              </tr>
            </tbody>
          </table> </div></div></Card
    ><br />
    <Card id="general" v-if="data">
      <template #header>Classement général !</template>
      <template #subtitle
        >Les membres qui gagnent à être connus... et ceux à éviter !!!</template
      >
      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/asset/img/social/popularity/star.gif"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.general.best" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><user :user="rank.user" /></td>
              </tr>
            </tbody>
          </table> </div
        ><div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/asset/img/social/popularity/poop.gif"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.general.worst" :key="rank.user.id">
                <td>{{ rank.score }}</td>
                <td><user :user="rank.user" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
    <br /><Card id="groups" v-if="data">
      <template #header>Classement des groupes ! </template>
      <template #subtitle>Plus on est de fous...</template>
      <div class="grid fullwidth">
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/asset/img/social/popularity/star.gif"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.groups.best" :key="rank.group.id">
                <td>{{ rank.score }}</td>
                <td><group :group="rank.group" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            draggable="false"
            @contextmenu.prevent
            alt="Star"
            src="@/asset/img/social/popularity/poop.gif"
          />
          <table>
            <colgroup>
              <col width="30" />
              <col width="100%" />
            </colgroup>
            <thead>
              <tr>
                <th>Pts</th>
                <th>Membre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rank in data.groups.worst" :key="rank.group.id">
                <td>{{ rank.score }}</td>
                <td><group :group="rank.group" /></td>
              </tr>
            </tbody>
          </table> </div></div></Card
    ><br />·
    <Card id="vote"
      ><template #header>Voter Pour/Contre un membre !</template> Un membre
      t'ennuie ? Descends le !<br />
      Tu trouves un membre sympa ? Donne lui ta voix !
      <br /><br />
      <form @submit.prevent="vote()" class="flex">
        <select class="btn-md" required>
          <option value="for">Pour</option
          ><option value="against">Contre</option></select
        ><input
          required
          minlength="3"
          maxlength="15"
          name="group"
          type="text"
          class="btn-md"
          autocomplete="group"
          :placeholder="$t('placeholder.username')"
        /><button type="submit" class="btn-md font-ch">go</button></form
      >
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
          height="17"
          width="17"
        />&nbsp;Hier
        <b>{{ data.stats.yesterday.for + data.stats.yesterday.against }}</b>
        votes.<br />
        <b>POUR&nbsp;: {{ data.stats.yesterday.for }}</b> ({{
          (
            (data.stats.yesterday.for * 100) /
            (data.stats.yesterday.for + data.stats.yesterday.against)
          ).toFixed(2)
        }}%)<br />
        <b>CONTRE&nbsp;: {{ data.stats.yesterday.against }}</b> ({{
          (
            (data.stats.yesterday.against * 100) /
            (data.stats.yesterday.for + data.stats.yesterday.against)
          ).toFixed(2)
        }}%)<br />
        <br />
        <img
          src="@/asset/img/puce.svg"
          alt="Caret"
          draggable="false"
          @contextmenu.prevent
          height="17"
          width="17"
        />Aujourd'hui
        <b>{{ data.stats.today.for + data.stats.today.against }}</b>
        votes.<br />
        <b>POUR: {{ data.stats.today.for }}</b> ({{
          (
            (data.stats.today.for * 100) /
            (data.stats.today.for + data.stats.today.against)
          ).toFixed(0)
        }}%)<br />
        <b>CONTRE: {{ data.stats.today.against }}</b> ({{
          (
            (data.stats.today.against * 100) /
            (data.stats.today.for + data.stats.today.against)
          ).toFixed(0)
        }}%)
      </Card></template
    >
  </Container>
</template>

<script>
export default {
  name: "Games",
  data() {
    return {
      data: null
    };
  },
  methods: {
    vote() {
      console.log("Envoyé!");
    }
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/popularity.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/popularity.json");
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
.grid {
  display: grid;
  grid-template: 100% / 50% 50%;
}

th,
td {
  font-weight: bold;
  text-align: center;
}

.hstack {
  justify-content: center;
}
</style>
