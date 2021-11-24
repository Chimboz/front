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
        <div class="flex col centered">
          <StrokeText class="group-name">{{ data.name }}</StrokeText>
          Groupe n°{{ data.id }}<br />
          Créé le {{ formatDate(data.date) }}
        </div>
      </div>
    </Card>
    <br />
    <Card color="blue" v-if="data">
      <template #header>Informations</template>
      <form>
        <input
          maxlength="100"
          name="title"
          class="btn-md"
          type="text"
          v-model="data.motto"
          placeholder="Motto"
        /><br /><br />
        <textarea
          placeholder="Description"
          required
          minlength="3"
          autocorrect="on"
          spellcheck="true"
          maxlength="60000"
          class="btn-md description"
          v-model="data.description"
          @focus="focusHandler"
          @select="selectionHandler"
        /><br /><br />
        <input
          maxlength="100"
          name="title"
          class="btn-md"
          type="text"
          v-model="data.localisation"
          placeholder="Localisation"
        />
        <br /><br />
        <input
          type="radio"
          name="status"
          id="open"
          value="open"
          :checked="data.status == 'open'"
        /><label for="open"
          ><img
            src="@/asset/img/group/open.png"
            width="50"
            height="50"
            alt="Open"
            draggable="false"
            @contextmenu.prevent
        /></label>
        <input
          type="radio"
          name="status"
          id="demand"
          value="demand"
          :checked="data.status == 'demand'"
        /><label for="demand"
          ><img
            src="@/asset/img/group/demand.png"
            width="50"
            height="50"
            alt="Demand"
            draggable="false"
            @contextmenu.prevent
        /></label>
        <input
          type="radio"
          name="status"
          id="close"
          value="close"
          :checked="data.status == 'close'"
        /><label for="close"
          ><img
            src="@/asset/img/group/close.png"
            width="50"
            height="50"
            alt="Close"
            draggable="false"
            @contextmenu.prevent
        /></label>
        <br /><br />
        <Button color="green" type="submit"
          ><template #prepend
            ><img
              draggable="false"
              @contextmenu.prevent
              alt="Arrow icon"
              class="arrow green jitter"
              src="@/asset/img/arrow.svg"/></template
          >Sauver</Button
        ></form
      ></Card
    ><br />
    <Card color="blue" v-if="data">
      <template #header>Membres</template>
      <div
        style="display: inline-block"
        v-for="user of this.data.members"
        :key="user.id"
      >
        <User :user="user" :separator="false"/><img
          @click.prevent="removeMember(user.id)"
          src="@/asset/img/icon/login/disconnect.svg"
          width="11"
          height="11"
          alt="Close"
          draggable="false"
          style="cursor: pointer; margin: 0 2px"
          @contextmenu.prevent
      /></div> </Card
    ><br />
    <Card color="blue" v-if="data">
      <template #header>Demandes</template>
      <div
        style="display: inline-block"
        v-for="user of this.data.demands"
        :key="user.id"
      >
        <User :user="user" :separator="false"/><img
          @click.prevent="acceptDemand(user.id)"
          src="@/asset/img/icon/login/connect.svg"
          width="11"
          height="11"
          alt="Close"
          draggable="false"
          style="cursor: pointer; margin: 0 2px"
          @contextmenu.prevent/><img
          @click.prevent="rejectDemand(user.id)"
          src="@/asset/img/icon/login/disconnect.svg"
          width="11"
          height="11"
          alt="Close"
          draggable="false"
          style="cursor: pointer; margin: 0 2px"
          @contextmenu.prevent/></div></Card
    ><br />
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
    ><br /><Card
      ><a @click.prevent="this.delete()" style="color:red;cursor:pointer"
        >Supprimer le groupe</a
      ></Card
    >
    <template #right-column> </template>
  </Container>
</template>
<script>
import Cabin from "@/component/blazon/Cabin.vue";
import User from "@/component/link/User.vue";
import Blazon from "@/component/blazon/Blazon.vue";
import StrokeText from "@/component/StrokeText.vue";
import { format } from "date-fns";
import { fr, enGB } from "date-fns/locale";

export default {
  name: "Edit",
  components: {
    Cabin,
    StrokeText,
    Blazon,
    User
  },
  data() {
    return {
      data: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    next((vm) =>
      vm.api.get("/api/edit.json").then((res) => (vm.data = res.data))
    );
  },
  async beforeRouteUpdate(to, from, next) {
    const req = await this.api.get("/api/edit.json");
    this.data = req.data;
    next();
  },
  methods: {
    formatDate() {
      return format(new Date(this.data.date), "PPp", {
        locale: window.__localeId__
      });
    },
    delete() {
      console.log("Suppression");
    },
    removeMember(id) {
      console.log("Suppression du membre " + id);
    },
    acceptDemand(id) {
      console.log("Acceptation du membre " + id);
    },
    rejectDemand(id) {
      console.log("Rejection du membre " + id);
    }
  },
  metaInfo: {
    title: "section.groupedit",
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

.description {
  resize: vertical;
  min-height: 240px;
}

input[type="radio"] {
  display: none;
}

label {
  cursor: pointer;
}

input:checked + label {
  filter: brightness(1.2);
}
</style>
